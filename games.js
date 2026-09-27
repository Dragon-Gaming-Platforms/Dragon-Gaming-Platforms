/*    DRAGON GAMING PLATFORMS — CORE DATA & ENGINE
   
/*    1. GAME DATA CATALOG (60 Games, Emulators & Tools)
   const GAMES_DATA = [
  {
    id: "eaglercraft-1-12-2-wasm",
    name: "Eaglercraft 1.12.2 WASM",
    path: "./games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sandbox", "Survival", "3D", "WASM"],
    badge: "WASM",
    desc: "Full Minecraft 1.12.2 running offline directly in your browser via WebAssembly.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place / Interact | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-12-2-js",
    name: "Eaglercraft 1.12.2 JS",
    path: "./games/singlefiles/Eaglercraft-JS-1.12.2.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sandbox", "Survival", "3D"],
    badge: "3D",
    desc: "JavaScript client for Minecraft 1.12.2 with online multiplayer and singleplayer worlds.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-8-8-js",
    name: "Eaglercraft 1.8.8 JS",
    path: "./games/singlefiles/Eaglercraft-JS-1.8.8.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sandbox", "Survival", "3D", "Multiplayer"],
    badge: "Popular",
    desc: "Classic Minecraft 1.8.8 with server browser, custom skins, and fluid combat.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | T: Chat"
  },
  {
    id: "eaglercraft-1-8-8-wasm",
    name: "Eaglercraft 1.8.8 WASM",
    path: "./games/singlefiles/Eaglercraft-1.8.8-offline-WASM.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sandbox", "Survival", "3D", "WASM"],
    badge: "WASM",
    desc: "Ultra-fast WebAssembly offline edition of Minecraft 1.8.8.",
    controls: "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    id: "balatro",
    name: "Balatro",
    path: "./games/singlefiles/Balatro.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Cards", "Roguelike", "Strategy"],
    badge: "Featured",
    desc: "Poker roguelike deck builder \u2014 trigger synergistic jokers and execute wild combos.",
    controls: "Mouse / Touch: Select cards, buy jokers, open booster packs"
  },
  {
    id: "bloons-td4",
    name: "Bloons TD 4",
    path: "./games/singlefiles/Bloons-TD4.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Tower Defense", "Classic"],
    badge: "Featured",
    desc: "The iconic balloon-popping defense game \u2014 deploy dart monkeys, tack shooters, and mortar cannons.",
    controls: "Mouse: Select and place monkey defense towers on track"
  },
  {
    id: "drive-mad",
    name: "Drive Mad",
    path: "./games/singlefiles/Drive-Mad.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Driving", "Physics", "Action", "3D"],
    badge: "Popular",
    desc: "High-tension 3D physics truck driving with crazy stunts, balance traps, and obstacle courses.",
    controls: "W / Up Arrow: Accelerate | S / Down Arrow: Reverse & Brake | A / D: Balance truck"
  },
  {
    id: "escape-road",
    name: "Escape Road",
    path: "./games/singlefiles/Escape-Road.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Driving", "Action", "3D", "Endless"],
    badge: "3D Action",
    desc: "Fast-paced high-speed getaway driving game \u2014 weave through traffic and evade police chases.",
    controls: "A / D or Left / Right: Steer vehicle | Space: Drift / Handbrake"
  },
  {
    id: "hole-io",
    name: "Hole.io",
    path: "./games/singlefiles/Hole.io.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Multiplayer", "Physics", "3D"],
    badge: "Popular",
    desc: "Control a growing black hole, swallow city buildings, cars, and opponents in an arena showdown.",
    controls: "Mouse Drag / Arrow Keys / WASD: Move hole around city"
  },
  {
    id: "moto-x3m-2",
    name: "Moto X3M 2",
    path: "./games/singlefiles/Moto-x3m-2.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Driving", "Physics", "Action"],
    badge: "Popular",
    desc: "Adrenaline-packed motocross stunt racer with lethal traps, explosive loops, and timed trials.",
    controls: "Up / W: Accelerate | Down / S: Brake | Left / Right or A / D: Tilt & Front/Backflips"
  },
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    path: "./games/singlefiles/Ragdoll-Archers.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Physics", "Shooter"],
    badge: "Physics",
    desc: "Physics-driven ragdoll archery battle \u2014 aim arrows, unlock special arrowheads, and defeat enemy waves.",
    controls: "Mouse Drag & Release: Aim bow and fire arrow"
  },
  {
    id: "recoil",
    name: "Recoil",
    path: "./games/singlefiles/Recoil.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Physics", "Shooter"],
    badge: "Action",
    desc: "Clever puzzle shooter where your only way to move is using weapon recoil forces.",
    controls: "Mouse: Aim | Click: Shoot weapon and propel yourself with recoil"
  },
  {
    id: "snowrider-3d",
    name: "Snow Rider 3D",
    path: "./games/singlefiles/Snowrider.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Sports", "3D", "Endless"],
    badge: "3D",
    desc: "Ride your snow sled down treacherous mountain peaks, dodge giant pine trees, rocks, and jump chasms.",
    controls: "Left / Right Arrows or A / D: Steer sled | Up Arrow or Space: Jump"
  },
  {
    id: "vex-8",
    name: "Vex 8",
    path: "./games/singlefiles/Vex-8.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Action", "Platformer", "Parkour"],
    badge: "Action",
    desc: "Extreme precision stickman parkour with buzzsaws, trampolines, grappling hooks, and laser grids.",
    controls: "WASD / Arrow Keys: Run, jump, slide, wall-climb"
  },
  {
    id: "awesome-tanks-2",
    name: "Awesome Tanks 2",
    path: "./games/singlefiles/awesometanks2.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Shooter", "Tanks"],
    badge: "Action",
    desc: "Top-down arcade tank warfare \u2014 obliterate enemy spawners, collect gold coins, and upgrade turrets.",
    controls: "WASD / Arrow Keys: Drive tank | Mouse: Aim and fire cannons"
  },
  {
    id: "dreadhead-parkour",
    name: "Dreadhead Parkour",
    path: "./games/singlefiles/dreadheadparkour.htm",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Action", "Platformer", "Parkour"],
    badge: "Parkour",
    desc: "Stylized high-speed parkour runner \u2014 slide under spikes, vault rooftop gaps, and collect gold rings.",
    controls: "WASD / Arrow Keys: Move, jump, slide, flip"
  },
  {
    id: "borg-games",
    name: "Borg Games Hub",
    path: "./games/singlefiles/Borg-Games.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Retro", "Arcade", "Compilation"],
    badge: "Hub",
    desc: "Classic unblocked web games arcade hub featuring multiple vintage mini-games.",
    controls: "Mouse & Keyboard: Navigate catalog and play games"
  },
  {
    id: "q1k3",
    name: "Q1K3 (Quake 13K)",
    path: "./games/q1k3/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "3D", "FPS", "Retro"],
    badge: "3D FPS",
    desc: "Legendary homage to 1996 Quake written in pure WebGL with dynamic lighting, monsters, and guns.",
    controls: "WASD: Move | Mouse: Look & Shoot | Space: Jump | 1-2: Switch Weapons"
  },
  {
    id: "space-huggers",
    name: "Space Huggers",
    path: "./games/space-huggers/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Platformer", "Shooter", "Roguelike"],
    badge: "Roguelike",
    desc: "Procedural roguelike run-and-gun action shooter with destructible environments and LittleJS engine.",
    controls: "WASD / Arrows: Move & Jump | Mouse / Z: Aim & Shoot | R: Reload"
  },
  {
    id: "radius-raid",
    name: "Radius Raid",
    path: "./games/radius-raid/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Arcade", "Shooter", "Vector"],
    badge: "Arcade",
    desc: "Frenzied vector arena space shooter with particle glow effects, enemy swarms, and powerups.",
    controls: "WASD / Arrows: Move | Mouse: Aim & Fire | Space: Bomb"
  },
  {
    id: "bounce-back",
    name: "BounceBack",
    path: "./games/bounce-back/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Adventure", "Retro"],
    badge: "Action",
    desc: "Top-down procedural Zelda-like adventure where your trusty boomerang is your only weapon.",
    controls: "WASD / Arrows: Move | Mouse / Space: Throw Boomerang | E: Interact"
  },
  {
    id: "doom-13k",
    name: "Doom 13K",
    path: "./games/doom-13k/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "3D", "FPS", "Retro"],
    badge: "3D FPS",
    desc: "Micro 3D raycaster shooter capturing the raw essence of retro DOOM inside 13 kilobytes.",
    controls: "WASD / Arrows: Move & Turn | Space / Ctrl: Fire Weapon | E: Open Doors"
  },
  {
    id: "dante-13k",
    name: "Dante (13K)",
    path: "./games/dante-13k/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "3D", "Hack & Slash"],
    badge: "3D Action",
    desc: "Isometric 3D hack-and-slash brawler journeying through the 9 circles of hell with combo combat.",
    controls: "WASD / Arrows: Move | J / Space: Attack | K: Dash | L: Special"
  },
  {
    id: "diablo-js",
    name: "Diablo JS",
    path: "./games/diablo-js/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["RPG", "Action", "Isometric", "Retro"],
    badge: "RPG",
    desc: "Isometric HTML5 canvas action RPG engine with procedural dungeons, loot drops, and skeleton hordes.",
    controls: "Mouse: Click to move, attack enemies, and pick up items"
  },
  {
    id: "emberwind",
    name: "Emberwind",
    path: "./games/emberwind/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Platformer", "Action", "Adventure"],
    badge: "Platformer",
    desc: "High-production fairytale action platformer \u2014 soar with your magical cane and fight gremlins.",
    controls: "Arrow Keys: Move & Crouch | Space / Z: Cane Attack | X: Jump"
  },
  {
    id: "executive-man",
    name: "Executive Man",
    path: "./games/executive-man/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Action", "Platformer", "Retro"],
    badge: "Retro",
    desc: "Mega Man style retro action platformer climbing the corporate ladder with briefcase blasters.",
    controls: "Arrow Keys / WASD: Move & Jump | Space / Z: Shoot | X: Slide"
  },
  {
    id: "pixel-platformer",
    name: "Pixel Platformer",
    path: "./games/pixel-platformer/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Platformer", "Action", "Pixel"],
    badge: "Platformer",
    desc: "Crisp EntityJS pixel platformer with responsive wall-jumping, collectibles, and hazards.",
    controls: "Left / Right: Run | Space / Up: Jump | Down: Duck / Fall"
  },
  {
    id: "space-shooter",
    name: "Space Shooter",
    path: "./games/space-shooter/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Arcade", "Shooter", "Space"],
    badge: "Space",
    desc: "Smooth arcade space shooter with laser upgrades, shield generators, and mothership bosses.",
    controls: "WASD / Arrow Keys: Steer ship | Space / Mouse Click: Fire cannons"
  },
  {
    id: "canyon-runner",
    name: "Canyon Runner",
    path: "./games/canyon-runner/index.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["3D", "Driving", "Action"],
    badge: "3D Runner",
    desc: "High-speed 3D flight simulator navigating narrow desert canyons without crashing.",
    controls: "Arrow Keys / WASD: Steer & Pitch Jet | Space: Afterburner Boost"
  },
  {
    id: "circus-charlie",
    name: "Circus Charlie",
    path: "./games/circus-charlie/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "Retro Arcade",
    desc: "Faithful recreation of Konami classic circus performer jumping through fiery hoops on a lion.",
    controls: "Left / Right: Walk / Run | Space / Up: Jump through hoops"
  },
  {
    id: "alges-escapade",
    name: "Alges Escapade",
    path: "./games/alges-escapade/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Platformer", "Adventure", "Action"],
    badge: "Adventure",
    desc: "Charming 2D puzzle platformer with physics-driven level mechanics and quirky creatures.",
    controls: "Arrow Keys / A/D: Move | Space / W: Jump | Down: Crouch"
  },
  {
    id: "ekg-runner",
    name: "EKG Runner",
    path: "./games/ekg-runner/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Action", "Endless", "Rhythm"],
    badge: "Runner",
    desc: "Unique rhythm pulse runner where you surf along dynamic electrocardiogram heartbeat waves.",
    controls: "Space / Up Arrow / Click: Jump across pulse spikes"
  },
  {
    id: "loderunner",
    name: "Lode Runner",
    path: "./games/loderunner/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Arcade", "Platformer", "Retro"],
    badge: "Classic",
    desc: "Total recall recreation of the 1983 platform puzzle legend with all 150 original levels.",
    controls: "Arrow Keys: Move & Climb Ladders | Z / X: Dig hole left / right"
  },
  {
    id: "roguish",
    name: "Roguish",
    path: "./games/roguish/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["RPG", "Roguelike", "Dungeon"],
    badge: "Roguelike",
    desc: "Turn-based roguelike dungeon crawler with tactical grid positioning, potions, and spells.",
    controls: "WASD / Arrow Keys: Move & Bump Attack | 1-4: Cast Spells | I: Inventory"
  },
  {
    id: "protocol-390",
    name: "Protocol 390",
    path: "./games/protocol-390/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Adventure", "Sci-Fi", "Cyberpunk"],
    badge: "Sci-Fi",
    desc: "Atmospheric cyberpunk adventure game unraveling dark corporate conspiracies.",
    controls: "WASD / Arrow Keys: Move | E / Space: Interact with terminals and NPCs"
  },
  {
    id: "puzzlescript",
    name: "PuzzleScript Gallery",
    path: "./games/puzzlescript/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Retro", "Engine"],
    badge: "Puzzle",
    desc: "Interactive showcase of Stephen Lavelle innovative puzzle engine with multiple built-in games.",
    controls: "Arrow Keys / WASD: Move | Z / U: Undo step | R: Restart puzzle"
  },
  {
    id: "edge-not-found",
    name: "Edge Not Found",
    path: "./games/edge-not-found/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Sokoban", "Logic"],
    badge: "Puzzle",
    desc: "Mind-bending Sokoban puzzle taking place on an infinitely wrapping 4D toroidal grid.",
    controls: "WASD / Arrow Keys: Move | Z / U: Undo | R: Restart level"
  },
  {
    id: "behind-asteroids",
    name: "Behind Asteroids",
    path: "./games/behind-asteroids/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Arcade", "Space", "Sci-Fi"],
    badge: "JS13K",
    desc: "JS13K winner flipping Asteroids upside down \u2014 defend asteroid mining rigs from raiders.",
    controls: "WASD / Arrows: Steer ship | Space / Click: Shoot lasers | Shift: Boost"
  },
  {
    id: "island-builder",
    name: "Island Builder",
    path: "./games/island-builder/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation", "Sandbox", "3D"],
    badge: "Sandbox",
    desc: "Relaxing 3D isometric island builder \u2014 craft Mediterranean voxel villages on sunlit shores.",
    controls: "Mouse Click / Drag: Place terrain, roads, houses, trees | Mouse Wheel: Zoom"
  },
  {
    id: "black-hole-square",
    name: "Black Hole Square",
    path: "./games/black-hole-square/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Physics", "Spatial"],
    badge: "Puzzle",
    desc: "Gravitational spatial puzzle game manipulating celestial singularities and cosmic geometry.",
    controls: "Mouse: Place & rotate gravity deflector tiles | Space: Test orbit"
  },
  {
    id: "xx142-b2",
    name: "xx142-b2.exe",
    path: "./games/xx142-b2/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Adventure", "Sci-Fi", "Retro"],
    badge: "Retro",
    desc: "Immersive retro sci-fi cyber terminal text adventure unraveling alien transmission logs.",
    controls: "Keyboard: Type terminal commands (help, scan, decode, access)"
  },
  {
    id: "os13k",
    name: "OS13k Game Hub",
    path: "./games/os13k/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Sandbox", "Retro", "Compilation"],
    badge: "Hub",
    desc: "Compact retro operating system containing built-in arcade games, paint tools, and music synth.",
    controls: "Mouse / Keyboard: Click desktop icons and run mini apps"
  },
  {
    id: "space-cadet-pinball",
    name: "3D Pinball: Space Cadet",
    path: "./games/space-cadet-pinball/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "3D", "Classic"],
    badge: "Popular",
    desc: "The nostalgic Windows XP 3D Space Cadet Pinball compiled to WebAssembly with authentic sound effects.",
    controls: "Space: Launch ball | Z / / : Left / Right flippers | Space: Bump table | F2: New Game"
  },
  {
    id: "heroine-dusk",
    name: "Heroine Dusk",
    path: "./games/heroine-dusk/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["RPG", "Adventure", "Retro"],
    badge: "Retro",
    desc: "Classic turn-based 8-bit dungeon crawler RPG with spellcasting, town shops, and enemy encounters.",
    controls: "WASD / Arrow Keys: Navigate dungeon grid | Mouse: Select combat actions"
  },
  {
    id: "clumsy-bird",
    name: "Clumsy Bird",
    path: "./games/clumsy-bird/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Casual", "Retro"],
    badge: "Arcade",
    desc: "MelonJS-powered open-source Flappy Bird remake with smooth 60 FPS physics and particle FX.",
    controls: "Spacebar / Up Arrow / Mouse Click: Flap wings"
  },
  {
    id: "minesweeper",
    name: "Minesweeper Classic",
    path: "./games/minesweeper/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Classic", "Strategy"],
    badge: "Classic",
    desc: "Authentic Windows 95 style Minesweeper with Beginner, Intermediate, and Expert grid configurations.",
    controls: "Left Click: Reveal cell | Right Click: Place flag | Both: Chording"
  },
  {
    id: "duck-hunt",
    name: "Duck Hunt",
    path: "./games/duck-hunt/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "Retro",
    desc: "Faithful recreation of the iconic NES light-gun shooter with flying ducks and the laughing dog.",
    controls: "Mouse: Aim crosshair | Left Click: Pull trigger"
  },
  {
    id: "sokoban",
    name: "Sokoban",
    path: "./games/sokoban/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Classic", "Retro"],
    badge: "Puzzle",
    desc: "Original Japanese warehouse puzzle game \u2014 push every crate onto its designated target square.",
    controls: "WASD / Arrow Keys: Move pusher | R: Restart level | U: Undo move"
  },
  {
    id: "snake",
    name: "Snake HTML5",
    path: "./games/snake/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Classic", "Retro"],
    badge: "Classic",
    desc: "Clean, responsive HTML5 canvas recreation of the legendary Nokia mobile Snake game.",
    controls: "Arrow Keys / WASD: Steer snake direction"
  },
  {
    id: "sudoku",
    name: "Sudoku Master",
    path: "./games/sudoku/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Strategy", "Classic"],
    badge: "Puzzle",
    desc: "Interactive 9x9 Sudoku grid generator with difficulty tiers, error checking, and note-taking.",
    controls: "Click cell: Select | 1-9: Enter number | Del / Backspace: Erase note"
  },
  {
    id: "chess",
    name: "HTML5 Chess",
    path: "./games/chess/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Board", "Classic"],
    badge: "Classic",
    desc: "Clean 2-player and AI chess board with legal move indicators, capture history, and checkmate detection.",
    controls: "Mouse Click / Drag: Pick up and move chess pieces"
  },
  {
    id: "micropolisjs",
    name: "MicropolisJS (SimCity)",
    path: "./games/micropolisjs/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation", "Strategy", "Classic"],
    badge: "Classic Sim",
    desc: "Full JavaScript port of Will Wright original SimCity (Micropolis) engine running in browser.",
    controls: "Mouse: Select construction tools, zone residential/commercial/industrial, manage tax budget"
  },
  {
    id: "solitaire",
    name: "Klondike Solitaire",
    path: "./games/solitaire/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Cards", "Classic", "Puzzle"],
    badge: "Classic",
    desc: "Standard Klondike Solitaire with draw-1 and draw-3 modes, auto-complete, and scoring.",
    controls: "Mouse Drag / Double Click: Move cards to foundation piles"
  },
  {
    id: "asteroids",
    name: "Vector Asteroids",
    path: "./games/asteroids/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "High-contrast monochrome vector physics space shooter inspired by Atari arcade 1979 masterpiece.",
    controls: "Left / Right: Rotate ship | Up Arrow: Thruster | Spacebar: Fire laser blaster"
  },
  {
    id: "skifree",
    name: "SkiFree HTML5",
    path: "./games/skifree/index.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Sports", "Retro", "Arcade"],
    badge: "Retro",
    desc: "Downhill ski slalom simulator complete with moguls, jumps, snowboarders, and the terrifying Abominable Snow Monster.",
    controls: "Left / Right: Steer skier | Down: Accelerate | Up: Brake | Space: Jump"
  },
  {
    id: "tower-defense",
    name: "Canvas Tower Defense",
    path: "./games/tower-defense/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Tower Defense", "Arcade"],
    badge: "Strategy",
    desc: "Top-down tactical defense \u2014 place laser turrets, flak cannons, and freeze towers along enemy path.",
    controls: "Mouse: Select tower type and place along the road | Space: Fast forward wave"
  },
  {
    id: "2048",
    name: "2048 Original",
    path: "./games/2048/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Math", "Casual"],
    badge: "Popular",
    desc: "Gabriele Cirulli addictive sliding tile number puzzle \u2014 merge matching numbers to achieve 2048.",
    controls: "Arrow Keys / WASD / Swipe: Slide all tiles in one direction"
  },
  {
    id: "1255-burgomaster",
    name: "1255 Burgomaster",
    path: "./games/1255-burgomaster/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Strategy", "Simulation", "Retro"],
    badge: "Strategy",
    desc: "Medieval city-state political management simulator \u2014 balance taxes, food supplies, and citizen approval.",
    controls: "Mouse: Adjust municipal sliders, manage trade policies, review decrees"
  },
  {
    id: "3d-city",
    name: "3D City Engine",
    path: "./games/3d.city/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation", "3D", "Sandbox"],
    badge: "3D Sim",
    desc: "Three.js powered 3D procedural voxel metropolis generator with dynamic camera controls and weather.",
    controls: "Mouse Drag: Rotate view | Scroll: Zoom | WASD: Pan camera | Click: Inspect district"
  },
  {
    id: "ancient-beast",
    name: "Ancient Beast",
    path: "./games/AncientBeast/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Turn-Based", "RPG"],
    badge: "Turn-Based",
    desc: "Turn-based tactical creature combat on a hexagonal battleground with unique elemental beasts.",
    controls: "Mouse: Select creature, choose abilities, target enemy hexes"
  },
  {
    id: "a-dark-room",
    name: "A Dark Room",
    path: "./games/adarkroom/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["RPG", "Adventure", "Incremental"],
    badge: "Story",
    desc: "Critically acclaimed minimalist text-based role playing mystery game \u2014 stoke the fire and survive.",
    controls: "Mouse: Click buttons to light fire, gather wood, explore outside"
  },
  {
    id: "aquastax",
    name: "Aquastax",
    path: "./games/aquastax/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Physics", "Casual"],
    badge: "Physics",
    desc: "Fluid mechanics puzzle game where you manage pipes and water currents to fill floating tanks.",
    controls: "Mouse: Click pipes to rotate direction and seal leak points"
  },
  {
    id: "arashi-js",
    name: "Arashi Tempest",
    path: "./games/arashi-js/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "Vector tube shooter homage to classic Tempest \u2014 crawl around geometric perimeters and blast geometric enemies.",
    controls: "Left / Right: Move along edge | Spacebar: Fire blaster | Enter: Superzapper"
  },
  {
    id: "asdf",
    name: "ASDF Typing Arcade",
    path: "./games/asdf/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Casual", "Retro"],
    badge: "Typing",
    desc: "High-speed rhythm keyboard typing test \u2014 hit falling keys in sync with the beat.",
    controls: "Keyboard: Press falling letters (A, S, D, F) in sequence"
  },
  {
    id: "ball-and-wall",
    name: "Ball & Wall Breakout",
    path: "./games/ball-and-wall/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Physics"],
    badge: "Retro",
    desc: "Polished Breakout brick-breaker arcade with power-ups, multiball, and laser paddles.",
    controls: "Mouse / Left-Right Arrows: Move paddle | Space: Launch ball"
  },
  {
    id: "banania",
    name: "Banania",
    path: "./games/Banania/banania.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Classic", "Retro"],
    badge: "Retro",
    desc: "Classic DOS maze game \u2014 guide the monkey to eat all bananas while outsmarting angry monsters.",
    controls: "Arrow Keys: Move monkey | Esc: Pause"
  },
  {
    id: "blockrain",
    name: "Blockrain Tetris",
    path: "./games/blockrain/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Arcade", "Puzzle", "Retro"],
    badge: "Retro",
    desc: "Retro pixel-art falling block puzzle with smooth line-clear animations and chiptune vibes.",
    controls: "Left / Right: Move block | Up: Rotate | Down: Soft drop | Space: Hard drop"
  },
  {
    id: "canvas-tetris",
    name: "Canvas Tetris",
    path: "./games/canvas-tetris/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Arcade", "Puzzle", "Classic"],
    badge: "Classic",
    desc: "Lightweight, ultra-responsive HTML5 Canvas implementation of standard competitive Tetris.",
    controls: "Left / Right: Shift | Up / X: Rotate | Down: Soft drop | Space: Hard drop"
  },
  {
    id: "crappybird",
    name: "CrappyBird",
    path: "./games/CrappyBird/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Casual", "Flappy"],
    badge: "Arcade",
    desc: "Humorous Flappy Bird parody \u2014 tap to flap your wings and weave through tricky pipe obstacles.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "crystalquest",
    name: "CrystalQuest",
    path: "./games/CrystalQuest/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Arcade", "Shooter", "Retro"],
    badge: "Retro",
    desc: "Classic arcade arena shooter \u2014 vacuum up all crystals while blasting invading alien swarms.",
    controls: "Mouse: Move ship | Mouse Click: Fire blaster | Space: Smart Bomb"
  },
  {
    id: "enduro",
    name: "Enduro",
    path: "./games/enduro/index.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Racing", "Retro", "Classic"],
    badge: "Atari Retro",
    desc: "Tribute to the classic Atari 2600 endurance racer with dynamic weather, fog, and day/night cycles.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Steer"
  },
  {
    id: "hexgl",
    name: "HexGL",
    path: "./games/HexGL/index.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Racing", "3D", "Sci-Fi"],
    badge: "3D",
    desc: "Futuristic high-speed anti-gravity 3D racer built in WebGL with stunning Three.js graphics.",
    controls: "Up / W: Accelerate | A / D or Left / Right: Steer | Q / E: Air brakes | Space: Boost"
  },
  {
    id: "hextris",
    name: "Hextris",
    path: "./games/Hextris/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Arcade", "Hexagonal"],
    badge: "Popular",
    desc: "Fast-paced hexagonal puzzle \u2014 rotate the center hexagon to match 3 or more blocks of the same color.",
    controls: "Left / Right Arrows or A / D: Rotate hexagon | Down Arrow: Speed up block fall"
  },
  {
    id: "opensc2k",
    name: "OpenSC2K",
    path: "./games/OpenSC2K/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation", "Classic", "Retro"],
    badge: "Retro Sim",
    desc: "Open-source WebGL recreation of the classic city simulator SimCity 2000.",
    controls: "Mouse: Select zoning tools, lay pipes, construct buildings and power grids"
  },
  {
    id: "pacman-canvas",
    name: "Pacman Canvas",
    path: "./games/pacman-canvas/index.htm",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Classic", "Retro"],
    badge: "Classic",
    desc: "Faithful HTML5 canvas recreation of the legendary arcade Pac-Man with original sounds.",
    controls: "Arrow Keys / WASD: Steer Pac-Man | Space: Pause / Start"
  },
  {
    id: "sandspiel",
    name: "Sandspiel",
    path: "./games/sandspiel/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Simulation", "Sandbox", "Physics"],
    badge: "Physics",
    desc: "Falling sand cellular automata physics game written in Rust & WebAssembly.",
    controls: "Mouse Left Click: Draw selected element | Right Click: Erase | 1-9: Select element"
  },
  {
    id: "space-company",
    name: "Space Company",
    path: "./games/SpaceCompany/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Incremental", "Sci-Fi", "Strategy"],
    badge: "Sci-Fi",
    desc: "Deep sci-fi incremental simulation \u2014 harvest solar energy, colonize planets, and build Dyson spheres.",
    controls: "Mouse: Manage industry, research technologies, build rockets"
  },
  {
    id: "teterjs",
    name: "Teterjs",
    path: "./games/teterjs/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Arcade", "Puzzle", "Classic"],
    badge: "Puzzle",
    desc: "Crisp JavaScript block puzzle with ghost piece preview, hold queue, and level progression.",
    controls: "Left / Right: Move | Up: Rotate CW | Z: Rotate CCW | C: Hold | Space: Hard drop"
  },
  {
    id: "flappy-2048",
    name: "Flappy 2048",
    path: "./games/flappy-2048/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Puzzle", "Casual"],
    badge: "Casual",
    desc: "Wild hybrid of Flappy Bird and 2048 \u2014 flap your number tile through walls with matching values.",
    controls: "Spacebar / Click: Flap tile upward"
  },
  {
    id: "connect-four",
    name: "Connect Four",
    path: "./games/connect-four/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Board", "Classic"],
    badge: "Board",
    desc: "Classic 4-in-a-row token drop game with smart minimax AI and pass-and-play multiplayer.",
    controls: "Mouse: Click column slot to drop token"
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe AI",
    path: "./games/tictactoe/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Classic", "Casual"],
    badge: "Casual",
    desc: "Unbeatable Minimax AI Tic-Tac-Toe featuring customizable board themes and difficulty tiers.",
    controls: "Mouse: Click empty square to place X or O"
  },
  {
    id: "tower-game",
    name: "Tower Stacker",
    path: "./games/tower-game/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Physics", "Casual"],
    badge: "Casual",
    desc: "Addictive high-rise tower stacking arcade \u2014 tap with precision timing to stack floors to the clouds.",
    controls: "Click / Spacebar: Drop current tower block"
  },
  {
    id: "wordle",
    name: "Wordle Unlimited",
    path: "./games/wordle/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Word", "Logic"],
    badge: "Word",
    desc: "Clean HTML5 recreation of the 5-letter daily word guessing puzzle with infinite replayability.",
    controls: "Keyboard: Type letters | Enter: Submit guess | Backspace: Erase letter"
  },
  {
    id: "progress-knight",
    name: "Progress Knight",
    path: "./games/progress-knight/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["Incremental", "RPG", "Strategy"],
    badge: "Incremental",
    desc: "Deep life-simulation incremental RPG \u2014 train swordplay, study arcane magic, and achieve immortality.",
    controls: "Mouse: Assign job tasks, study skills, manage daily schedule"
  },
  {
    id: "alien-invasion",
    name: "Alien Invasion",
    path: "./games/alien-invasion/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "Classic top-down space arcade shooter built with HTML5 canvas sprite engine.",
    controls: "Arrow Keys / WASD: Move ship | Spacebar: Shoot lasers"
  },
  {
    id: "monster-candy",
    name: "Monster Wants Candy",
    path: "./games/monster-candy/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Casual", "Match"],
    badge: "Casual",
    desc: "Juicy Phaser-powered candy catching arcade \u2014 tap sweet treats and dodge evil skull bombs.",
    controls: "Mouse Click / Touch: Catch candies before they hit the ground"
  },
  {
    id: "sorades",
    name: "Starship Sorades 13K",
    path: "./games/sorades/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Arcade", "Bullet Hell", "Space"],
    badge: "JS13K",
    desc: "Hyper-intense 13KB vertical bullet-hell shmup with screen-filling boss laser patterns.",
    controls: "Arrow Keys / WASD: Steer fighter | Spacebar: Primary fire | Shift: Focus movement"
  },
  {
    id: "space-invaders",
    name: "Space Invaders HTML5",
    path: "./games/space-invaders/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Classic",
    desc: "Crisp HTML5 recreation of the 1978 arcade alien defense game with classic destructible bunkers.",
    controls: "Left / Right Arrows: Move cannon | Spacebar: Fire laser"
  },
  {
    id: "survivor",
    name: "Survivor Arena",
    path: "./games/survivor/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Arena", "Survival"],
    badge: "Action",
    desc: "Intense top-down dual-stick zombie arena survivor with shotgun spreads and powerups.",
    controls: "WASD: Move | Mouse: Aim and shoot swarming zombies"
  },
  {
    id: "3d-chess",
    name: "3D Hartwig Chess",
    path: "./games/3d-chess/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Board", "3D"],
    badge: "3D Board",
    desc: "Elegant 3D CSS/WebGL Bauhaus Hartwig chess board with smooth perspective orbits.",
    controls: "Mouse Click / Drag: Select piece and make legal moves"
  },
  {
    id: "onslaught",
    name: "Onslaught Arena",
    path: "./games/onslaught/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Arena", "Medieval"],
    badge: "Featured",
    desc: "Lost Decade Games medieval arena hack-and-slash \u2014 blast goblin hordes with magical crossbows.",
    controls: "WASD: Move hero | Mouse: Aim and fire arrows / magic spells"
  },
  {
    id: "mariohtml5",
    name: "Mario HTML5",
    path: "./games/mariohtml5/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Platformer", "Retro", "Classic"],
    badge: "Retro",
    desc: "Full HTML5 canvas recreation of Super Mario with mushroom powerups, pipes, and Goombas.",
    controls: "Arrow Keys: Walk / Duck | S: Jump | A: Run / Shoot Fireballs"
  },
  {
    id: "green-mahjong",
    name: "Green Mahjong",
    path: "./games/green-mahjong/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Board", "Solitaire"],
    badge: "Relaxing",
    desc: "Solitaire tile-matching Mahjong with multiple classic pyramid layouts and clean vector art.",
    controls: "Mouse Click: Select unblocked matching tile pairs"
  },
  {
    id: "custom-tetris",
    name: "Custom Tetris",
    path: "./games/custom-tetris/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Arcade", "Puzzle", "Tetris"],
    badge: "Retro",
    desc: "Ondras highly configurable JavaScript falling block puzzle with custom grid dimensions.",
    controls: "Left / Right: Shift block | Up: Rotate | Down: Drop"
  },
  {
    id: "jolly-jumper",
    name: "Jolly Jumper",
    path: "./games/jolly-jumper/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Arcade", "Casual", "Endless"],
    badge: "Casual",
    desc: "Bouncy vertical platform jumper \u2014 leap across springs, clouds, and moving platforms.",
    controls: "Left / Right Arrows or A / D: Steer jumper left and right"
  },
  {
    id: "captain-rogers",
    name: "Captain Rogers",
    path: "./games/captain-rogers/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Action", "Space"],
    badge: "Sci-Fi",
    desc: "Asteroid belt escape pilot game by Enclave Games \u2014 collect star tokens and avoid space mines.",
    controls: "Spacebar / Touch / Mouse Click: Thrust jetpack upward"
  },
  {
    id: "coil",
    name: "Coil",
    path: "./games/coil/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Action", "Minimal"],
    badge: "Minimal",
    desc: "Hypnotic circular mouse-dodging game \u2014 enclose glowing particles within your energy trail.",
    controls: "Mouse Movement: Steer light trail and encircle energy nodes"
  },
  {
    id: "floppybird",
    name: "Floppy Bird HTML5",
    path: "./games/floppybird/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Casual", "Flappy"],
    badge: "Casual",
    desc: "Smooth CSS3/HTML5 Flappy Bird clone with authentic sound effects and high score saving.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "pacman",
    name: "Pacman JS",
    path: "./games/pacman/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Classic", "Retro"],
    badge: "Classic",
    desc: "Lucio Panepinto full-featured canvas Pac-Man with authentic maze pathfinding AI.",
    controls: "Arrow Keys: Steer Pac-Man | Space: Start / Pause"
  },
  {
    id: "drakonas",
    name: "Drakonas",
    path: "./games/drakonas/index.html",
    category: "games",
    shelf: "sandbox-simulation",
    tags: ["RPG", "Action", "Fantasy"],
    badge: "RPG",
    desc: "Action fantasy RPG where you battle dragons, cast fireball spells, and explore ruins.",
    controls: "WASD / Arrows: Move | Space: Attack | 1-3: Spells"
  },
  {
    id: "digger",
    name: "Digger Remastered",
    path: "./games/digger/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "Retro",
    desc: "Windmill Software 1983 classic Digger remastered in modern HTML5 canvas.",
    controls: "Arrow Keys: Dig tunnels & steer digger | F1: Fire weapon"
  },
  {
    id: "ceros-snake",
    name: "Ceros Snake",
    path: "./games/ceros-snake/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Snake", "Retro"],
    badge: "Arcade",
    desc: "Vibrant arcade snake with speed boosts, collectible gems, and obstacle grids.",
    controls: "Arrow Keys / WASD: Steer snake"
  },
  {
    id: "openpanzer",
    name: "OpenPanzer",
    path: "./games/openpanzer/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Wargame", "Hex"],
    badge: "Wargame",
    desc: "Deep tactical turn-based WWII hex grid wargame recreating historical battlefield operations.",
    controls: "Mouse: Select armored divisions, give movement & bombardment orders"
  },
  {
    id: "hotfix",
    name: "Hotfix",
    path: "./games/hotfix/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Action", "Cyber", "Puzzle"],
    badge: "Sci-Fi",
    desc: "Fast cyber security puzzle action \u2014 patch memory leaks and eliminate rogue server viruses.",
    controls: "Arrow Keys / WASD: Move avatar | Space: Deploy software patches"
  },
  {
    id: "hurry",
    name: "Hurry!",
    path: "./games/hurry/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Action", "Speed", "Casual"],
    badge: "Speed",
    desc: "Fast-paced timer countdown survival game by Hugh Kennedy \u2014 grab glowing clock nodes.",
    controls: "WASD / Arrow Keys: Move character | Dodge laser barriers"
  },
  {
    id: "octocat-jump",
    name: "Octocat Jump",
    path: "./games/octocat-jump/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Arcade", "Platformer", "Endless"],
    badge: "Casual",
    desc: "GitHub Game Off platform jumper starring Octocat \u2014 collect commit coins and climb higher.",
    controls: "Left / Right Arrow Keys: Move Octocat across floating ledges"
  },
  {
    id: "raging-gardens",
    name: "Raging Gardens",
    path: "./games/raging-gardens/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Action", "Stealth", "Retro"],
    badge: "Stealth",
    desc: "Stealth garden ninja action \u2014 sneak past angry guard dogs, grab carrots, and escape.",
    controls: "Arrow Keys / WASD: Move ninja | Space: Sneak / Dash"
  },
  {
    id: "save-the-forest",
    name: "Save the Forest",
    path: "./games/save-the-forest/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Tower Defense", "Casual"],
    badge: "Defense",
    desc: "Strategic environmental defense game \u2014 stop wildfire spread and plant saplings.",
    controls: "Mouse: Click to deploy water pumps and clear firebreak paths"
  },
  {
    id: "spashal",
    name: "Spashal",
    path: "./games/spashal/index.html",
    category: "games",
    shelf: "action-3d",
    tags: ["Arcade", "Space", "Physics"],
    badge: "Physics",
    desc: "Orbital physics space maneuver game \u2014 guide rocket trajectories around planetary gravity wells.",
    controls: "Left / Right: Rotate ship | Up Arrow / Space: Fire main rocket booster"
  },
  {
    id: "zedinvaders",
    name: "Zed Invaders",
    path: "./games/zedinvaders/index.html",
    category: "games",
    shelf: "arcade-retro",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "High-tempo space invaders tribute featuring pulsing neon graphics and bonus waves.",
    controls: "Left / Right Arrows: Move | Spacebar: Fire rapid plasma beams"
  },
  {
    id: "avabranch",
    name: "Avabranch",
    path: "./games/avabranch/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Puzzle", "Physics", "Casual"],
    badge: "Puzzle",
    desc: "Charming branching physics puzzle \u2014 guide seed sprouts to open sunlight blossoms.",
    controls: "Mouse: Click branch joints to split and redirect energy flow"
  },
  {
    id: "heal-em-all",
    name: "Heal Em All",
    path: "./games/heal-em-all/index.html",
    category: "games",
    shelf: "puzzle-strategy",
    tags: ["Strategy", "Puzzle", "Casual"],
    badge: "Strategy",
    desc: "Reverse zombie strategy puzzle \u2014 synthesize antidotes and cure zombie hordes back to humans.",
    controls: "Mouse: Deploy cure syringes, set barricades, and guide survivors"
  },
  {
    id: "marble-soccer",
    name: "Marble Soccer 3D",
    path: "./games/marble-soccer/index.html",
    category: "games",
    shelf: "driving-sports",
    tags: ["Sports", "3D", "Physics"],
    badge: "3D Sports",
    desc: "Physics 3D soccer simulation by Jerome Etienne \u2014 steer rolling marbles to score goals.",
    controls: "WASD / Arrows: Steer soccer marble | Space: Boost dash"
  },
  {
    id: "cellmates",
    name: "Cellmates",
    path: "./games/cellmates/index.html",
    category: "games",
    shelf: "platformer-adventure",
    tags: ["Puzzle", "Stealth", "Adventure"],
    badge: "Stealth",
    desc: "Cooperative prison stealth escape puzzle \u2014 switch between inmates and evade security guards.",
    controls: "WASD / Arrows: Move active prisoner | Space: Switch prisoner | E: Interact"
  },
  {
    id: "emulatorjs",
    name: "EmulatorJS",
    path: "./emulators/Emulatorjs/index.html",
    category: "emulators",
    shelf: "emulators",
    tags: ["Emulator", "Retro", "Multi-System"],
    badge: "Emulator",
    desc: "Multi-console retro emulator supporting NES, SNES, GBA, GBC, N64, Genesis, PS1 with ROM drag-and-drop.",
    controls: "Drag & drop any ROM file or browse local files. Supports gamepad & custom keyboard mapping."
  },
  {
    id: "anura-os",
    name: "Anura OS",
    path: "./emulators/anuraOS.html",
    category: "emulators",
    shelf: "emulators",
    tags: ["Emulator", "OS", "Sandbox"],
    badge: "Virtual OS",
    desc: "Complete desktop operating system running directly in your browser with Linux/x86 app emulation.",
    controls: "Mouse & Keyboard: Full desktop window manager, terminal, file system, and browser apps"
  },
  {
    id: "iodine-gba",
    name: "IodineGBA (GBA Emulator)",
    path: "./emulators/iodinegba/index.html",
    category: "emulators",
    shelf: "emulators",
    tags: ["Emulator", "Retro", "GBA"],
    badge: "GBA Emulator",
    desc: "High-accuracy pure JavaScript Game Boy Advance emulator \u2014 load .gba ROMs and play instantly.",
    controls: "Load ROM file from disk | Keyboard: Z (A), X (B), Enter (Start), Shift (Select), Arrows (D-Pad)"
  },
  {
    id: "cyberchef",
    name: "CyberChef",
    path: "./other/CyberChef/index.html",
    category: "other",
    shelf: "other",
    tags: ["Tools", "Utility", "Cryptography"],
    badge: "Utility",
    desc: "The cyber Swiss Army knife by GCHQ for encoding, decoding, hashing, encryption, regex, and hex editing.",
    controls: "Mouse: Drag operations into recipe pipeline, paste input, inspect output"
  },
  {
    id: "gust-browser",
    name: "GUST",
    path: "./browsers/GUST.html",
    category: "other",
    shelf: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Full-featured web proxy browser client with tab management and stealth browsing.",
    controls: "Type any web address or search query in the address bar"
  },
  {
    id: "incognito-browser",
    name: "Incognito",
    path: "./browsers/Incognito.html",
    category: "other",
    shelf: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Fast, privacy-focused proxy gateway designed for unblocked web exploration.",
    controls: "Enter search terms or URL in the navigation bar"
  },
  {
    id: "interstellar-browser",
    name: "Interstellar",
    path: "./browsers/Interstellar.html",
    category: "other",
    shelf: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Modern, streamlined web proxy interface with fast loading and responsive controls.",
    controls: "Type search query or website destination into the bar"
  },
  {
    id: "scramjet-browser",
    name: "Scramjet",
    path: "./browsers/Scramjet.html",
    category: "other",
    shelf: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "High-performance web proxy client built on modern service worker proxy technologies.",
    controls: "Enter URL or search keyword into the navigation search bar"
  }
];

/*    2. CORE ENGINE & APPLICATION CONTROLLER
   (function () {
  const SHELVES = [
    { id: "action-3d",              label: "Action & 3D",            icon: "⚔️" },
    { id: "platformer-adventure",   label: "Platformer & Adventure", icon: "🏃" },
    { id: "arcade-retro",           label: "Arcade & Retro",         icon: "👾" },
    { id: "puzzle-strategy",        label: "Puzzle & Strategy",      icon: "🧩" },
    { id: "driving-sports",         label: "Driving & Sports",       icon: "🏎️" },
    { id: "sandbox-simulation",     label: "Sandbox & Simulation",   icon: "🌍" },
    { id: "emulators",              label: "Emulators",              icon: "🕹️" },
    { id: "other",                  label: "Tools & Proxies",        icon: "📦" }
  ];

  const THEMATIC_SHELVES = [
    { id: "action-3d", label: "Action & 3D Games", icon: "⚡", filter: g => g.shelf === 'action-3d' },
    { id: "arcade-retro", label: "Arcade & Retro Classics", icon: "👾", filter: g => g.shelf === 'arcade-retro' },
    { id: "puzzle-strategy", label: "Puzzle, Logic & Strategy", icon: "🧩", filter: g => g.shelf === 'puzzle-strategy' },
    { id: "driving-sports", label: "Driving, Racing & Sports", icon: "🏎️", filter: g => g.shelf === 'driving-sports' },
    { id: "platformer-adventure", label: "Platformer & Adventure", icon: "🏃", filter: g => g.shelf === 'platformer-adventure' },
    { id: "sandbox-simulation", label: "Sandbox & Simulation", icon: "🏗️", filter: g => g.shelf === 'sandbox-simulation' },
    { id: "emulators", label: "Emulators & Virtual Systems", icon: "🕹️", filter: g => g.shelf === 'emulators' || g.category === 'emulators' },
    { id: "tools", label: "Web Tools & Cloaked Browsers", icon: "🛠️", filter: g => g.shelf === 'tools' || g.category === 'tools' || g.category === 'other' }
  ];

  const GENRE_TAGS = [
    "All", "Action", "Arcade", "Puzzle", "Strategy", "Retro", "Driving", "Platformer", "Physics", "3D", "WASM", "Sandbox", "RPG", "Cards", "Tools"
  const SHELVES = [
    { id: "action-3d",              label: "Action & 3D",            icon: "⚔️" },
    { id: "platformer-adventure",   label: "Platformer & Adventure", icon: "🏃" },
    { id: "arcade-retro",           label: "Arcade & Retro",         icon: "👾" },
    { id: "puzzle-strategy",        label: "Puzzle & Strategy",      icon: "🧩" },
    { id: "driving-sports",         label: "Driving & Sports",       icon: "🏎️" },
    { id: "sandbox-simulation",     label: "Sandbox & Simulation",   icon: "🌍" },
    { id: "emulators",              label: "Emulators",              icon: "🕹️" },
    { id: "other",                  label: "Tools & Proxies",        icon: "📦" }
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
    const icons = { games: "🎮", emulators: "🕹️", other: "📦", tools: "🛠️" };
    const isFav = isFavorite(item.id);
    const playCount = getPlayCount(item.id);
    const tagsHTML = item.tags.slice(0, 3).map(t => `<span class="game-card__tag">${esc(t)}</span>`).join('');


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
      { id: 'other', label: '🛠️ Other & Tools', count: GAMES_DATA.filter(g => g.category === 'other' || g.category === 'tools').length }
      { id: 'other', label: '📦 Other & Tools', count: GAMES_DATA.filter(g => g.category === 'other').length }
    ];

    return `
      <div class="filter-bar" id="filterControls">
        <div class="filter-bar__row-top">
          <div class="filter-bar__search-wrap">
            <span class="filter-bar__search-icon">🔍</span>
            <input type="text" class="filter-bar__search-input" id="gameSearchInput" placeholder="Search ${GAMES_DATA.length} games, emulators & tools… (Press '/' to search)" value="${esc(currentSearchQuery)}" autocomplete="off" />
            <input type="text" class="filter-bar__search-input" id="gameSearchInput" placeholder="Search 122 games, emulators & tools… (Press '/' to search)" value="${esc(currentSearchQuery)}" autocomplete="off" />
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

      const shelfSections = THEMATIC_SHELVES.map(shelf => {
        const shelfItems = GAMES_DATA.filter(shelf.filter);
        if (!shelfItems.length) return '';
        return `
          <section class="category-section" id="shelf-${shelf.id}">
            <div class="section-header">
              <span class="section-icon">${shelf.icon}</span>
              <h2 class="section-title">${shelf.label}</h2>
              <span class="section-count">${shelfItems.length} items</span>
            </div>
            <div class="games-grid">${shelfItems.map(cardHTML).join('')}</div>
      const catSections = SHELVES.map(sh => {
        const catItems = GAMES_DATA.filter(g => g.shelf === sh.id || (!g.shelf && g.category === sh.id));
        if (!catItems.length) return '';
        return `
          <section class="category-section" id="category-${sh.id}">
            <div class="section-header">
              <span class="section-icon">${sh.icon}</span>
              <h2 class="section-title">${sh.label}</h2>
              <span class="section-count">${catItems.length} items</span>
            </div>
            <div class="games-grid">${catItems.map(cardHTML).join('')}</div>
          </section>
        `;
      }).join('');

      content = favsSection + recentsSection + shelfSections;
      content = favsSection + recentsSection + catSections;
    } else {
      content = `
        <section class="category-section">
          <div class="games-grid">${list.map(cardHTML).join('')}</div>
        </section>
      `;
    }

    const gridRoot = $('#catalogRoot');
    if (gridRoot) {
      gridRoot.innerHTML = content;

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
    }
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
