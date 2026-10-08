#!/usr/bin/env python3
"""Sync games from the Dragon-Gaming-Assets companion repository into the main catalog.

Scans the games/ directory of a checkout of
https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Assets and adds a catalog
entry for every game folder not yet present in games.js / cdn.games.js /
singlefile.html. Entries use the absolute Pages URL of the assets repo (same origin
as the main site), so all three catalogs get the identical absolute path.

Usage:
    python3 scripts/sync_assets_catalog.py --assets <path-to-assets-games-dir> [--dry-run]
    python3 scripts/sync_assets_catalog.py --recount-only [--dry-run]

Per-game metadata (all keys optional) may be provided in games/<slug>/game.json:
    { "name": "...", "desc": "...", "controls": "...", "shelf": "...",
      "tags": ["games", "html5"], "badge": "", "creator": "...",
      "image": "screenshots/1.jpg" }

This script is ADD-ONLY: it never edits or removes existing catalog entries.
The single exception is the thumbnail "image" field: when game.json supplies an
image for a game already in the catalog, the sync refreshes just that one field
(relative paths are resolved against the game's assets-repo URL; an existing
image is never removed or blanked).
Orphaned assets-repo entries, id conflicts and metadata problems are reported
as warnings (and THIRD_PARTY.md attribution is left to the maintainer).

Recount-only mode (--recount-only) refreshes every hard-coded count string
(search placeholder, navbar counts, the N+ marketing numbers, AGENTS.md
totals) from the actual catalog contents without adding games or needing an
assets checkout.
"""
import argparse
import json
import os
import re
import sys
from collections import Counter

ASSETS_BASE = "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Assets/games/"
CATALOGS = ["games.js", "cdn.games.js", "singlefile.html"]
SHELVES = {
    "Arcade & Action", "Puzzle & Logic", "Sports & Racing", "RPG & Adventure",
    "Strategy & Idle", "Emulators", "Interactive Stories & Experiments",
    "Web Browsers", "Tools & Utilities",
}


def fail(msg):
    sys.exit("FATAL: " + msg)


def load(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def save(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def parse_data(content, fname):
    m = re.search(r"GAMES_DATA\s*=\s*(\[.*?\]);", content, re.S)
    if not m:
        fail("GAMES_DATA not found in " + fname)
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError as e:
        fail("GAMES_DATA in %s is not valid JSON: %s" % (fname, e))


def title_from_slug(slug):
    return " ".join(w[:1].upper() + w[1:] for w in slug.split("-"))


def scan_assets(games_dir, warnings):
    games = []
    if not os.path.isdir(games_dir):
        fail("assets games directory not found: " + games_dir)
    for entry in sorted(os.listdir(games_dir)):
        path = os.path.join(games_dir, entry)
        if not os.path.isdir(path) or entry.startswith(("_", ".")):
            continue
        gid = entry.lower().replace("_", "-")
        if gid != entry:
            warnings.append("'%s': folder name is not a clean slug; using id '%s'" % (entry, gid))
        meta = {}
        manifest = os.path.join(path, "game.json")
        if os.path.exists(manifest):
            try:
                with open(manifest, encoding="utf-8") as f:
                    meta = json.load(f)
            except (json.JSONDecodeError, OSError) as e:
                warnings.append("'%s': unreadable game.json (%s) — game SKIPPED" % (entry, e))
                continue
        shelf = str(meta.get("shelf") or "Arcade & Action")
        if shelf not in SHELVES:
            warnings.append("'%s': unknown shelf '%s' — using 'Arcade & Action'" % (entry, shelf))
            shelf = "Arcade & Action"
        tags = meta.get("tags")
        if not (isinstance(tags, list) and tags):
            tags = ["games", "html5"]
        name = str(meta.get("name") or title_from_slug(gid))
        image = str(meta.get("image") or "").strip()
        if image and not image.startswith(("http://", "https://")):
            image = ASSETS_BASE + entry + "/" + image.lstrip("/")
        games.append({
            "id": gid,
            "folder": entry,
            "name": name,
            "desc": str(meta.get("desc") or ("%s playable in your web browser." % name)),
            "controls": str(meta.get("controls") or "Keyboard / Mouse"),
            "tags": [str(t) for t in tags],
            "shelf": shelf,
            "badge": str(meta.get("badge") or ""),
            "creator": str(meta.get("creator") or ""),
            "path": ASSETS_BASE + entry + "/",
            "image": image,
        })
    return games


def entry_block(g):
    tag_lines = ",\n".join("      " + json.dumps(t, ensure_ascii=False) for t in g["tags"])
    return (
        "  {\n"
        + '    "id": ' + json.dumps(g["id"], ensure_ascii=False) + ",\n"
        + '    "category": "games",\n'
        + '    "name": ' + json.dumps(g["name"], ensure_ascii=False) + ",\n"
        + '    "tags": [\n' + tag_lines + "\n    ],\n"
        + '    "path": ' + json.dumps(g["path"], ensure_ascii=False) + ",\n"
        + ('    "image": ' + json.dumps(g["image"], ensure_ascii=False) + ",\n" if g.get("image") else "")
        + '    "shelf": ' + json.dumps(g["shelf"], ensure_ascii=False) + ",\n"
        + '    "badge": ' + json.dumps(g["badge"], ensure_ascii=False) + ",\n"
        + '    "desc": ' + json.dumps(g["desc"], ensure_ascii=False) + ",\n"
        + '    "controls": ' + json.dumps(g["controls"], ensure_ascii=False) + "\n"
        + "  },\n"
    )


def insert_entry(content, g, fname):
    """Insert an entry at its tightest alphabetical fit (the catalog is sorted in
    runs, so we place next to the closest neighbours rather than assuming a
    globally sorted list)."""
    ids = [x["id"] for x in parse_data(content, fname)]
    if g["id"] in ids:
        return content
    n = len(ids)
    best = None
    for i in range(n + 1):
        left = ids[i - 1] if i > 0 else ""
        right = ids[i] if i < n else None
        if (i == 0 or left < g["id"]) and (right is None or right > g["id"]):
            cand = (left, right if right is not None else "\uffff", i)
            if best is None or cand[0] > best[0] or (cand[0] == best[0] and cand[1] < best[1]):
                best = cand
    if best is None:
        fail("%s: no valid insertion point for '%s'" % (fname, g["id"]))
    if best[1] == "\uffff":  # goes after the current last entry
        tail = "  }\n];"
        if content.count(tail) != 1:
            fail("%s: cannot find array tail for appending '%s'" % (fname, g["id"]))
        block = entry_block(g).rstrip("\n")
        return content.replace(tail, "  },\n" + block[:-1].rstrip(",") + "\n];", 1)
    anchor = '  {\n    "id": "%s",\n' % best[1]
    if content.count(anchor) != 1:
        fail("%s: anchor for '%s' found %dx" % (fname, best[1], content.count(anchor)))
    return content.replace(anchor, entry_block(g) + anchor, 1)


def set_entry_image(content, gid, image, fname):
    """Refresh only the thumbnail field of one existing entry (the single
    add-only exception). Inserts after the "path" line; never removes."""
    m = re.search(r'(  \{\n    "id": "%s",\n.*?\n  \},)' % re.escape(gid), content, re.S) \
        or re.search(r'(  \{\n    "id": "%s",\n.*?\n  \}\n\];)' % re.escape(gid), content, re.S)
    if not m:
        fail("%s: entry '%s' not found for image update" % (fname, gid))
    block = m.group(1)
    if '"image": ' in block:
        new_block = re.sub(r'"image": "[^"]*"', '"image": "%s"' % image, block, count=1)
    else:
        new_block = re.sub(r'("path": "[^"]*",\n)', r'\1    "image": "%s",\n' % image, block, count=1)
    if new_block == block:
        fail("%s: could not set image for '%s'" % (fname, gid))
    return content[:m.start()] + new_block + content[m.end():]


def sub_once(text, pattern, repl, fname):
    new, cnt = re.subn(pattern, repl, text, count=1)
    if cnt != 1:
        fail("%s: expected exactly one match for %r, found %d" % (fname, pattern, cnt))
    return new


def update_counts(contents):
    data = parse_data(contents["games.js"], "games.js")
    cats = Counter(x["category"] for x in data)
    total, g_n, e_n, o_n = len(data), cats.get("games", 0), cats.get("emulators", 0), cats.get("other", 0)
    for fname in ("games.js", "singlefile.html"):
        contents[fname] = sub_once(contents[fname], r"Search \d+ games, emulators & tools",
                                   "Search %d games, emulators & tools" % total, fname)
    for fname in ("index.html", "singlefile.html"):
        contents[fname] = sub_once(contents[fname], r">Games \(\d+\)</a>", ">Games (%d)</a>" % g_n, fname)
    hero_n = (total // 10) * 10
    for fname in ("index.html", "singlefile.html"):
        contents[fname] = sub_once(
            contents[fname], r"library of \d+\+ legal open-source browser games",
            "library of %d+ legal open-source browser games" % hero_n, fname)
        contents[fname] = sub_once(
            contents[fname], r"Play \d+\+ classic games, emulators, and unblocked tools",
            "Play %d+ classic games, emulators, and unblocked tools" % hero_n, fname)
    contents["AGENTS.md"] = sub_once(
        contents["AGENTS.md"],
        r"\*\*\d+ items\*\* \(\d+ `games`, \d+ `emulators`, \d+ `other`\)",
        "**%d items** (%d `games`, %d `emulators`, %d `other`)" % (total, g_n, e_n, o_n),
        "AGENTS.md")
    return total, g_n, e_n, o_n


def recount_only(args):
    """Recount mode: refresh every hard-coded count string from the actual
    catalog contents. Adds nothing; needs no assets checkout. Use after
    manual catalog edits (e.g. removals) that leave counts stale."""
    contents = {f: load(f) for f in CATALOGS}
    contents["AGENTS.md"] = load("AGENTS.md")
    contents["index.html"] = load("index.html")
    id_lists = [[x["id"] for x in parse_data(contents[f], f)] for f in CATALOGS]
    if not (id_lists[0] == id_lists[1] == id_lists[2]):
        fail("catalog id lists diverge — fix the catalogs before recounting")
    before = {f: contents[f] for f in contents}
    counts = update_counts(contents)
    changed = [f for f in contents if contents[f] != before[f]]
    msg = "Recount catalog totals (%d items: %d games, %d emulators, %d other)" % counts
    print("Recount-only: %d items (%d games, %d emulators, %d other)" % counts)
    if changed:
        print("  stale count strings fixed in: " + ", ".join(changed))
    else:
        print("  all count strings already correct")
    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a") as f:
            f.write("changed=%s\n" % ("true" if changed else "false"))
            f.write("added=\n")
            f.write("commit_message=%s\n" % msg)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a") as f:
            f.write("\n### Catalog recount\n\n")
            f.write("- Catalog counted at %d items (%d games, %d emulators, %d other)\n" % counts)
            f.write("- Count strings updated: %s\n"
                    % (", ".join("`%s`" % x for x in changed) if changed else "none — already correct"))
    if changed and not args.dry_run:
        for fname in changed:
            save(fname, contents[fname])
        print("Recounted and written (%d file(s))." % len(changed))
    elif changed:
        print("Dry run — no files written.")
    else:
        print("No files written.")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    group = ap.add_mutually_exclusive_group(required=True)
    group.add_argument("--assets", help="path to the assets repo's games/ directory")
    group.add_argument("--recount-only", action="store_true",
                       help="only refresh count strings; adds no games, needs no assets checkout")
    ap.add_argument("--dry-run", action="store_true", help="report only; write nothing")
    args = ap.parse_args()

    if args.recount_only:
        recount_only(args)
        return

    warnings = []
    asset_games = scan_assets(args.assets, warnings)
    contents = {f: load(f) for f in CATALOGS}
    contents["AGENTS.md"] = load("AGENTS.md")
    contents["index.html"] = load("index.html")
    data = parse_data(contents["games.js"], "games.js")
    by_id = {x["id"]: x for x in data}

    added, already, conflicts, image_updates = [], [], [], []
    for g in sorted(asset_games, key=lambda x: x["id"]):
        existing = by_id.get(g["id"])
        if existing is not None:
            if existing.get("path") == g["path"]:
                already.append(g["id"])
                if g.get("image") and existing.get("image") != g["image"]:
                    for fname in CATALOGS:
                        contents[fname] = set_entry_image(contents[fname], g["id"], g["image"], fname)
                    image_updates.append(g["id"])
            else:
                conflicts.append(g["id"])
                warnings.append("'%s' already in catalog with a different path (%s) — SKIPPED"
                                % (g["id"], existing.get("path")))
            continue
        for fname in CATALOGS:
            contents[fname] = insert_entry(contents[fname], g, fname)
        by_id[g["id"]] = g
        added.append(g)

    # Orphan check: catalog entries pointing at the assets repo with no folder there.
    asset_ids = {g["id"] for g in asset_games}
    for entry in data:
        p = entry.get("path", "")
        if p.startswith(ASSETS_BASE):
            folder = p[len(ASSETS_BASE):].strip("/").split("/")[0]
            if folder.lower().replace("_", "-") not in asset_ids:
                warnings.append("orphaned entry '%s': no matching folder in the assets repository"
                                % entry["id"])

    if added or image_updates:
        counts = update_counts(contents)
        # Post-verify: all three catalogs must stay in sync.
        id_lists = [[x["id"] for x in parse_data(contents[f], f)] for f in CATALOGS]
        if not (id_lists[0] == id_lists[1] == id_lists[2]):
            fail("catalog id lists diverged after insertion — aborting")
        if len(id_lists[0]) != counts[0]:
            fail("count mismatch after insertion — aborting")

    # ---- report ----
    print("Assets repo: %d game folder(s) scanned" % len(asset_games))
    print("  already in catalog : %d %s" % (len(already), ("(" + ", ".join(already) + ")") if already else ""))
    print("  newly added        : %d %s" % (len(added), ("(" + ", ".join(a["id"] for a in added) + ")") if added else ""))
    print("  id conflicts       : %d %s" % (len(conflicts), ("(" + ", ".join(conflicts) + ")") if conflicts else ""))
    print("  thumbnails updated : %d %s" % (len(image_updates), ("(" + ", ".join(image_updates) + ")") if image_updates else ""))
    if added:
        print("  new totals         : %d items (%d games, %d emulators, %d other)" % counts)
    if warnings:
        print("WARNINGS:")
        for w in warnings:
            print("  - " + w)
    if added:
        print("NOTE: add attribution rows to THIRD_PARTY.md for: "
              + ", ".join(("%s (by %s)" % (a["id"], a["creator"])) if a["creator"] else a["id"] for a in added))

    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a") as f:
            f.write("changed=%s\n" % ("true" if (added or image_updates) else "false"))
            f.write("added=" + ",".join(a["id"] for a in added) + "\n")
            if added:
                msg = "Sync catalog with Dragon-Gaming-Assets games (%s)" % ",".join(a["id"] for a in added)
            else:
                msg = "Update game thumbnails (%s)" % ", ".join(image_updates)
            f.write("commit_message=%s\n" % msg)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a") as f:
            f.write("\n### Assets-repo catalog sync\n\n")
            f.write("- Scanned: %d game folder(s)\n- Already in catalog: %d\n- **Added: %d** %s\n- Conflicts: %d\n"
                    % (len(asset_games), len(already), len(added),
                       ("`" + "`, `".join(a["id"] for a in added) + "`") if added else "", len(conflicts)))
            f.write("- Thumbnails updated: %d %s\n"
                    % (len(image_updates), ("(`" + "`, `".join(image_updates) + "`)") if image_updates else ""))
            if warnings:
                f.write("\n**Warnings:**\n\n" + "\n".join("- " + w for w in warnings) + "\n")
            if added:
                f.write("\n_Remember to add THIRD_PARTY.md attribution for the new game(s) above._\n")

    if (added or image_updates) and not args.dry_run:
        for fname in ("games.js", "cdn.games.js", "singlefile.html", "index.html", "AGENTS.md"):
            save(fname, contents[fname])
        print("Catalog updated and written (5 files).")
    elif added or image_updates:
        print("Dry run — no files written.")
    else:
        print("Nothing to add — catalog is already in sync. No files written.")


if __name__ == "__main__":
    main()
