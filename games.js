/* ================================================================
   DRAGON GAMING PLATFORMS — CORE DATA & ENGINE
   ================================================================ */

/* ================================================================
   1. GAME DATA CATALOG (60 Games, Emulators & Tools)
   ================================================================ */
const GAMES_DATA = [
  // --- WASM & Singlefile Action / 3D ---
  {
    id: "eaglercraft-1-12-2-wasm",
    name: "Eaglercraft 1.12.2 WASM",
    path: "./games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
    category: "games",
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
    tags: ["Roguelike", "Cards", "Strategy"],
    badge: "Hot",
    desc: "The hit poker roguelike — combine valid poker hands with wild Joker cards for insane synergies.",
    controls: "Mouse / Touch: Select Cards, Play Hand, Buy Jokers & Packs"
  },
  {
    id: "bloons-td4",
    name: "Bloons TD4",
    path: "./games/singlefiles/Bloons-TD4.html",
    category: "games",
    tags: ["Strategy", "Tower Defense", "Classic"],
    badge: "Classic",
    desc: "Pop relentless waves of bloons using dart monkeys, tack shooters, mortars, and super monkeys.",
    controls: "Mouse: Drag & Place Towers, Upgrade, Target Priority"
  },
  {
    id: "drive-mad",
    name: "Drive Mad",
    path: "./games/singlefiles/Drive-Mad.html",
    category: "games",
    tags: ["Driving", "Physics", "3D"],
    badge: "3D",
    desc: "Drive custom 4x4 monster trucks across tricky stunt courses without flipping or smashing.",
    controls: "W / Up / D / Right: Accelerate | S / Down / A / Left: Reverse / Tilt | R: Restart"
  },
  {
    id: "escape-road",
    name: "Escape Road",
    path: "./games/singlefiles/Escape-Road.html",
    category: "games",
    tags: ["Action", "Driving", "3D"],
    badge: "Action",
    desc: "High-octane endless police chase — dodge squad cars, SWAT trucks, and helicopters in city traffic.",
    controls: "A / D or Left / Right Arrows: Steer | Space / Shift: Drift / Boost"
  },
  {
    id: "hole-io",
    name: "Hole.io",
    path: "./games/singlefiles/Hole.io.html",
    category: "games",
    tags: ["Arcade", "Multiplayer", "3D"],
    badge: "Popular",
    desc: "Control a growing black hole, swallow pedestrians, cars, and whole skyscrapers to dominate the city.",
    controls: "Mouse / Drag / Arrow Keys: Move Hole"
  },
  {
    id: "moto-x3m-2",
    name: "Moto x3m 2",
    path: "./games/singlefiles/Moto-x3m-2.html",
    category: "games",
    tags: ["Racing", "Physics", "Stunt"],
    badge: "Stunt",
    desc: "Extreme dirt bike trial racing across explosive stunt courses with backflips and speed traps.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Lean / Flip | Space: Respawn"
  },
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    path: "./games/singlefiles/Ragdoll-Archers.html",
    category: "games",
    tags: ["Action", "Physics", "Shooter"],
    badge: "Physics",
    desc: "Precision archery combat with dynamic ragdoll physics, custom arrow types, and armor upgrades.",
    controls: "Mouse Drag & Release: Aim & Shoot Arrow | Space: Jump / Shield"
  },
  {
    id: "recoil",
    name: "Recoil",
    path: "./games/singlefiles/Recoil.html",
    category: "games",
    tags: ["Action", "Shooter", "Physics"],
    badge: "Action",
    desc: "Navigate hazardous arenas and eliminate enemies using only the explosive recoil of your weapons.",
    controls: "Mouse Click: Aim & Fire weapon to propel yourself"
  },
  {
    id: "snowrider-3d",
    name: "Snowrider 3D",
    path: "./games/singlefiles/Snowrider.html",
    category: "games",
    tags: ["Sports", "3D", "Endless"],
    badge: "3D",
    desc: "Speed down massive snowy mountains, dodging pine trees, rolling snowballs, and giant cliffs.",
    controls: "Left / Right Arrows or A / D: Steer | Up Arrow or W: Jump Sled"
  },
  {
    id: "vex-8",
    name: "Vex 8",
    path: "./games/singlefiles/Vex-8.html",
    category: "games",
    tags: ["Action", "Platformer", "Parkour"],
    badge: "Platformer",
    desc: "Precision stickman platformer packed with razor-sharp saws, moving lasers, and endless parkour.",
    controls: "WASD / Arrow Keys: Run, Jump, Slide, Wall-jump | Down Arrow: Crouch / Enter Portal"
  },
  {
    id: "awesome-tanks-2",
    name: "Awesome Tanks 2",
    path: "./games/singlefiles/awesometanks2.html",
    category: "games",
    tags: ["Action", "Shooter", "Tanks"],
    badge: "Action",
    desc: "Top-down tank combat — blast enemy bunkers, collect cash, and upgrade armor, lasers, and cannons.",
    controls: "WASD / Arrows: Drive Tank | Mouse: Aim & Fire Main Turret | 1-9: Switch Weapon"
  },
  {
    id: "dreadhead-parkour",
    name: "Dreadhead Parkour",
    path: "./games/singlefiles/dreadheadparkour.htm",
    category: "games",
    tags: ["Action", "Runner", "Parkour"],
    badge: "Runner",
    desc: "Vault over spikes, slide under bomb traps, and perform stunts in this high-energy parkour runner.",
    controls: "D / Right Arrow: Run | W / Up Arrow: Jump & Vault | S / Down Arrow: Slide"
  },
  {
    id: "borg-games",
    name: "Borg Games",
    path: "./games/singlefiles/Borg-Games.html",
    category: "games",
    tags: ["Arcade", "Retro", "Collection"],
    badge: "Retro",
    desc: "Classic browser arcade portal featuring a curated collection of lightweight mini-games.",
    controls: "Mouse / Keyboard depending on selected mini-game"
  },

  // --- Retro Classics & New Additions ---
  {
    id: "space-cadet-pinball",
    name: "Space Cadet Pinball",
    path: "./games/space-cadet-pinball/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "WASM", "3D"],
    badge: "WASM 3D",
    desc: "The legendary 3D Pinball for Windows - Space Cadet running natively in WebAssembly.",
    controls: "Space: Launch Ball / Plunger | Z: Left Flipper | /: Right Flipper | Space / X / . : Nudge Table"
  },
  {
    id: "heroine-dusk",
    name: "Heroine Dusk",
    path: "./games/heroine-dusk/index.html",
    category: "games",
    tags: ["RPG", "Retro", "Turn-Based", "Adventure"],
    badge: "RPG",
    desc: "8-bit turn-based first-person dungeon crawler RPG — explore eerie maps and defeat fantasy monsters.",
    controls: "Arrow Keys / WASD: Move & Turn | Mouse: Click Menu Actions & Spells"
  },
  {
    id: "clumsy-bird",
    name: "Clumsy Bird",
    path: "./games/clumsy-bird/index.html",
    category: "games",
    tags: ["Arcade", "Casual", "One-Button"],
    badge: "Casual",
    desc: "Smooth, responsive MelonJS obstacle navigation arcade classic.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    path: "./games/minesweeper/index.html",
    category: "games",
    tags: ["Puzzle", "Retro", "Classic"],
    badge: "Classic",
    desc: "Classic Minesweeper with difficulty presets, custom boards, timer, and flag markers.",
    controls: "Left Click: Reveal Tile | Right Click: Place / Remove Flag | Smiley Face: Restart"
  },
  {
    id: "duck-hunt",
    name: "Duck Hunt JS",
    path: "./games/duck-hunt/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "Authentic NES Duck Hunt recreation with retro dog animations, clay shooting, and arcade scoring.",
    controls: "Mouse: Aim Crosshair | Left Click: Fire Shotgun"
  },
  {
    id: "sokoban",
    name: "Sokoban",
    path: "./games/sokoban/index.html",
    category: "games",
    tags: ["Puzzle", "Retro", "Classic"],
    badge: "Puzzle",
    desc: "Classic box-pushing puzzle game with multi-level challenges, step counter, and undo support.",
    controls: "Arrow Keys / WASD: Push Boxes to Target Locations | U: Undo Step | R: Reset Level"
  },
  {
    id: "snake",
    name: "Snake",
    path: "./games/snake/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "Classic",
    desc: "Smooth HTML5 canvas snake game — collect apples, grow your tail, and beat your high score.",
    controls: "Arrow Keys / WASD: Change Snake Direction"
  },
  {
    id: "sudoku",
    name: "Sudoku",
    path: "./games/sudoku/index.html",
    category: "games",
    tags: ["Puzzle", "Casual", "Math"],
    badge: "Brain",
    desc: "Clean interactive Sudoku generator & player with difficulty levels from Very Easy to Very Hard.",
    controls: "Click Cell + Type Number 1-9 | Use Hint and Solve buttons for guidance"
  },
  {
    id: "chess",
    name: "Chess vs AI",
    path: "./games/chess/index.html",
    category: "games",
    tags: ["Strategy", "Turn-Based", "Classic"],
    badge: "AI Strategy",
    desc: "Play chess against an intelligent minimax AI engine with alpha-beta pruning and board evaluation.",
    controls: "Mouse: Drag & Drop Pieces to make moves"
  },
  {
    id: "micropolisjs",
    name: "MicropolisJS (SimCity)",
    path: "./games/micropolisjs/index.html",
    category: "games",
    tags: ["Simulation", "Strategy", "Classic"],
    badge: "Retro Sim",
    desc: "The open-source HTML5/JS port of the original SimCity city-building and zoning simulation.",
    controls: "Mouse: Select Construction Tools, Zone Land, Build Infrastructure, Manage Budgets"
  },
  {
    id: "solitaire",
    name: "Solitaire",
    path: "./games/solitaire/index.html",
    category: "games",
    tags: ["Cards", "Casual", "Classic"],
    badge: "Classic",
    desc: "Classic Klondike Solitaire with smooth card dragging, auto-complete, timer, and win animations.",
    controls: "Mouse: Drag & Drop Cards | Double Click: Auto-move to Foundation"
  },
  {
    id: "asteroids",
    name: "Asteroids",
    path: "./games/asteroids/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Vector",
    desc: "Authentic vector-line space shooter — blast drifting space rocks and alien UFOs.",
    controls: "Left / Right Arrows: Rotate Ship | Up Arrow: Thrust | Spacebar: Fire Blaster | Down Arrow: Hyperspace"
  },
  {
    id: "skifree",
    name: "SkiFree.js",
    path: "./games/skifree/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "DOS Retro",
    desc: "The iconic Windows skiing classic — weave around slalom flags, jump ramps, and outrun the Abominable Snow Monster.",
    controls: "Left / Right Arrows: Steer Skiier | Down Arrow: Accelerate | Up Arrow: Slow Down | F: Fast Mode"
  },
  {
    id: "tower-defense",
    name: "Canvas Tower Defense",
    path: "./games/tower-defense/index.html",
    category: "games",
    tags: ["Strategy", "Tower Defense"],
    badge: "Strategy",
    desc: "Tactical desktop maze-building tower defense with cannon, laser, and missile turrets against waves of enemies.",
    controls: "Mouse: Place Turrets, Build Mazes, Upgrade Firepower, Start Waves"
  },

  // --- Original Multi-file Games ---
  {
    id: "2048",
    name: "2048",
    path: "./games/2048/index.html",
    category: "games",
    tags: ["Puzzle", "Casual", "Math"],
    badge: "Classic",
    desc: "The addictive tile-sliding number puzzle — merge identical numbers to build the legendary 2048 tile.",
    controls: "Arrow Keys / Swipe: Slide all tiles on the grid"
  },
  {
    id: "1255-burgomaster",
    name: "1255 Burgomaster",
    path: "./games/1255-burgomaster/index.html",
    category: "games",
    tags: ["Strategy", "RPG", "Medieval"],
    badge: "Strategy",
    desc: "Historical medieval city management, diplomacy, garrison defense, and economic tactical simulation.",
    controls: "Mouse: Navigate UI, Manage Resources, Issue Decrees"
  },
  {
    id: "3d-city",
    name: "3D.City",
    path: "./games/3d.city/index.html",
    category: "games",
    tags: ["Simulation", "3D", "City Builder"],
    badge: "3D",
    desc: "Full 3D WebGL isometric city planning and zoning simulator running smoothly in the browser.",
    controls: "Mouse: Place Roads & Zones | Middle Mouse / Right Click: Rotate & Zoom Camera"
  },
  {
    id: "ancient-beast",
    name: "Ancient Beast",
    path: "./games/AncientBeast/index.html",
    category: "games",
    tags: ["Strategy", "Turn-Based", "RPG"],
    badge: "Turn-Based",
    desc: "Turn-based tactical creature battling played on a hex grid with unique elemental beasts.",
    controls: "Mouse: Select Units, Move, Cast Special Abilities"
  },
  {
    id: "a-dark-room",
    name: "A Dark Room",
    path: "./games/adarkroom/index.html",
    category: "games",
    tags: ["RPG", "Text", "Incremental"],
    badge: "Atmospheric",
    desc: "Minimalist, mysterious text adventure that grows from a silent fire into a sprawling world.",
    controls: "Mouse: Click choices and buttons to stoke fire and explore"
  },
  {
    id: "aquastax",
    name: "Aquastax",
    path: "./games/aquastax/index.html",
    category: "games",
    tags: ["Puzzle", "Physics"],
    badge: "Puzzle",
    desc: "Satisfying physics puzzle where you balance and strategically place buoyant aquatic shapes.",
    controls: "Mouse: Drop and arrange puzzle pieces"
  },
  {
    id: "arashi-js",
    name: "Arashi JS",
    path: "./games/arashi-js/index.html",
    category: "games",
    tags: ["Arcade", "Action", "Retro"],
    badge: "Retro",
    desc: "Vector-style arcade space shooter tribute to the arcade legend Tempest.",
    controls: "Left / Right Arrows: Rotate along web rim | Space: Fire blasters | Z: Superzapper"
  },
  {
    id: "asdf",
    name: "ASDF",
    path: "./games/asdf/index.html",
    category: "games",
    tags: ["Arcade", "Reflex", "Typing"],
    badge: "Reflex",
    desc: "Test your lightning-quick reflexes in this rhythmic high-speed keyboard challenge.",
    controls: "A, S, D, F Keys: Tap corresponding keys to match descending patterns"
  },
  {
    id: "ball-and-wall",
    name: "Ball and Wall",
    path: "./games/ball-and-wall/index.html",
    category: "games",
    tags: ["Arcade", "Classic", "Breakout"],
    badge: "Classic",
    desc: "Enhanced brick-breaker arcade game with multi-balls, powerups, lasers, and custom level editor.",
    controls: "Mouse / Left & Right Arrows: Move Paddle | Space / Click: Launch Ball"
  },
  {
    id: "banania",
    name: "Banania",
    path: "./games/Banania/banania.html",
    category: "games",
    tags: ["Retro", "Puzzle", "Classic"],
    badge: "DOS Retro",
    desc: "Authentic remake of the classic DOS game — collect every banana in the maze and dodge monsters.",
    controls: "Arrow Keys: Move character through maze"
  },
  {
    id: "blockrain",
    name: "Blockrain",
    path: "./games/blockrain/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Puzzle"],
    badge: "Arcade",
    desc: "Sleek retro-futuristic block falling puzzle with neon visual effects and smooth responsive controls.",
    controls: "Left / Right: Move | Up Arrow: Rotate | Down Arrow: Soft Drop | Space: Hard Drop"
  },
  {
    id: "canvas-tetris",
    name: "Canvas Tetris",
    path: "./games/canvas-tetris/index.html",
    category: "games",
    tags: ["Arcade", "Classic", "Puzzle"],
    badge: "Classic",
    desc: "Clean HTML5 canvas implementation of standard Tetris with scoring and line clears.",
    controls: "Left / Right: Move | Up: Rotate | Down: Soft Drop | Space: Drop"
  },
  {
    id: "crappybird",
    name: "CrappyBird",
    path: "./games/CrappyBird/index.html",
    category: "games",
    tags: ["Arcade", "Casual", "One-Button"],
    badge: "Casual",
    desc: "Humorous Flappy Bird parody — tap to flap your wings and weave through tricky pipe obstacles.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "crystalquest",
    name: "CrystalQuest",
    path: "./games/CrystalQuest/index.html",
    category: "games",
    tags: ["Arcade", "Shooter", "Retro"],
    badge: "Retro",
    desc: "Classic arcade arena shooter — vacuum up all crystals while blasting invading alien swarms.",
    controls: "Mouse: Move ship | Mouse Click: Fire blaster | Space: Smart Bomb"
  },
  {
    id: "enduro",
    name: "Enduro",
    path: "./games/enduro/index.html",
    category: "games",
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
    tags: ["Puzzle", "Arcade", "Hexagonal"],
    badge: "Popular",
    desc: "Fast-paced hexagonal puzzle — rotate the center hexagon to match 3 or more blocks of the same color.",
    controls: "Left / Right Arrows or A / D: Rotate hexagon | Down Arrow: Speed up block fall"
  },
  {
    id: "opensc2k",
    name: "OpenSC2K",
    path: "./games/OpenSC2K/index.html",
    category: "games",
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
    tags: ["Incremental", "Sci-Fi", "Strategy"],
    badge: "Sci-Fi",
    desc: "Deep sci-fi incremental simulation — harvest solar energy, colonize planets, and build Dyson spheres.",
    controls: "Mouse: Manage industry, research technologies, build rockets"
  },
  {
    id: "teterjs",
    name: "Teterjs",
    path: "./games/teterjs/index.html",
    category: "games",
    tags: ["Arcade", "Puzzle", "Classic"],
    badge: "Puzzle",
    desc: "Crisp JavaScript block puzzle with ghost piece preview, hold queue, and level progression.",
    controls: "Left / Right: Move | Up: Rotate CW | Z: Rotate CCW | C: Hold | Space: Hard drop"
  },

  // --- Emulators ---
  {
    id: "emulatorjs",
    name: "EmulatorJS",
    path: "./emulators/Emulatorjs/index.html",
    category: "emulators",
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
    tags: ["Emulator", "OS", "Sandbox"],
    badge: "Virtual OS",
    desc: "Complete desktop operating system running directly in your browser with Linux/x86 app emulation.",
    controls: "Mouse & Keyboard: Full desktop window manager, terminal, file system, and browser apps"
  },

  // --- Tools & Proxies ---
  {
    id: "cyberchef",
    name: "CyberChef",
    path: "./other/CyberChef/index.html",
    category: "other",
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
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "High-performance web proxy client built on modern service worker proxy technologies.",
    controls: "Enter URL or search keyword into the navigation search bar"
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
