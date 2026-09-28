import json
import re
import os

new_items = [
  {
    "category": "games",
    "name": "0h h1",
    "tags": ["games", "puzzle", "logic", "casual"],
    "path": "./games/0hh1/index.html",
    "shelf": "Puzzle & Logic",
    "badge": "Puzzle",
    "description": "A lovely little binary logic puzzle game by Q42 / Martin Kool — fill the grid with red and blue tiles following 3 rules.",
    "controls": "Mouse Click / Touch: Cycle Empty / Red / Blue Tiles"
  },
  {
    "category": "games",
    "name": "0h n0",
    "tags": ["games", "puzzle", "logic", "casual"],
    "path": "./games/0hn0/index.html",
    "shelf": "Puzzle & Logic",
    "badge": "Puzzle",
    "description": "Companion logic game to 0h h1 by Q42 — deduce tile counts and connect dots according to visibility rules.",
    "controls": "Mouse Click / Touch: Cycle Blue / Red Dots"
  },
  {
    "category": "games",
    "name": "Astray (3D Maze)",
    "tags": ["games", "3d", "puzzle", "webgl", "physics"],
    "path": "./games/astray/index.html",
    "shelf": "Puzzle & Logic",
    "badge": "3D WebGL",
    "description": "3D WebGL physics maze exploration powered by Three.js and Box2D — roll your sphere to find the exit portal.",
    "controls": "WASD / Arrow Keys: Roll Sphere | Space: Jump | Mouse: Orbit Camera"
  },
  {
    "category": "games",
    "name": "Behind Asteroids",
    "tags": ["games", "arcade", "action", "js13k", "retro"],
    "path": "./games/behind-asteroids/index.html",
    "shelf": "Arcade & Action",
    "badge": "JS13k #1",
    "description": "Play as the greedy arcade machine throwing asteroids at humans playing Asteroids to take their coins.",
    "controls": "Mouse / Touch: Drag & Aim Asteroids | Release to Launch at Spaceship"
  },
  {
    "category": "games",
    "name": "Dante",
    "tags": ["games", "3d", "action", "adventure", "js13k"],
    "path": "./games/dante/index.html",
    "shelf": "RPG & Adventure",
    "badge": "JS13k #1",
    "description": "1st Place Winner JS13k 2022 — guide Dante the little devil through a twisted 3D hell to save 13 lost souls.",
    "controls": "WASD / Arrow Keys: Move Dante | Space / Click: Action & Levers"
  },
  {
    "category": "games",
    "name": "JavaScript Racer (Outrun 3D)",
    "tags": ["games", "racing", "3d", "retro", "arcade"],
    "path": "./games/javascript-racer/index.html",
    "shelf": "Sports & Racing",
    "badge": "Retro 3D",
    "description": "Outrun-style pseudo-3D road racing game with hills, curves, sprite scaling, and high-speed traffic.",
    "controls": "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Steer"
  },
  {
    "category": "games",
    "name": "Predecessors",
    "tags": ["games", "strategy", "turn-based", "js13k", "medieval"],
    "path": "./games/predecessors/index.html",
    "shelf": "Strategy & Idle",
    "badge": "JS13k",
    "description": "Tactical medieval 13th-century strategy game — command knights, archers, and pikemen to conquer fortresses.",
    "controls": "Mouse / Touch: Select Units and Orders | Space / Enter: End Turn"
  },
  {
    "category": "games",
    "name": "Rescue Copter",
    "tags": ["games", "flight", "simulation", "action", "js13k"],
    "path": "./games/rescue-copter/index.html",
    "shelf": "Arcade & Action",
    "badge": "Action",
    "description": "Pilot a firefighting rescue helicopter — scoop water from lakes and extinguish raging forest fires.",
    "controls": "WASD / Arrow Keys: Fly Helicopter | Space: Drop Water"
  },
  {
    "category": "games",
    "name": "Space Invaders 13k",
    "tags": ["games", "arcade", "retro", "shooter", "js13k"],
    "path": "./games/space-invaders-13k/index.html",
    "shelf": "Arcade & Action",
    "badge": "Retro",
    "description": "Classic arcade Space Invaders recreated with smooth particles, shields, and escalating waves in 13KB.",
    "controls": "Left / Right Arrows or A / D: Move Cannon | Space: Fire Laser"
  },
  {
    "category": "games",
    "name": "Underrun",
    "tags": ["games", "3d", "shooter", "action", "js13k", "webgl"],
    "path": "./games/underrun/index.html",
    "shelf": "Arcade & Action",
    "badge": "Action",
    "description": "Twin-stick top-down shooter in 13KB JavaScript/WebGL — blast cybernetic spiders, repair terminals, and survive.",
    "controls": "WASD: Move | Mouse: Aim & Shoot | R: Restart Level"
  }
]

with open('games.js', 'r') as f:
    text = f.read()

match = re.search(r'const GAMES_DATA = (\[.*?\]);', text, re.DOTALL)
if not match:
    raise ValueError("Could not find GAMES_DATA in games.js")

data = json.loads(match.group(1))
existing_paths = set(d['path'] for d in data)

for item in new_items:
    if item['path'] not in existing_paths:
        data.append(item)

# Sort catalog alphabetically by name
data.sort(key=lambda x: x['name'].lower())

# Update games.js
new_games_json = json.dumps(data, indent=2)
new_text = text[:match.start(1)] + new_games_json + text[match.end(1):]
new_text = re.sub(r'(\d+)\s+games', f'{len(data)} games', new_text, flags=re.IGNORECASE)

with open('games.js', 'w') as f:
    f.write(new_text)

# Update cdn.games.js
cdn_base = "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/"
cdn_data = []
for d in data:
    item = dict(d)
    rel = item['path'].lstrip('./')
    item['path'] = cdn_base + rel
    cdn_data.append(item)

cdn_content = f'''/**
 * Dragon Gaming Platforms - Games & Emulators Database (CDN Edition)
 */

const CDN_BASE = "{cdn_base}";

const GAMES_DATA = {json.dumps(cdn_data, indent=2)};
'''

with open('cdn.games.js', 'w') as f:
    f.write(cdn_content)

# Update singlefile.html
with open('singlefile.html', 'r') as f:
    sf_text = f.read()

sf_match = re.search(r'const GAMES_DATA = (\[.*?\]);', sf_text, re.DOTALL)
if sf_match:
    sf_text = sf_text[:sf_match.start(1)] + new_games_json + sf_text[sf_match.end(1):]
    with open('singlefile.html', 'w') as f:
        f.write(sf_text)

print(f"Catalog successfully updated to {len(data)} verified titles!")
