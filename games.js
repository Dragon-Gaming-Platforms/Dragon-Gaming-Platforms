// Complete Verified Offline Catalog of Legal Open-Source Games, Emulators & Web Tools
const GAMES_DATA = [
  {
    "name": "1255 Burgomaster",
    "tags": [
      "Strategy",
      "Simulation",
      "Retro"
    ],
    "path": "./games/1255-burgomaster/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse: Adjust municipal sliders, manage trade policies, review decrees"
  },
  {
    "name": "2048 Original",
    "tags": [
      "Puzzle",
      "Math",
      "Casual"
    ],
    "path": "./games/2048/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Popular",
    "description": "",
    "controls": "Arrow Keys / WASD / Swipe: Slide all tiles in one direction"
  },
  {
    "name": "3D City Engine",
    "tags": [
      "Simulation",
      "3D",
      "Sandbox"
    ],
    "path": "./games/3d.city/index.html",
    "shelf": "sandbox-simulation",
    "badge": "3D Sim",
    "description": "",
    "controls": "Mouse Drag: Rotate view | Scroll: Zoom | WASD: Pan camera | Click: Inspect district"
  },
  {
    "name": "3D Hartwig Chess",
    "tags": [
      "Strategy",
      "Board",
      "3D"
    ],
    "path": "./games/3d-chess/index.html",
    "shelf": "puzzle-strategy",
    "badge": "3D Board",
    "description": "",
    "controls": "Mouse Click / Drag: Select piece and make legal moves"
  },
  {
    "name": "3D Pinball: Space Cadet",
    "tags": [
      "Arcade",
      "Retro",
      "3D",
      "Classic"
    ],
    "path": "./games/space-cadet-pinball/index.html",
    "shelf": "arcade-retro",
    "badge": "Popular",
    "description": "",
    "controls": "Space: Launch ball | Z / / : Left / Right flippers | Space: Bump table | F2: New Game"
  },
  {
    "name": "A Dark Room",
    "tags": [
      "RPG",
      "Adventure",
      "Incremental"
    ],
    "path": "./games/adarkroom/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Story",
    "description": "",
    "controls": "Mouse: Click buttons to light fire, gather wood, explore outside"
  },
  {
    "name": "Abyss Sonar Submarine",
    "tags": [
      "Simulator",
      "Submarine",
      "Sci-Fi",
      "Audio"
    ],
    "path": "./games/singlefiles/Abyss-Sonar.html",
    "shelf": "sandbox-simulation",
    "badge": "Simulator",
    "description": "",
    "controls": "WASD / Mouse: Steer Submarine Depth & Heading | Space: Pulse Active Sonar"
  },
  {
    "name": "Adjustable Fireworks Lab",
    "tags": [
      "Physics",
      "Particles",
      "Sandbox",
      "Creative"
    ],
    "path": "./games/singlefiles/Adjustable-Fireworks.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse Click: Launch Firework | Sliders: Adjust Velocity, Color & Gravity"
  },
  {
    "name": "Aim Click Reflex Trainer",
    "tags": [
      "Reflex",
      "FPS",
      "Arcade",
      "Aim"
    ],
    "path": "./games/singlefiles/Aim-Click-Challenge.html",
    "shelf": "arcade-retro",
    "badge": "Reflex",
    "description": "",
    "controls": "Mouse: Click emerging targets before they shrink away"
  },
  {
    "name": "Air Hockey Championship",
    "tags": [
      "Arcade",
      "Sports",
      "2-Player",
      "Physics"
    ],
    "path": "./games/singlefiles/Air-Hockey.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch / WASD: Control Mallet | Deflect the puck into the opponent's goal"
  },
  {
    "name": "Air Traffic Control",
    "tags": [
      "Simulator",
      "Strategy",
      "Management",
      "Radar"
    ],
    "path": "./games/singlefiles/Air-Traffic-Control.html",
    "shelf": "strategy-tactics",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Touch: Select Aircraft & Set Headings / Altitudes"
  },
  {
    "name": "Alchemy Workshop",
    "tags": [
      "Puzzle",
      "Crafting",
      "Strategy",
      "Fantasy"
    ],
    "path": "./games/singlefiles/Alchemy-Workshop.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Drag reagents, brew mixtures, and complete client orders"
  },
  {
    "name": "Alges Escapade",
    "tags": [
      "Platformer",
      "Adventure",
      "Action"
    ],
    "path": "./games/alges-escapade/index.html",
    "shelf": "platformer-adventure",
    "badge": "Adventure",
    "description": "",
    "controls": "Arrow Keys / A/D: Move | Space / W: Jump | Down: Crouch"
  },
  {
    "name": "Alien Invasion",
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "path": "./games/alien-invasion/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys / WASD: Move ship | Spacebar: Shoot lasers"
  },
  {
    "name": "Ancient Beast",
    "tags": [
      "Strategy",
      "Turn-Based",
      "RPG"
    ],
    "path": "./games/AncientBeast/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Turn-Based",
    "description": "",
    "controls": "Mouse: Select creature, choose abilities, target enemy hexes"
  },
  {
    "name": "Ant Colony Foraging Sim",
    "tags": [
      "Simulation",
      "Cellular Automaton",
      "Ecology",
      "AI"
    ],
    "path": "./games/singlefiles/Ant-Colony-Sim.html",
    "shelf": "sandbox-simulation",
    "badge": "Simulation",
    "description": "",
    "controls": "Mouse: Place food sources, draw obstacles, and release pheromone markers"
  },
  {
    "name": "Anura OS",
    "tags": [
      "Emulator",
      "OS",
      "Sandbox"
    ],
    "path": "./emulators/anuraOS.html",
    "shelf": "emulators",
    "badge": "Virtual OS",
    "description": "",
    "controls": "Mouse & Keyboard: Full desktop window manager, terminal, file system, and browser apps"
  },
  {
    "name": "Aquastax",
    "tags": [
      "Puzzle",
      "Physics",
      "Casual"
    ],
    "path": "./games/aquastax/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse: Click pipes to rotate direction and seal leak points"
  },
  {
    "name": "Arashi Tempest",
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "path": "./games/arashi-js/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right: Move along edge | Spacebar: Fire blaster | Enter: Superzapper"
  },
  {
    "name": "ASCII Video Canvas",
    "tags": [
      "Tool",
      "Creative",
      "ASCII",
      "Camera"
    ],
    "path": "./games/singlefiles/ASCII-Camera.html",
    "shelf": "other",
    "badge": "Creative",
    "description": "",
    "controls": "Camera Permission: Grant access to see live ASCII render"
  },
  {
    "name": "ASDF Typing Arcade",
    "tags": [
      "Arcade",
      "Casual",
      "Retro"
    ],
    "path": "./games/asdf/index.html",
    "shelf": "arcade-retro",
    "badge": "Typing",
    "description": "",
    "controls": "Keyboard: Press falling letters (A, S, D, F) in sequence"
  },
  {
    "name": "Auction Fever",
    "tags": [
      "Strategy",
      "Economy",
      "Card",
      "Multiplayer"
    ],
    "path": "./games/singlefiles/Auction-Fever.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Place Bids, Pass, and Manage Lot Valuation"
  },
  {
    "name": "Auto Chess Forge",
    "tags": [
      "Strategy",
      "Auto-Battler",
      "Tactics",
      "Fantasy"
    ],
    "path": "./games/singlefiles/Auto-Chess-Forge.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Buy Units, Combine Ranks, and Position Formation"
  },
  {
    "name": "Avabranch",
    "tags": [
      "Puzzle",
      "Physics",
      "Casual"
    ],
    "path": "./games/avabranch/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse: Click branch joints to split and redirect energy flow"
  },
  {
    "name": "Avoid the Bikes Highway",
    "tags": [
      "Arcade",
      "Dodging",
      "Reflex",
      "Speed"
    ],
    "path": "./games/singlefiles/Avoid-The-Bikes.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Left/Right Arrow or A/D: Dodge incoming traffic lanes"
  },
  {
    "name": "Awesome Tanks 1",
    "tags": [
      "Action",
      "Shooter",
      "Tanks",
      "Upgrades"
    ],
    "path": "./games/singlefiles/Awesome-Tanks.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD: Drive Tank | Mouse: Aim Turret & Fire"
  },
  {
    "name": "Awesome Tanks 2",
    "tags": [
      "Action",
      "Shooter",
      "Tanks"
    ],
    "path": "./games/singlefiles/awesometanks2.html",
    "shelf": "action-3d",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrow Keys: Drive tank | Mouse: Aim and fire cannons"
  },
  {
    "name": "Backpack Arena",
    "tags": [
      "Roguelike",
      "Inventory",
      "Strategy",
      "Auto-Battler"
    ],
    "path": "./games/singlefiles/Backpack-Arena.html",
    "shelf": "strategy-tactics",
    "badge": "Roguelike",
    "description": "",
    "controls": "Mouse / Touch: Drag, Rotate, and Slot Weapons into Grid"
  },
  {
    "name": "Bagh-Chal (Tigers & Goats)",
    "tags": [
      "Board",
      "Strategy",
      "Traditional",
      "Ancient"
    ],
    "path": "./games/baghchal/index.html",
    "shelf": "puzzle-logic",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Select & Move Tiger or Place / Move Goat"
  },
  {
    "name": "Balatro",
    "tags": [
      "Cards",
      "Roguelike",
      "Strategy"
    ],
    "path": "./games/singlefiles/Balatro.html",
    "shelf": "puzzle-strategy",
    "badge": "Featured",
    "description": "",
    "controls": "Mouse / Touch: Select cards, buy jokers, open booster packs"
  },
  {
    "name": "Ball & Wall Breakout",
    "tags": [
      "Arcade",
      "Retro",
      "Physics"
    ],
    "path": "./games/ball-and-wall/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Mouse / Left-Right Arrows: Move paddle | Space: Launch ball"
  },
  {
    "name": "Ball Arena Bumpers",
    "tags": [
      "Arcade",
      "Physics",
      "Action",
      "Multiplayer"
    ],
    "path": "./games/singlefiles/Ball-Arena.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "WASD / Mouse: Steer Sphere Momentum & Boost"
  },
  {
    "name": "Banania",
    "tags": [
      "Arcade",
      "Classic",
      "Retro"
    ],
    "path": "./games/Banania/banania.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys: Move monkey | Esc: Pause"
  },
  {
    "name": "Basin Flood Control Sim",
    "tags": [
      "Strategy",
      "Management",
      "Simulation",
      "Engineering"
    ],
    "path": "./games/singlefiles/Basin-Control.html",
    "shelf": "strategy-tactics",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Touch: Adjust dam gate valves & monitor water sensors"
  },
  {
    "name": "Basket Random",
    "tags": [
      "Sports",
      "Physics",
      "Ragdoll",
      "2-Player"
    ],
    "path": "./games/singlefiles/Basket-Random.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Up Arrow / W / Touch: Jump & Shoot | Local 2-Player Supported"
  },
  {
    "name": "Battery Cycle Lab",
    "tags": [
      "Puzzle",
      "Science",
      "Energy",
      "Logic"
    ],
    "path": "./games/singlefiles/Battery-Cycle.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Configure ion membrane pathways & charge cycles"
  },
  {
    "name": "Beat Bento Cooking",
    "tags": [
      "Rhythm",
      "Cooking",
      "Casual",
      "Cute"
    ],
    "path": "./games/singlefiles/Beat-Bento.html",
    "shelf": "arcade-retro",
    "badge": "Cozy",
    "description": "",
    "controls": "Space / Arrow Keys: Chop & pack bento ingredients on the beat"
  },
  {
    "name": "Behind Asteroids",
    "tags": [
      "Arcade",
      "Space",
      "Sci-Fi"
    ],
    "path": "./games/behind-asteroids/index.html",
    "shelf": "action-3d",
    "badge": "JS13K",
    "description": "",
    "controls": "WASD / Arrows: Steer ship | Space / Click: Shoot lasers | Shift: Boost"
  },
  {
    "name": "Big Tower Tiny Square",
    "tags": [
      "Platformer",
      "Precision",
      "Hardcore",
      "Retro"
    ],
    "path": "./games/singlefiles/Big-Tower-Tiny-Square.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "A/D or Left/Right: Move | Space / Up: Jump & Wall-Slide"
  },
  {
    "name": "BinjGB (Game Boy / Color WASM)",
    "tags": [
      "Emulator",
      "GameBoy",
      "GBC",
      "WASM"
    ],
    "path": "./emulators/binjgb/index.html",
    "shelf": "emulators",
    "badge": "Emulator",
    "description": "",
    "controls": "Arrow Keys: D-Pad | X: A Button | Z: B Button | Enter: Start | Shift: Select"
  },
  {
    "name": "Black Hole Square",
    "tags": [
      "Puzzle",
      "Physics",
      "Spatial"
    ],
    "path": "./games/black-hole-square/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse: Place & rotate gravity deflector tiles | Space: Test orbit"
  },
  {
    "name": "Block Forge Blacksmith",
    "tags": [
      "Puzzle",
      "Crafting",
      "Strategy",
      "Fantasy"
    ],
    "path": "./games/singlefiles/Block-Forge.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Rotate & Place molten metal tiles into weapon outlines"
  },
  {
    "name": "Blockrain Tetris",
    "tags": [
      "Arcade",
      "Puzzle",
      "Retro"
    ],
    "path": "./games/blockrain/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right: Move block | Up: Rotate | Down: Soft drop | Space: Hard drop"
  },
  {
    "name": "Bloons TD 4",
    "tags": [
      "Strategy",
      "Tower Defense",
      "Classic"
    ],
    "path": "./games/singlefiles/Bloons-TD4.html",
    "shelf": "puzzle-strategy",
    "badge": "Featured",
    "description": "",
    "controls": "Mouse: Select and place monkey defense towers on track"
  },
  {
    "name": "Bomb Grid Tactical",
    "tags": [
      "Action",
      "Arcade",
      "Tactics",
      "Grid"
    ],
    "path": "./games/singlefiles/Bomb-Grid.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrow Keys: Move | Space: Plant Bomb"
  },
  {
    "name": "Borg Games Hub",
    "tags": [
      "Retro",
      "Arcade",
      "Compilation"
    ],
    "path": "./games/singlefiles/Borg-Games.html",
    "shelf": "arcade-retro",
    "badge": "Hub",
    "description": "",
    "controls": "Mouse & Keyboard: Navigate catalog and play games"
  },
  {
    "name": "BounceBack",
    "tags": [
      "Action",
      "Adventure",
      "Retro"
    ],
    "path": "./games/bounce-back/index.html",
    "shelf": "action-3d",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrows: Move | Mouse / Space: Throw Boomerang | E: Interact"
  },
  {
    "name": "Boxing Random",
    "tags": [
      "Sports",
      "Physics",
      "Ragdoll",
      "2-Player"
    ],
    "path": "./games/singlefiles/Boxing-Random.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Up Arrow / W / Touch: Punch & Hop | 2-Player Local Dual Mode"
  },
  {
    "name": "Branching Tales Odyssey",
    "tags": [
      "Story",
      "Sci-Fi",
      "Narrative",
      "Adventure"
    ],
    "path": "./games/singlefiles/Branching-Tales.html",
    "shelf": "puzzle-logic",
    "badge": "Story",
    "description": "",
    "controls": "Mouse / Touch: Select narrative choices & decrypt transmission logs"
  },
  {
    "name": "BreakLock Mastermind",
    "tags": [
      "Puzzle",
      "Logic",
      "Brain",
      "Pattern"
    ],
    "path": "./games/breaklock/index.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Drag pattern across nodes to submit guess"
  },
  {
    "name": "ByteBot Lab",
    "tags": [
      "Puzzle",
      "Coding",
      "Logic",
      "Educational"
    ],
    "path": "./games/singlefiles/Bytebot-Lab.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Arrange Logic Blocks & Execute Script"
  },
  {
    "name": "Canvas Retro Platformer",
    "tags": [
      "Platformer",
      "Action",
      "Pixel",
      "Retro"
    ],
    "path": "./games/platformer/index.html",
    "shelf": "arcade-retro",
    "badge": "Platformer",
    "description": "",
    "controls": "A/D or Left/Right: Walk | Space / Up: Jump"
  },
  {
    "name": "Canvas Speed Racer",
    "tags": [
      "Racing",
      "Arcade",
      "Retro",
      "Speed"
    ],
    "path": "./games/racer/index.html",
    "shelf": "arcade-retro",
    "badge": "Racing",
    "description": "",
    "controls": "Left/Right: Steer | Up: Accelerate | Down: Brake"
  },
  {
    "name": "Canvas Tetris",
    "tags": [
      "Arcade",
      "Puzzle",
      "Classic"
    ],
    "path": "./games/canvas-tetris/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Classic",
    "description": "",
    "controls": "Left / Right: Shift | Up / X: Rotate | Down: Soft drop | Space: Hard drop"
  },
  {
    "name": "Canvas Tower Defense",
    "tags": [
      "Strategy",
      "Tower Defense",
      "Arcade"
    ],
    "path": "./games/tower-defense/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse: Select tower type and place along the road | Space: Fast forward wave"
  },
  {
    "name": "Canyon Runner",
    "tags": [
      "3D",
      "Driving",
      "Action"
    ],
    "path": "./games/canyon-runner/index.html",
    "shelf": "driving-sports",
    "badge": "3D Runner",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer & Pitch Jet | Space: Afterburner Boost"
  },
  {
    "name": "Captain Callisto (JS13k)",
    "tags": [
      "Action",
      "Sci-Fi",
      "JS13k",
      "Arcade"
    ],
    "path": "./games/captain-callisto/index.html",
    "shelf": "action-survival",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD / Arrows: Thrusters & Move | Mouse: Aim Grappling Line"
  },
  {
    "name": "Captain Rogers",
    "tags": [
      "Arcade",
      "Action",
      "Space"
    ],
    "path": "./games/captain-rogers/index.html",
    "shelf": "arcade-retro",
    "badge": "Sci-Fi",
    "description": "",
    "controls": "Spacebar / Touch / Mouse Click: Thrust jetpack upward"
  },
  {
    "name": "Castaway Island Survival",
    "tags": [
      "Survival",
      "Crafting",
      "Island",
      "Adventure"
    ],
    "path": "./games/singlefiles/Island-Survival.html",
    "shelf": "action-survival",
    "badge": "Survival",
    "description": "",
    "controls": "WASD / Arrow Keys: Move | Space / E: Chop Trees, Forage, and Craft"
  },
  {
    "name": "Cat Mario (Syobon Action)",
    "tags": [
      "Platformer",
      "Comedy",
      "Troll",
      "Retro"
    ],
    "path": "./games/singlefiles/Cat-Mario.html",
    "shelf": "action-survival",
    "badge": "Comedy",
    "description": "",
    "controls": "Arrow Keys: Move & Jump | O: Self-Destruct | Esc: Return"
  },
  {
    "name": "Cellmates",
    "tags": [
      "Puzzle",
      "Stealth",
      "Adventure"
    ],
    "path": "./games/cellmates/index.html",
    "shelf": "platformer-adventure",
    "badge": "Stealth",
    "description": "",
    "controls": "WASD / Arrows: Move active prisoner | Space: Switch prisoner | E: Interact"
  },
  {
    "name": "Ceros Snake",
    "tags": [
      "Arcade",
      "Snake",
      "Retro"
    ],
    "path": "./games/ceros-snake/index.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer snake"
  },
  {
    "name": "Chalk Billiards 8-Ball",
    "tags": [
      "Sports",
      "Physics",
      "Arcade",
      "Pool"
    ],
    "path": "./games/singlefiles/Chalk-Billiards.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch: Aim Cue Line, Set Spin, Drag to Power Shot"
  },
  {
    "name": "Charm Reels Roguelike",
    "tags": [
      "Roguelike",
      "Cards",
      "Slots",
      "Strategy"
    ],
    "path": "./games/singlefiles/Charm-Reels.html",
    "shelf": "strategy-tactics",
    "badge": "Roguelike",
    "description": "",
    "controls": "Mouse / Touch: Spin reels, draft rune charms, and manage build synergy"
  },
  {
    "name": "Checkpoint Border Inspector",
    "tags": [
      "Simulation",
      "Mystery",
      "Papers Please",
      "Strategy"
    ],
    "path": "./games/singlefiles/Checkpoint-Inspector.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Inspect passport documents, cross-examine, approve or deny"
  },
  {
    "name": "CHIP-8 Virtual Machine",
    "tags": [
      "Emulator",
      "CHIP-8",
      "Retro",
      "Vintage"
    ],
    "path": "./emulators/chip8/index.html",
    "shelf": "emulators",
    "badge": "Emulator",
    "description": "",
    "controls": "1-4, Q-R, A-F, Z-V: Hex Keypad | Select Game from Dropdown"
  },
  {
    "name": "Chromatic Print Press",
    "tags": [
      "Puzzle",
      "Art",
      "Colors",
      "Creative"
    ],
    "path": "./games/singlefiles/Chromatic-Press.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Layer color plates & pull squeegee print"
  },
  {
    "name": "Chromatography Separation",
    "tags": [
      "Science",
      "Chemistry",
      "Puzzle",
      "Educational"
    ],
    "path": "./games/singlefiles/Chromatography-Lab.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Pipette chemical solutions & observe capillary rise"
  },
  {
    "name": "Cipher Relay Signal",
    "tags": [
      "Puzzle",
      "Cryptography",
      "Audio",
      "Sci-Fi"
    ],
    "path": "./games/singlefiles/Cipher-Relay.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Adjust frequency tuner & decode cipher keys"
  },
  {
    "name": "Circus Charlie",
    "tags": [
      "Arcade",
      "Retro",
      "Classic"
    ],
    "path": "./games/circus-charlie/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro Arcade",
    "description": "",
    "controls": "Left / Right: Walk / Run | Space / Up: Jump through hoops"
  },
  {
    "name": "Classic Klondike Solitaire",
    "tags": [
      "Cards",
      "Solitaire",
      "Classic",
      "Casual"
    ],
    "path": "./games/singlefiles/Solitaire-Classic.html",
    "shelf": "puzzle-logic",
    "badge": "Cards",
    "description": "",
    "controls": "Mouse / Touch: Drag cards or double-click to auto-move to foundations"
  },
  {
    "name": "Classic Pong 1972",
    "tags": [
      "Arcade",
      "Retro",
      "Sports",
      "Classic"
    ],
    "path": "./games/pong/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Up/Down Arrows or Mouse: Move Left Paddle"
  },
  {
    "name": "Claw Carnival Arcade",
    "tags": [
      "Arcade",
      "Physics",
      "Casual",
      "Cute"
    ],
    "path": "./games/singlefiles/Claw-Carnival.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Arrow Keys / Mouse: Move crane carriage | Space: Drop Claw"
  },
  {
    "name": "Clean Slate PowerWash",
    "tags": [
      "Casual",
      "Relaxing",
      "Cleaning",
      "Satisfying"
    ],
    "path": "./games/singlefiles/Clean-Slate.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch Drag: Direct high-pressure water nozzle across grime"
  },
  {
    "name": "Climbing Route Bouldering",
    "tags": [
      "Puzzle",
      "Sports",
      "Bouldering",
      "Strategy"
    ],
    "path": "./games/singlefiles/Climbing-Route.html",
    "shelf": "puzzle-logic",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch: Select hand & foot holds to ascend rock face"
  },
  {
    "name": "Clockwork Room Escape",
    "tags": [
      "Puzzle",
      "Escape Room",
      "Point & Click",
      "Mystery"
    ],
    "path": "./games/singlefiles/Clockwork-Escape.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Inspect items, combine inventory, and solve dials"
  },
  {
    "name": "Clumsy Bird",
    "tags": [
      "Arcade",
      "Casual",
      "Retro"
    ],
    "path": "./games/clumsy-bird/index.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Spacebar / Up Arrow / Mouse Click: Flap wings"
  },
  {
    "name": "Coil",
    "tags": [
      "Arcade",
      "Action",
      "Minimal"
    ],
    "path": "./games/coil/index.html",
    "shelf": "arcade-retro",
    "badge": "Minimal",
    "description": "",
    "controls": "Mouse Movement: Steer light trail and encircle energy nodes"
  },
  {
    "name": "Comet Weaver",
    "tags": [
      "Arcade",
      "Sci-Fi",
      "Action",
      "Cosmic"
    ],
    "path": "./games/singlefiles/Comet-Weaver.html",
    "shelf": "action-survival",
    "badge": "Arcade",
    "description": "",
    "controls": "Arrow Keys / Mouse / Touch: Steer Comet Trajectory"
  },
  {
    "name": "Connect Arena 4-in-a-Row",
    "tags": [
      "Strategy",
      "Board Game",
      "2-Player",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Connect-Arena.html",
    "shelf": "puzzle-logic",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Select Column to Drop Disc"
  },
  {
    "name": "Connect Four",
    "tags": [
      "Strategy",
      "Board",
      "Classic"
    ],
    "path": "./games/connect-four/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Board",
    "description": "",
    "controls": "Mouse: Click column slot to drop token"
  },
  {
    "name": "Courier Grid Dispatch",
    "tags": [
      "Strategy",
      "Management",
      "Logistics",
      "Fast"
    ],
    "path": "./games/singlefiles/Courier-Grid.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Assign delivery routes & optimize transit paths"
  },
  {
    "name": "Courtroom Clash Defense",
    "tags": [
      "Mystery",
      "Story",
      "Ace Attorney",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Courtroom-Clash.html",
    "shelf": "puzzle-logic",
    "badge": "Story",
    "description": "",
    "controls": "Mouse / Touch: Review case file, press testimony, and present evidence"
  },
  {
    "name": "Cozy Room Organizer",
    "tags": [
      "Casual",
      "Relaxing",
      "Unpacking",
      "Cozy"
    ],
    "path": "./games/singlefiles/Cozy-Organizer.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Drag items out of boxes & arrange neatly on shelves"
  },
  {
    "name": "CrappyBird",
    "tags": [
      "Arcade",
      "Casual",
      "Flappy"
    ],
    "path": "./games/CrappyBird/index.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    "name": "Crossword Cafe",
    "tags": [
      "Puzzle",
      "Word",
      "Brain",
      "Cozy"
    ],
    "path": "./games/singlefiles/Crossword-Cafe.html",
    "shelf": "puzzle-logic",
    "badge": "Word",
    "description": "",
    "controls": "Keyboard: Type Letters | Mouse / Touch: Select Crossword Clue Cell"
  },
  {
    "name": "CrystalQuest",
    "tags": [
      "Arcade",
      "Shooter",
      "Retro"
    ],
    "path": "./games/CrystalQuest/index.html",
    "shelf": "action-3d",
    "badge": "Retro",
    "description": "",
    "controls": "Mouse: Move ship | Mouse Click: Fire blaster | Space: Smart Bomb"
  },
  {
    "name": "Curling Endgame",
    "tags": [
      "Sports",
      "Physics",
      "Strategy",
      "Winter"
    ],
    "path": "./games/singlefiles/Curling-Endgame.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch: Aim stone angle, set delivery weight, and sweep ice"
  },
  {
    "name": "Custom Tetris",
    "tags": [
      "Arcade",
      "Puzzle",
      "Tetris"
    ],
    "path": "./games/custom-tetris/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right: Shift block | Up: Rotate | Down: Drop"
  },
  {
    "name": "CyberChef",
    "tags": [
      "Tools",
      "Utility",
      "Cryptography"
    ],
    "path": "./other/CyberChef/index.html",
    "shelf": "other",
    "badge": "Utility",
    "description": "",
    "controls": "Mouse: Drag operations into recipe pipeline, paste input, inspect output"
  },
  {
    "name": "Dante (13K)",
    "tags": [
      "Action",
      "3D",
      "Hack & Slash"
    ],
    "path": "./games/dante-13k/index.html",
    "shelf": "action-3d",
    "badge": "3D Action",
    "description": "",
    "controls": "WASD / Arrows: Move | J / Space: Attack | K: Dash | L: Special"
  },
  {
    "name": "Deep Space Observatory",
    "tags": [
      "Sci-Fi",
      "Space",
      "Astronomy",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Observatory-Watch.html",
    "shelf": "sandbox-simulation",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Touch: Pan telescope coordinates & focus spectroscopic filters"
  },
  {
    "name": "Detective Desk Noir",
    "tags": [
      "Mystery",
      "Detective",
      "Noir",
      "Story"
    ],
    "path": "./games/singlefiles/Detective-Desk.html",
    "shelf": "puzzle-logic",
    "badge": "Mystery",
    "description": "",
    "controls": "Mouse / Touch: Pin evidence cards to corkboard & link connection strings"
  },
  {
    "name": "Devil Glitches (JS13k)",
    "tags": [
      "Action",
      "Arcade",
      "JS13k",
      "Glitch"
    ],
    "path": "./games/devil-glitches/index.html",
    "shelf": "action-survival",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim & Shoot | Shift: Dash"
  },
  {
    "name": "Diablo JS",
    "tags": [
      "RPG",
      "Action",
      "Isometric",
      "Retro"
    ],
    "path": "./games/diablo-js/index.html",
    "shelf": "sandbox-simulation",
    "badge": "RPG",
    "description": "",
    "controls": "Mouse: Click to move, attack enemies, and pick up items"
  },
  {
    "name": "Dice Delver Roguelike",
    "tags": [
      "Roguelike",
      "Dice",
      "Strategy",
      "RPG"
    ],
    "path": "./games/singlefiles/Dice-Delver.html",
    "shelf": "strategy-tactics",
    "badge": "Roguelike",
    "description": "",
    "controls": "Mouse / Touch: Roll Dice & Drag Pips to Skill Slots"
  },
  {
    "name": "Digger Remastered",
    "tags": [
      "Arcade",
      "Retro",
      "Classic"
    ],
    "path": "./games/digger/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys: Dig tunnels & steer digger | F1: Fire weapon"
  },
  {
    "name": "Dojo Duel: Martial Arts",
    "tags": [
      "Action",
      "Fighting",
      "Arcade",
      "Reflex"
    ],
    "path": "./games/singlefiles/Dojo-Duel.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrow Keys / Touch: Strike, Parry, Block, and Dash"
  },
  {
    "name": "Doom 13K",
    "tags": [
      "Action",
      "3D",
      "FPS",
      "Retro"
    ],
    "path": "./games/doom-13k/index.html",
    "shelf": "action-3d",
    "badge": "3D FPS",
    "description": "",
    "controls": "WASD / Arrows: Move & Turn | Space / Ctrl: Fire Weapon | E: Open Doors"
  },
  {
    "name": "Drakonas",
    "tags": [
      "RPG",
      "Action",
      "Fantasy"
    ],
    "path": "./games/drakonas/index.html",
    "shelf": "sandbox-simulation",
    "badge": "RPG",
    "description": "",
    "controls": "WASD / Arrows: Move | Space: Attack | 1-3: Spells"
  },
  {
    "name": "Dreadhead Parkour",
    "tags": [
      "Action",
      "Platformer",
      "Parkour"
    ],
    "path": "./games/singlefiles/dreadheadparkour.htm",
    "shelf": "platformer-adventure",
    "badge": "Parkour",
    "description": "",
    "controls": "WASD / Arrow Keys: Move, jump, slide, flip"
  },
  {
    "name": "Drift Racer Grand Prix",
    "tags": [
      "Racing",
      "Arcade",
      "Drifting",
      "Speed"
    ],
    "path": "./games/singlefiles/Drift-Racer.html",
    "shelf": "arcade-retro",
    "badge": "Racing",
    "description": "",
    "controls": "WASD / Arrow Keys: Accelerate, Steer, and Initiate Drift"
  },
  {
    "name": "Drive Mad",
    "tags": [
      "Driving",
      "Physics",
      "Action",
      "3D"
    ],
    "path": "./games/singlefiles/Drive-Mad.html",
    "shelf": "driving-sports",
    "badge": "Popular",
    "description": "",
    "controls": "W / Up Arrow: Accelerate | S / Down Arrow: Reverse & Brake | A / D: Balance truck"
  },
  {
    "name": "Drone Survey Recon",
    "tags": [
      "Simulator",
      "Sci-Fi",
      "Exploration",
      "Flight"
    ],
    "path": "./games/singlefiles/Drone-Survey.html",
    "shelf": "sandbox-simulation",
    "badge": "Simulator",
    "description": "",
    "controls": "WASD: Throttle / Pitch | Arrow Keys: Yaw / Roll | Space: Thermal Scan"
  },
  {
    "name": "Duck Hunt",
    "tags": [
      "Arcade",
      "Retro",
      "Classic"
    ],
    "path": "./games/duck-hunt/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Mouse: Aim crosshair | Left Click: Pull trigger"
  },
  {
    "name": "Dungeon Delver: Ember Throne",
    "tags": [
      "Roguelike",
      "RPG",
      "Action",
      "Dungeon"
    ],
    "path": "./games/singlefiles/Dungeon-Delver.html",
    "shelf": "action-survival",
    "badge": "Roguelike",
    "description": "",
    "controls": "WASD / Touch: Move | Mouse / Tap: Attack & Cast Spells"
  },
  {
    "name": "Eaglercraft 1.12.2 JS",
    "tags": [
      "Sandbox",
      "Survival",
      "3D"
    ],
    "path": "./games/singlefiles/Eaglercraft-JS-1.12.2.html",
    "shelf": "sandbox-simulation",
    "badge": "3D",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | Esc: Pause"
  },
  {
    "name": "Eaglercraft 1.12.2 WASM",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "WASM"
    ],
    "path": "./games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
    "shelf": "sandbox-simulation",
    "badge": "WASM",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place / Interact | E: Inventory | Esc: Pause"
  },
  {
    "name": "Eaglercraft 1.5.2 Offline",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "Retro"
    ],
    "path": "./games/singlefiles/Eaglercraft-1.5.2-Offline.html",
    "shelf": "sandbox-simulation",
    "badge": "3D",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    "name": "Eaglercraft 1.8.8 JS",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "Multiplayer"
    ],
    "path": "./games/singlefiles/Eaglercraft-JS-1.8.8.html",
    "shelf": "sandbox-simulation",
    "badge": "Popular",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | T: Chat"
  },
  {
    "name": "Eaglercraft 1.8.8 WASM",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "WASM"
    ],
    "path": "./games/singlefiles/Eaglercraft-1.8.8-offline-WASM.html",
    "shelf": "sandbox-simulation",
    "badge": "WASM",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    "name": "Eaglercraft Alpha 1.2.6",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "Alpha"
    ],
    "path": "./games/singlefiles/Eaglercraft-Alpha-1.2.6-Offline.html",
    "shelf": "sandbox-simulation",
    "badge": "Retro",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left Click: Mine | Right Click: Place | I: Inventory"
  },
  {
    "name": "Eaglercraft Beta 1.3",
    "tags": [
      "Sandbox",
      "Survival",
      "3D",
      "Beta"
    ],
    "path": "./games/singlefiles/Eaglercraft-Beta-1.3-Offline.html",
    "shelf": "sandbox-simulation",
    "badge": "Retro",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    "name": "Eaglercraft Indev",
    "tags": [
      "Sandbox",
      "Retro",
      "3D",
      "Indev"
    ],
    "path": "./games/singlefiles/Eaglercraft-Indev-Offline.html",
    "shelf": "sandbox-simulation",
    "badge": "Retro",
    "description": "",
    "controls": "WASD: Move | Space: Jump | Left/Right Click: Mine/Place"
  },
  {
    "name": "Ecosystem Terrarium Sim",
    "tags": [
      "Simulation",
      "Nature",
      "Ecology",
      "Relaxing"
    ],
    "path": "./games/singlefiles/Ecosystem-Keeper.html",
    "shelf": "sandbox-simulation",
    "badge": "Simulation",
    "description": "",
    "controls": "Mouse / Touch: Introduce species, balance moisture, and adjust sunlight"
  },
  {
    "name": "Edge Not Found",
    "tags": [
      "Puzzle",
      "Sokoban",
      "Logic"
    ],
    "path": "./games/edge-not-found/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "WASD / Arrow Keys: Move | Z / U: Undo | R: Restart level"
  },
  {
    "name": "EKG Runner",
    "tags": [
      "Action",
      "Endless",
      "Rhythm"
    ],
    "path": "./games/ekg-runner/index.html",
    "shelf": "arcade-retro",
    "badge": "Runner",
    "description": "",
    "controls": "Space / Up Arrow / Click: Jump across pulse spikes"
  },
  {
    "name": "Elematter (JS13k)",
    "tags": [
      "Puzzle",
      "Action",
      "JS13k",
      "Elements"
    ],
    "path": "./games/elematter/index.html",
    "shelf": "puzzle-logic",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD / Arrows: Move & Jump | 1-4: Transmute Elemental Phase"
  },
  {
    "name": "Elemental Sandbox",
    "tags": [
      "Simulation",
      "Physics",
      "Sandbox",
      "Creative"
    ],
    "path": "./games/singlefiles/Elemental-Sandbox.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse / Touch: Select Element & Draw / Paint onto Canvas"
  },
  {
    "name": "Ember Tactics Skirmish",
    "tags": [
      "Strategy",
      "Turn-Based",
      "Tactics",
      "Fantasy"
    ],
    "path": "./games/singlefiles/Ember-Tactics.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Select units, movement tiles, and attack targets"
  },
  {
    "name": "Emberwind",
    "tags": [
      "Platformer",
      "Action",
      "Adventure"
    ],
    "path": "./games/emberwind/index.html",
    "shelf": "platformer-adventure",
    "badge": "Platformer",
    "description": "",
    "controls": "Arrow Keys: Move & Crouch | Space / Z: Cane Attack | X: Jump"
  },
  {
    "name": "EmulatorJS",
    "tags": [
      "Emulator",
      "Retro",
      "Multi-System"
    ],
    "path": "./emulators/Emulatorjs/index.html",
    "shelf": "emulators",
    "badge": "Emulator",
    "description": "",
    "controls": "Drag & drop any ROM file or browse local files. Supports gamepad & custom keyboard mapping."
  },
  {
    "name": "Enduro",
    "tags": [
      "Racing",
      "Retro",
      "Classic"
    ],
    "path": "./games/enduro/index.html",
    "shelf": "driving-sports",
    "badge": "Atari Retro",
    "description": "",
    "controls": "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Steer"
  },
  {
    "name": "Escape Road",
    "tags": [
      "Driving",
      "Action",
      "3D",
      "Endless"
    ],
    "path": "./games/singlefiles/Escape-Road.html",
    "shelf": "driving-sports",
    "badge": "3D Action",
    "description": "",
    "controls": "A / D or Left / Right: Steer vehicle | Space: Drift / Handbrake"
  },
  {
    "name": "Escape Road 2",
    "tags": [
      "Action",
      "Driving",
      "Drifting",
      "Police"
    ],
    "path": "./games/singlefiles/Escape-Road-2.html",
    "shelf": "arcade-retro",
    "badge": "Popular",
    "description": "",
    "controls": "A/D or Left/Right Arrow: Steer Car | Space: Handbrake Drift"
  },
  {
    "name": "Executive Man",
    "tags": [
      "Action",
      "Platformer",
      "Retro"
    ],
    "path": "./games/executive-man/index.html",
    "shelf": "platformer-adventure",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys / WASD: Move & Jump | Space / Z: Shoot | X: Slide"
  },
  {
    "name": "Fishing Harbor Voyage",
    "tags": [
      "Casual",
      "Fishing",
      "Cozy",
      "Management"
    ],
    "path": "./games/singlefiles/Fishing-Harbor.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "WASD: Steer Trawler | Mouse / Space: Cast Net & Reel In Catch"
  },
  {
    "name": "Flappy 2048",
    "tags": [
      "Arcade",
      "Puzzle",
      "Casual"
    ],
    "path": "./games/flappy-2048/index.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Spacebar / Click: Flap tile upward"
  },
  {
    "name": "Flappy Canvas Deluxe",
    "tags": [
      "Arcade",
      "Casual",
      "Retro",
      "Reflex"
    ],
    "path": "./games/flappy-canvas/index.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Space / Left Click / Touch: Flap Altitude"
  },
  {
    "name": "Flappy Glider Flight",
    "tags": [
      "Arcade",
      "Physics",
      "Flight",
      "Casual"
    ],
    "path": "./games/singlefiles/Flappy-Glider.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Space / Up Arrow / Touch: Adjust wing pitch & catch updrafts"
  },
  {
    "name": "Fleet Duel: Naval War",
    "tags": [
      "Strategy",
      "Naval",
      "Grid",
      "Battleship"
    ],
    "path": "./games/singlefiles/Fleet-Duel.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Place Ships & Click Coordinates to Fire"
  },
  {
    "name": "Floppy Bird HTML5",
    "tags": [
      "Arcade",
      "Casual",
      "Flappy"
    ],
    "path": "./games/floppybird/index.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    "name": "Forest Dash Endless Run",
    "tags": [
      "Arcade",
      "Runner",
      "Reflex",
      "Action"
    ],
    "path": "./games/singlefiles/Forest-Dash.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Up Arrow / Space: Jump | Down Arrow: Slide"
  },
  {
    "name": "Frequency Bureau Radio",
    "tags": [
      "Puzzle",
      "Sci-Fi",
      "Audio",
      "Mystery"
    ],
    "path": "./games/singlefiles/Frequency-Bureau.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse: Rotate oscilloscope dials & match wave frequencies"
  },
  {
    "name": "Frontier Command Outpost",
    "tags": [
      "Strategy",
      "Base Building",
      "Sci-Fi",
      "Survival"
    ],
    "path": "./games/singlefiles/Frontier-Command.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Construct buildings, assign workers, and trigger defense"
  },
  {
    "name": "Fruit Slice Frenzy",
    "tags": [
      "Arcade",
      "Reflex",
      "Casual",
      "Slice"
    ],
    "path": "./games/singlefiles/Fruit-Slice.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Mouse / Touch Drag: Swipe Blade to Slice Fruit"
  },
  {
    "name": "Garden Front Greenhouse",
    "tags": [
      "Casual",
      "Gardening",
      "Plants",
      "Cozy"
    ],
    "path": "./games/singlefiles/Garden-Front.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Water, prune, pollinate, and propagate plants"
  },
  {
    "name": "Gear Train Calibrator",
    "tags": [
      "Puzzle",
      "Physics",
      "Mechanics",
      "Engineering"
    ],
    "path": "./games/singlefiles/Gear-Calibrator.html",
    "shelf": "puzzle-logic",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse / Touch: Drag gear wheels onto axle pegs to complete transmission"
  },
  {
    "name": "Gem Garden Match-3",
    "tags": [
      "Puzzle",
      "Match-3",
      "Casual",
      "Jewels"
    ],
    "path": "./games/singlefiles/Gem-Garden.html",
    "shelf": "puzzle-logic",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse / Touch Drag: Swap adjacent jewel tiles"
  },
  {
    "name": "Geometry Dash Classic",
    "tags": [
      "Rhythm",
      "Platformer",
      "Arcade",
      "Hard"
    ],
    "path": "./games/singlefiles/Geometry-Dash-Scratch.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "Space / Up Arrow / Left Click / Touch: Jump & Fly Rocket"
  },
  {
    "name": "Glyph Warden Magic",
    "tags": [
      "Action",
      "Magic",
      "Drawing",
      "Reflex"
    ],
    "path": "./games/singlefiles/Glyph-Warden.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "Mouse / Touch Drag: Draw rune shape matching incoming enemy crests"
  },
  {
    "name": "Green Mahjong",
    "tags": [
      "Puzzle",
      "Board",
      "Solitaire"
    ],
    "path": "./games/green-mahjong/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Relaxing",
    "description": "",
    "controls": "Mouse Click: Select unblocked matching tile pairs"
  },
  {
    "name": "GUST",
    "tags": [
      "Browser",
      "Proxy",
      "Utility"
    ],
    "path": "./browsers/GUST.html",
    "shelf": "other",
    "badge": "Browser",
    "description": "",
    "controls": "Type any web address or search query in the address bar"
  },
  {
    "name": "Heal Em All",
    "tags": [
      "Strategy",
      "Puzzle",
      "Casual"
    ],
    "path": "./games/heal-em-all/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse: Deploy cure syringes, set barricades, and guide survivors"
  },
  {
    "name": "Heroine Dusk",
    "tags": [
      "RPG",
      "Adventure",
      "Retro"
    ],
    "path": "./games/heroine-dusk/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Retro",
    "description": "",
    "controls": "WASD / Arrow Keys: Navigate dungeon grid | Mouse: Select combat actions"
  },
  {
    "name": "HexGL",
    "tags": [
      "Racing",
      "3D",
      "Sci-Fi"
    ],
    "path": "./games/HexGL/index.html",
    "shelf": "driving-sports",
    "badge": "3D",
    "description": "",
    "controls": "Up / W: Accelerate | A / D or Left / Right: Steer | Q / E: Air brakes | Space: Boost"
  },
  {
    "name": "Hextris",
    "tags": [
      "Puzzle",
      "Arcade",
      "Hexagonal"
    ],
    "path": "./games/Hextris/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Popular",
    "description": "",
    "controls": "Left / Right Arrows or A / D: Rotate hexagon | Down Arrow: Speed up block fall"
  },
  {
    "name": "Hive Sovereign Ant RTS",
    "tags": [
      "Strategy",
      "RTS",
      "Insects",
      "Management"
    ],
    "path": "./games/singlefiles/Hive-Sovereign.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Direct ant armies, order tunnel digging, and harvest nectar"
  },
  {
    "name": "Hole.io",
    "tags": [
      "Action",
      "Multiplayer",
      "Physics",
      "3D"
    ],
    "path": "./games/singlefiles/Hole.io.html",
    "shelf": "action-3d",
    "badge": "Popular",
    "description": "",
    "controls": "Mouse Drag / Arrow Keys / WASD: Move hole around city"
  },
  {
    "name": "Hotfix",
    "tags": [
      "Action",
      "Cyber",
      "Puzzle"
    ],
    "path": "./games/hotfix/index.html",
    "shelf": "action-3d",
    "badge": "Sci-Fi",
    "description": "",
    "controls": "Arrow Keys / WASD: Move avatar | Space: Deploy software patches"
  },
  {
    "name": "HTML5 Chess",
    "tags": [
      "Strategy",
      "Board",
      "Classic"
    ],
    "path": "./games/chess/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Classic",
    "description": "",
    "controls": "Mouse Click / Drag: Pick up and move chess pieces"
  },
  {
    "name": "Hurry!",
    "tags": [
      "Action",
      "Speed",
      "Casual"
    ],
    "path": "./games/hurry/index.html",
    "shelf": "arcade-retro",
    "badge": "Speed",
    "description": "",
    "controls": "WASD / Arrow Keys: Move character | Dodge laser barriers"
  },
  {
    "name": "Incognito",
    "tags": [
      "Browser",
      "Proxy",
      "Utility"
    ],
    "path": "./browsers/Incognito.html",
    "shelf": "other",
    "badge": "Browser",
    "description": "",
    "controls": "Enter search terms or URL in the navigation bar"
  },
  {
    "name": "Interstellar",
    "tags": [
      "Browser",
      "Proxy",
      "Utility"
    ],
    "path": "./browsers/Interstellar.html",
    "shelf": "other",
    "badge": "Browser",
    "description": "",
    "controls": "Type search query or website destination into the bar"
  },
  {
    "name": "IodineGBA (GBA Emulator)",
    "tags": [
      "Emulator",
      "Retro",
      "GBA"
    ],
    "path": "./emulators/iodinegba/index.html",
    "shelf": "emulators",
    "badge": "GBA Emulator",
    "description": "",
    "controls": "Load ROM file from disk | Keyboard: Z (A), X (B), Enter (Start), Shift (Select), Arrows (D-Pad)"
  },
  {
    "name": "Island Builder",
    "tags": [
      "Simulation",
      "Sandbox",
      "3D"
    ],
    "path": "./games/island-builder/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Sandbox",
    "description": "",
    "controls": "Mouse Click / Drag: Place terrain, roads, houses, trees | Mouse Wheel: Zoom"
  },
  {
    "name": "Island Not Found (JS13k)",
    "tags": [
      "Puzzle",
      "3D",
      "JS13k",
      "Exploration"
    ],
    "path": "./games/island-not-found/index.html",
    "shelf": "puzzle-logic",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD: Move | Mouse: Look / Interact with Monoliths"
  },
  {
    "name": "IsoCity Builder Sim",
    "tags": [
      "Simulation",
      "City Builder",
      "Isometric",
      "Strategy"
    ],
    "path": "./games/isocity/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse: Select zone tool & Click grid tiles to construct buildings"
  },
  {
    "name": "IsoCity Tower Defense",
    "tags": [
      "Tower Defense",
      "Isometric",
      "Strategy",
      "Action"
    ],
    "path": "./games/isocity-td/index.html",
    "shelf": "strategy-tactics",
    "badge": "Defense",
    "description": "",
    "controls": "Mouse: Place defender turrets & trigger special air strikes"
  },
  {
    "name": "Jake Gordon's Outrun Racer",
    "tags": [
      "Racing",
      "Pseudo-3D",
      "Arcade",
      "Retro"
    ],
    "path": "./games/outrun-racer/index.html",
    "shelf": "arcade-retro",
    "badge": "Racing",
    "description": "",
    "controls": "Up Arrow: Accelerate | Down Arrow: Brake | Left/Right: Steer Car"
  },
  {
    "name": "Jake Gordon's Snakes",
    "tags": [
      "Arcade",
      "Retro",
      "Snake",
      "Classic"
    ],
    "path": "./games/jakes-snakes/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer Snake | Space: Pause Game"
  },
  {
    "name": "Jake Gordon's Tiny Platformer",
    "tags": [
      "Platformer",
      "Action",
      "Retro",
      "Pixel"
    ],
    "path": "./games/tiny-platformer/index.html",
    "shelf": "arcade-retro",
    "badge": "Platformer",
    "description": "",
    "controls": "A/D or Left/Right: Run | Space / Up: Jump & Wall-Jump"
  },
  {
    "name": "JavaScript European Roulette",
    "tags": [
      "Casino",
      "Cards",
      "Strategy",
      "Table"
    ],
    "path": "./games/js-roulette/index.html",
    "shelf": "arcade-retro",
    "badge": "Table",
    "description": "",
    "controls": "Mouse / Touch: Select chip denomination, place bets on grid, click Spin"
  },
  {
    "name": "Jolly Jumper",
    "tags": [
      "Arcade",
      "Casual",
      "Endless"
    ],
    "path": "./games/jolly-jumper/index.html",
    "shelf": "platformer-adventure",
    "badge": "Casual",
    "description": "",
    "controls": "Left / Right Arrows or A / D: Steer jumper left and right"
  },
  {
    "name": "Klondike Solitaire",
    "tags": [
      "Cards",
      "Classic",
      "Puzzle"
    ],
    "path": "./games/solitaire/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Classic",
    "description": "",
    "controls": "Mouse Drag / Double Click: Move cards to foundation piles"
  },
  {
    "name": "Lantern Festival Memory",
    "tags": [
      "Casual",
      "Memory",
      "Aesthetic",
      "Relaxing"
    ],
    "path": "./games/singlefiles/Lantern-Memory.html",
    "shelf": "puzzle-logic",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Click floating lanterns in the demonstrated sequence"
  },
  {
    "name": "Lockmaster Lockpick Sim",
    "tags": [
      "Simulator",
      "Puzzle",
      "Stealth",
      "Physics"
    ],
    "path": "./games/singlefiles/Lockmaster-Shift.html",
    "shelf": "puzzle-logic",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Arrow Keys: Adjust Pick Height & Tension Wrench Torque"
  },
  {
    "name": "Lode Runner",
    "tags": [
      "Arcade",
      "Platformer",
      "Retro"
    ],
    "path": "./games/loderunner/index.html",
    "shelf": "platformer-adventure",
    "badge": "Classic",
    "description": "",
    "controls": "Arrow Keys: Move & Climb Ladders | Z / X: Dig hole left / right"
  },
  {
    "name": "Lunar Lander Module",
    "tags": [
      "Simulator",
      "Physics",
      "Retro",
      "Space"
    ],
    "path": "./games/singlefiles/Moon-Lander.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Up / W: Main Thruster | Left/Right: Rotation RCS | Space: Deploy Landing Gear"
  },
  {
    "name": "Mahjong Link Connect",
    "tags": [
      "Puzzle",
      "Mahjong",
      "Connect",
      "Casual"
    ],
    "path": "./games/singlefiles/Mahjong-Link.html",
    "shelf": "puzzle-logic",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse / Touch: Click matching perimeter tile pairs to link and clear"
  },
  {
    "name": "Marble Soccer 3D",
    "tags": [
      "Sports",
      "3D",
      "Physics"
    ],
    "path": "./games/marble-soccer/index.html",
    "shelf": "driving-sports",
    "badge": "3D Sports",
    "description": "",
    "controls": "WASD / Arrows: Steer soccer marble | Space: Boost dash"
  },
  {
    "name": "Mario HTML5",
    "tags": [
      "Platformer",
      "Retro",
      "Classic"
    ],
    "path": "./games/mariohtml5/index.html",
    "shelf": "platformer-adventure",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys: Walk / Duck | S: Jump | A: Run / Shoot Fireballs"
  },
  {
    "name": "Market Pulse Trading Sim",
    "tags": [
      "Strategy",
      "Economy",
      "Trading",
      "Simulation"
    ],
    "path": "./games/singlefiles/Market-Pulse.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Buy, Sell, Short, and Set Stop-Loss Orders"
  },
  {
    "name": "Maze Chase Neon",
    "tags": [
      "Arcade",
      "Retro",
      "Maze",
      "Action"
    ],
    "path": "./games/singlefiles/Maze-Chase.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "WASD / Arrow Keys / Swipe: Move Character"
  },
  {
    "name": "Merge Orbit Celestial",
    "tags": [
      "Puzzle",
      "Physics",
      "Suika",
      "Space"
    ],
    "path": "./games/singlefiles/Merge-Orbit.html",
    "shelf": "puzzle-logic",
    "badge": "Popular",
    "description": "",
    "controls": "Mouse / Touch: Aim Drop Position & Release Planet"
  },
  {
    "name": "Metro Weaver Transit",
    "tags": [
      "Strategy",
      "Transit",
      "Simulation",
      "Minimal"
    ],
    "path": "./games/singlefiles/Metro-Weaver.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Drag color lines between station nodes & deploy trains"
  },
  {
    "name": "MicropolisJS (SimCity)",
    "tags": [
      "Simulation",
      "Strategy",
      "Classic"
    ],
    "path": "./games/micropolisjs/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Classic Sim",
    "description": "",
    "controls": "Mouse: Select construction tools, zone residential/commercial/industrial, manage tax budget"
  },
  {
    "name": "Midnight Security Monitor",
    "tags": [
      "Horror",
      "Survival",
      "Cameras",
      "FNAF"
    ],
    "path": "./games/singlefiles/Midnight-Monitor.html",
    "shelf": "action-survival",
    "badge": "Survival",
    "description": "",
    "controls": "Mouse: Switch camera feeds & toggle corridor security doors"
  },
  {
    "name": "Midnight Tactical Chess",
    "tags": [
      "Board",
      "Chess",
      "Puzzle",
      "Strategy"
    ],
    "path": "./games/singlefiles/Midnight-Chess.html",
    "shelf": "puzzle-logic",
    "badge": "Board",
    "description": "",
    "controls": "Mouse / Touch: Drag and drop chess pieces to execute tactics"
  },
  {
    "name": "Mine Matrix Tactical",
    "tags": [
      "Puzzle",
      "Minesweeper",
      "Sci-Fi",
      "Logic"
    ],
    "path": "./games/singlefiles/Mine-Matrix.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Left Click: Reveal Sector | Right Click: Place Danger Flag"
  },
  {
    "name": "Minesweeper Classic",
    "tags": [
      "Puzzle",
      "Classic",
      "Strategy"
    ],
    "path": "./games/minesweeper/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Classic",
    "description": "",
    "controls": "Left Click: Reveal cell | Right Click: Place flag | Both: Chording"
  },
  {
    "name": "Mist Valley Herbarium",
    "tags": [
      "Casual",
      "Foraging",
      "Botanical",
      "Cozy"
    ],
    "path": "./games/singlefiles/Mist-Valley-Herbarium.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "WASD / Mouse: Explore Glade & Harvest Wildflower Specimens"
  },
  {
    "name": "MOBA Frontier 3v3",
    "tags": [
      "Action",
      "MOBA",
      "Tactics",
      "Hero"
    ],
    "path": "./games/singlefiles/Moba-Frontier.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "Mouse / Touch: Move & Attack | Q, W, E, R: Cast Champion Skills"
  },
  {
    "name": "Mole Market Burrow",
    "tags": [
      "Casual",
      "Commerce",
      "Mining",
      "Cute"
    ],
    "path": "./games/singlefiles/Mole-Market.html",
    "shelf": "strategy-tactics",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Dig tunnels, stock merchant shelves, and trade goods"
  },
  {
    "name": "Monster Horde Defense",
    "tags": [
      "Strategy",
      "Tower Defense",
      "Action",
      "Survival"
    ],
    "path": "./games/singlefiles/Monster-Horde.html",
    "shelf": "strategy-tactics",
    "badge": "Defense",
    "description": "",
    "controls": "Mouse / Touch: Deploy Defenders & Trigger Special Spells"
  },
  {
    "name": "Monster Tamer RPG",
    "tags": [
      "RPG",
      "Pokemon",
      "Turn-Based",
      "Retro"
    ],
    "path": "./games/singlefiles/Monster-Tamer.html",
    "shelf": "action-survival",
    "badge": "RPG",
    "description": "",
    "controls": "WASD / Arrows: Move Trainer | Space / Enter: Interact & Choose Moves"
  },
  {
    "name": "Monster Wants Candy",
    "tags": [
      "Arcade",
      "Casual",
      "Match"
    ],
    "path": "./games/monster-candy/index.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse Click / Touch: Catch candies before they hit the ground"
  },
  {
    "name": "Moto X3M 2",
    "tags": [
      "Driving",
      "Physics",
      "Action"
    ],
    "path": "./games/singlefiles/Moto-x3m-2.html",
    "shelf": "driving-sports",
    "badge": "Popular",
    "description": "",
    "controls": "Up / W: Accelerate | Down / S: Brake | Left / Right or A / D: Tilt & Front/Backflips"
  },
  {
    "name": "Mumuy Pacman Deluxe",
    "tags": [
      "Arcade",
      "Retro",
      "Classic",
      "Maze"
    ],
    "path": "./games/mumuy-pacman/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "WASD / Arrow Keys / Swipe: Guide Pacman"
  },
  {
    "name": "Museum Climate Curator",
    "tags": [
      "Simulation",
      "Management",
      "Art",
      "Strategy"
    ],
    "path": "./games/singlefiles/Museum-Climate.html",
    "shelf": "strategy-tactics",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Touch: Adjust thermostat, dehumidifier, and ventilation airflow"
  },
  {
    "name": "Neon 2048 Synthwave",
    "tags": [
      "Puzzle",
      "Numbers",
      "Casual",
      "Cyberpunk"
    ],
    "path": "./games/singlefiles/Neon-2048.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Arrow Keys / Swipe: Slide & Merge Matching Number Tiles"
  },
  {
    "name": "Neon Blackjack Table",
    "tags": [
      "Cards",
      "Casino",
      "Strategy",
      "Arcade"
    ],
    "path": "./games/singlefiles/Blackjack-Table.html",
    "shelf": "arcade-retro",
    "badge": "Cards",
    "description": "",
    "controls": "Mouse / Touch: Place Bets, Hit, Stand, Double Down, or Split"
  },
  {
    "name": "Neon Glow Snake",
    "tags": [
      "Arcade",
      "Retro",
      "Snake",
      "Neon"
    ],
    "path": "./games/singlefiles/Snake-Game.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "WASD / Arrow Keys: Steer Snake"
  },
  {
    "name": "Norman the Necromancer",
    "tags": [
      "Action",
      "Roguelike",
      "Pixel",
      "JS13k"
    ],
    "path": "./games/norman-necromancer/index.html",
    "shelf": "action-survival",
    "badge": "Hot",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim | Left Click: Fire Bone Spell | Space: Raise Undead Minions"
  },
  {
    "name": "Octocat Jump",
    "tags": [
      "Arcade",
      "Platformer",
      "Endless"
    ],
    "path": "./games/octocat-jump/index.html",
    "shelf": "platformer-adventure",
    "badge": "Casual",
    "description": "",
    "controls": "Left / Right Arrow Keys: Move Octocat across floating ledges"
  },
  {
    "name": "Offline Paradise (JS13k)",
    "tags": [
      "Platformer",
      "Puzzle",
      "JS13k",
      "Adventure"
    ],
    "path": "./games/offline-paradise/index.html",
    "shelf": "puzzle-logic",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD / Arrows: Move & Jump | E: Activate Network Node"
  },
  {
    "name": "Onslaught Arena",
    "tags": [
      "Action",
      "Arena",
      "Medieval"
    ],
    "path": "./games/onslaught/index.html",
    "shelf": "action-3d",
    "badge": "Featured",
    "description": "",
    "controls": "WASD: Move hero | Mouse: Aim and fire arrows / magic spells"
  },
  {
    "name": "OpenPanzer",
    "tags": [
      "Strategy",
      "Wargame",
      "Hex"
    ],
    "path": "./games/openpanzer/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Wargame",
    "description": "",
    "controls": "Mouse: Select armored divisions, give movement & bombardment orders"
  },
  {
    "name": "OpenSC2K",
    "tags": [
      "Simulation",
      "Classic",
      "Retro"
    ],
    "path": "./games/OpenSC2K/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Retro Sim",
    "description": "",
    "controls": "Mouse: Select zoning tools, lay pipes, construct buildings and power grids"
  },
  {
    "name": "Operius 3D SHMUP",
    "tags": [
      "Action",
      "3D",
      "Arcade",
      "WASM"
    ],
    "path": "./games/singlefiles/Operius.html",
    "shelf": "action-survival",
    "badge": "WASM",
    "description": "",
    "controls": "WASD / Arrows: Move Ship | Space: Fire Dual Cannons"
  },
  {
    "name": "Orbital Cargo Stowage",
    "tags": [
      "Puzzle",
      "Space",
      "Tetris",
      "Physics"
    ],
    "path": "./games/singlefiles/Orbital-Stowage.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Rotate & Slot 3D cargo crates into airlock hold"
  },
  {
    "name": "Orbital Pinball Odyssey",
    "tags": [
      "Arcade",
      "Pinball",
      "Physics",
      "Sci-Fi"
    ],
    "path": "./games/singlefiles/Orbital-Pinball.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Left/Right Shift or Arrows: Flippers | Down Arrow: Launch Plunger"
  },
  {
    "name": "OS13k Game Hub",
    "tags": [
      "Sandbox",
      "Retro",
      "Compilation"
    ],
    "path": "./games/os13k/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Hub",
    "description": "",
    "controls": "Mouse / Keyboard: Click desktop icons and run mini apps"
  },
  {
    "name": "Pacman Canvas",
    "tags": [
      "Arcade",
      "Classic",
      "Retro"
    ],
    "path": "./games/pacman-canvas/index.htm",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer Pac-Man | Space: Pause / Start"
  },
  {
    "name": "Pacman Classic Canvas",
    "tags": [
      "Arcade",
      "Retro",
      "Classic",
      "Maze"
    ],
    "path": "./games/pacman-dh/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Arrow Keys / WASD: Guide Pacman through maze"
  },
  {
    "name": "Pacman JS",
    "tags": [
      "Arcade",
      "Classic",
      "Retro"
    ],
    "path": "./games/pacman/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Arrow Keys: Steer Pac-Man | Space: Start / Pause"
  },
  {
    "name": "Paper.io 3D Arena",
    "tags": [
      "Arcade",
      "IO Game",
      "3D",
      "Multiplayer"
    ],
    "path": "./games/singlefiles/Paper-io-3D.html",
    "shelf": "arcade-retro",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Mouse / Touch: Steer Painter Head"
  },
  {
    "name": "Parable of the Polygons",
    "tags": [
      "Educational",
      "Simulation",
      "Sociology",
      "Story"
    ],
    "path": "./games/polygons/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Interactive",
    "description": "",
    "controls": "Mouse / Touch: Drag unhappy triangles and squares into diverse neighborhoods"
  },
  {
    "name": "Pathogen Defense Protocol",
    "tags": [
      "Strategy",
      "Biology",
      "Tower Defense",
      "Science"
    ],
    "path": "./games/singlefiles/Pathogen-Protocol.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Deploy immune cells along capillary bloodstream tracks"
  },
  {
    "name": "Penalty Rush Soccer",
    "tags": [
      "Sports",
      "Soccer",
      "Reflex",
      "Arcade"
    ],
    "path": "./games/singlefiles/Penalty-Rush.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch: Swipe to shoot curve ball or dive as goalie"
  },
  {
    "name": "Photo Safari Expedition",
    "tags": [
      "Casual",
      "Relaxing",
      "Exploration",
      "Wildlife"
    ],
    "path": "./games/singlefiles/Photo-Safari.html",
    "shelf": "sandbox-simulation",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse / Touch: Pan Camera, Zoom Lens, and Snap Shutter"
  },
  {
    "name": "Pixel Clues Nonogram",
    "tags": [
      "Puzzle",
      "Picross",
      "Nonogram",
      "Logic"
    ],
    "path": "./games/singlefiles/Pixel-Clues.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Left Click: Fill Pixel | Right Click: Mark Empty X"
  },
  {
    "name": "Pixel Platformer",
    "tags": [
      "Platformer",
      "Action",
      "Pixel"
    ],
    "path": "./games/pixel-platformer/index.html",
    "shelf": "platformer-adventure",
    "badge": "Platformer",
    "description": "",
    "controls": "Left / Right: Run | Space / Up: Jump | Down: Duck / Fall"
  },
  {
    "name": "Pocket Empire Builder",
    "tags": [
      "Strategy",
      "Management",
      "Civilization",
      "Idle"
    ],
    "path": "./games/singlefiles/Pocket-Empire.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Build, Upgrade, and Direct Population"
  },
  {
    "name": "Pocket Farm Harvest",
    "tags": [
      "Casual",
      "Farming",
      "Relaxing",
      "Simulator"
    ],
    "path": "./games/singlefiles/Pocket-Farm.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Plant Seeds, Water Crops, and Sell Harvest"
  },
  {
    "name": "Pocket Mini-Golf",
    "tags": [
      "Sports",
      "Physics",
      "Casual",
      "Golf"
    ],
    "path": "./games/singlefiles/Pocket-Golf.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Mouse / Touch: Drag Back to Aim & Power Putt"
  },
  {
    "name": "Pocket Virtual Pet",
    "tags": [
      "Casual",
      "Pet",
      "Tamagotchi",
      "Cute"
    ],
    "path": "./games/singlefiles/Pocket-Companion.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Feed, Play, Clean, and Pet your companion"
  },
  {
    "name": "Prim's Algorithmic Maze",
    "tags": [
      "Puzzle",
      "Algorithms",
      "Maze",
      "Educational"
    ],
    "path": "./games/singlefiles/Prims-Maze-Generator.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "WASD / Arrow Keys: Navigate Maze | Button: Generate New Maze"
  },
  {
    "name": "Prism Breaker Deluxe",
    "tags": [
      "Arcade",
      "Breakout",
      "Action",
      "Retro"
    ],
    "path": "./games/singlefiles/Prism-Breaker.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "Mouse / Arrow Keys / Touch: Move Paddle | Left Click: Launch Ball"
  },
  {
    "name": "Prism Orchard Light",
    "tags": [
      "Puzzle",
      "Optics",
      "Lasers",
      "Light"
    ],
    "path": "./games/singlefiles/Prism-Orchard.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Drag and rotate mirrors to redirect laser paths"
  },
  {
    "name": "Progress Knight",
    "tags": [
      "Incremental",
      "RPG",
      "Strategy"
    ],
    "path": "./games/progress-knight/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Incremental",
    "description": "",
    "controls": "Mouse: Assign job tasks, study skills, manage daily schedule"
  },
  {
    "name": "Protocol 390",
    "tags": [
      "Adventure",
      "Sci-Fi",
      "Cyberpunk"
    ],
    "path": "./games/protocol-390/index.html",
    "shelf": "platformer-adventure",
    "badge": "Sci-Fi",
    "description": "",
    "controls": "WASD / Arrow Keys: Move | E / Space: Interact with terminals and NPCs"
  },
  {
    "name": "Pulse Modular Synth",
    "tags": [
      "Tool",
      "Music",
      "Audio",
      "Creative"
    ],
    "path": "./games/singlefiles/Pulse-Studio.html",
    "shelf": "other",
    "badge": "Creative",
    "description": "",
    "controls": "Mouse / Touch: Connect patch cords & turn knob parameters"
  },
  {
    "name": "PuzzleScript Gallery",
    "tags": [
      "Puzzle",
      "Retro",
      "Engine"
    ],
    "path": "./games/puzzlescript/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "Arrow Keys / WASD: Move | Z / U: Undo step | R: Restart puzzle"
  },
  {
    "name": "Q1K3 (Quake 13K)",
    "tags": [
      "Action",
      "3D",
      "FPS",
      "Retro"
    ],
    "path": "./games/q1k3/index.html",
    "shelf": "action-3d",
    "badge": "3D FPS",
    "description": "",
    "controls": "WASD: Move | Mouse: Look & Shoot | Space: Jump | 1-2: Switch Weapons"
  },
  {
    "name": "Radish Guard Defense",
    "tags": [
      "Strategy",
      "Tower Defense",
      "Casual",
      "Cute"
    ],
    "path": "./games/singlefiles/Radish-Guard.html",
    "shelf": "strategy-tactics",
    "badge": "Defense",
    "description": "",
    "controls": "Mouse / Touch: Select & Plant Defender Towers"
  },
  {
    "name": "Radius Raid",
    "tags": [
      "Action",
      "Arcade",
      "Shooter",
      "Vector"
    ],
    "path": "./games/radius-raid/index.html",
    "shelf": "action-3d",
    "badge": "Arcade",
    "description": "",
    "controls": "WASD / Arrows: Move | Mouse: Aim & Fire | Space: Bomb"
  },
  {
    "name": "Ragdoll Archers",
    "tags": [
      "Action",
      "Physics",
      "Shooter"
    ],
    "path": "./games/singlefiles/Ragdoll-Archers.html",
    "shelf": "action-3d",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse Drag & Release: Aim bow and fire arrow"
  },
  {
    "name": "Raging Gardens",
    "tags": [
      "Action",
      "Stealth",
      "Retro"
    ],
    "path": "./games/raging-gardens/index.html",
    "shelf": "platformer-adventure",
    "badge": "Stealth",
    "description": "",
    "controls": "Arrow Keys / WASD: Move ninja | Space: Sneak / Dash"
  },
  {
    "name": "Ramen Noodle Shift",
    "tags": [
      "Arcade",
      "Cooking",
      "Fast",
      "Casual"
    ],
    "path": "./games/singlefiles/Noodle-Shift.html",
    "shelf": "arcade-retro",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Assemble custom ramen bowls to match order tickets"
  },
  {
    "name": "Recoil",
    "tags": [
      "Action",
      "Physics",
      "Shooter"
    ],
    "path": "./games/singlefiles/Recoil.html",
    "shelf": "action-3d",
    "badge": "Action",
    "description": "",
    "controls": "Mouse: Aim | Click: Shoot weapon and propel yourself with recoil"
  },
  {
    "name": "Risky Stakes High Roller",
    "tags": [
      "Casino",
      "Cards",
      "Strategy",
      "Arcade"
    ],
    "path": "./games/singlefiles/Risky-Stakes.html",
    "shelf": "arcade-retro",
    "badge": "Cards",
    "description": "",
    "controls": "Mouse / Touch: Place bets, Double Down, or Cash Out"
  },
  {
    "name": "River Poker Texas Hold'em",
    "tags": [
      "Cards",
      "Poker",
      "Strategy",
      "Table"
    ],
    "path": "./games/singlefiles/River-Holdem.html",
    "shelf": "arcade-retro",
    "badge": "Cards",
    "description": "",
    "controls": "Mouse / Touch: Check, Bet, Raise, Fold, or Go All-In"
  },
  {
    "name": "Roguish",
    "tags": [
      "RPG",
      "Roguelike",
      "Dungeon"
    ],
    "path": "./games/roguish/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Roguelike",
    "description": "",
    "controls": "WASD / Arrow Keys: Move & Bump Attack | 1-4: Cast Spells | I: Inventory"
  },
  {
    "name": "Runway Fashion Stylist",
    "tags": [
      "Casual",
      "Fashion",
      "Dress Up",
      "Creative"
    ],
    "path": "./games/singlefiles/Runway-Stylist.html",
    "shelf": "sandbox-simulation",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Drag garments & accessories onto model mannequin"
  },
  {
    "name": "Sandboxels Chemistry",
    "tags": [
      "Sandbox",
      "Physics",
      "Chemistry",
      "Simulation"
    ],
    "path": "./games/singlefiles/Sandboxels.html",
    "shelf": "sandbox-simulation",
    "badge": "Hot",
    "description": "",
    "controls": "Mouse / Touch: Select Element & Draw / Click on Canvas | Shift + Scroll: Change Brush"
  },
  {
    "name": "Sandspiel",
    "tags": [
      "Simulation",
      "Sandbox",
      "Physics"
    ],
    "path": "./games/sandspiel/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse Left Click: Draw selected element | Right Click: Erase | 1-9: Select element"
  },
  {
    "name": "Satellite Relay Network",
    "tags": [
      "Strategy",
      "Sci-Fi",
      "Space",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Relay-Coordination.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Align satellite dish headings & route data packets"
  },
  {
    "name": "Save the Forest",
    "tags": [
      "Strategy",
      "Tower Defense",
      "Casual"
    ],
    "path": "./games/save-the-forest/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Defense",
    "description": "",
    "controls": "Mouse: Click to deploy water pumps and clear firebreak paths"
  },
  {
    "name": "Scramjet",
    "tags": [
      "Browser",
      "Proxy",
      "Utility"
    ],
    "path": "./browsers/Scramjet.html",
    "shelf": "other",
    "badge": "Browser",
    "description": "",
    "controls": "Enter URL or search keyword into the navigation search bar"
  },
  {
    "name": "Shadow Post Stealth",
    "tags": [
      "Action",
      "Stealth",
      "Puzzle",
      "Tactics"
    ],
    "path": "./games/singlefiles/Shadow-Post.html",
    "shelf": "action-survival",
    "badge": "Stealth",
    "description": "",
    "controls": "WASD / Arrow Keys: Move | Space: Interact / Hide in Shadows"
  },
  {
    "name": "Shan Hai Mythic Duel",
    "tags": [
      "Cards",
      "Strategy",
      "Mythology",
      "Fantasy"
    ],
    "path": "./games/singlefiles/Shan-Hai.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Play creature cards & direct elemental attacks"
  },
  {
    "name": "Sight & Light Raycaster",
    "tags": [
      "Physics",
      "Lighting",
      "Raycasting",
      "Tech Demo"
    ],
    "path": "./games/sight-and-light/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse / Touch: Move Light Source Around Scene"
  },
  {
    "name": "Signal Caravan Radio",
    "tags": [
      "Story",
      "Adventure",
      "Sci-Fi",
      "Radio"
    ],
    "path": "./games/singlefiles/Signal-Caravan.html",
    "shelf": "puzzle-logic",
    "badge": "Story",
    "description": "",
    "controls": "Mouse / Touch: Tune radio dial & choose caravan destination routes"
  },
  {
    "name": "Silent Rescue Deep Sea",
    "tags": [
      "Action",
      "Submarine",
      "Rescue",
      "Physics"
    ],
    "path": "./games/singlefiles/Silent-Rescue.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrows: Thruster Propulsion | Space: Magnetic Docking Clamp"
  },
  {
    "name": "Simon Memory Electronic",
    "tags": [
      "Casual",
      "Memory",
      "Audio",
      "Retro"
    ],
    "path": "./games/simon/index.html",
    "shelf": "puzzle-logic",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse / Touch: Click Green, Red, Yellow, or Blue Tones"
  },
  {
    "name": "SkiFree HTML5",
    "tags": [
      "Sports",
      "Retro",
      "Arcade"
    ],
    "path": "./games/skifree/index.html",
    "shelf": "driving-sports",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right: Steer skier | Down: Accelerate | Up: Brake | Space: Jump"
  },
  {
    "name": "Sky Hop Ascender",
    "tags": [
      "Arcade",
      "Platformer",
      "Casual",
      "Jump"
    ],
    "path": "./games/singlefiles/Sky-Hop.html",
    "shelf": "arcade-retro",
    "badge": "Arcade",
    "description": "",
    "controls": "A/D or Left/Right Arrow / Tilt: Move Horizontal | Space: Boost"
  },
  {
    "name": "Skyline City Planner",
    "tags": [
      "Simulation",
      "City Builder",
      "Grid",
      "Strategy"
    ],
    "path": "./games/singlefiles/Skyline-Planner.html",
    "shelf": "sandbox-simulation",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Select building type & place onto grid blueprint"
  },
  {
    "name": "Slingstorm Physics",
    "tags": [
      "Arcade",
      "Physics",
      "Action",
      "Destruction"
    ],
    "path": "./games/singlefiles/Slingstorm.html",
    "shelf": "arcade-retro",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse / Touch Drag: Pull Slingshot, Aim Angle, and Release"
  },
  {
    "name": "Slow Roads 3D",
    "tags": [
      "Driving",
      "3D",
      "Procedural",
      "Relaxing"
    ],
    "path": "./games/singlefiles/Slow-Roads.html",
    "shelf": "sandbox-simulation",
    "badge": "3D",
    "description": "",
    "controls": "WASD / Arrow Keys: Drive & Steer | C: Change Camera | R: Respawn | Esc: Settings"
  },
  {
    "name": "Snake HTML5",
    "tags": [
      "Arcade",
      "Classic",
      "Retro"
    ],
    "path": "./games/snake/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer snake direction"
  },
  {
    "name": "Snakes Classic HTML5",
    "tags": [
      "Arcade",
      "Snake",
      "Retro",
      "Classic"
    ],
    "path": "./games/snakes/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer Snake"
  },
  {
    "name": "Snow Rider 3D",
    "tags": [
      "Sports",
      "3D",
      "Endless"
    ],
    "path": "./games/singlefiles/Snowrider.html",
    "shelf": "driving-sports",
    "badge": "3D",
    "description": "",
    "controls": "Left / Right Arrows or A / D: Steer sled | Up Arrow or Space: Jump"
  },
  {
    "name": "Snow Ridge Downhill",
    "tags": [
      "Sports",
      "Arcade",
      "Snowboard",
      "Speed"
    ],
    "path": "./games/singlefiles/Snow-Ridge.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "A/D or Left/Right Arrow: Steer Snowboard | Space: Jump / Trick"
  },
  {
    "name": "Sokoban",
    "tags": [
      "Puzzle",
      "Classic",
      "Retro"
    ],
    "path": "./games/sokoban/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "WASD / Arrow Keys: Move pusher | R: Restart level | U: Undo move"
  },
  {
    "name": "Sokoban Quest Classic",
    "tags": [
      "Puzzle",
      "Logic",
      "Retro",
      "Grid"
    ],
    "path": "./games/singlefiles/Sokoban-Quest.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "WASD / Arrow Keys: Move / Push Crate | U: Undo Move | R: Restart"
  },
  {
    "name": "Space Company",
    "tags": [
      "Incremental",
      "Sci-Fi",
      "Strategy"
    ],
    "path": "./games/SpaceCompany/index.html",
    "shelf": "sandbox-simulation",
    "badge": "Sci-Fi",
    "description": "",
    "controls": "Mouse: Manage industry, research technologies, build rockets"
  },
  {
    "name": "Space Huggers",
    "tags": [
      "Action",
      "Platformer",
      "Shooter",
      "Roguelike"
    ],
    "path": "./games/space-huggers/index.html",
    "shelf": "action-3d",
    "badge": "Roguelike",
    "description": "",
    "controls": "WASD / Arrows: Move & Jump | Mouse / Z: Aim & Shoot | R: Reload"
  },
  {
    "name": "Space Invaders HTML5",
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "path": "./games/space-invaders/index.html",
    "shelf": "arcade-retro",
    "badge": "Classic",
    "description": "",
    "controls": "Left / Right Arrows: Move cannon | Spacebar: Fire laser"
  },
  {
    "name": "Space Shooter",
    "tags": [
      "Arcade",
      "Shooter",
      "Space"
    ],
    "path": "./games/space-shooter/index.html",
    "shelf": "action-3d",
    "badge": "Space",
    "description": "",
    "controls": "WASD / Arrow Keys: Steer ship | Space / Mouse Click: Fire cannons"
  },
  {
    "name": "SpacePi Arcade (JS13k)",
    "tags": [
      "Action",
      "Arcade",
      "JS13k",
      "Sci-Fi"
    ],
    "path": "./games/spacepi/index.html",
    "shelf": "action-survival",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD: Move Ship | Mouse: 360 Aim & Shoot"
  },
  {
    "name": "Spashal",
    "tags": [
      "Arcade",
      "Space",
      "Physics"
    ],
    "path": "./games/spashal/index.html",
    "shelf": "action-3d",
    "badge": "Physics",
    "description": "",
    "controls": "Left / Right: Rotate ship | Up Arrow / Space: Fire main rocket booster"
  },
  {
    "name": "Spectrum 8-Bit Chiptune",
    "tags": [
      "Tool",
      "Audio",
      "Chiptune",
      "Retro"
    ],
    "path": "./games/singlefiles/Spectrum-Console.html",
    "shelf": "other",
    "badge": "Creative",
    "description": "",
    "controls": "Keyboard / Touch: Play piano keys & tweak waveform parameters"
  },
  {
    "name": "Spud Arena Survivor",
    "tags": [
      "Action",
      "Roguelike",
      "Survival",
      "Shooter"
    ],
    "path": "./games/singlefiles/Spud-Arena.html",
    "shelf": "action-survival",
    "badge": "Hot",
    "description": "",
    "controls": "WASD / Mouse: Move Character | Weapons Auto-Fire"
  },
  {
    "name": "Stack Tower Builder",
    "tags": [
      "Casual",
      "Reflex",
      "Arcade",
      "Stacking"
    ],
    "path": "./games/singlefiles/Stack-Tower.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Space / Left Click / Tap: Drop & Trim Moving Block"
  },
  {
    "name": "Stained Glass Mosaic",
    "tags": [
      "Puzzle",
      "Art",
      "Jigsaw",
      "Relaxing"
    ],
    "path": "./games/singlefiles/Mosaic-Jigsaw.html",
    "shelf": "puzzle-logic",
    "badge": "Cozy",
    "description": "",
    "controls": "Mouse / Touch: Drag and snap glass fragments into place"
  },
  {
    "name": "Starforge Idle Galactic",
    "tags": [
      "Idle",
      "Sci-Fi",
      "Incremental",
      "Space"
    ],
    "path": "./games/singlefiles/Starforge-Idle.html",
    "shelf": "sandbox-simulation",
    "badge": "Idle",
    "description": "",
    "controls": "Mouse / Touch: Click Stellar Core & Buy Industrial Upgrades"
  },
  {
    "name": "Starline Freight Hyperlanes",
    "tags": [
      "Strategy",
      "Sci-Fi",
      "Space",
      "Logistics"
    ],
    "path": "./games/singlefiles/Starline-Route.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Construct jump gates & dispatch cargo freighters"
  },
  {
    "name": "Starship Sorades 13K",
    "tags": [
      "Arcade",
      "Bullet Hell",
      "Space"
    ],
    "path": "./games/sorades/index.html",
    "shelf": "action-3d",
    "badge": "JS13K",
    "description": "",
    "controls": "Arrow Keys / WASD: Steer fighter | Spacebar: Primary fire | Shift: Focus movement"
  },
  {
    "name": "Starship Suspects",
    "tags": [
      "Strategy",
      "Social Deduction",
      "Multiplayer",
      "Sci-Fi"
    ],
    "path": "./games/singlefiles/Starship-Suspects.html",
    "shelf": "strategy-tactics",
    "badge": "Party",
    "description": "",
    "controls": "WASD: Move Crewmate | E: Interact with Terminals | Report Body"
  },
  {
    "name": "Stratigraphy Fossil Dig",
    "tags": [
      "Science",
      "Geology",
      "Fossils",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Stratigraphy-Lab.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Carefully chisel rock layers & assemble fossil bones"
  },
  {
    "name": "Sudoku Master",
    "tags": [
      "Puzzle",
      "Strategy",
      "Classic"
    ],
    "path": "./games/sudoku/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "Click cell: Select | 1-9: Enter number | Del / Backspace: Erase note"
  },
  {
    "name": "Sudoku Studio Pro",
    "tags": [
      "Puzzle",
      "Sudoku",
      "Numbers",
      "Brain"
    ],
    "path": "./games/singlefiles/Sudoku-Studio.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / 1-9 Keys: Select Cell & Enter Digit"
  },
  {
    "name": "Survev.io Battle Royale",
    "tags": [
      "Action",
      "Battle Royale",
      "Shooter",
      "Multiplayer"
    ],
    "path": "./games/singlefiles/Survev-io.html",
    "shelf": "action-survival",
    "badge": "Hot",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim & Shoot | F: Loot | 1-4: Switch Weapons"
  },
  {
    "name": "Survivor Arena",
    "tags": [
      "Action",
      "Arena",
      "Survival"
    ],
    "path": "./games/survivor/index.html",
    "shelf": "action-3d",
    "badge": "Action",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim and shoot swarming zombies"
  },
  {
    "name": "Switchyard Rail Dispatch",
    "tags": [
      "Puzzle",
      "Trains",
      "Railroad",
      "Logistics"
    ],
    "path": "./games/singlefiles/Switchyard-Rush.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Click track switches to redirect train routing"
  },
  {
    "name": "T-Rex Dino Runner",
    "tags": [
      "Arcade",
      "Endless",
      "Retro",
      "Casual"
    ],
    "path": "./games/t-rex-runner/index.html",
    "shelf": "arcade-retro",
    "badge": "Popular",
    "description": "",
    "controls": "Space / Up Arrow: Jump | Down Arrow: Duck"
  },
  {
    "name": "Tank Arena 2D Battle",
    "tags": [
      "Action",
      "Shooter",
      "Tanks",
      "Combat"
    ],
    "path": "./games/singlefiles/Tank-Arena.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD: Drive Hull | Mouse: Aim Turret & Fire Shells"
  },
  {
    "name": "Tanuki Sunset",
    "tags": [
      "3D",
      "Skateboarding",
      "Synthwave",
      "Casual"
    ],
    "path": "./games/singlefiles/Tanuki-Sunset.html",
    "shelf": "arcade-retro",
    "badge": "Popular",
    "description": "",
    "controls": "A/D: Steer | Space: Drift | S: Speed Brake"
  },
  {
    "name": "Temple of Boom",
    "tags": [
      "Action",
      "Platformer",
      "Shooter",
      "2-Player"
    ],
    "path": "./games/singlefiles/Temple-of-Boom.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrow Keys: Move & Jump | C / L: Shoot | V / K: Switch Weapon"
  },
  {
    "name": "Territorial.io",
    "tags": [
      "Strategy",
      "Multiplayer",
      "Conquest",
      "Fast"
    ],
    "path": "./games/singlefiles/Territorial-io.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Left Click / Touch: Set troop attack percentage & select target territory"
  },
  {
    "name": "Teterjs",
    "tags": [
      "Arcade",
      "Puzzle",
      "Classic"
    ],
    "path": "./games/teterjs/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Puzzle",
    "description": "",
    "controls": "Left / Right: Move | Up: Rotate CW | Z: Rotate CCW | C: Hold | Space: Hard drop"
  },
  {
    "name": "The Evolution of Trust",
    "tags": [
      "Game Theory",
      "Story",
      "Educational",
      "Masterpiece"
    ],
    "path": "./games/trust/index.html",
    "shelf": "strategy-tactics",
    "badge": "Masterpiece",
    "description": "",
    "controls": "Mouse / Touch: Click Choices, Coin Slots, and Interactive Dialogue"
  },
  {
    "name": "There Is No Game",
    "tags": [
      "Comedy",
      "Meta",
      "Point & Click",
      "Puzzle"
    ],
    "path": "./games/singlefiles/There-Is-No-Game.html",
    "shelf": "puzzle-logic",
    "badge": "Popular",
    "description": "",
    "controls": "Mouse: Click, Drag, Drop, and Break Interface Elements"
  },
  {
    "name": "Thunder Vanguard SHMUP",
    "tags": [
      "Action",
      "Arcade",
      "Shooter",
      "Retro"
    ],
    "path": "./games/singlefiles/Thunder-Vanguard.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "Arrow Keys / Mouse: Fly Jet | Space / Auto: Fire Primary Lasers | X: Bomb"
  },
  {
    "name": "Tic-Tac-Toe AI",
    "tags": [
      "Puzzle",
      "Classic",
      "Casual"
    ],
    "path": "./games/tictactoe/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Casual",
    "description": "",
    "controls": "Mouse: Click empty square to place X or O"
  },
  {
    "name": "Tidal Grid Ocean Power",
    "tags": [
      "Strategy",
      "Clean Energy",
      "Engineering",
      "Simulation"
    ],
    "path": "./games/singlefiles/Tidal-Grid.html",
    "shelf": "strategy-tactics",
    "badge": "Simulator",
    "description": "",
    "controls": "Mouse / Touch: Deploy subsea turbines & balance electrical grid load"
  },
  {
    "name": "Tide Salvage Diver",
    "tags": [
      "Action",
      "Underwater",
      "Exploration",
      "Casual"
    ],
    "path": "./games/singlefiles/Tide-Salvage.html",
    "shelf": "action-survival",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Mouse: Swim & Dive | Space: Collect Treasure"
  },
  {
    "name": "Time Post Paradox",
    "tags": [
      "Puzzle",
      "Time Travel",
      "Story",
      "Brain"
    ],
    "path": "./games/singlefiles/Time-Post.html",
    "shelf": "puzzle-logic",
    "badge": "Puzzle",
    "description": "",
    "controls": "Mouse / Touch: Schedule mail deliveries across past and future timeline nodes"
  },
  {
    "name": "Time Shooter 2",
    "tags": [
      "Action",
      "3D",
      "FPS",
      "Superhot"
    ],
    "path": "./games/singlefiles/Time-Shooter-2.html",
    "shelf": "action-survival",
    "badge": "3D",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim | Left Click: Shoot / Throw Weapon | Right Click: Pick Up"
  },
  {
    "name": "Time Shooter 3: SWAT",
    "tags": [
      "Action",
      "3D",
      "FPS",
      "Tactical"
    ],
    "path": "./games/singlefiles/Time-Shooter-3.html",
    "shelf": "action-survival",
    "badge": "3D",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim | Left Click: Fire / Strike | Right Click: Grab Riot Shield"
  },
  {
    "name": "Tiny Factory Automation",
    "tags": [
      "Strategy",
      "Automation",
      "Factorio",
      "Puzzle"
    ],
    "path": "./games/singlefiles/Tiny-Factory.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Place conveyor belts, inserters, and assembly machines"
  },
  {
    "name": "Touchline Soccer Tactics",
    "tags": [
      "Sports",
      "Strategy",
      "Management",
      "Soccer"
    ],
    "path": "./games/singlefiles/Touchline-Manager.html",
    "shelf": "strategy-tactics",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Adjust Formation, Substitution & In-Match Tactics"
  },
  {
    "name": "Tower Stacker",
    "tags": [
      "Arcade",
      "Physics",
      "Casual"
    ],
    "path": "./games/tower-game/index.html",
    "shelf": "arcade-retro",
    "badge": "Casual",
    "description": "",
    "controls": "Click / Spacebar: Drop current tower block"
  },
  {
    "name": "Truss Workshop Bridge",
    "tags": [
      "Puzzle",
      "Physics",
      "Engineering",
      "Building"
    ],
    "path": "./games/singlefiles/Truss-Workshop.html",
    "shelf": "puzzle-logic",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse / Touch: Draw Nodes & Beams | Press Play to Test Physics Stress"
  },
  {
    "name": "Underrun (Software 3D)",
    "tags": [
      "Action",
      "Shooter",
      "JS13k",
      "Retro"
    ],
    "path": "./games/underrun/index.html",
    "shelf": "action-survival",
    "badge": "JS13k",
    "description": "",
    "controls": "WASD: Move | Mouse: Aim & Shoot Plasma Blaster"
  },
  {
    "name": "Vector Asteroids",
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "path": "./games/asteroids/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right: Rotate ship | Up Arrow: Thruster | Spacebar: Fire laser blaster"
  },
  {
    "name": "Vex 3 Parkour",
    "tags": [
      "Platformer",
      "Parkour",
      "Stickman",
      "Action"
    ],
    "path": "./games/singlefiles/Vex-3.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, Jump, Slide, Wall-Jump & Swim"
  },
  {
    "name": "Vex 4 Parkour",
    "tags": [
      "Platformer",
      "Parkour",
      "Stickman",
      "Action"
    ],
    "path": "./games/singlefiles/Vex-4.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, Jump, Slide, Wall-Jump & Swim"
  },
  {
    "name": "Vex 5 Parkour",
    "tags": [
      "Platformer",
      "Parkour",
      "Stickman",
      "Action"
    ],
    "path": "./games/singlefiles/Vex-5.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, Jump, Slide, Wall-Jump & Swim"
  },
  {
    "name": "Vex 6 Parkour",
    "tags": [
      "Platformer",
      "Parkour",
      "Stickman",
      "Action"
    ],
    "path": "./games/singlefiles/Vex-6.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, Jump, Slide, Wall-Jump & Swim"
  },
  {
    "name": "Vex 7 Parkour",
    "tags": [
      "Platformer",
      "Parkour",
      "Stickman",
      "Action"
    ],
    "path": "./games/singlefiles/Vex-7.html",
    "shelf": "action-survival",
    "badge": "Popular",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, Jump, Slide, Wall-Jump & Grapple"
  },
  {
    "name": "Vex 8",
    "tags": [
      "Action",
      "Platformer",
      "Parkour"
    ],
    "path": "./games/singlefiles/Vex-8.html",
    "shelf": "platformer-adventure",
    "badge": "Action",
    "description": "",
    "controls": "WASD / Arrow Keys: Run, jump, slide, wall-climb"
  },
  {
    "name": "Volley Random",
    "tags": [
      "Sports",
      "Physics",
      "Ragdoll",
      "2-Player"
    ],
    "path": "./games/singlefiles/Volley-Random.html",
    "shelf": "arcade-retro",
    "badge": "Sports",
    "description": "",
    "controls": "Up Arrow / W / Touch: Jump & Spike | 2-Player Local Dual Mode"
  },
  {
    "name": "We Become What We Behold",
    "tags": [
      "Story",
      "Satire",
      "Point & Click",
      "Masterpiece"
    ],
    "path": "./games/wbwwb/index.html",
    "shelf": "action-survival",
    "badge": "Masterpiece",
    "description": "",
    "controls": "Mouse: Aim Camera Viewfinder & Click to Snap Photo"
  },
  {
    "name": "Wind Tunnel Aero Lab",
    "tags": [
      "Physics",
      "Aerodynamics",
      "Simulation",
      "Engineering"
    ],
    "path": "./games/singlefiles/Wind-Tunnel-Contracts.html",
    "shelf": "sandbox-simulation",
    "badge": "Physics",
    "description": "",
    "controls": "Mouse: Sculpt vehicle contour curves & toggle smoke particle streams"
  },
  {
    "name": "Wonder Park Tycoon",
    "tags": [
      "Simulation",
      "Tycoon",
      "Theme Park",
      "Casual"
    ],
    "path": "./games/singlefiles/Wonder-Park.html",
    "shelf": "sandbox-simulation",
    "badge": "Strategy",
    "description": "",
    "controls": "Mouse / Touch: Build rides, pave pathways, and set ticket pricing"
  },
  {
    "name": "Word Grid Crossword",
    "tags": [
      "Puzzle",
      "Word",
      "Educational",
      "Brain"
    ],
    "path": "./games/singlefiles/Word-Grid.html",
    "shelf": "puzzle-logic",
    "badge": "Word",
    "description": "",
    "controls": "Mouse / Touch Drag: Connect Adjacent Letter Tiles"
  },
  {
    "name": "Wordle Unlimited",
    "tags": [
      "Puzzle",
      "Word",
      "Logic"
    ],
    "path": "./games/wordle/index.html",
    "shelf": "puzzle-strategy",
    "badge": "Word",
    "description": "",
    "controls": "Keyboard: Type letters | Enter: Submit guess | Backspace: Erase letter"
  },
  {
    "name": "xx142-b2.exe",
    "tags": [
      "Adventure",
      "Sci-Fi",
      "Retro"
    ],
    "path": "./games/xx142-b2/index.html",
    "shelf": "platformer-adventure",
    "badge": "Retro",
    "description": "",
    "controls": "Keyboard: Type terminal commands (help, scan, decode, access)"
  },
  {
    "name": "Zed Invaders",
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "path": "./games/zedinvaders/index.html",
    "shelf": "arcade-retro",
    "badge": "Retro",
    "description": "",
    "controls": "Left / Right Arrows: Move | Spacebar: Fire rapid plasma beams"
  }
];

/* ================================================================
   DRAGON GAMING PLATFORMS — CORE DATA & ENGINE
   ================================================================ */

/* ================================================================
   1. GAME DATA CATALOG (60 Games, Emulators & Tools)
   ================================================================ */
const GAMES_DATA = [
  {
    id: "eaglercraft-1-12-2-wasm",
    name: "Eaglercraft 1.12.2 WASM",
    path: "./games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
    category: "games",
    shelf: "undefined",
    tags: ["Sandbox","Survival","3D","WASM"],
    badge: "WASM",
    desc: "Full Minecraft 1.12.2 running offline directly in your browser via WebAssembly.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place / Interact | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-12-2-js",
    name: "Eaglercraft 1.12.2 JS",
    path: "./games/singlefiles/Eaglercraft-JS-1.12.2.html",
    category: "games",
    shelf: "undefined",
    tags: ["Sandbox","Survival","3D"],
    badge: "3D",
    desc: "JavaScript client for Minecraft 1.12.2 with online multiplayer and singleplayer worlds.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-8-8-js",
    name: "Eaglercraft 1.8.8 JS",
    path: "./games/singlefiles/Eaglercraft-JS-1.8.8.html",
    category: "games",
    shelf: "undefined",
    tags: ["Sandbox","Survival","3D","Multiplayer"],
    badge: "Popular",
    desc: "Classic Minecraft 1.8.8 with server browser, custom skins, and fluid combat.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | T: Chat"
  },
  {
    id: "eaglercraft-1-8-8-wasm",
    name: "Eaglercraft 1.8.8 WASM",
    path: "./games/singlefiles/Eaglercraft-1.8.8-offline-WASM.html",
    category: "games",
    shelf: "undefined",
    tags: ["Sandbox","Survival","3D","WASM"],
    badge: "WASM",
    desc: "Ultra-fast WebAssembly offline edition of Minecraft 1.8.8.",
    controls: "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    id: "balatro",
    name: "Balatro",
    path: "./games/singlefiles/Balatro.html",
    category: "games",
    shelf: "undefined",
    tags: ["Roguelike","Cards","Strategy"],
    badge: "Hot",
    desc: "The hit poker roguelike — combine valid poker hands with wild Joker cards for insane synergies.",
    controls: "Mouse / Touch: Select Cards, Play Hand, Buy Jokers & Packs"
  },
  {
    id: "bloons-td4",
    name: "Bloons TD4",
    path: "./games/singlefiles/Bloons-TD4.html",
    category: "games",
    shelf: "undefined",
    tags: ["Strategy","Tower Defense","Classic"],
    badge: "Classic",
    desc: "Pop relentless waves of bloons using dart monkeys, tack shooters, mortars, and super monkeys.",
    controls: "Mouse: Drag & Place Towers, Upgrade, Target Priority"
  },
  {
    id: "drive-mad",
    name: "Drive Mad",
    path: "./games/singlefiles/Drive-Mad.html",
    category: "games",
    shelf: "undefined",
    tags: ["Driving","Physics","3D"],
    badge: "3D",
    desc: "Drive custom 4x4 monster trucks across tricky stunt courses without flipping or smashing.",
    controls: "W / Up / D / Right: Accelerate | S / Down / A / Left: Reverse / Tilt | R: Restart"
  },
  {
    id: "escape-road",
    name: "Escape Road",
    path: "./games/singlefiles/Escape-Road.html",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Driving","3D"],
    badge: "Action",
    desc: "High-octane endless police chase — dodge squad cars, SWAT trucks, and helicopters in city traffic.",
    controls: "A / D or Left / Right Arrows: Steer | Space / Shift: Drift / Boost"
  },
  {
    id: "hole-io",
    name: "Hole.io",
    path: "./games/singlefiles/Hole.io.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Multiplayer","3D"],
    badge: "Popular",
    desc: "Control a growing black hole, swallow pedestrians, cars, and whole skyscrapers to dominate the city.",
    controls: "Mouse / Drag / Arrow Keys: Move Hole"
  },
  {
    id: "moto-x3m-2",
    name: "Moto x3m 2",
    path: "./games/singlefiles/Moto-x3m-2.html",
    category: "games",
    shelf: "undefined",
    tags: ["Racing","Physics","Stunt"],
    badge: "Stunt",
    desc: "Extreme dirt bike trial racing across explosive stunt courses with backflips and speed traps.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Lean / Flip | Space: Respawn"
  },
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    path: "./games/singlefiles/Ragdoll-Archers.html",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Physics","Shooter"],
    badge: "Physics",
    desc: "Precision archery combat with dynamic ragdoll physics, custom arrow types, and armor upgrades.",
    controls: "Mouse Drag & Release: Aim & Shoot Arrow | Space: Jump / Shield"
  },
  {
    id: "recoil",
    name: "Recoil",
    path: "./games/singlefiles/Recoil.html",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Shooter","Physics"],
    badge: "Action",
    desc: "Navigate hazardous arenas and eliminate enemies using only the explosive recoil of your weapons.",
    controls: "Mouse Click: Aim & Fire weapon to propel yourself"
  },
  {
    id: "snowrider-3d",
    name: "Snowrider 3D",
    path: "./games/singlefiles/Snowrider.html",
    category: "games",
    shelf: "undefined",
    tags: ["Sports","3D","Endless"],
    badge: "3D",
    desc: "Speed down massive snowy mountains, dodging pine trees, rolling snowballs, and giant cliffs.",
    controls: "Left / Right Arrows or A / D: Steer | Up Arrow or W: Jump Sled"
  },
  {
    id: "vex-8",
    name: "Vex 8",
    path: "./games/singlefiles/Vex-8.html",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Platformer","Parkour"],
    badge: "Platformer",
    desc: "Precision stickman platformer packed with razor-sharp saws, moving lasers, and endless parkour.",
    controls: "WASD / Arrow Keys: Run, Jump, Slide, Wall-jump | Down Arrow: Crouch / Enter Portal"
  },
  {
    id: "awesome-tanks-2",
    name: "Awesome Tanks 2",
    path: "./games/singlefiles/awesometanks2.html",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Shooter","Tanks"],
    badge: "Action",
    desc: "Top-down tank combat — blast enemy bunkers, collect cash, and upgrade armor, lasers, and cannons.",
    controls: "WASD / Arrows: Drive Tank | Mouse: Aim & Fire Main Turret | 1-9: Switch Weapon"
  },
  {
    id: "dreadhead-parkour",
    name: "Dreadhead Parkour",
    path: "./games/singlefiles/dreadheadparkour.htm",
    category: "games",
    shelf: "undefined",
    tags: ["Action","Runner","Parkour"],
    badge: "Runner",
    desc: "Vault over spikes, slide under bomb traps, and perform stunts in this high-energy parkour runner.",
    controls: "D / Right Arrow: Run | W / Up Arrow: Jump & Vault | S / Down Arrow: Slide"
  },
  {
    id: "borg-games",
    name: "Borg Games",
    path: "./games/singlefiles/Borg-Games.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Collection"],
    badge: "Retro",
    desc: "Classic browser arcade portal featuring a curated collection of lightweight mini-games.",
    controls: "Mouse / Keyboard depending on selected mini-game"
  },
  {
    id: "space-cadet-pinball",
    name: "Space Cadet Pinball",
    path: "./games/space-cadet-pinball/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","WASM","3D"],
    badge: "WASM 3D",
    desc: "The legendary 3D Pinball for Windows - Space Cadet running natively in WebAssembly.",
    controls: "Space: Launch Ball / Plunger | Z: Left Flipper | /: Right Flipper | Space / X / . : Nudge Table"
  },
  {
    id: "heroine-dusk",
    name: "Heroine Dusk",
    path: "./games/heroine-dusk/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["RPG","Retro","Turn-Based","Adventure"],
    badge: "RPG",
    desc: "8-bit turn-based first-person dungeon crawler RPG — explore eerie maps and defeat fantasy monsters.",
    controls: "Arrow Keys / WASD: Move & Turn | Mouse: Click Menu Actions & Spells"
  },
  {
    id: "clumsy-bird",
    name: "Clumsy Bird",
    path: "./games/clumsy-bird/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Casual","One-Button"],
    badge: "Casual",
    desc: "Smooth, responsive MelonJS obstacle navigation arcade classic.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    path: "./games/minesweeper/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Retro","Classic"],
    badge: "Classic",
    desc: "Classic Minesweeper with difficulty presets, custom boards, timer, and flag markers.",
    controls: "Left Click: Reveal Tile | Right Click: Place / Remove Flag | Smiley Face: Restart"
  },
  {
    id: "duck-hunt",
    name: "Duck Hunt JS",
    path: "./games/duck-hunt/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Shooter"],
    badge: "Retro",
    desc: "Authentic NES Duck Hunt recreation with retro dog animations, clay shooting, and arcade scoring.",
    controls: "Mouse: Aim Crosshair | Left Click: Fire Shotgun"
  },
  {
    id: "sokoban",
    name: "Sokoban",
    path: "./games/sokoban/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Retro","Classic"],
    badge: "Puzzle",
    desc: "Classic box-pushing puzzle game with multi-level challenges, step counter, and undo support.",
    controls: "Arrow Keys / WASD: Push Boxes to Target Locations | U: Undo Step | R: Reset Level"
  },
  {
    id: "snake",
    name: "Snake",
    path: "./games/snake/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Classic"],
    badge: "Classic",
    desc: "Smooth HTML5 canvas snake game — collect apples, grow your tail, and beat your high score.",
    controls: "Arrow Keys / WASD: Change Snake Direction"
  },
  {
    id: "sudoku",
    name: "Sudoku",
    path: "./games/sudoku/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Casual","Math"],
    badge: "Brain",
    desc: "Clean interactive Sudoku generator & player with difficulty levels from Very Easy to Very Hard.",
    controls: "Click Cell + Type Number 1-9 | Use Hint and Solve buttons for guidance"
  },
  {
    id: "chess",
    name: "Chess vs AI",
    path: "./games/chess/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Strategy","Turn-Based","Classic"],
    badge: "AI Strategy",
    desc: "Play chess against an intelligent minimax AI engine with alpha-beta pruning and board evaluation.",
    controls: "Mouse: Drag & Drop Pieces to make moves"
  },
  {
    id: "micropolisjs",
    name: "MicropolisJS (SimCity)",
    path: "./games/micropolisjs/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Simulation","Strategy","Classic"],
    badge: "Retro Sim",
    desc: "The open-source HTML5/JS port of the original SimCity city-building and zoning simulation.",
    controls: "Mouse: Select Construction Tools, Zone Land, Build Infrastructure, Manage Budgets"
  },
  {
    id: "solitaire",
    name: "Solitaire",
    path: "./games/solitaire/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Cards","Casual","Classic"],
    badge: "Classic",
    desc: "Classic Klondike Solitaire with smooth card dragging, auto-complete, timer, and win animations.",
    controls: "Mouse: Drag & Drop Cards | Double Click: Auto-move to Foundation"
  },
  {
    id: "asteroids",
    name: "Asteroids",
    path: "./games/asteroids/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Shooter"],
    badge: "Vector",
    desc: "Authentic vector-line space shooter — blast drifting space rocks and alien UFOs.",
    controls: "Left / Right Arrows: Rotate Ship | Up Arrow: Thrust | Spacebar: Fire Blaster | Down Arrow: Hyperspace"
  },
  {
    id: "skifree",
    name: "SkiFree.js",
    path: "./games/skifree/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Classic"],
    badge: "DOS Retro",
    desc: "The iconic Windows skiing classic — weave around slalom flags, jump ramps, and outrun the Abominable Snow Monster.",
    controls: "Left / Right Arrows: Steer Skiier | Down Arrow: Accelerate | Up Arrow: Slow Down | F: Fast Mode"
  },
  {
    id: "tower-defense",
    name: "Canvas Tower Defense",
    path: "./games/tower-defense/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Strategy","Tower Defense"],
    badge: "Strategy",
    desc: "Tactical desktop maze-building tower defense with cannon, laser, and missile turrets against waves of enemies.",
    controls: "Mouse: Place Turrets, Build Mazes, Upgrade Firepower, Start Waves"
  },
  {
    id: "2048",
    name: "2048",
    path: "./games/2048/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Casual","Math"],
    badge: "Classic",
    desc: "The addictive tile-sliding number puzzle — merge identical numbers to build the legendary 2048 tile.",
    controls: "Arrow Keys / Swipe: Slide all tiles on the grid"
  },
  {
    id: "1255-burgomaster",
    name: "1255 Burgomaster",
    path: "./games/1255-burgomaster/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Strategy","RPG","Medieval"],
    badge: "Strategy",
    desc: "Historical medieval city management, diplomacy, garrison defense, and economic tactical simulation.",
    controls: "Mouse: Navigate UI, Manage Resources, Issue Decrees"
  },
  {
    id: "3d-city",
    name: "3D.City",
    path: "./games/3d.city/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Simulation","3D","City Builder"],
    badge: "3D",
    desc: "Full 3D WebGL isometric city planning and zoning simulator running smoothly in the browser.",
    controls: "Mouse: Place Roads & Zones | Middle Mouse / Right Click: Rotate & Zoom Camera"
  },
  {
    id: "ancient-beast",
    name: "Ancient Beast",
    path: "./games/AncientBeast/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Strategy","Turn-Based","RPG"],
    badge: "Turn-Based",
    desc: "Turn-based tactical creature battling played on a hex grid with unique elemental beasts.",
    controls: "Mouse: Select Units, Move, Cast Special Abilities"
  },
  {
    id: "a-dark-room",
    name: "A Dark Room",
    path: "./games/adarkroom/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["RPG","Text","Incremental"],
    badge: "Atmospheric",
    desc: "Minimalist, mysterious text adventure that grows from a silent fire into a sprawling world.",
    controls: "Mouse: Click choices and buttons to stoke fire and explore"
  },
  {
    id: "aquastax",
    name: "Aquastax",
    path: "./games/aquastax/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Physics"],
    badge: "Puzzle",
    desc: "Satisfying physics puzzle where you balance and strategically place buoyant aquatic shapes.",
    controls: "Mouse: Drop and arrange puzzle pieces"
  },
  {
    id: "arashi-js",
    name: "Arashi JS",
    path: "./games/arashi-js/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Action","Retro"],
    badge: "Retro",
    desc: "Vector-style arcade space shooter tribute to the arcade legend Tempest.",
    controls: "Left / Right Arrows: Rotate along web rim | Space: Fire blasters | Z: Superzapper"
  },
  {
    id: "asdf",
    name: "ASDF",
    path: "./games/asdf/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Reflex","Typing"],
    badge: "Reflex",
    desc: "Test your lightning-quick reflexes in this rhythmic high-speed keyboard challenge.",
    controls: "A, S, D, F Keys: Tap corresponding keys to match descending patterns"
  },
  {
    id: "ball-and-wall",
    name: "Ball and Wall",
    path: "./games/ball-and-wall/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Classic","Breakout"],
    badge: "Classic",
    desc: "Enhanced brick-breaker arcade game with multi-balls, powerups, lasers, and custom level editor.",
    controls: "Mouse / Left & Right Arrows: Move Paddle | Space / Click: Launch Ball"
  },
  {
    id: "banania",
    name: "Banania",
    path: "./games/Banania/banania.html",
    category: "games",
    shelf: "undefined",
    tags: ["Retro","Puzzle","Classic"],
    badge: "DOS Retro",
    desc: "Authentic remake of the classic DOS game — collect every banana in the maze and dodge monsters.",
    controls: "Arrow Keys: Move character through maze"
  },
  {
    id: "blockrain",
    name: "Blockrain",
    path: "./games/blockrain/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Retro","Puzzle"],
    badge: "Arcade",
    desc: "Sleek retro-futuristic block falling puzzle with neon visual effects and smooth responsive controls.",
    controls: "Left / Right: Move | Up Arrow: Rotate | Down Arrow: Soft Drop | Space: Hard Drop"
  },
  {
    id: "canvas-tetris",
    name: "Canvas Tetris",
    path: "./games/canvas-tetris/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Classic","Puzzle"],
    badge: "Classic",
    desc: "Clean HTML5 canvas implementation of standard Tetris with scoring and line clears.",
    controls: "Left / Right: Move | Up: Rotate | Down: Soft Drop | Space: Drop"
  },
  {
    id: "crappybird",
    name: "CrappyBird",
    path: "./games/CrappyBird/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Casual","One-Button"],
    badge: "Casual",
    desc: "Humorous Flappy Bird parody — tap to flap your wings and weave through tricky pipe obstacles.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "crystalquest",
    name: "CrystalQuest",
    path: "./games/CrystalQuest/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Shooter","Retro"],
    badge: "Retro",
    desc: "Classic arcade arena shooter — vacuum up all crystals while blasting invading alien swarms.",
    controls: "Mouse: Move ship | Mouse Click: Fire blaster | Space: Smart Bomb"
  },
  {
    id: "enduro",
    name: "Enduro",
    path: "./games/enduro/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Racing","Retro","Classic"],
    badge: "Atari Retro",
    desc: "Tribute to the classic Atari 2600 endurance racer with dynamic weather, fog, and day/night cycles.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Steer"
  },
  {
    id: "hexgl",
    name: "HexGL",
    path: "./games/HexGL/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Racing","3D","Sci-Fi"],
    badge: "3D",
    desc: "Futuristic high-speed anti-gravity 3D racer built in WebGL with stunning Three.js graphics.",
    controls: "Up / W: Accelerate | A / D or Left / Right: Steer | Q / E: Air brakes | Space: Boost"
  },
  {
    id: "hextris",
    name: "Hextris",
    path: "./games/Hextris/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Puzzle","Arcade","Hexagonal"],
    badge: "Popular",
    desc: "Fast-paced hexagonal puzzle — rotate the center hexagon to match 3 or more blocks of the same color.",
    controls: "Left / Right Arrows or A / D: Rotate hexagon | Down Arrow: Speed up block fall"
  },
  {
    id: "opensc2k",
    name: "OpenSC2K",
    path: "./games/OpenSC2K/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Simulation","Classic","Retro"],
    badge: "Retro Sim",
    desc: "Open-source WebGL recreation of the classic city simulator SimCity 2000.",
    controls: "Mouse: Select zoning tools, lay pipes, construct buildings and power grids"
  },
  {
    id: "pacman-canvas",
    name: "Pacman Canvas",
    path: "./games/pacman-canvas/index.htm",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Classic","Retro"],
    badge: "Classic",
    desc: "Faithful HTML5 canvas recreation of the legendary arcade Pac-Man with original sounds.",
    controls: "Arrow Keys / WASD: Steer Pac-Man | Space: Pause / Start"
  },
  {
    id: "sandspiel",
    name: "Sandspiel",
    path: "./games/sandspiel/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Simulation","Sandbox","Physics"],
    badge: "Physics",
    desc: "Falling sand cellular automata physics game written in Rust & WebAssembly.",
    controls: "Mouse Left Click: Draw selected element | Right Click: Erase | 1-9: Select element"
  },
  {
    id: "space-company",
    name: "Space Company",
    path: "./games/SpaceCompany/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Incremental","Sci-Fi","Strategy"],
    badge: "Sci-Fi",
    desc: "Deep sci-fi incremental simulation — harvest solar energy, colonize planets, and build Dyson spheres.",
    controls: "Mouse: Manage industry, research technologies, build rockets"
  },
  {
    id: "teterjs",
    name: "Teterjs",
    path: "./games/teterjs/index.html",
    category: "games",
    shelf: "undefined",
    tags: ["Arcade","Puzzle","Classic"],
    badge: "Puzzle",
    desc: "Crisp JavaScript block puzzle with ghost piece preview, hold queue, and level progression.",
    controls: "Left / Right: Move | Up: Rotate CW | Z: Rotate CCW | C: Hold | Space: Hard drop"
  },
  {
    id: "emulatorjs",
    name: "EmulatorJS",
    path: "./emulators/Emulatorjs/index.html",
    category: "emulators",
    shelf: "undefined",
    tags: ["Emulator","Retro","Multi-System"],
    badge: "Emulator",
    desc: "Multi-console retro emulator supporting NES, SNES, GBA, GBC, N64, Genesis, PS1 with ROM drag-and-drop.",
    controls: "Drag & drop any ROM file or browse local files. Supports gamepad & custom keyboard mapping."
  },
  {
    id: "anura-os",
    name: "Anura OS",
    path: "./emulators/anuraOS.html",
    category: "emulators",
    shelf: "undefined",
    tags: ["Emulator","OS","Sandbox"],
    badge: "Virtual OS",
    desc: "Complete desktop operating system running directly in your browser with Linux/x86 app emulation.",
    controls: "Mouse & Keyboard: Full desktop window manager, terminal, file system, and browser apps"
  },
  {
    id: "cyberchef",
    name: "CyberChef",
    path: "./other/CyberChef/index.html",
    category: "other",
    shelf: "undefined",
    tags: ["Tools","Utility","Cryptography"],
    badge: "Utility",
    desc: "The cyber Swiss Army knife by GCHQ for encoding, decoding, hashing, encryption, regex, and hex editing.",
    controls: "Mouse: Drag operations into recipe pipeline, paste input, inspect output"
  },
  {
    id: "gust-browser",
    name: "GUST",
    path: "./browsers/GUST.html",
    category: "other",
    shelf: "undefined",
    tags: ["Browser","Proxy","Utility"],
    badge: "Browser",
    desc: "Full-featured web proxy browser client with tab management and stealth browsing.",
    controls: "Type any web address or search query in the address bar"
  },
  {
    id: "incognito-browser",
    name: "Incognito",
    path: "./browsers/Incognito.html",
    category: "other",
    shelf: "undefined",
    tags: ["Browser","Proxy","Utility"],
    badge: "Browser",
    desc: "Fast, privacy-focused proxy gateway designed for unblocked web exploration.",
    controls: "Enter search terms or URL in the navigation bar"
  },
  {
    id: "interstellar-browser",
    name: "Interstellar",
    path: "./browsers/Interstellar.html",
    category: "other",
    shelf: "undefined",
    tags: ["Browser","Proxy","Utility"],
    badge: "Browser",
    desc: "Modern, streamlined web proxy interface with fast loading and responsive controls.",
    controls: "Type search query or website destination into the bar"
  },
  {
    id: "scramjet-browser",
    name: "Scramjet",
    path: "./browsers/Scramjet.html",
    category: "other",
    shelf: "undefined",
    tags: ["Browser","Proxy","Utility"],
    badge: "Browser",
    desc: "High-performance web proxy client built on modern service worker proxy technologies.",
    controls: "Enter URL or search keyword into the navigation search bar"
  },
  {
    id: "ascii-video-canvas",
    name: "ASCII Video Canvas",
    path: "./games/singlefiles/ASCII-Camera.html",
    category: "games",
    shelf: "other",
    tags: ["Tool","Creative","ASCII","Camera"],
    badge: "Creative",
    desc: "Real-time webcam video stream converter rendering high-framerate dynamic ASCII character typography art.",
    controls: "Camera Permission: Grant access to see live ASCII render"
  },
  {
    id: "abyss-sonar-submarine",
    name: "Abyss Sonar Submarine",
    path: "./games/singlefiles/Abyss-Sonar.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulator","Submarine","Sci-Fi","Audio"],
    badge: "Simulator",
    desc: "Silent submarine navigation through deep oceanic trenches. Ping sonar frequencies, detect seabed anomalies, and navigate underwater volcanoes.",
    controls: "WASD / Mouse: Steer Submarine Depth & Heading | Space: Pulse Active Sonar"
  },
  {
    id: "adjustable-fireworks-lab",
    name: "Adjustable Fireworks Lab",
    path: "./games/singlefiles/Adjustable-Fireworks.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Physics","Particles","Sandbox","Creative"],
    badge: "Physics",
    desc: "Interactive particle pyrotechnics simulation. Customize burst radii, chemical luminescence color chemistry, and launch midnight fireworks shows.",
    controls: "Mouse Click: Launch Firework | Sliders: Adjust Velocity, Color & Gravity"
  },
  {
    id: "aim-click-reflex-trainer",
    name: "Aim Click Reflex Trainer",
    path: "./games/singlefiles/Aim-Click-Challenge.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Reflex","FPS","Arcade","Aim"],
    badge: "Reflex",
    desc: "High-precision FPS aim and target reaction trainer. Click emerging bullseye targets rapidly to benchmark mouse accuracy and response times.",
    controls: "Mouse: Click emerging targets before they shrink away"
  },
  {
    id: "air-hockey",
    name: "Air Hockey",
    path: "./games/singlefiles/Air-Hockey.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Air Hockey — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "air-traffic-control",
    name: "Air Traffic Control",
    path: "./games/singlefiles/Air-Traffic-Control.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Air Traffic Control — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "alchemy-workshop",
    name: "Alchemy Workshop",
    path: "./games/singlefiles/Alchemy-Workshop.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Alchemy Workshop — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ant-colony-foraging-sim",
    name: "Ant Colony Foraging Sim",
    path: "./games/singlefiles/Ant-Colony-Sim.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation","Cellular Automaton","Ecology","AI"],
    badge: "Simulation",
    desc: "Emergent pheromone trail foraging simulation. Observe thousands of worker ants optimize food transport pathways and defend the queen nest.",
    controls: "Mouse: Place food sources, draw obstacles, and release pheromone markers"
  },
  {
    id: "auction-fever",
    name: "Auction Fever",
    path: "./games/singlefiles/Auction-Fever.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Auction Fever — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "auto-chess-forge",
    name: "Auto Chess Forge",
    path: "./games/singlefiles/Auto-Chess-Forge.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Auto Chess Forge — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "avoid-the-bikes-highway",
    name: "Avoid the Bikes Highway",
    path: "./games/singlefiles/Avoid-The-Bikes.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Dodging","Reflex","Speed"],
    badge: "Arcade",
    desc: "High-speed highway obstacle evasion. Weave between incoming motorcycles, bicycles, and speed traps on a busy city avenue.",
    controls: "Left/Right Arrow or A/D: Dodge incoming traffic lanes"
  },
  {
    id: "backpack-arena",
    name: "Backpack Arena",
    path: "./games/singlefiles/Backpack-Arena.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Backpack Arena — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ball-arena-bumpers",
    name: "Ball Arena Bumpers",
    path: "./games/singlefiles/Ball-Arena.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Physics","Action","Multiplayer"],
    badge: "Arcade",
    desc: "Kinetic billiard bumper battle arena. Ram opponent spheres off the magnetic ring edge while picking up super-mass powerups.",
    controls: "WASD / Mouse: Steer Sphere Momentum & Boost"
  },
  {
    id: "basin-flood-control-sim",
    name: "Basin Flood Control Sim",
    path: "./games/singlefiles/Basin-Control.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Management","Simulation","Engineering"],
    badge: "Simulator",
    desc: "Hydroelectric river basin management simulation. Regulate dam spillway gates during monsoon flood crests to protect downstream towns.",
    controls: "Mouse / Touch: Adjust dam gate valves & monitor water sensors"
  },
  {
    id: "battery-cycle-lab",
    name: "Battery Cycle Lab",
    path: "./games/singlefiles/Battery-Cycle.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Science","Energy","Logic"],
    badge: "Puzzle",
    desc: "Electrochemical battery cell engineering challenge. Balance cathode and anode ion flows, manage thermal cycles, and prevent degradation.",
    controls: "Mouse / Touch: Configure ion membrane pathways & charge cycles"
  },
  {
    id: "beat-bento-cooking",
    name: "Beat Bento Cooking",
    path: "./games/singlefiles/Beat-Bento.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Rhythm","Cooking","Casual","Cute"],
    badge: "Cozy",
    desc: "Satisfying rhythm bento assembly game. Chop tamagoyaki, roll sushi, and pack exquisite lunchboxes in sync with upbeat lofi melodies.",
    controls: "Space / Arrow Keys: Chop & pack bento ingredients on the beat"
  },
  {
    id: "blackjack-table",
    name: "Blackjack Table",
    path: "./games/singlefiles/Blackjack-Table.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Blackjack Table — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "block-forge-blacksmith",
    name: "Block Forge Blacksmith",
    path: "./games/singlefiles/Block-Forge.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Crafting","Strategy","Fantasy"],
    badge: "Puzzle",
    desc: "Tetromino blueprint blacksmith crafting puzzle. Fit molten metal polyomino blocks into weapon molds to forge legendary broadswords.",
    controls: "Mouse / Touch: Rotate & Place molten metal tiles into weapon outlines"
  },
  {
    id: "bomb-grid",
    name: "Bomb Grid",
    path: "./games/singlefiles/Bomb-Grid.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Bomb Grid — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "branching-tales-odyssey",
    name: "Branching Tales Odyssey",
    path: "./games/singlefiles/Branching-Tales.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Story","Sci-Fi","Narrative","Adventure"],
    badge: "Story",
    desc: "Sci-fi epistolary text narrative journey across deep space. Decode starship survivor logs and make critical survival decisions.",
    controls: "Mouse / Touch: Select narrative choices & decrypt transmission logs"
  },
  {
    id: "bytebot-lab",
    name: "Bytebot Lab",
    path: "./games/singlefiles/Bytebot-Lab.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Bytebot Lab — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "chalk-billiards",
    name: "Chalk Billiards",
    path: "./games/singlefiles/Chalk-Billiards.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Chalk Billiards — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "charm-reels-roguelike",
    name: "Charm Reels Roguelike",
    path: "./games/singlefiles/Charm-Reels.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Roguelike","Cards","Slots","Strategy"],
    badge: "Roguelike",
    desc: "Luck be a Landlord-inspired runic slot builder. Draft synergistic rune symbols, trigger compound multipliers, and pay cosmic rents.",
    controls: "Mouse / Touch: Spin reels, draft rune charms, and manage build synergy"
  },
  {
    id: "checkpoint-border-inspector",
    name: "Checkpoint Border Inspector",
    path: "./games/singlefiles/Checkpoint-Inspector.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Simulation","Mystery","Papers Please","Strategy"],
    badge: "Strategy",
    desc: "Border checkpoint documentation verification simulator. Compare entry permits, verify biometric seals, and catch contraband smugglers.",
    controls: "Mouse / Touch: Inspect passport documents, cross-examine, approve or deny"
  },
  {
    id: "chromatic-print-press",
    name: "Chromatic Print Press",
    path: "./games/singlefiles/Chromatic-Press.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Art","Colors","Creative"],
    badge: "Puzzle",
    desc: "Screen printing and lithography art puzzle. Mix primary pigment layers, align registration marks, and reproduce fine art prints.",
    controls: "Mouse / Touch: Layer color plates & pull squeegee print"
  },
  {
    id: "chromatography-separation",
    name: "Chromatography Separation",
    path: "./games/singlefiles/Chromatography-Lab.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Science","Chemistry","Puzzle","Educational"],
    badge: "Puzzle",
    desc: "Chemical mixture separation lab simulator. Calibrate solvent polarity and paper retention factors to isolate rare dye compounds.",
    controls: "Mouse / Touch: Pipette chemical solutions & observe capillary rise"
  },
  {
    id: "cipher-relay-signal",
    name: "Cipher Relay Signal",
    path: "./games/singlefiles/Cipher-Relay.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Cryptography","Audio","Sci-Fi"],
    badge: "Puzzle",
    desc: "Military radio frequency cryptography puzzle. Filter static noise, tune bandpass filters, and transcribe encoded morse transmissions.",
    controls: "Mouse / Touch: Adjust frequency tuner & decode cipher keys"
  },
  {
    id: "claw-carnival-arcade",
    name: "Claw Carnival Arcade",
    path: "./games/singlefiles/Claw-Carnival.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Physics","Casual","Cute"],
    badge: "Casual",
    desc: "Realistic 3D-feel physics claw crane machine. Position the mechanical claw over plush toys and prize capsules and drop with precision.",
    controls: "Arrow Keys / Mouse: Move crane carriage | Space: Drop Claw"
  },
  {
    id: "clean-slate-powerwash",
    name: "Clean Slate PowerWash",
    path: "./games/singlefiles/Clean-Slate.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Relaxing","Cleaning","Satisfying"],
    badge: "Cozy",
    desc: "Satisfying texture restoration cleaning simulator. Spray pressurized water to peel grime, moss, and rust off ancient stonework.",
    controls: "Mouse / Touch Drag: Direct high-pressure water nozzle across grime"
  },
  {
    id: "climbing-route-bouldering",
    name: "Climbing Route Bouldering",
    path: "./games/singlefiles/Climbing-Route.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Sports","Bouldering","Strategy"],
    badge: "Sports",
    desc: "Rock climbing and bouldering puzzle. Plan limb sequences across climbing wall holds, manage finger grip stamina, and reach the top hold.",
    controls: "Mouse / Touch: Select hand & foot holds to ascend rock face"
  },
  {
    id: "clockwork-escape",
    name: "Clockwork Escape",
    path: "./games/singlefiles/Clockwork-Escape.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Clockwork Escape — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "comet-weaver",
    name: "Comet Weaver",
    path: "./games/singlefiles/Comet-Weaver.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Comet Weaver — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "connect-arena",
    name: "Connect Arena",
    path: "./games/singlefiles/Connect-Arena.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Connect Arena — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "courier-grid-dispatch",
    name: "Courier Grid Dispatch",
    path: "./games/singlefiles/Courier-Grid.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Management","Logistics","Fast"],
    badge: "Strategy",
    desc: "High-speed city parcel dispatch logistics sim. Route delivery vans through rush hour avenues, balance parcel weight, and meet courier deadlines.",
    controls: "Mouse / Touch: Assign delivery routes & optimize transit paths"
  },
  {
    id: "courtroom-clash-defense",
    name: "Courtroom Clash Defense",
    path: "./games/singlefiles/Courtroom-Clash.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Mystery","Story","Ace Attorney","Puzzle"],
    badge: "Story",
    desc: "Ace Attorney-style courtroom defense trial. Cross-examine witness testimony, present conflicting physical evidence, and expose the true culprit.",
    controls: "Mouse / Touch: Review case file, press testimony, and present evidence"
  },
  {
    id: "cozy-room-organizer",
    name: "Cozy Room Organizer",
    path: "./games/singlefiles/Cozy-Organizer.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Relaxing","Unpacking","Cozy"],
    badge: "Cozy",
    desc: "Unpacking-inspired meditative room decoration game. Unbox books, plants, trinkets, and stationeries to organize the coziest aesthetic bedroom.",
    controls: "Mouse / Touch: Drag items out of boxes & arrange neatly on shelves"
  },
  {
    id: "crossword-cafe",
    name: "Crossword Cafe",
    path: "./games/singlefiles/Crossword-Cafe.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Word","Brain","Cozy"],
    badge: "Word",
    desc: "Relaxing cafe crossword puzzle solver with intelligent hint systems, thematic clues, and smooth dictionary letter input.",
    controls: "Keyboard: Type Letters | Mouse / Touch: Select Crossword Clue Cell"
  },
  {
    id: "curling-endgame",
    name: "Curling Endgame",
    path: "./games/singlefiles/Curling-Endgame.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Curling Endgame — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "detective-desk-noir",
    name: "Detective Desk Noir",
    path: "./games/singlefiles/Detective-Desk.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Mystery","Detective","Noir","Story"],
    badge: "Mystery",
    desc: "1940s noir detective desk investigation. Inspect bloodied crime scene photos, decipher suspect alibis, and connect clues with red yarn.",
    controls: "Mouse / Touch: Pin evidence cards to corkboard & link connection strings"
  },
  {
    id: "dice-delver",
    name: "Dice Delver",
    path: "./games/singlefiles/Dice-Delver.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Dice Delver — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "dojo-duel",
    name: "Dojo Duel",
    path: "./games/singlefiles/Dojo-Duel.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Dojo Duel — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "drift-racer",
    name: "Drift Racer",
    path: "./games/singlefiles/Drift-Racer.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Drift Racer — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "drone-survey",
    name: "Drone Survey",
    path: "./games/singlefiles/Drone-Survey.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Drone Survey — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "dungeon-delver",
    name: "Dungeon Delver",
    path: "./games/singlefiles/Dungeon-Delver.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Dungeon Delver — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ecosystem-terrarium-sim",
    name: "Ecosystem Terrarium Sim",
    path: "./games/singlefiles/Ecosystem-Keeper.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation","Nature","Ecology","Relaxing"],
    badge: "Simulation",
    desc: "Living terrarium ecosystem simulator. Balance plant photosynthesis, herbivore populations, and predator food webs in a glass dome.",
    controls: "Mouse / Touch: Introduce species, balance moisture, and adjust sunlight"
  },
  {
    id: "elemental-sandbox",
    name: "Elemental Sandbox",
    path: "./games/singlefiles/Elemental-Sandbox.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Elemental Sandbox — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ember-tactics-skirmish",
    name: "Ember Tactics Skirmish",
    path: "./games/singlefiles/Ember-Tactics.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Turn-Based","Tactics","Fantasy"],
    badge: "Strategy",
    desc: "Turn-based tactical hex grid fantasy skirmish. Position archers on high ground, form shield walls, and cast devastating pyromancy spells.",
    controls: "Mouse / Touch: Select units, movement tiles, and attack targets"
  },
  {
    id: "fishing-harbor-voyage",
    name: "Fishing Harbor Voyage",
    path: "./games/singlefiles/Fishing-Harbor.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Fishing","Cozy","Management"],
    badge: "Cozy",
    desc: "Peaceful ocean trawler fishing voyage. Sail into open bays, cast deep nets for tuna and crab, upgrade your vessel, and sell catch at market.",
    controls: "WASD: Steer Trawler | Mouse / Space: Cast Net & Reel In Catch"
  },
  {
    id: "flappy-glider-flight",
    name: "Flappy Glider Flight",
    path: "./games/singlefiles/Flappy-Glider.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Physics","Flight","Casual"],
    badge: "Casual",
    desc: "Aerodynamics hang glider flight challenge. Catch thermal updrafts, glide over canyon cliffs, and land safely on target runways.",
    controls: "Space / Up Arrow / Touch: Adjust wing pitch & catch updrafts"
  },
  {
    id: "fleet-duel",
    name: "Fleet Duel",
    path: "./games/singlefiles/Fleet-Duel.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Fleet Duel — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "forest-dash",
    name: "Forest Dash",
    path: "./games/singlefiles/Forest-Dash.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Forest Dash — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "frequency-bureau-radio",
    name: "Frequency Bureau Radio",
    path: "./games/singlefiles/Frequency-Bureau.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Sci-Fi","Audio","Mystery"],
    badge: "Puzzle",
    desc: "Paranormal frequency analysis and radio surveillance puzzle. Tune analog oscilloscopes to intercept mysterious shortwave signals.",
    controls: "Mouse: Rotate oscilloscope dials & match wave frequencies"
  },
  {
    id: "frontier-command-outpost",
    name: "Frontier Command Outpost",
    path: "./games/singlefiles/Frontier-Command.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Base Building","Sci-Fi","Survival"],
    badge: "Strategy",
    desc: "Alien frontier colony base building and perimeter defense sim. Extract mineral ore, power oxygen domes, and fortify missile turrets.",
    controls: "Mouse / Touch: Construct buildings, assign workers, and trigger defense"
  },
  {
    id: "fruit-slice",
    name: "Fruit Slice",
    path: "./games/singlefiles/Fruit-Slice.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Fruit Slice — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "garden-front-greenhouse",
    name: "Garden Front Greenhouse",
    path: "./games/singlefiles/Garden-Front.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Gardening","Plants","Cozy"],
    badge: "Cozy",
    desc: "Botanical greenhouse management. Cross-pollinate rare hybrid orchid blossoms, regulate soil pH, and breed prize-winning floral exhibits.",
    controls: "Mouse / Touch: Water, prune, pollinate, and propagate plants"
  },
  {
    id: "gear-train-calibrator",
    name: "Gear Train Calibrator",
    path: "./games/singlefiles/Gear-Calibrator.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Physics","Mechanics","Engineering"],
    badge: "Physics",
    desc: "Mechanical clockwork gear transmission puzzle. Interlock brass spur gears, pinions, and pulleys to achieve target rotation ratios.",
    controls: "Mouse / Touch: Drag gear wheels onto axle pegs to complete transmission"
  },
  {
    id: "gem-garden-match-3",
    name: "Gem Garden Match-3",
    path: "./games/singlefiles/Gem-Garden.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Match-3","Casual","Jewels"],
    badge: "Casual",
    desc: "Gleaming match-3 botanical gem garden. Swap adjacent crystal blossoms to trigger cascading line clears and generate rainbow bloom bombs.",
    controls: "Mouse / Touch Drag: Swap adjacent jewel tiles"
  },
  {
    id: "glyph-warden-magic",
    name: "Glyph Warden Magic",
    path: "./games/singlefiles/Glyph-Warden.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Magic","Drawing","Reflex"],
    badge: "Action",
    desc: "Gesture-drawing spellcasting defense. Draw magical runic symbols on screen with your mouse or finger to cast lightning, frost, and fire wards.",
    controls: "Mouse / Touch Drag: Draw rune shape matching incoming enemy crests"
  },
  {
    id: "hive-sovereign-ant-rts",
    name: "Hive Sovereign Ant RTS",
    path: "./games/singlefiles/Hive-Sovereign.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","RTS","Insects","Management"],
    badge: "Strategy",
    desc: "Real-time ant colony management and subterranean warfare RTS. Dig nursery chambers, hatch soldier broods, and raid rival termitaries.",
    controls: "Mouse / Touch: Direct ant armies, order tunnel digging, and harvest nectar"
  },
  {
    id: "castaway-island-survival",
    name: "Castaway Island Survival",
    path: "./games/singlefiles/Island-Survival.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Survival","Crafting","Island","Adventure"],
    badge: "Survival",
    desc: "Stranded island wilderness crafting survival sim. Forage coconuts, craft flint axes, build shelter campfires, and sail a raft to rescue.",
    controls: "WASD / Arrow Keys: Move | Space / E: Chop Trees, Forage, and Craft"
  },
  {
    id: "lantern-festival-memory",
    name: "Lantern Festival Memory",
    path: "./games/singlefiles/Lantern-Memory.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Casual","Memory","Aesthetic","Relaxing"],
    badge: "Cozy",
    desc: "Atmospheric floating water lantern memory puzzle. Follow the glowing chime sequences illuminating the night river festival.",
    controls: "Mouse / Touch: Click floating lanterns in the demonstrated sequence"
  },
  {
    id: "lockmaster-lockpick-sim",
    name: "Lockmaster Lockpick Sim",
    path: "./games/singlefiles/Lockmaster-Shift.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Simulator","Puzzle","Stealth","Physics"],
    badge: "Simulator",
    desc: "Precision mechanical pin-tumbler lockpicking simulation. Feel pin resistance with the pick, set sheer lines, and rotate the cylinder.",
    controls: "Mouse / Arrow Keys: Adjust Pick Height & Tension Wrench Torque"
  },
  {
    id: "mahjong-link-connect",
    name: "Mahjong Link Connect",
    path: "./games/singlefiles/Mahjong-Link.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Mahjong","Connect","Casual"],
    badge: "Casual",
    desc: "Classic Shisen-Sho 2-turn line-matching mahjong puzzle. Connect pairs of matching tiles with lines that make at most two 90-degree turns.",
    controls: "Mouse / Touch: Click matching perimeter tile pairs to link and clear"
  },
  {
    id: "market-pulse-trading-sim",
    name: "Market Pulse Trading Sim",
    path: "./games/singlefiles/Market-Pulse.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Economy","Trading","Simulation"],
    badge: "Strategy",
    desc: "High-frequency stock and commodity trading simulator. Analyze live candlestick charts, execute long/short orders, and manage portfolio risk.",
    controls: "Mouse / Touch: Buy, Sell, Short, and Set Stop-Loss Orders"
  },
  {
    id: "maze-chase",
    name: "Maze Chase",
    path: "./games/singlefiles/Maze-Chase.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Maze Chase — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "merge-orbit-celestial",
    name: "Merge Orbit Celestial",
    path: "./games/singlefiles/Merge-Orbit.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Physics","Suika","Space"],
    badge: "Popular",
    desc: "Suika-style cosmic drop and merge physics game. Drop celestial bodies from asteroids to moons, planets, and supermassive stars without overflowing.",
    controls: "Mouse / Touch: Aim Drop Position & Release Planet"
  },
  {
    id: "metro-weaver-transit",
    name: "Metro Weaver Transit",
    path: "./games/singlefiles/Metro-Weaver.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Transit","Simulation","Minimal"],
    badge: "Strategy",
    desc: "Minimalist subway transit network planning simulation. Draw rail lines between passenger stations and dispatch subway trains to prevent overcrowding.",
    controls: "Mouse / Touch: Drag color lines between station nodes & deploy trains"
  },
  {
    id: "midnight-tactical-chess",
    name: "Midnight Tactical Chess",
    path: "./games/singlefiles/Midnight-Chess.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Board","Chess","Puzzle","Strategy"],
    badge: "Board",
    desc: "Curated collection of brilliant chess endgame and tactical mate-in-2 / mate-in-3 puzzles in a moody dark-mode aesthetic.",
    controls: "Mouse / Touch: Drag and drop chess pieces to execute tactics"
  },
  {
    id: "midnight-security-monitor",
    name: "Midnight Security Monitor",
    path: "./games/singlefiles/Midnight-Monitor.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Horror","Survival","Cameras","FNAF"],
    badge: "Survival",
    desc: "Five Nights-style security camera surveillance horror. Monitor facility camera feeds, toggle security blast doors, and survive until 6 AM.",
    controls: "Mouse: Switch camera feeds & toggle corridor security doors"
  },
  {
    id: "mine-matrix",
    name: "Mine Matrix",
    path: "./games/singlefiles/Mine-Matrix.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Mine Matrix — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "mist-valley-herbarium",
    name: "Mist Valley Herbarium",
    path: "./games/singlefiles/Mist-Valley-Herbarium.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Foraging","Botanical","Cozy"],
    badge: "Cozy",
    desc: "Wholesome highland botanical foraging adventure. Explore misty alpine glades, press rare wildflowers, and catalogue your herbarium.",
    controls: "WASD / Mouse: Explore Glade & Harvest Wildflower Specimens"
  },
  {
    id: "moba-frontier-3v3",
    name: "MOBA Frontier 3v3",
    path: "./games/singlefiles/Moba-Frontier.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","MOBA","Tactics","Hero"],
    badge: "Action",
    desc: "Fast single-lane 3v3 MOBA battle arena. Last-hit minion waves, destroy defensive turrets, and coordinate hero ultimate combos to smash the nexus.",
    controls: "Mouse / Touch: Move & Attack | Q, W, E, R: Cast Champion Skills"
  },
  {
    id: "mole-market-burrow",
    name: "Mole Market Burrow",
    path: "./games/singlefiles/Mole-Market.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Casual","Commerce","Mining","Cute"],
    badge: "Cozy",
    desc: "Charming underground burrow market management. Mine sparkling gemstones, barter with badger traders, and expand your subterranean shop.",
    controls: "Mouse / Touch: Dig tunnels, stock merchant shelves, and trade goods"
  },
  {
    id: "monster-horde",
    name: "Monster Horde",
    path: "./games/singlefiles/Monster-Horde.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Monster Horde — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "monster-tamer-rpg",
    name: "Monster Tamer RPG",
    path: "./games/singlefiles/Monster-Tamer.html",
    category: "games",
    shelf: "action-survival",
    tags: ["RPG","Pokemon","Turn-Based","Retro"],
    badge: "RPG",
    desc: "Retro creature-collecting turn-based RPG. Explore tall grass, battle wild elemental beasts, tame them with capture spheres, and challenge arena masters.",
    controls: "WASD / Arrows: Move Trainer | Space / Enter: Interact & Choose Moves"
  },
  {
    id: "moon-lander",
    name: "Moon Lander",
    path: "./games/singlefiles/Moon-Lander.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Moon Lander — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "stained-glass-mosaic",
    name: "Stained Glass Mosaic",
    path: "./games/singlefiles/Mosaic-Jigsaw.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Art","Jigsaw","Relaxing"],
    badge: "Cozy",
    desc: "Luminous stained glass mosaic jigsaw puzzle. Piece together colorful glass shards to illuminate cathedral window masterpieces.",
    controls: "Mouse / Touch: Drag and snap glass fragments into place"
  },
  {
    id: "museum-climate-curator",
    name: "Museum Climate Curator",
    path: "./games/singlefiles/Museum-Climate.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Simulation","Management","Art","Strategy"],
    badge: "Simulator",
    desc: "Museum HVAC environmental curator simulation. Regulate temperature and humidity across gallery wings to protect Renaissance oil paintings.",
    controls: "Mouse / Touch: Adjust thermostat, dehumidifier, and ventilation airflow"
  },
  {
    id: "neon-2048",
    name: "Neon 2048",
    path: "./games/singlefiles/Neon-2048.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Neon 2048 — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ramen-noodle-shift",
    name: "Ramen Noodle Shift",
    path: "./games/singlefiles/Noodle-Shift.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Cooking","Fast","Casual"],
    badge: "Cozy",
    desc: "Fast-paced ramen bar cooking frenzy. Boil handmade ramen noodles, ladle savory tonkotsu broth, arrange chashu pork, and serve hungry patrons.",
    controls: "Mouse / Touch: Assemble custom ramen bowls to match order tickets"
  },
  {
    id: "deep-space-observatory",
    name: "Deep Space Observatory",
    path: "./games/singlefiles/Observatory-Watch.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sci-Fi","Space","Astronomy","Puzzle"],
    badge: "Simulator",
    desc: "Deep space radio telescope observatory simulation. Point telescope azimuths, focus optical arrays, and catalogue newly discovered exoplanets.",
    controls: "Mouse / Touch: Pan telescope coordinates & focus spectroscopic filters"
  },
  {
    id: "orbital-pinball",
    name: "Orbital Pinball",
    path: "./games/singlefiles/Orbital-Pinball.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Orbital Pinball — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "orbital-cargo-stowage",
    name: "Orbital Cargo Stowage",
    path: "./games/singlefiles/Orbital-Stowage.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Space","Tetris","Physics"],
    badge: "Puzzle",
    desc: "Zero-G space station supply module packing puzzle. Fit irregularly shaped oxygen tanks, solar cells, and rations into pressurized cargo holds.",
    controls: "Mouse / Touch: Rotate & Slot 3D cargo crates into airlock hold"
  },
  {
    id: "pathogen-defense-protocol",
    name: "Pathogen Defense Protocol",
    path: "./games/singlefiles/Pathogen-Protocol.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Biology","Tower Defense","Science"],
    badge: "Strategy",
    desc: "Microscopic immunology tower defense. Deploy macrophage sentries, B-cell antibody launchers, and T-cell killers to eradicate viral invasions.",
    controls: "Mouse / Touch: Deploy immune cells along capillary bloodstream tracks"
  },
  {
    id: "penalty-rush",
    name: "Penalty Rush",
    path: "./games/singlefiles/Penalty-Rush.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Penalty Rush — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "photo-safari",
    name: "Photo Safari",
    path: "./games/singlefiles/Photo-Safari.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Photo Safari — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "pixel-clues-nonogram",
    name: "Pixel Clues Nonogram",
    path: "./games/singlefiles/Pixel-Clues.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Picross","Nonogram","Logic"],
    badge: "Puzzle",
    desc: "Picross / Nonogram Japanese logic puzzle. Use numeric column and row clues to deduce pixel positions and reveal hidden retro pixel art illustrations.",
    controls: "Left Click: Fill Pixel | Right Click: Mark Empty X"
  },
  {
    id: "pocket-virtual-pet",
    name: "Pocket Virtual Pet",
    path: "./games/singlefiles/Pocket-Companion.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Pet","Tamagotchi","Cute"],
    badge: "Cozy",
    desc: "Virtual Tamagotchi pocket companion. Feed, pet, play mini-games, and watch your cute digital pet monster evolve through life stages.",
    controls: "Mouse / Touch: Feed, Play, Clean, and Pet your companion"
  },
  {
    id: "pocket-empire",
    name: "Pocket Empire",
    path: "./games/singlefiles/Pocket-Empire.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Pocket Empire — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "pocket-farm",
    name: "Pocket Farm",
    path: "./games/singlefiles/Pocket-Farm.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Pocket Farm — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "pocket-golf",
    name: "Pocket Golf",
    path: "./games/singlefiles/Pocket-Golf.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Pocket Golf — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "prim-s-algorithmic-maze",
    name: "Prim's Algorithmic Maze",
    path: "./games/singlefiles/Prims-Maze-Generator.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Algorithms","Maze","Educational"],
    badge: "Puzzle",
    desc: "Procedural maze generation and pathfinding visualizer powered by Prim's minimum spanning tree algorithm. Navigate to the exit portal.",
    controls: "WASD / Arrow Keys: Navigate Maze | Button: Generate New Maze"
  },
  {
    id: "prism-breaker",
    name: "Prism Breaker",
    path: "./games/singlefiles/Prism-Breaker.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Prism Breaker — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "prism-orchard-light",
    name: "Prism Orchard Light",
    path: "./games/singlefiles/Prism-Orchard.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Optics","Lasers","Light"],
    badge: "Puzzle",
    desc: "Optical laser beam redirection puzzle. Place and rotate angled glass mirrors and color splitters to illuminate crystal fruit trees.",
    controls: "Mouse / Touch: Drag and rotate mirrors to redirect laser paths"
  },
  {
    id: "pulse-modular-synth",
    name: "Pulse Modular Synth",
    path: "./games/singlefiles/Pulse-Studio.html",
    category: "games",
    shelf: "other",
    tags: ["Tool","Music","Audio","Creative"],
    badge: "Creative",
    desc: "Modular synthesizer and step sequencer audio workstation. Patch virtual patch cords between VCO, VCF, LFO, and drum sequencers.",
    controls: "Mouse / Touch: Connect patch cords & turn knob parameters"
  },
  {
    id: "radish-guard",
    name: "Radish Guard",
    path: "./games/singlefiles/Radish-Guard.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Radish Guard — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "satellite-relay-network",
    name: "Satellite Relay Network",
    path: "./games/singlefiles/Relay-Coordination.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Sci-Fi","Space","Puzzle"],
    badge: "Strategy",
    desc: "Orbital satellite constellation communication network. Align laser line-of-sight relays across Earth orbit to route global internet data packets.",
    controls: "Mouse / Touch: Align satellite dish headings & route data packets"
  },
  {
    id: "risky-stakes-high-roller",
    name: "Risky Stakes High Roller",
    path: "./games/singlefiles/Risky-Stakes.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Casino","Cards","Strategy","Arcade"],
    badge: "Cards",
    desc: "High-stakes push-your-luck wagering game. Balance bankroll risk against escalating multiplier odds before the house busts.",
    controls: "Mouse / Touch: Place bets, Double Down, or Cash Out"
  },
  {
    id: "river-poker-texas-hold-em",
    name: "River Poker Texas Hold'em",
    path: "./games/singlefiles/River-Holdem.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Cards","Poker","Strategy","Table"],
    badge: "Cards",
    desc: "Authentic Texas Hold'em poker tournament simulation with intelligent AI bluffing profiles, chip pot calculations, and all-in side pots.",
    controls: "Mouse / Touch: Check, Bet, Raise, Fold, or Go All-In"
  },
  {
    id: "runway-fashion-stylist",
    name: "Runway Fashion Stylist",
    path: "./games/singlefiles/Runway-Stylist.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Casual","Fashion","Dress Up","Creative"],
    badge: "Cozy",
    desc: "High-fashion couture stylist studio. Mix and match avant-garde wardrobe outfits, color palettes, and accessories for the Paris runway showcase.",
    controls: "Mouse / Touch: Drag garments & accessories onto model mannequin"
  },
  {
    id: "shadow-post",
    name: "Shadow Post",
    path: "./games/singlefiles/Shadow-Post.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Shadow Post — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "shan-hai-mythic-duel",
    name: "Shan Hai Mythic Duel",
    path: "./games/singlefiles/Shan-Hai.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Cards","Strategy","Mythology","Fantasy"],
    badge: "Strategy",
    desc: "Card battler inspired by the Classic of Mountains and Seas. Summon ancient mythological dragons, phoenixes, and beasts in tactical duels.",
    controls: "Mouse / Touch: Play creature cards & direct elemental attacks"
  },
  {
    id: "signal-caravan-radio",
    name: "Signal Caravan Radio",
    path: "./games/singlefiles/Signal-Caravan.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Story","Adventure","Sci-Fi","Radio"],
    badge: "Story",
    desc: "Post-apocalyptic desert radio convoy journey. Tune shortwave frequencies, decode distress beacons, and guide traveler convoys safely.",
    controls: "Mouse / Touch: Tune radio dial & choose caravan destination routes"
  },
  {
    id: "silent-rescue-deep-sea",
    name: "Silent Rescue Deep Sea",
    path: "./games/singlefiles/Silent-Rescue.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Submarine","Rescue","Physics"],
    badge: "Action",
    desc: "Deep sea bathyscaphe rescue mission. Pilot through pitch-black hydrothermal vent caverns to dock with disabled exploratory pods.",
    controls: "WASD / Arrows: Thruster Propulsion | Space: Magnetic Docking Clamp"
  },
  {
    id: "sky-hop",
    name: "Sky Hop",
    path: "./games/singlefiles/Sky-Hop.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Sky Hop — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "skyline-city-planner",
    name: "Skyline City Planner",
    path: "./games/singlefiles/Skyline-Planner.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation","City Builder","Grid","Strategy"],
    badge: "Strategy",
    desc: "Minimalist city grid planner. Zone commercial skyscrapers, green parks, and high-speed rail to create the ultimate aesthetic metropolis.",
    controls: "Mouse / Touch: Select building type & place onto grid blueprint"
  },
  {
    id: "slingstorm",
    name: "Slingstorm",
    path: "./games/singlefiles/Slingstorm.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Slingstorm — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "neon-glow-snake",
    name: "Neon Glow Snake",
    path: "./games/singlefiles/Snake-Game.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Retro","Snake","Neon"],
    badge: "Retro",
    desc: "Sleek glowing canvas Snake arcade with responsive controls, apple combos, and speed tier escalation.",
    controls: "WASD / Arrow Keys: Steer Snake"
  },
  {
    id: "snow-ridge",
    name: "Snow Ridge",
    path: "./games/singlefiles/Snow-Ridge.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Snow Ridge — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "sokoban-quest",
    name: "Sokoban Quest",
    path: "./games/singlefiles/Sokoban-Quest.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Sokoban Quest — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "classic-klondike-solitaire",
    name: "Classic Klondike Solitaire",
    path: "./games/singlefiles/Solitaire-Classic.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Cards","Solitaire","Classic","Casual"],
    badge: "Cards",
    desc: "The timeless Klondike Solitaire card patience game. Build four foundation suits from Ace to King with draw-1 and draw-3 modes.",
    controls: "Mouse / Touch: Drag cards or double-click to auto-move to foundations"
  },
  {
    id: "spectrum-8-bit-chiptune",
    name: "Spectrum 8-Bit Chiptune",
    path: "./games/singlefiles/Spectrum-Console.html",
    category: "games",
    shelf: "other",
    tags: ["Tool","Audio","Chiptune","Retro"],
    badge: "Creative",
    desc: "Authentic 8-bit ZX Spectrum audio sound chip synthesizer with square wave oscillators, noise channels, and piano roll editor.",
    controls: "Keyboard / Touch: Play piano keys & tweak waveform parameters"
  },
  {
    id: "spud-arena",
    name: "Spud Arena",
    path: "./games/singlefiles/Spud-Arena.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Spud Arena — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "stack-tower",
    name: "Stack Tower",
    path: "./games/singlefiles/Stack-Tower.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Stack Tower — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "starforge-idle",
    name: "Starforge Idle",
    path: "./games/singlefiles/Starforge-Idle.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Starforge Idle — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "starline-freight-hyperlanes",
    name: "Starline Freight Hyperlanes",
    path: "./games/singlefiles/Starline-Route.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Sci-Fi","Space","Logistics"],
    badge: "Strategy",
    desc: "Interstellar cargo trade empire simulation. Establish hyperlane warp gates between star systems and corner commodity markets.",
    controls: "Mouse / Touch: Construct jump gates & dispatch cargo freighters"
  },
  {
    id: "starship-suspects",
    name: "Starship Suspects",
    path: "./games/singlefiles/Starship-Suspects.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Starship Suspects — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "stratigraphy-fossil-dig",
    name: "Stratigraphy Fossil Dig",
    path: "./games/singlefiles/Stratigraphy-Lab.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Science","Geology","Fossils","Puzzle"],
    badge: "Puzzle",
    desc: "Geological stratum excavation and fossil reconstruction puzzle. Brush sediment layers to unearth prehistoric dinosaur skeletons.",
    controls: "Mouse / Touch: Carefully chisel rock layers & assemble fossil bones"
  },
  {
    id: "sudoku-studio-pro",
    name: "Sudoku Studio Pro",
    path: "./games/singlefiles/Sudoku-Studio.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Sudoku","Numbers","Brain"],
    badge: "Puzzle",
    desc: "Comprehensive Sudoku master puzzle with easy, medium, hard, and expert boards, pencil candidate notes, and error highlighting.",
    controls: "Mouse / 1-9 Keys: Select Cell & Enter Digit"
  },
  {
    id: "switchyard-rail-dispatch",
    name: "Switchyard Rail Dispatch",
    path: "./games/singlefiles/Switchyard-Rush.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Trains","Railroad","Logistics"],
    badge: "Puzzle",
    desc: "Railroad track switching and freight yard puzzle. Flip junction switches to route steam locomotives and boxcars to correct sidings.",
    controls: "Mouse / Touch: Click track switches to redirect train routing"
  },
  {
    id: "tank-arena",
    name: "Tank Arena",
    path: "./games/singlefiles/Tank-Arena.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Tank Arena — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "thunder-vanguard",
    name: "Thunder Vanguard",
    path: "./games/singlefiles/Thunder-Vanguard.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Thunder Vanguard — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "tidal-grid-ocean-power",
    name: "Tidal Grid Ocean Power",
    path: "./games/singlefiles/Tidal-Grid.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Clean Energy","Engineering","Simulation"],
    badge: "Simulator",
    desc: "Ocean wave and tidal stream energy grid simulator. Anchor subsea turbine arrays to power coastal cities through storm swells.",
    controls: "Mouse / Touch: Deploy subsea turbines & balance electrical grid load"
  },
  {
    id: "tide-salvage-diver",
    name: "Tide Salvage Diver",
    path: "./games/singlefiles/Tide-Salvage.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Underwater","Exploration","Casual"],
    badge: "Action",
    desc: "Shipwreck scuba diver salvage expedition. Dive through sunken galleons, collect antique doubloons, and manage oxygen tanks.",
    controls: "WASD / Mouse: Swim & Dive | Space: Collect Treasure"
  },
  {
    id: "time-post-paradox",
    name: "Time Post Paradox",
    path: "./games/singlefiles/Time-Post.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Time Travel","Story","Brain"],
    badge: "Puzzle",
    desc: "Temporal paradox parcel delivery puzzle. Send mail through past and future timelines without creating destructive grandfather paradoxes.",
    controls: "Mouse / Touch: Schedule mail deliveries across past and future timeline nodes"
  },
  {
    id: "tiny-factory-automation",
    name: "Tiny Factory Automation",
    path: "./games/singlefiles/Tiny-Factory.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Strategy","Automation","Factorio","Puzzle"],
    badge: "Strategy",
    desc: "Factorio-inspired micro automation puzzle. Lay conveyor belts, robotic inserters, and smelters to manufacture circuit boards.",
    controls: "Mouse / Touch: Place conveyor belts, inserters, and assembly machines"
  },
  {
    id: "touchline-manager",
    name: "Touchline Manager",
    path: "./games/singlefiles/Touchline-Manager.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Touchline Manager — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "truss-workshop",
    name: "Truss Workshop",
    path: "./games/singlefiles/Truss-Workshop.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Truss Workshop — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "wind-tunnel-aero-lab",
    name: "Wind Tunnel Aero Lab",
    path: "./games/singlefiles/Wind-Tunnel-Contracts.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Physics","Aerodynamics","Simulation","Engineering"],
    badge: "Physics",
    desc: "Aerodynamics wind tunnel testing laboratory. Sculpt car chassis profiles, analyze laminar streamline smoke, and minimize drag coefficients.",
    controls: "Mouse: Sculpt vehicle contour curves & toggle smoke particle streams"
  },
  {
    id: "wonder-park-tycoon",
    name: "Wonder Park Tycoon",
    path: "./games/singlefiles/Wonder-Park.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation","Tycoon","Theme Park","Casual"],
    badge: "Strategy",
    desc: "Charming theme park tycoon builder. Lay roller coaster tracks, build ferris wheels, open cotton candy stands, and delight park guests.",
    controls: "Mouse / Touch: Build rides, pave pathways, and set ticket pricing"
  },
  {
    id: "word-grid",
    name: "Word Grid",
    path: "./games/singlefiles/Word-Grid.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Word Grid — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "3d-chess",
    name: "3d Chess",
    path: "./games/3d-chess/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "3d Chess — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "alien-invasion",
    name: "Alien Invasion",
    path: "./games/alien-invasion/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Alien Invasion — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "avabranch",
    name: "Avabranch",
    path: "./games/avabranch/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Avabranch — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "behind-asteroids-vector",
    name: "Behind Asteroids Vector",
    path: "./games/behind-asteroids/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Arcade","Vector","JS13k"],
    badge: "Arcade",
    desc: "Electrifying vector glow space arcade dogfighter by Gre. Turn the tables on incoming asteroid clusters with laser blasts and warp drives.",
    controls: "Arrow Keys: Fly & Steer | Space: Fire Lasers"
  },
  {
    id: "black-hole-square",
    name: "Black Hole Square",
    path: "./games/black-hole-square/index.html",
    category: "games",
    shelf: "puzzle-logic",
    tags: ["Puzzle","Physics","Gravity","JS13k"],
    badge: "Physics",
    desc: "Gravitational physics puzzle. Place miniature black holes and gravity wells to deflect orbital light rays toward collector nodes.",
    controls: "Mouse / Touch: Place and move gravity sources"
  },
  {
    id: "bounce-back-boomerang-roguelike",
    name: "Bounce Back (Boomerang Roguelike)",
    path: "./games/bounce-back/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Roguelike","Zelda","Action","JS13k"],
    badge: "Roguelike",
    desc: "Zelda-homage procedural dungeon roguelike by Frank Force. Throw your enchanted boomerang to solve puzzles, deflect projectiles, and defeat bosses.",
    controls: "WASD / Arrows: Move | Mouse: Throw Boomerang | Space: Dash"
  },
  {
    id: "breaklock",
    name: "Breaklock",
    path: "./games/breaklock/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Breaklock — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "captain-rogers",
    name: "Captain Rogers",
    path: "./games/captain-rogers/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Captain Rogers — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "cellmates",
    name: "Cellmates",
    path: "./games/cellmates/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Cellmates — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "ceros-snake",
    name: "Ceros Snake",
    path: "./games/ceros-snake/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Ceros Snake — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "coil",
    name: "Coil",
    path: "./games/coil/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Coil — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "connect-four",
    name: "Connect Four",
    path: "./games/connect-four/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Connect Four — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "custom-tetris",
    name: "Custom Tetris",
    path: "./games/custom-tetris/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Custom Tetris — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "dante-s-inferno-3d",
    name: "Dante's Inferno 3D",
    path: "./games/dante-13k/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["3D","Dungeon","Raymarching","JS13k"],
    badge: "3D",
    desc: "Jaw-dropping 3D raymarched dungeon exploration engine in 13KB. Descend through the circles of Hell, solve puzzles, and slay demons.",
    controls: "WASD: Move | Mouse: Look around | Space: Cast divine spell"
  },
  {
    id: "diablo-js",
    name: "Diablo Js",
    path: "./games/diablo-js/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Diablo Js — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "digger",
    name: "Digger",
    path: "./games/digger/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Digger — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "drakonas",
    name: "Drakonas",
    path: "./games/drakonas/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Drakonas — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "emberwind",
    name: "Emberwind",
    path: "./games/emberwind/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Emberwind — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "flappy-2048",
    name: "Flappy 2048",
    path: "./games/flappy-2048/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Flappy 2048 — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "floppybird",
    name: "Floppybird",
    path: "./games/floppybird/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Floppybird — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "green-mahjong",
    name: "Green Mahjong",
    path: "./games/green-mahjong/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Green Mahjong — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "heal-em-all",
    name: "Heal Em All",
    path: "./games/heal-em-all/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Heal Em All — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "hotfix",
    name: "Hotfix",
    path: "./games/hotfix/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Hotfix — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "hurry",
    name: "Hurry",
    path: "./games/hurry/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Hurry — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "mykonos-island-builder-3d",
    name: "Mykonos Island Builder 3D",
    path: "./games/island-builder/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["3D","Sandbox","Isometric","Creative"],
    badge: "3D",
    desc: "Sun-drenched Mediterranean voxel island builder. Construct whitewashed Greek cliffside villas, plant olive trees, and sculpt beaches.",
    controls: "Mouse: Orbit Camera & Place Voxel Blocks | 1-9: Select Building Materials"
  },
  {
    id: "isocity-builder-sim",
    name: "IsoCity Builder Sim",
    path: "./games/isocity/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation","City Builder","Isometric","Strategy"],
    badge: "Strategy",
    desc: "Isometric city construction simulation by Victor Ribeiro. Zone residential, commercial, and industrial districts, and manage city traffic.",
    controls: "Mouse: Select zone tool & Click grid tiles to construct buildings"
  },
  {
    id: "isocity-tower-defense",
    name: "IsoCity Tower Defense",
    path: "./games/isocity-td/index.html",
    category: "games",
    shelf: "strategy-tactics",
    tags: ["Tower Defense","Isometric","Strategy","Action"],
    badge: "Defense",
    desc: "Isometric defense warfare. Construct heavy artillery, missile batteries, and laser towers to repel invading armor columns along highway grids.",
    controls: "Mouse: Place defender turrets & trigger special air strikes"
  },
  {
    id: "jolly-jumper",
    name: "Jolly Jumper",
    path: "./games/jolly-jumper/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Jolly Jumper — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "marble-soccer",
    name: "Marble Soccer",
    path: "./games/marble-soccer/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Marble Soccer — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "mariohtml5",
    name: "Mariohtml5",
    path: "./games/mariohtml5/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Mariohtml5 — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "monster-candy",
    name: "Monster Candy",
    path: "./games/monster-candy/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Monster Candy — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "mumuy-pacman-deluxe",
    name: "Mumuy Pacman Deluxe",
    path: "./games/mumuy-pacman/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Retro","Classic","Maze"],
    badge: "Classic",
    desc: "Smooth animated HTML5 canvas Pacman with high-precision cornering, original sound chirps, and smart ghost chase routines.",
    controls: "WASD / Arrow Keys / Swipe: Guide Pacman"
  },
  {
    id: "norman-the-necromancer",
    name: "Norman the Necromancer",
    path: "./games/norman-necromancer/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Roguelike","Pixel","JS13k"],
    badge: "Hot",
    desc: "Hit JS13k top-down roguelike by Dan Prince. Raise fallen enemy skeletons to command an unstoppable undead army across monster crypts.",
    controls: "WASD: Move | Mouse: Aim | Left Click: Fire Bone Spell | Space: Raise Undead Minions"
  },
  {
    id: "octocat-jump",
    name: "Octocat Jump",
    path: "./games/octocat-jump/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Octocat Jump — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "onslaught",
    name: "Onslaught",
    path: "./games/onslaught/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Onslaught — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "openpanzer",
    name: "Openpanzer",
    path: "./games/openpanzer/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Openpanzer — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "os13k-virtual-os-games",
    name: "OS13k Virtual OS & Games",
    path: "./games/os13k/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Retro","Operating System","Sandbox","JS13k"],
    badge: "Retro",
    desc: "Virtual retro desktop operating system by Frank Force featuring a code editor, synth music tracker, paint canvas, and multiple playable games.",
    controls: "Mouse: Click icons & windows | Keyboard: Type & interact with mini apps"
  },
  {
    id: "pacman",
    name: "Pacman",
    path: "./games/pacman/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Pacman — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "pong",
    name: "Pong",
    path: "./games/pong/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Pong — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "progress-knight",
    name: "Progress Knight",
    path: "./games/progress-knight/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Progress Knight — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "q1k3-quake-in-13kb-js",
    name: "Q1K3 (Quake in 13KB JS)",
    path: "./games/q1k3/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["3D","FPS","WASM","JS13k","Action"],
    badge: "3D",
    desc: "Dominic Szablewski's legendary 3D Quake engine in pure JavaScript. Features WebGL rendering, monsters, dynamic lighting, weapons, and 2 full maps.",
    controls: "WASD: Move | Mouse: Aim | Left Click: Shoot | Space: Jump | 1-2: Weapons | Esc: Lock/Unlock Mouse"
  },
  {
    id: "radius-raid-survival",
    name: "Radius Raid Survival",
    path: "./games/radius-raid/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Arcade","Space","JS13k"],
    badge: "JS13k",
    desc: "Fast-paced space survival shooter by Jack Rugile. Blast polymorphic enemy waves, collect power gems, and dodge bullet barrages.",
    controls: "WASD: Move Ship | Mouse: 360 Aim & Shoot"
  },
  {
    id: "raging-gardens",
    name: "Raging Gardens",
    path: "./games/raging-gardens/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Raging Gardens — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "roguish",
    name: "Roguish",
    path: "./games/roguish/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Roguish — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "save-the-forest",
    name: "Save The Forest",
    path: "./games/save-the-forest/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Save The Forest — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "simon",
    name: "Simon",
    path: "./games/simon/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Simon — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "sorades",
    name: "Sorades",
    path: "./games/sorades/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Sorades — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "space-huggers-roguelite",
    name: "Space Huggers Roguelite",
    path: "./games/space-huggers/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Platformer","Shooter","Roguelike","Destructible"],
    badge: "Hot",
    desc: "Frank Force's intense run-and-gun roguelike platformer featuring fully destructible terrain, procedural levels, and fluid pixel gunplay.",
    controls: "WASD / Arrows: Move & Jump | Mouse: Aim & Shoot | R: Restart"
  },
  {
    id: "space-invaders",
    name: "Space Invaders",
    path: "./games/space-invaders/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Space Invaders — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "space-shooter",
    name: "Space Shooter",
    path: "./games/space-shooter/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Space Shooter — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "spashal",
    name: "Spashal",
    path: "./games/spashal/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Spashal — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "survivor",
    name: "Survivor",
    path: "./games/survivor/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Survivor — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "t-rex-runner",
    name: "T Rex Runner",
    path: "./games/t-rex-runner/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "T Rex Runner — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "tictactoe",
    name: "Tictactoe",
    path: "./games/tictactoe/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Tictactoe — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "tower-game",
    name: "Tower Game",
    path: "./games/tower-game/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Tower Game — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "underrun-software-3d",
    name: "Underrun (Software 3D)",
    path: "./games/underrun/index.html",
    category: "games",
    shelf: "action-survival",
    tags: ["Action","Shooter","JS13k","Retro"],
    badge: "JS13k",
    desc: "Atmospheric sci-fi twin-stick shooter by Dominic Szablewski. Reclaim a deserted subterranean colony overrun by arachnid swarms.",
    controls: "WASD: Move | Mouse: Aim & Shoot Plasma Blaster"
  },
  {
    id: "wordle",
    name: "Wordle",
    path: "./games/wordle/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Wordle — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  },
  {
    id: "xx142-b2-alien-infiltration",
    name: "XX142-B2 Alien Infiltration",
    path: "./games/xx142-b2/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["3D","Stealth","Sci-Fi","JS13k"],
    badge: "3D",
    desc: "Real-time 3D stealth infiltration aboard an alien mothership. Evade security patrol bots, hack terminals, and plant EMP charges.",
    controls: "WASD: Move | Mouse: Turn Camera | Space: Hack Terminal / Jump"
  },
  {
    id: "zedinvaders",
    name: "Zedinvaders",
    path: "./games/zedinvaders/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade","Casual","HTML5"],
    badge: "Featured",
    desc: "Zedinvaders — fully responsive legal open-source web application for mobile and desktop.",
    controls: "Mouse / Touch / Keyboard supported"
  }
];

/* ================================================================
   2. CORE ENGINE & APPLICATION CONTROLLER
   ================================================================ */
(function () {
  const CATEGORIES = [
    { id: "games",      label: "Games",     icon: "🎮" },
    { id: "emulators",  label: "Emulators", icon: "🕹️" },
    { id: "other",      label: "Other & Tools", icon: "📦" }
  ];

  const GENRE_TAGS = [
    "All", "Action", "Arcade", "Puzzle", "Strategy", "Retro", "Driving", "Physics", "3D", "WASM", "Sandbox", "Cards", "Tools"
  ];

  const REPO_OWNER = 'Dragon-Gaming-Platforms';
  const REPO_NAME  = 'Dragon-Gaming-Platforms';
  const API_BASE   = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
  const CURRENT_VER = 'v1.1.0';

  const $ = (s, doc = document) => doc.querySelector(s);
  const $$ = (s, doc = document) => doc.querySelectorAll(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);

  // ---- State Keys ----
  const KEY_FAVS      = 'dgp_favorites';
  const KEY_RECENTS   = 'dgp_recent_played';
  const KEY_PLAYCOUNT = 'dgp_play_counts';
  const KEY_THEME     = 'dgp_theme';
  const KEY_CLOAK     = 'dgp_cloak_preset';
  const KEY_PANIC_KEY = 'dgp_panic_key';
  const KEY_PANIC_URL = 'dgp_panic_url';
  const KEY_ERUDA     = 'dgp_eruda_enabled';
  const KEY_PARTICLES = 'dgp_particles_enabled';
  const KEY_CRT       = 'dgp_crt_enabled';

  // ---- State Variables ----
  let currentCategory = 'all';
  let currentTag = 'All';
  let currentSearchQuery = '';
  let currentSort = 'featured';
  let activeGame = null;
  let erudaLoaded = false;

  // Cached Elements
  let navbar, navLinks, hamburger, cloakBtn, panicBtn, dropdownRoot, dropdownToggle;
  let browseBtn, heroRandomBtn, mainContainer, downloadRoot, settingsRoot, loadingEl;
  let gameViewer, viewerBackdrop, viewerClose, viewerIframe, viewerLoading, viewerGameName, viewerGameBadge;
  let viewerFavBtn, viewerControlsBtn, viewerRestartBtn, viewerPopoutBtn, viewerFullscreenBtn, viewerControlsCard, viewerControlsText;
  let saveStatus;

  // ---- Cloaking Presets & Built-in SVG Favicons ----
  const CLOAK_PRESETS = {
    default: {
      title: "Dragon Gaming Platforms",
      icon: "assets/dragon-login.png"
    },
    classroom: {
      title: "Classes",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231E8E3E' d='M0 4h24v16H0z'/%3E%3Cpath fill='%23FFF' d='M3 6h18v12H3z'/%3E%3Cpath fill='%23137333' d='M4 7h16v10H4z'/%3E%3Ccircle cx='12' cy='11' r='2' fill='%23F9AB00'/%3E%3Cpath fill='%23F9AB00' d='M8 15c0-2 4-2 4-2s4 0 4 2z'/%3E%3C/svg%3E"
    },
    drive: {
      title: "My Drive - Google Drive",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.3 78'%3E%3Cpath d='M6.6 66.85l3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3L27.1 53H0c0 1.5.4 3 1.1 4.3l5.5 9.55z' fill='%230066da'/%3E%3Cpath d='M43.65 25L57.1 1.7C55.7.9 54.2.5 52.7.5H34.6c-1.5 0-3 .4-4.4 1.2L16.75 25h26.9z' fill='%2300ac47'/%3E%3Cpath d='M73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l5.5-9.55c.7-1.3 1.1-2.8 1.1-4.3H56.45L70 76.8z' fill='%23ea4335'/%3E%3Cpath d='M43.65 25L30.2 53h40.35l13.45-23.3c-.8-1.4-1.9-2.5-3.2-3.3L54.3 3.9c-1.4-.8-2.9-1.2-4.4-1.2h-6.25z' fill='%23ffba00'/%3E%3C/svg%3E"
    },
    docs: {
      title: "Google Docs",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpath fill='%23A1C2FA' d='M14 2v6h6z'/%3E%3Cpath fill='%23FFF' d='M8 12h8v1.5H8zm0 3h8v1.5H8zm0-6h4v1.5H8z'/%3E%3C/svg%3E"
    },
    canvas: {
      title: "Dashboard",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E13D2F'%3E%3Ccircle cx='12' cy='12' r='10' stroke='%23FFF' stroke-width='2' fill='%23E13D2F'/%3E%3Ccircle cx='12' cy='12' r='4' fill='%23FFF'/%3E%3C/svg%3E"
    },
    desmos: {
      title: "Desmos | Graphing Calculator",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%23287A28'/%3E%3Cpath d='M6 16c2-4 4-8 6-8s4 4 6 8' stroke='%23FFF' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
    },
    wikipedia: {
      title: "Wikipedia, the free encyclopedia",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%23FFF' stroke='%23333' stroke-width='1'/%3E%3Ctext x='12' y='17' font-family='serif' font-weight='bold' font-size='15' text-anchor='middle' fill='%23000'%3EW%3C/text%3E%3C/svg%3E"
    },
    google: {
      title: "Google",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.665-5.17 3.665-9.09z'/%3E%3Cpath fill='%2334A853' d='M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.09C3.25 21.36 7.34 24 12 24z'/%3E%3Cpath fill='%23FBBC05' d='M5.28 14.32a7.18 7.18 0 0 1 0-4.64V6.59H1.26a11.97 11.97 0 0 0 0 10.82l4.02-3.09z'/%3E%3Cpath fill='%23EA4335' d='M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.59l4.02 3.09c.95-2.83 3.6-4.93 6.72-4.93z'/%3E%3C/svg%3E"
    }
  };

  // ---- Favorites & Storage Helpers ----
  function getFavorites() {
    try { return JSON.parse(localStorage.getItem(KEY_FAVS)) || []; } catch(e) { return []; }
  }
  function isFavorite(id) {
    return getFavorites().includes(id);
  }
  function toggleFavorite(id) {
    let favs = getFavorites();
    if (favs.includes(id)) favs = favs.filter(x => x !== id);
    else favs.push(id);
    localStorage.setItem(KEY_FAVS, JSON.stringify(favs));
    updateViewerFavButton();
    renderFilteredGrid();
  }

  function getRecents() {
    try { return JSON.parse(localStorage.getItem(KEY_RECENTS)) || []; } catch(e) { return []; }
  }
  function addRecent(id) {
    let recents = getRecents().filter(x => x !== id);
    recents.unshift(id);
    if (recents.length > 12) recents = recents.slice(0, 12);
    localStorage.setItem(KEY_RECENTS, JSON.stringify(recents));
    incrementPlayCount(id);
  }
  function clearRecents() {
    localStorage.removeItem(KEY_RECENTS);
    renderFilteredGrid();
  }

  function getPlayCounts() {
    try { return JSON.parse(localStorage.getItem(KEY_PLAYCOUNT)) || {}; } catch(e) { return {}; }
  }
  function getPlayCount(id) {
    return getPlayCounts()[id] || 0;
  }
  function incrementPlayCount(id) {
    const counts = getPlayCounts();
    counts[id] = (counts[id] || 0) + 1;
    localStorage.setItem(KEY_PLAYCOUNT, JSON.stringify(counts));
  }

  // ---- Cloaking Controller ----
  function applyCloakPreset(presetKey, customTitle = '', customIcon = '') {
    let title = "Dragon Gaming Platforms";
    let iconUrl = "assets/dragon-login.png";

    if (presetKey === 'custom' && customTitle) {
      title = customTitle;
      iconUrl = customIcon || iconUrl;
    } else if (CLOAK_PRESETS[presetKey]) {
      title = CLOAK_PRESETS[presetKey].title;
      iconUrl = CLOAK_PRESETS[presetKey].icon;
    }

    document.title = title;
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = iconUrl;
    localStorage.setItem(KEY_CLOAK, JSON.stringify({ preset: presetKey, customTitle, customIcon }));
  }

  function initCloak() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY_CLOAK));
      if (saved && saved.preset) {
        applyCloakPreset(saved.preset, saved.customTitle, saved.customIcon);
      }
    } catch(e) {}
  }

  function handleCloakClick() {
    const win = window.open('about:blank', '_blank');
    if (!win) { alert('Popup blocked! Please allow popups for this site.'); return; }
    
    const title = document.title;
    const icon = $('link[rel*="icon"]')?.href || 'assets/dragon-login.png';

    win.document.title = title;
    const doc = win.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${esc(title)}</title>
          <link rel="icon" href="${esc(icon)}" />
          <style>
            html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
            iframe { width: 100%; height: 100%; border: none; }
          </style>
        </head>
        <body>
          <iframe src="${location.href}"></iframe>
        </body>
      </html>
    `);
    doc.close();
  }

  // ---- Panic Key / Boss Key ----
  function getPanicKey() { return localStorage.getItem(KEY_PANIC_KEY) || '`'; }
  function getPanicUrl() { return localStorage.getItem(KEY_PANIC_URL) || 'https://classroom.google.com'; }
  function triggerPanic() {
    const url = getPanicUrl();
    window.location.replace(url);
  }

  // ---- Theme Controller ----
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY_THEME, theme);
    $$('.theme-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme));
  }
  function initTheme() {
    const saved = localStorage.getItem(KEY_THEME) || 'dragon';
    setTheme(saved);
    if (localStorage.getItem(KEY_PARTICLES) === 'false') document.body.classList.add('no-particles');
    if (localStorage.getItem(KEY_CRT) === 'true') document.body.classList.add('crt-mode');
  }

  // ---- Eruda Developer Console ----
  function isErudaEnabled() { return localStorage.getItem(KEY_ERUDA) === 'true'; }
  function initEruda() {
    if (erudaLoaded) return;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/eruda';
    s.onload = () => { if (typeof eruda !== 'undefined') { eruda.init(); erudaLoaded = true; } };
    document.body.appendChild(s);
  }
  function destroyEruda() {
    if (typeof eruda !== 'undefined' && eruda._isInit) { eruda.destroy(); erudaLoaded = false; }
  }
  function toggleEruda(enabled) {
    localStorage.setItem(KEY_ERUDA, enabled ? 'true' : 'false');
    if (enabled) initEruda(); else destroyEruda();
  }

  // ---- Save Manager: localStorage, sessionStorage, cookies & IndexedDB ----
  function showSaveStatus(msg, type) {
    if (!saveStatus) saveStatus = $('#saveStatus');
    if (!saveStatus) return;
    saveStatus.textContent = msg;
    saveStatus.className = `save-status ${type}`;
    setTimeout(() => { if (saveStatus) { saveStatus.textContent = ''; saveStatus.className = 'save-status'; } }, 5000);
  }

  async function exportAllIndexedDB() {
    const dbsData = [];
    if (!window.indexedDB || typeof window.indexedDB.databases !== 'function') return dbsData;
    try {
      const dbList = await window.indexedDB.databases();
      for (const dbInfo of dbList) {
        if (!dbInfo.name) continue;
        const dbData = await new Promise((resolve) => {
          const req = indexedDB.open(dbInfo.name);
          req.onerror = () => resolve(null);
          req.onsuccess = async () => {
            const db = req.result;
            const stores = Array.from(db.objectStoreNames);
            const storesData = {};
            if (!stores.length) { db.close(); return resolve({ name: db.name, version: db.version, stores: {} }); }
            
            try {
              const tx = db.transaction(stores, 'readonly');
              for (const storeName of stores) {
                const store = tx.objectStore(storeName);
                const allKeys = await new Promise(res => {
                  const r = store.getAllKeys();
                  r.onsuccess = () => res(r.result);
                  r.onerror = () => res([]);
                });
                const allValues = await new Promise(res => {
                  const r = store.getAll();
                  r.onsuccess = () => res(r.result);
                  r.onerror = () => res([]);
                });
                storesData[storeName] = { keys: allKeys, values: allValues, keyPath: store.keyPath, autoIncrement: store.autoIncrement };
              }
              tx.oncomplete = () => { db.close(); resolve({ name: db.name, version: db.version, stores: storesData }); };
              tx.onerror = () => { db.close(); resolve({ name: db.name, version: db.version, stores: storesData }); };
            } catch(e) {
              db.close();
              resolve(null);
            }
          };
        });
        if (dbData) dbsData.push(dbData);
      }
    } catch(e) {
      console.warn('IndexedDB export warning:', e);
    }
    return dbsData;
  }

  async function importAllIndexedDB(dbsData) {
    if (!dbsData || !Array.isArray(dbsData) || !window.indexedDB) return 0;
    let restoredCount = 0;
    for (const dbInfo of dbsData) {
      if (!dbInfo.name || !dbInfo.stores) continue;
      await new Promise((resolve) => {
        const req = indexedDB.open(dbInfo.name, dbInfo.version || 1);
        req.onupgradeneeded = (e) => {
          const db = req.result;
          Object.keys(dbInfo.stores).forEach(storeName => {
            const sInfo = dbInfo.stores[storeName];
            if (!db.objectStoreNames.contains(storeName)) {
              db.createObjectStore(storeName, {
                keyPath: sInfo.keyPath || undefined,
                autoIncrement: sInfo.autoIncrement || false
              });
            }
          });
        };
        req.onsuccess = async () => {
          const db = req.result;
          const storeNames = Object.keys(dbInfo.stores).filter(s => db.objectStoreNames.contains(s));
          if (storeNames.length) {
            try {
              const tx = db.transaction(storeNames, 'readwrite');
              for (const storeName of storeNames) {
                const store = tx.objectStore(storeName);
                const sData = dbInfo.stores[storeName];
                if (sData.values && sData.values.length) {
                  for (let i = 0; i < sData.values.length; i++) {
                    const key = sData.keys && sData.keys[i] !== undefined ? sData.keys[i] : undefined;
                    const val = sData.values[i];
                    if (key !== undefined && !sData.keyPath) store.put(val, key);
                    else store.put(val);
                  }
                }
              }
              tx.oncomplete = () => { db.close(); restoredCount++; resolve(true); };
              tx.onerror = () => { db.close(); resolve(false); };
            } catch(e) { db.close(); resolve(false); }
          } else {
            db.close();
            resolve(true);
          }
        };
        req.onerror = () => resolve(false);
      });
    }
    return restoredCount;
  }

  async function exportSaves() {
    showSaveStatus('⏳ Exporting all saves & databases…', 'info');
    try {
      const backup = {
        meta: {
          platform: 'Dragon Gaming Platforms',
          version: CURRENT_VER,
          exported: new Date().toISOString(),
          origin: location.origin
        },
        localStorage: {},
        sessionStorage: {},
        cookies: document.cookie,
        indexedDB: await exportAllIndexedDB()
      };

      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        backup.localStorage[k] = localStorage.getItem(k);
      }
      for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        backup.sessionStorage[k] = sessionStorage.getItem(k);
      }

      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `dragon-saves-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showSaveStatus('✓ Saves & IndexedDB exported successfully!', 'success');
    } catch (err) {
      console.error('Export failed:', err);
      showSaveStatus('✕ Export failed: ' + err.message, 'error');
    }
  }

  async function importSaves(file) {
    if (!file) return;
    showSaveStatus('⏳ Importing save data…', 'info');
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const backup = JSON.parse(e.target.result);
        let count = 0;

        if (backup.localStorage) {
          Object.entries(backup.localStorage).forEach(([k, v]) => {
            localStorage.setItem(k, v);
            count++;
          });
        }
        if (backup.sessionStorage) {
          Object.entries(backup.sessionStorage).forEach(([k, v]) => {
            sessionStorage.setItem(k, v);
            count++;
          });
        }
        if (backup.cookies) {
          backup.cookies.split(';').forEach(c => {
            const [name, ...rest] = c.trim().split('=');
            if (name && rest.length) {
              document.cookie = `${name}=${rest.join('=')}; path=/; max-age=31536000`;
              count++;
            }
          });
        }

        let dbCount = 0;
        if (backup.indexedDB) {
          dbCount = await importAllIndexedDB(backup.indexedDB);
        }

        showSaveStatus(`✓ Restored ${count} items & ${dbCount} databases! Refreshing settings…`, 'success');
        
        initTheme();
        initCloak();
        const erudaToggle = $('#erudaToggle');
        if (erudaToggle) erudaToggle.checked = isErudaEnabled();
        renderFilteredGrid();
      } catch (err) {
        console.error('Import failed:', err);
        showSaveStatus('✕ Import failed: Invalid backup file', 'error');
      }
    };
    reader.readAsText(file);
  }

  function clearAllData() {
    if (!confirm('Are you sure you want to clear all local saves, favorites, and settings? This cannot be undone.')) return;
    localStorage.clear();
    sessionStorage.clear();
    showSaveStatus('✓ All local data wiped. Reloading…', 'info');
    setTimeout(() => location.reload(), 1200);
  }

  // ---- Game Viewer Player Controller ----
  function openGame(gameOrId) {
    const item = typeof gameOrId === 'string' 
      ? GAMES_DATA.find(g => g.id === gameOrId || g.name.toLowerCase() === gameOrId.toLowerCase())
      : gameOrId;
    if (!item) return;

    activeGame = item;
    addRecent(item.id);

    viewerGameName.textContent = item.name;
    viewerGameBadge.textContent = item.badge || item.category;
    updateViewerFavButton();

    if (viewerControlsText) {
      viewerControlsText.innerHTML = `
        <div style="margin-bottom:8px;"><strong>Genre:</strong> ${item.tags.join(', ')}</div>
        <div style="margin-bottom:8px;"><strong>Summary:</strong> ${esc(item.desc)}</div>
        <div><strong>Controls:</strong> ${esc(item.controls || 'Mouse and Keyboard')}</div>
      `;
    }

    viewerLoading.classList.remove('hidden');
    gameViewer.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      viewerIframe.src = item.path;
      const reveal = () => { viewerLoading.classList.add('hidden'); };
      viewerIframe.addEventListener('load', function onL() {
        viewerIframe.removeEventListener('load', onL);
        reveal();
      });
      setTimeout(reveal, 3000);
    }, 120);
  }

  function closeGame() {
    if (!gameViewer.classList.contains('active')) return;
    gameViewer.classList.remove('active');
    document.body.style.overflow = '';
    if (viewerControlsCard) viewerControlsCard.classList.remove('open');
    setTimeout(() => {
      viewerIframe.src = '';
      viewerLoading.classList.add('hidden');
      activeGame = null;
    }, 450);
  }

  function restartGame() {
    if (!activeGame) return;
    viewerLoading.classList.remove('hidden');
    const p = activeGame.path;
    viewerIframe.src = '';
    setTimeout(() => {
      viewerIframe.src = p;
      setTimeout(() => viewerLoading.classList.add('hidden'), 2000);
    }, 150);
  }

  function popoutGame() {
    if (!activeGame) return;
    window.open(activeGame.path, '_blank');
  }

  function toggleFullscreen() {
    const target = $('#viewerWindow') || viewerIframe;
    if (!document.fullscreenElement) {
      if (target.requestFullscreen) target.requestFullscreen();
      else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  function updateViewerFavButton() {
    if (!viewerFavBtn || !activeGame) return;
    const isFav = isFavorite(activeGame.id);
    viewerFavBtn.classList.toggle('active', isFav);
    viewerFavBtn.title = isFav ? "Remove from Favorites" : "Add to Favorites";
    viewerFavBtn.innerHTML = `<span>${isFav ? '★' : '☆'}</span> <span class="game-viewer__btn-text">${isFav ? 'Favorited' : 'Favorite'}</span>`;
  }

  function toggleControlsOverlay() {
    if (!viewerControlsCard) return;
    viewerControlsCard.classList.toggle('open');
  }

  function openRandomGame() {
    const list = getFilteredGames();
    if (!list.length) return;
    const randomItem = list[Math.floor(Math.random() * list.length)];
    openGame(randomItem);
  }

  // ---- Filtering, Search & Card Rendering ----
  function getFilteredGames() {
    let list = [...GAMES_DATA];
    const favs = getFavorites();
    const recents = getRecents();

    if (currentCategory === 'favorites') {
      list = list.filter(g => favs.includes(g.id));
    } else if (currentCategory === 'recent') {
      list = recents.map(id => list.find(g => g.id === id)).filter(Boolean);
    } else if (currentCategory !== 'all') {
      list = list.filter(g => g.category === currentCategory);
    }

    if (currentTag && currentTag !== 'All') {
      list = list.filter(g => g.tags.some(t => t.toLowerCase() === currentTag.toLowerCase()));
    }

    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.toLowerCase().trim();
      list = list.filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        g.tags.some(t => t.toLowerCase().includes(q)) ||
        g.category.toLowerCase().includes(q)
      );
    }

    if (currentSort === 'az') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'za') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === 'played') {
      const counts = getPlayCounts();
      list.sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
    }

    return list;
  }

  function cardHTML(item) {
    const icons = { games: "🎮", emulators: "🕹️", other: "📦" };
    const isFav = isFavorite(item.id);
    const playCount = getPlayCount(item.id);
    const tagsHTML = item.tags.slice(0, 3).map(t => `<span class="game-card__tag">${esc(t)}</span>`).join('');

    return `
      <div class="game-card" data-id="${esc(item.id)}">
        <div class="game-card__image">
          <span class="game-card__badge">${esc(item.badge || item.category)}</span>
          <button class="game-card__fav-btn ${isFav ? 'is-fav' : ''}" title="${isFav ? 'Remove Favorite' : 'Add to Favorites'}" data-fav-id="${esc(item.id)}">
            ${isFav ? '★' : '☆'}
          </button>
          <span class="game-card__placeholder-icon">${icons[item.category] || "🎮"}</span>
        </div>
        <div class="game-card__body">
          <h3 class="game-card__name">${esc(item.name)}</h3>
          <p class="game-card__desc">${esc(item.desc)}</p>
          <div class="game-card__tags">${tagsHTML}</div>
          <div class="game-card__footer">
            <div class="game-card__status">
              <span class="game-card__status-dot"></span>
              <span class="game-card__status-text">Ready</span>
            </div>
            ${playCount > 0 ? `<span class="game-card__play-count">Played ${playCount}x</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function filterBarHTML() {
    const favs = getFavorites();
    const recents = getRecents();

    const catPills = [
      { id: 'all', label: 'All', count: GAMES_DATA.length },
      { id: 'favorites', label: '⭐ Favorites', count: favs.length },
      { id: 'recent', label: '🕒 Recent', count: recents.length },
      { id: 'games', label: '🎮 Games', count: GAMES_DATA.filter(g => g.category === 'games').length },
      { id: 'emulators', label: '🕹️ Emulators', count: GAMES_DATA.filter(g => g.category === 'emulators').length },
      { id: 'other', label: '📦 Other & Tools', count: GAMES_DATA.filter(g => g.category === 'other').length }
    ];

    return `
      <div class="filter-bar" id="filterControls">
        <div class="filter-bar__row-top">
          <div class="filter-bar__search-wrap">
            <span class="filter-bar__search-icon">🔍</span>
            <input type="text" class="filter-bar__search-input" id="gameSearchInput" placeholder="Search 60 games, emulators & tools… (Press '/' to search)" value="${esc(currentSearchQuery)}" autocomplete="off" />
            <button class="filter-bar__search-clear" id="searchClearBtn" title="Clear Search">✕</button>
            <span class="filter-bar__search-shortcut">/</span>
          </div>

          <div class="filter-bar__sort-wrap">
            <label for="sortSelect">Sort by:</label>
            <select class="filter-bar__select" id="sortSelect">
              <option value="featured" ${currentSort==='featured'?'selected':''}>Featured / Default</option>
              <option value="az" ${currentSort==='az'?'selected':''}>Name (A → Z)</option>
              <option value="za" ${currentSort==='za'?'selected':''}>Name (Z → A)</option>
              <option value="played" ${currentSort==='played'?'selected':''}>Most Played</option>
            </select>
          </div>

          <button class="filter-bar__random-btn" id="randomGameBtn" title="Pick a random game">
            <span>🎲</span> Random Game
          </button>
        </div>

        <div class="filter-bar__row-categories">
          ${catPills.map(c => `
            <button class="filter-pill ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
              <span>${c.label}</span>
              <span class="filter-pill__count">${c.count}</span>
            </button>
          `).join('')}
        </div>

        <div class="filter-bar__row-tags">
          <span style="font-size:0.75rem; color:var(--text-dim); margin-right:4px;">Tags:</span>
          ${GENRE_TAGS.map(t => `
            <button class="tag-pill ${currentTag.toLowerCase() === t.toLowerCase() ? 'active' : ''}" data-tag="${t}">
              ${t}
            </button>
          `).join('')}
        </div>

        <div class="filter-bar__meta">
          <span class="filter-bar__count-label" id="resultsCountLabel">Showing games…</span>
          ${(currentSearchQuery || currentTag !== 'All' || currentCategory !== 'all') ? `<button class="section-clear-btn" id="resetFiltersBtn">Reset Filters</button>` : ''}
        </div>
      </div>
    `;
  }

  function renderFilteredGrid() {
    const list = getFilteredGames();
    const countLabel = $('#resultsCountLabel');
    if (countLabel) countLabel.textContent = `Showing ${list.length} of ${GAMES_DATA.length} items`;

    let content = '';

    if (!list.length) {
      content = `
        <div class="empty-state">
          <div class="empty-state__icon">🔍</div>
          <h3 class="empty-state__title">No games found</h3>
          <p class="empty-state__subtitle">No titles matched your search query or active filter tags.</p>
          <button class="hero__cta hero__cta--secondary" id="emptyResetBtn" style="padding:8px 18px; font-size:0.8rem;">Reset All Filters</button>
        </div>
      `;
    } else if (currentCategory === 'all' && !currentSearchQuery && currentTag === 'All' && currentSort === 'featured') {
      const favs = getFavorites().map(id => GAMES_DATA.find(g => g.id === id)).filter(Boolean);
      const recents = getRecents().map(id => GAMES_DATA.find(g => g.id === id)).filter(Boolean);

      let favsSection = '';
      if (favs.length) {
        favsSection = `
          <section class="category-section" id="category-favorites">
            <div class="section-header">
              <span class="section-icon">⭐</span>
              <h2 class="section-title">Favorites</h2>
              <span class="section-count">${favs.length} ${favs.length===1?'game':'games'}</span>
            </div>
            <div class="shelf-grid">${favs.map(cardHTML).join('')}</div>
          </section>
        `;
      }

      let recentsSection = '';
      if (recents.length) {
        recentsSection = `
          <section class="category-section" id="category-recent">
            <div class="section-header">
              <span class="section-icon">🕒</span>
              <h2 class="section-title">Recently Played</h2>
              <span class="section-count">${recents.length}</span>
              <button class="section-clear-btn" id="clearRecentsBtn">Clear History</button>
            </div>
            <div class="shelf-grid">${recents.map(cardHTML).join('')}</div>
          </section>
        `;
      }

      const catSections = CATEGORIES.map(cat => {
        const catItems = GAMES_DATA.filter(g => g.category === cat.id);
        return `
          <section class="category-section" id="category-${cat.id}">
            <div class="section-header">
              <span class="section-icon">${cat.icon}</span>
              <h2 class="section-title">${cat.label}</h2>
              <span class="section-count">${catItems.length} items</span>
            </div>
            <div class="games-grid">${catItems.map(cardHTML).join('')}</div>
          </section>
        `;
      }).join('');

      content = favsSection + recentsSection + catSections;
    } else {
      content = `
        <section class="category-section">
          <div class="games-grid">${list.map(cardHTML).join('')}</div>
        </section>
      `;
    }

    const gridRoot = $('#catalogRoot');
    if (gridRoot) gridRoot.innerHTML = content;

    $$('.game-card', gridRoot).forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.game-card__fav-btn')) return;
        const id = card.dataset.id;
        openGame(id);
      });
    });

    $$('.game-card__fav-btn', gridRoot).forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.favId;
        toggleFavorite(id);
      });
    });

    const clearRecentsBtn = $('#clearRecentsBtn');
    if (clearRecentsBtn) clearRecentsBtn.addEventListener('click', clearRecents);

    const emptyResetBtn = $('#emptyResetBtn');
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetFilters);

    const resetBtn = $('#resetFiltersBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
  }

  function resetFilters() {
    currentCategory = 'all';
    currentTag = 'All';
    currentSearchQuery = '';
    currentSort = 'featured';
    renderFilterBar();
    renderFilteredGrid();
  }

  function renderFilterBar() {
    const filterRoot = $('#filterBarRoot');
    if (!filterRoot) return;
    filterRoot.innerHTML = filterBarHTML();

    const searchInput = $('#gameSearchInput');
    const searchClear = $('#searchClearBtn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
        renderFilteredGrid();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        currentSearchQuery = '';
        if (searchInput) searchInput.value = '';
        searchClear.style.display = 'none';
        renderFilteredGrid();
      });
    }

    const sortSelect = $('#sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderFilteredGrid();
      });
    }

    const randomBtn = $('#randomGameBtn');
    if (randomBtn) randomBtn.addEventListener('click', openRandomGame);

    $$('.filter-pill', filterRoot).forEach(pill => {
      pill.addEventListener('click', () => {
        currentCategory = pill.dataset.cat;
        renderFilterBar();
        renderFilteredGrid();
      });
    });

    $$('.tag-pill', filterRoot).forEach(pill => {
      pill.addEventListener('click', () => {
        currentTag = pill.dataset.tag;
        renderFilterBar();
        renderFilteredGrid();
      });
    });
  }

  // ---- Settings Section HTML ----
  function settingsHTML() {
    const isEruda = isErudaEnabled();
    const isParticles = localStorage.getItem(KEY_PARTICLES) !== 'false';
    const isCrt = localStorage.getItem(KEY_CRT) === 'true';
    const curTheme = localStorage.getItem(KEY_THEME) || 'dragon';
    const cloakInfo = JSON.parse(localStorage.getItem(KEY_CLOAK) || '{"preset":"default"}');
    const panicKey = getPanicKey();
    const panicUrl = getPanicUrl();

    return `
      <section class="settings-section" id="settings">
        <div class="container">
          <div class="section-header">
            <span class="section-icon">⚙️</span>
            <h2 class="section-title">Settings & Customization</h2>
          </div>

          <div class="settings-grid">
            <!-- Theme Card -->
            <div class="settings-card">
              <div class="settings-card__header">
                <div class="settings-card__title">Theme Color Palette</div>
              </div>
              <p class="settings-card__desc">Select your preferred cyberpunk/dragon color theme.</p>
              <div class="theme-picker">
                <button class="theme-btn ${curTheme==='dragon'?'active':''}" data-theme="dragon">
                  <div class="theme-btn__swatch" style="background:#e60012; color:#ff0033;"></div>
                  <span class="theme-btn__name">Dragon Red</span>
                </button>
                <button class="theme-btn ${curTheme==='cyberpunk'?'active':''}" data-theme="cyberpunk">
                  <div class="theme-btn__swatch" style="background:#00e5ff; color:#00f0ff;"></div>
                  <span class="theme-btn__name">Cyber Cyan</span>
                </button>
                <button class="theme-btn ${curTheme==='purple'?'active':''}" data-theme="purple">
                  <div class="theme-btn__swatch" style="background:#9d4edd; color:#c77dff;"></div>
                  <span class="theme-btn__name">Purple Neon</span>
                </button>
                <button class="theme-btn ${curTheme==='matrix'?'active':''}" data-theme="matrix">
                  <div class="theme-btn__swatch" style="background:#00ff66; color:#39ff14;"></div>
                  <span class="theme-btn__name">Matrix Green</span>
                </button>
                <button class="theme-btn ${curTheme==='amoled'?'active':''}" data-theme="amoled">
                  <div class="theme-btn__swatch" style="background:#ffffff; color:#94a3b8;"></div>
                  <span class="theme-btn__name">AMOLED Dark</span>
                </button>
                <button class="theme-btn ${curTheme==='sunset'?'active':''}" data-theme="sunset">
                  <div class="theme-btn__swatch" style="background:#ff8c00; color:#ff4500;"></div>
                  <span class="theme-btn__name">Molten Gold</span>
                </button>
              </div>
            </div>

            <!-- Tab Cloaking Card -->
            <div class="settings-card">
              <div class="settings-card__header">
                <div class="settings-card__title">Tab Cloaking & Masking</div>
              </div>
              <p class="settings-card__desc">Disguise this tab's title and favicon to appear as common education / productivity tools.</p>
              
              <select class="settings-select" id="cloakPresetSelect">
                <option value="default" ${cloakInfo.preset==='default'?'selected':''}>Default (Dragon Gaming)</option>
                <option value="classroom" ${cloakInfo.preset==='classroom'?'selected':''}>Google Classroom</option>
                <option value="drive" ${cloakInfo.preset==='drive'?'selected':''}>Google Drive</option>
                <option value="docs" ${cloakInfo.preset==='docs'?'selected':''}>Google Docs</option>
                <option value="canvas" ${cloakInfo.preset==='canvas'?'selected':''}>Canvas LMS</option>
                <option value="desmos" ${cloakInfo.preset==='desmos'?'selected':''}>Desmos Calculator</option>
                <option value="wikipedia" ${cloakInfo.preset==='wikipedia'?'selected':''}>Wikipedia</option>
                <option value="google" ${cloakInfo.preset==='google'?'selected':''}>Google Search</option>
                <option value="custom" ${cloakInfo.preset==='custom'?'selected':''}>Custom Title & Icon…</option>
              </select>

              <div id="customCloakInputs" style="display:${cloakInfo.preset==='custom'?'flex':'none'}; flex-direction:column; gap:8px;">
                <input type="text" class="settings-input" id="customCloakTitle" placeholder="Custom Tab Title" value="${esc(cloakInfo.customTitle||'')}" />
                <input type="text" class="settings-input" id="customCloakIcon" placeholder="Custom Favicon URL (.png / .ico)" value="${esc(cloakInfo.customIcon||'')}" />
                <button class="btn-save" id="btnApplyCustomCloak" style="align-self:flex-start;">Apply Custom Cloak</button>
              </div>
            </div>

            <!-- Panic Key / Boss Key -->
            <div class="settings-card">
              <div class="settings-card__header">
                <div class="settings-card__title">Panic / Boss Key</div>
              </div>
              <p class="settings-card__desc">Pressing your configured panic key immediately redirects away to your decoy safety website.</p>
              
              <div style="display:flex; gap:10px;">
                <div style="flex:1;">
                  <label style="font-size:0.75rem; color:var(--text-dim); display:block; margin-bottom:4px;">Trigger Key</label>
                  <input type="text" class="settings-input" id="panicKeyInput" maxlength="1" value="${esc(panicKey)}" style="text-align:center; font-family:monospace; font-weight:bold;" />
                </div>
                <div style="flex:3;">
                  <label style="font-size:0.75rem; color:var(--text-dim); display:block; margin-bottom:4px;">Redirect URL</label>
                  <input type="text" class="settings-input" id="panicUrlInput" value="${esc(panicUrl)}" />
                </div>
              </div>

              <div style="display:flex; gap:8px; align-items:center;">
                <button class="navbar__panic-btn" id="testPanicBtn" style="padding:8px 14px;">🚨 Test Panic Now</button>
                <button class="btn-save" id="btnSavePanic">Save Key</button>
              </div>
            </div>

            <!-- Visual & Dev Tools -->
            <div class="settings-card">
              <div class="settings-card__header">
                <div class="settings-card__title">Display & Developer</div>
              </div>

              <div class="settings-row">
                <div>
                  <div style="font-size:0.9rem; font-weight:600;">Floating Background Particles</div>
                  <div style="font-size:0.78rem; color:var(--text-dim);">Toggle ambient animated particles</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="particlesToggle" ${isParticles?'checked':''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="settings-row">
                <div>
                  <div style="font-size:0.9rem; font-weight:600;">Retro CRT Scanline Effect</div>
                  <div style="font-size:0.78rem; color:var(--text-dim);">Vintage CRT monitor scanlines</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="crtToggle" ${isCrt?'checked':''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="settings-row">
                <div>
                  <div style="font-size:0.9rem; font-weight:600;">Eruda Developer Console</div>
                  <div style="font-size:0.78rem; color:var(--text-dim);">Inject mobile / dev inspection tool</div>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" id="erudaToggle" ${isEruda?'checked':''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>

            <!-- Save Data Manager -->
            <div class="settings-card" style="grid-column: 1 / -1;">
              <div class="settings-card__header">
                <div class="settings-card__title">Universal Save Data Manager</div>
              </div>
              <p class="settings-card__desc">
                Export or import your entire progress — including localStorage, sessionStorage, cookies, and <strong>all IndexedDB game worlds</strong> (Eaglercraft, Balatro, EmulatorJS saves).
              </p>
              
              <div class="save-manager">
                <button class="btn-save btn-save--export" id="btnExportSaves">⬇ Export Full Backup (.json)</button>
                <label class="btn-save btn-save--import">
                  ⬆ Import Backup (.json)
                  <input type="file" id="btnImportSaves" accept=".json">
                </label>
                <button class="btn-save btn-save--danger" id="btnClearAllData">🗑 Clear All Data</button>
              </div>
              <div class="save-status" id="saveStatus"></div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ---- Download Section HTML ----
  function downloadHTML() {
    return `
      <section class="download-section" id="download">
        <div class="container">
          <div class="section-header">
            <span class="section-icon">⬇️</span>
            <h2 class="section-title">Download & Offline Portability</h2>
          </div>
          <div class="download-versions">
            <div class="version-box">
              <div class="version-box__label">Current Site Version</div>
              <div class="version-box__value">${CURRENT_VER}</div>
            </div>
            <div class="version-box">
              <div class="version-box__label">Latest Release on GitHub</div>
              <div class="version-box__value" id="latestVersion"><span class="version-box__loading">Checking GitHub…</span></div>
            </div>
          </div>
          <div class="download-actions" id="downloadActions">
            <a href="https://github.com/${REPO_OWNER}/${REPO_NAME}/archive/refs/heads/main.zip" class="btn-download" id="btnZip" download>⬇ Download Full Site ZIP</a>
            <a href="./singlefile.html" class="btn-download btn-download--secondary" id="btnSingle" download>📄 Download Singlefile.html</a>
          </div>
          <div class="commit-log">
            <h3 class="commit-log__title">Recent Git Commits</h3>
            <div id="commitLog"><div class="commit-loading">Loading commit history…</div></div>
          </div>
        </div>
      </section>
    `;
  }

  // ---- GitHub API ----
  async function fetchLatestRelease() {
    try {
      const res = await fetch(`${API_BASE}/releases/latest`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch(e) {
      return null;
    }
  }
  async function fetchCommits(limit = 10) {
    try {
      const res = await fetch(`${API_BASE}/commits?per_page=${limit}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch(e) {
      return [];
    }
  }
  function renderCommitLog(commits) {
    const el = $('#commitLog');
    if (!el || !commits.length) {
      if (el) el.innerHTML = '<div style="color:var(--text-dim); font-size:0.85rem;">No recent commits fetched.</div>';
      return;
    }
    el.innerHTML = commits.map(c => {
      const sha = c.sha.substring(0, 7);
      const date = new Date(c.commit.author.date).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
      return `
        <div class="commit-item">
          <div class="commit-dot"></div>
          <div class="commit-info">
            <div class="commit-msg">${esc(c.commit.message.split('\n')[0])}</div>
            <div class="commit-meta">
              <a href="${c.html_url}" class="commit-sha" target="_blank" rel="noopener">${sha}</a>
              <span class="commit-date">${date}</span>
              <span class="commit-author">${esc(c.commit.author.name)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
  function updateDownloadUI(release) {
    const verEl = $('#latestVersion');
    if (!release) {
      if (verEl) verEl.innerHTML = `<span class="highlight">${CURRENT_VER} (Latest)</span>`;
      return;
    }
    if (verEl) verEl.innerHTML = `<span class="highlight">${esc(release.tag_name || release.name || CURRENT_VER)}</span>`;
  }

  // ---- Smooth Scroll Helper ----
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- Keyboard Shortcuts Controller ----
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      const panicKey = getPanicKey();
      if (e.key === panicKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        triggerPanic();
        return;
      }

      if (gameViewer && gameViewer.classList.contains('active')) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeGame();
        } else if (e.key.toLowerCase() === 'f' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          toggleFullscreen();
        }
        return;
      }

      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        const searchInput = $('#gameSearchInput');
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    });
  }

  // ---- Attach Settings Handlers ----
  function attachSettingsHandlers() {
    $$('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
      });
    });

    const cloakSelect = $('#cloakPresetSelect');
    const customInputs = $('#customCloakInputs');
    if (cloakSelect) {
      cloakSelect.addEventListener('change', () => {
        const val = cloakSelect.value;
        if (customInputs) customInputs.style.display = val === 'custom' ? 'flex' : 'none';
        if (val !== 'custom') {
          applyCloakPreset(val);
        }
      });
    }

    const btnApplyCustom = $('#btnApplyCustomCloak');
    if (btnApplyCustom) {
      btnApplyCustom.addEventListener('click', () => {
        const title = $('#customCloakTitle')?.value || '';
        const icon = $('#customCloakIcon')?.value || '';
        applyCloakPreset('custom', title, icon);
        showSaveStatus('✓ Custom cloak preset applied', 'success');
      });
    }

    const btnSavePanic = $('#btnSavePanic');
    if (btnSavePanic) {
      btnSavePanic.addEventListener('click', () => {
        const k = $('#panicKeyInput')?.value || '`';
        const u = $('#panicUrlInput')?.value || 'https://classroom.google.com';
        localStorage.setItem(KEY_PANIC_KEY, k);
        localStorage.setItem(KEY_PANIC_URL, u);
        showSaveStatus(`✓ Panic key saved (Press '${k}' to escape)`, 'success');
      });
    }

    const testPanicBtn = $('#testPanicBtn');
    if (testPanicBtn) testPanicBtn.addEventListener('click', triggerPanic);

    const particlesToggle = $('#particlesToggle');
    if (particlesToggle) {
      particlesToggle.addEventListener('change', (e) => {
        localStorage.setItem(KEY_PARTICLES, e.target.checked ? 'true' : 'false');
        document.body.classList.toggle('no-particles', !e.target.checked);
      });
    }

    const crtToggle = $('#crtToggle');
    if (crtToggle) {
      crtToggle.addEventListener('change', (e) => {
        localStorage.setItem(KEY_CRT, e.target.checked ? 'true' : 'false');
        document.body.classList.toggle('crt-mode', e.target.checked);
      });
    }

    const erudaToggle = $('#erudaToggle');
    if (erudaToggle) erudaToggle.addEventListener('change', (e) => toggleEruda(e.target.checked));

    const btnExport = $('#btnExportSaves');
    const btnImport = $('#btnImportSaves');
    const btnClear = $('#btnClearAllData');

    if (btnExport) btnExport.addEventListener('click', exportSaves);
    if (btnImport) btnImport.addEventListener('change', (e) => importSaves(e.target.files[0]));
    if (btnClear) btnClear.addEventListener('click', clearAllData);
  }

  // ---- Initialization ----
  function init() {
    navbar = $('#navbar');
    navLinks = $('#navLinks');
    hamburger = $('#hamburger');
    cloakBtn = $('#cloakBtn');
    panicBtn = $('#panicBtn');
    dropdownRoot = $('#dropdownRoot');
    dropdownToggle = $('#dropdownToggle');
    browseBtn = $('#browseGamesBtn');
    heroRandomBtn = $('#heroRandomBtn');
    mainContainer = $('#mainContent');
    downloadRoot = $('#downloadRoot');
    settingsRoot = $('#settingsRoot');
    loadingEl = $('#loadingState');

    gameViewer = $('#gameViewer');
    viewerBackdrop = $('#viewerBackdrop');
    viewerClose = $('#viewerClose');
    viewerIframe = $('#viewerIframe');
    viewerLoading = $('#viewerLoading');
    viewerGameName = $('#viewerGameName');
    viewerGameBadge = $('#viewerGameBadge');
    viewerFavBtn = $('#viewerFavBtn');
    viewerControlsBtn = $('#viewerControlsBtn');
    viewerRestartBtn = $('#viewerRestartBtn');
    viewerPopoutBtn = $('#viewerPopoutBtn');
    viewerFullscreenBtn = $('#viewerFullscreenBtn');
    viewerControlsCard = $('#viewerControlsCard');
    viewerControlsText = $('#viewerControlsText');

    initTheme();
    initCloak();
    initKeyboardShortcuts();

    window.addEventListener('scroll', () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    if (dropdownToggle && dropdownRoot) {
      dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.innerWidth <= 768) dropdownRoot.classList.toggle('open');
      });
    }

    if (cloakBtn) cloakBtn.addEventListener('click', handleCloakClick);
    if (panicBtn) panicBtn.addEventListener('click', triggerPanic);

    $$('.nav-section-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToId(targetId);
        if (navLinks) navLinks.classList.remove('open');
        if (dropdownRoot) dropdownRoot.classList.remove('open');
      });
    });

    if (browseBtn) {
      browseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToId('filterBarRoot');
      });
    }

    if (heroRandomBtn) heroRandomBtn.addEventListener('click', openRandomGame);

    if (viewerClose) viewerClose.addEventListener('click', closeGame);
    if (viewerBackdrop) viewerBackdrop.addEventListener('click', closeGame);
    if (viewerRestartBtn) viewerRestartBtn.addEventListener('click', restartGame);
    if (viewerPopoutBtn) viewerPopoutBtn.addEventListener('click', popoutGame);
    if (viewerFullscreenBtn) viewerFullscreenBtn.addEventListener('click', toggleFullscreen);
    if (viewerFavBtn) viewerFavBtn.addEventListener('click', () => {
      if (activeGame) toggleFavorite(activeGame.id);
    });
    if (viewerControlsBtn) viewerControlsBtn.addEventListener('click', toggleControlsOverlay);

    renderFilterBar();
    renderFilteredGrid();

    if (downloadRoot) downloadRoot.innerHTML = downloadHTML();
    if (settingsRoot) {
      settingsRoot.innerHTML = settingsHTML();
      attachSettingsHandlers();
    }

    if (isErudaEnabled()) initEruda();
    fetchLatestRelease().then(updateDownloadUI);
    fetchCommits().then(renderCommitLog);

    if (loadingEl) loadingEl.style.display = 'none';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
