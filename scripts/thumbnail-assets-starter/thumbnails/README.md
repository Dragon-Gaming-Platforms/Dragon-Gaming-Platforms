# Thumbnail drop zone

Drop **one file per game**, named `<slug>.<ext>`, directly in this directory.

- `<slug>` = the game's catalog `id` in the platform repo, lowercase
  (check `games.js`), e.g. `2048.png`, `drive-mad.svg`, `vectoid-td-3d-v1.4.jpg`.
- `<ext>` = one of `.png .jpg .jpeg .webp .svg .gif` (case-insensitive, but
  keep filenames fully lowercase - Pages paths are case-sensitive).
- If several formats exist for one slug, CI keeps the highest-precedence one:
  `svg > png > webp > jpg > jpeg > gif`, and warns about the rest.
- Do **not** create subdirectories here and do **not** edit `jpg/` - that
  directory is generated and pruned by CI on every push.

CI publishes each source as `jpg/<slug>.jpg` (800x260, <=40 KB). Animated GIFs
are published as `jpg/<slug>.gif` unchanged.
