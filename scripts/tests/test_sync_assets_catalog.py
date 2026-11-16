import contextlib
import io
import os
import shutil
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts"))

import sync_assets_catalog as sync  # noqa: E402


class AgentsCatalogCountTests(unittest.TestCase):
    counts = (750, 740, 7, 3)

    def assert_managed_counts(self, text, counts=None):
        counts = counts or self.counts
        self.assertEqual(text.count(sync.AGENTS_COUNT_START), 1)
        self.assertEqual(text.count(sync.AGENTS_COUNT_END), 1)
        total, games, emulators, other = counts
        self.assertIn(
            "The main `GAMES_DATA` catalog currently contains **%d entries**: "
            "**%d games, %d emulators, and %d tools/other entries**."
            % (total, games, emulators, other),
            text,
        )

    def test_current_managed_block_is_idempotent(self):
        source = (ROOT / "AGENTS.md").read_text(encoding="utf-8")
        counts = (744, 734, 7, 3)
        self.assertEqual(sync.update_agents_catalog_counts(source, counts), source)

    def test_updates_managed_block_after_handbook_wording_changes(self):
        source = (
            "# Handbook\n\n### Current catalog snapshot\n\n"
            + sync.AGENTS_COUNT_START
            + "\nAn older managed sentence with different wording.\n"
            + sync.AGENTS_COUNT_END
            + "\n\nThe rest of the handbook.\n"
        )
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        self.assertIn("The rest of the handbook.", updated)

    def test_migrates_legacy_inline_count_format(self):
        source = (
            "# Old handbook\n\nCatalog totals: **651 items** "
            "(641 `games`, 7 `emulators`, 3 `other`).\n"
        )
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        self.assertNotIn("**651 items**", updated)

    def test_migrates_legacy_count_under_heading_and_preserves_following_prose(self):
        source = (
            "# Handbook\n\n### Current catalog snapshot\n\n"
            "The catalog has **651 items** (641 `games`, 7 `emulators`, 3 `other`) in total; "
            "the total can change over time.\n"
        )
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        self.assertNotIn("**651 items**", updated)
        self.assertIn("the total can change over time", updated)

    def test_migrates_multiple_legacy_count_mentions_with_one_managed_block(self):
        source = (
            "# Old guide\n\nCatalog: **651 items** (641 `games`, 7 `emulators`, 3 `other`).\n\n"
            "Totals: **651 entries**: **641 games, 7 emulators, and 3 tools/other entries**.\n"
        )
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        self.assertNotIn("**651", updated)
        self.assertEqual(updated.count("The main `GAMES_DATA` catalog currently contains **750 entries**"), 2)

    def test_preserves_rewritten_snapshot_prose(self):
        source = (
            "# Handbook\n\n### Current catalog snapshot\n\n"
            "The collection now has a refreshed description without numeric totals.\n"
        )
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        self.assertIn("The collection now has a refreshed description", updated)

    def test_unrecognized_handbook_layout_adds_managed_snapshot_without_failing(self):
        source = "# Reorganized guide\n\nThe prose and heading structure changed.\n"
        updated = sync.update_agents_catalog_counts(source, self.counts)
        self.assert_managed_counts(updated)
        updated_again = sync.update_agents_catalog_counts(updated, (751, 741, 7, 3))
        self.assertEqual(updated_again.count("### Current catalog snapshot"), 1)
        self.assert_managed_counts(updated_again, (751, 741, 7, 3))

    def test_recount_pipeline_accepts_current_agents_format(self):
        contents = {name: (ROOT / name).read_text(encoding="utf-8")
                    for name in (*sync.CATALOGS, "AGENTS.md", "index.html")}
        counts = sync.update_counts(contents)
        self.assertEqual(counts, (744, 734, 7, 3))
        self.assertEqual(contents["AGENTS.md"], (ROOT / "AGENTS.md").read_text(encoding="utf-8"))

    def test_asset_sync_run_updates_managed_agents_counts_in_temp_worktree(self):
        with tempfile.TemporaryDirectory(prefix="dgp-asset-sync-test-") as tmp:
            worktree = Path(tmp)
            for name in (*sync.CATALOGS, "AGENTS.md", "index.html"):
                shutil.copy2(ROOT / name, worktree / name)

            games_dir = worktree / "assets" / "games"
            game_dir = games_dir / "asset-sync-test-entry"
            game_dir.mkdir(parents=True)
            (game_dir / "game.json").write_text(
                '{"name":"Asset Sync Test Entry","tags":["games","test"]}\n',
                encoding="utf-8",
            )

            output = io.StringIO()
            previous_cwd = os.getcwd()
            try:
                os.chdir(worktree)
                with patch.object(sys, "argv", ["sync_assets_catalog.py", "--assets", str(games_dir)]):
                    with patch.dict(os.environ, {"GITHUB_OUTPUT": "", "GITHUB_STEP_SUMMARY": ""}):
                        with contextlib.redirect_stdout(output):
                            sync.main()
            finally:
                os.chdir(previous_cwd)

            self.assertIn("newly added        : 1", output.getvalue())
            self.assertIn("new totals         : 745 items", output.getvalue())
            self.assertIn("Catalog updated and written (5 files).", output.getvalue())
            agents = (worktree / "AGENTS.md").read_text(encoding="utf-8")
            self.assertIn("**745 entries**: **735 games, 7 emulators, and 3 tools/other entries**", agents)
            for name in sync.CATALOGS:
                catalog = sync.parse_data((worktree / name).read_text(encoding="utf-8"), name)
                self.assertEqual(len(catalog), 745)
                self.assertIn("asset-sync-test-entry", {entry["id"] for entry in catalog})


if __name__ == "__main__":
    unittest.main()
