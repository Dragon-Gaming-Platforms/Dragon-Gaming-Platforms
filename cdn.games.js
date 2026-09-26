/* ================================================================
   DRAGON GAMING PLATFORMS — CDN / STANDALONE DATA CATALOG
   ================================================================ */
const CDN_BASE = "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/";

const GAMES_DATA = [
  // --- WASM & Singlefile Action / 3D ---
  {
    id: "eaglercraft-1-12-2-wasm",
    name: "Eaglercraft 1.12.2 WASM",
    path: CDN_BASE + "games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
    category: "games",
    tags: ["Sandbox", "Survival", "3D", "WASM"],
    badge: "WASM",
    desc: "Full Minecraft 1.12.2 running offline directly in your browser via WebAssembly.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place / Interact | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-12-2-js",
    name: "Eaglercraft 1.12.2 JS",
    path: CDN_BASE + "games/singlefiles/Eaglercraft-JS-1.12.2.html",
    category: "games",
    tags: ["Sandbox", "Survival", "3D"],
    badge: "3D",
    desc: "JavaScript client for Minecraft 1.12.2 with online multiplayer and singleplayer worlds.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-1-8-8-js",
    name: "Eaglercraft 1.8.8 JS",
    path: CDN_BASE + "games/singlefiles/Eaglercraft-JS-1.8.8.html",
    category: "games",
    tags: ["Sandbox", "Survival", "3D", "Multiplayer"],
    badge: "Popular",
    desc: "Classic Minecraft 1.8.8 with server browser, custom skins, and fluid combat.",
    controls: "WASD: Move | Space: Jump | Mouse: Look / Mine | E: Inventory | T: Chat"
  },
  {
    id: "eaglercraft-1-8-8-wasm",
    name: "Eaglercraft 1.8.8 WASM",
    path: CDN_BASE + "games/singlefiles/Eaglercraft-1.8.8-offline-WASM.html",
    category: "games",
    tags: ["Sandbox", "Survival", "3D", "WASM"],
    badge: "WASM",
    desc: "Ultra-fast WebAssembly offline edition of Minecraft 1.8.8.",
    controls: "WASD: Move | Space: Jump | Left/Right Click: Mine/Place | E: Inventory"
  },
  {
    id: "balatro",
    name: "Balatro",
    path: CDN_BASE + "games/singlefiles/Balatro.html",
    category: "games",
    tags: ["Roguelike", "Cards", "Strategy"],
    badge: "Hot",
    desc: "The hit poker roguelike — combine valid poker hands with wild Joker cards for insane synergies.",
    controls: "Mouse / Touch: Select Cards, Play Hand, Buy Jokers & Packs"
  },
  {
    id: "bloons-td4",
    name: "Bloons TD4",
    path: CDN_BASE + "games/singlefiles/Bloons-TD4.html",
    category: "games",
    tags: ["Strategy", "Tower Defense", "Classic"],
    badge: "Classic",
    desc: "Pop relentless waves of bloons using dart monkeys, tack shooters, mortars, and super monkeys.",
    controls: "Mouse: Drag & Place Towers, Upgrade, Target Priority"
  },
  {
    id: "drive-mad",
    name: "Drive Mad",
    path: CDN_BASE + "games/singlefiles/Drive-Mad.html",
    category: "games",
    tags: ["Driving", "Physics", "3D"],
    badge: "3D",
    desc: "Drive custom 4x4 monster trucks across tricky stunt courses without flipping or smashing.",
    controls: "W / Up / D / Right: Accelerate | S / Down / A / Left: Reverse / Tilt | R: Restart"
  },
  {
    id: "escape-road",
    name: "Escape Road",
    path: CDN_BASE + "games/singlefiles/Escape-Road.html",
    category: "games",
    tags: ["Action", "Driving", "3D"],
    badge: "Action",
    desc: "High-octane endless police chase — dodge squad cars, SWAT trucks, and helicopters in city traffic.",
    controls: "A / D or Left / Right Arrows: Steer | Space / Shift: Drift / Boost"
  },
  {
    id: "hole-io",
    name: "Hole.io",
    path: CDN_BASE + "games/singlefiles/Hole.io.html",
    category: "games",
    tags: ["Arcade", "Multiplayer", "3D"],
    badge: "Popular",
    desc: "Control a growing black hole, swallow pedestrians, cars, and whole skyscrapers to dominate the city.",
    controls: "Mouse / Drag / Arrow Keys: Move Hole"
  },
  {
    id: "moto-x3m-2",
    name: "Moto x3m 2",
    path: CDN_BASE + "games/singlefiles/Moto-x3m-2.html",
    category: "games",
    tags: ["Racing", "Physics", "Stunt"],
    badge: "Stunt",
    desc: "Extreme dirt bike trial racing across explosive stunt courses with backflips and speed traps.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Lean / Flip | Space: Respawn"
  },
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    path: CDN_BASE + "games/singlefiles/Ragdoll-Archers.html",
    category: "games",
    tags: ["Action", "Physics", "Shooter"],
    badge: "Physics",
    desc: "Precision archery combat with dynamic ragdoll physics, custom arrow types, and armor upgrades.",
    controls: "Mouse Drag & Release: Aim & Shoot Arrow | Space: Jump / Shield"
  },
  {
    id: "recoil",
    name: "Recoil",
    path: CDN_BASE + "games/singlefiles/Recoil.html",
    category: "games",
    tags: ["Action", "Shooter", "Physics"],
    badge: "Action",
    desc: "Navigate hazardous arenas and eliminate enemies using only the explosive recoil of your weapons.",
    controls: "Mouse Click: Aim & Fire weapon to propel yourself"
  },
  {
    id: "snowrider-3d",
    name: "Snowrider 3D",
    path: CDN_BASE + "games/singlefiles/Snowrider.html",
    category: "games",
    tags: ["Sports", "3D", "Endless"],
    badge: "3D",
    desc: "Speed down massive snowy mountains, dodging pine trees, rolling snowballs, and giant cliffs.",
    controls: "Left / Right Arrows or A / D: Steer | Up Arrow or W: Jump Sled"
  },
  {
    id: "vex-8",
    name: "Vex 8",
    path: CDN_BASE + "games/singlefiles/Vex-8.html",
    category: "games",
    tags: ["Action", "Platformer", "Parkour"],
    badge: "Platformer",
    desc: "Precision stickman platformer packed with razor-sharp saws, moving lasers, and endless parkour.",
    controls: "WASD / Arrow Keys: Run, Jump, Slide, Wall-jump | Down Arrow: Crouch / Enter Portal"
  },
  {
    id: "awesome-tanks-2",
    name: "Awesome Tanks 2",
    path: CDN_BASE + "games/singlefiles/awesometanks2.html",
    category: "games",
    tags: ["Action", "Shooter", "Tanks"],
    badge: "Action",
    desc: "Top-down tank combat — blast enemy bunkers, collect cash, and upgrade armor, lasers, and cannons.",
    controls: "WASD / Arrows: Drive Tank | Mouse: Aim & Fire Main Turret | 1-9: Switch Weapon"
  },
  {
    id: "dreadhead-parkour",
    name: "Dreadhead Parkour",
    path: CDN_BASE + "games/singlefiles/dreadheadparkour.htm",
    category: "games",
    tags: ["Action", "Runner", "Parkour"],
    badge: "Runner",
    desc: "Vault over spikes, slide under bomb traps, and perform stunts in this high-energy parkour runner.",
    controls: "D / Right Arrow: Run | W / Up Arrow: Jump & Vault | S / Down Arrow: Slide"
  },
  {
    id: "borg-games",
    name: "Borg Games",
    path: CDN_BASE + "games/singlefiles/Borg-Games.html",
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
    path: CDN_BASE + "games/space-cadet-pinball/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "WASM", "3D"],
    badge: "WASM 3D",
    desc: "The legendary 3D Pinball for Windows - Space Cadet running natively in WebAssembly.",
    controls: "Space: Launch Ball / Plunger | Z: Left Flipper | /: Right Flipper | Space / X / . : Nudge Table"
  },
  {
    id: "heroine-dusk",
    name: "Heroine Dusk",
    path: CDN_BASE + "games/heroine-dusk/index.html",
    category: "games",
    tags: ["RPG", "Retro", "Turn-Based", "Adventure"],
    badge: "RPG",
    desc: "8-bit turn-based first-person dungeon crawler RPG — explore eerie maps and defeat fantasy monsters.",
    controls: "Arrow Keys / WASD: Move & Turn | Mouse: Click Menu Actions & Spells"
  },
  {
    id: "clumsy-bird",
    name: "Clumsy Bird",
    path: CDN_BASE + "games/clumsy-bird/index.html",
    category: "games",
    tags: ["Arcade", "Casual", "One-Button"],
    badge: "Casual",
    desc: "Smooth, responsive MelonJS obstacle navigation arcade classic.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    path: CDN_BASE + "games/minesweeper/index.html",
    category: "games",
    tags: ["Puzzle", "Retro", "Classic"],
    badge: "Classic",
    desc: "Classic Minesweeper with difficulty presets, custom boards, timer, and flag markers.",
    controls: "Left Click: Reveal Tile | Right Click: Place / Remove Flag | Smiley Face: Restart"
  },
  {
    id: "duck-hunt",
    name: "Duck Hunt JS",
    path: CDN_BASE + "games/duck-hunt/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Retro",
    desc: "Authentic NES Duck Hunt recreation with retro dog animations, clay shooting, and arcade scoring.",
    controls: "Mouse: Aim Crosshair | Left Click: Fire Shotgun"
  },
  {
    id: "sokoban",
    name: "Sokoban",
    path: CDN_BASE + "games/sokoban/index.html",
    category: "games",
    tags: ["Puzzle", "Retro", "Classic"],
    badge: "Puzzle",
    desc: "Classic box-pushing puzzle game with multi-level challenges, step counter, and undo support.",
    controls: "Arrow Keys / WASD: Push Boxes to Target Locations | U: Undo Step | R: Reset Level"
  },
  {
    id: "snake",
    name: "Snake",
    path: CDN_BASE + "games/snake/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "Classic",
    desc: "Smooth HTML5 canvas snake game — collect apples, grow your tail, and beat your high score.",
    controls: "Arrow Keys / WASD: Change Snake Direction"
  },
  {
    id: "sudoku",
    name: "Sudoku",
    path: CDN_BASE + "games/sudoku/index.html",
    category: "games",
    tags: ["Puzzle", "Casual", "Math"],
    badge: "Brain",
    desc: "Clean interactive Sudoku generator & player with difficulty levels from Very Easy to Very Hard.",
    controls: "Click Cell + Type Number 1-9 | Use Hint and Solve buttons for guidance"
  },
  {
    id: "chess",
    name: "Chess vs AI",
    path: CDN_BASE + "games/chess/index.html",
    category: "games",
    tags: ["Strategy", "Turn-Based", "Classic"],
    badge: "AI Strategy",
    desc: "Play chess against an intelligent minimax AI engine with alpha-beta pruning and board evaluation.",
    controls: "Mouse: Drag & Drop Pieces to make moves"
  },
  {
    id: "micropolisjs",
    name: "MicropolisJS (SimCity)",
    path: CDN_BASE + "games/micropolisjs/index.html",
    category: "games",
    tags: ["Simulation", "Strategy", "Classic"],
    badge: "Retro Sim",
    desc: "The open-source HTML5/JS port of the original SimCity city-building and zoning simulation.",
    controls: "Mouse: Select Construction Tools, Zone Land, Build Infrastructure, Manage Budgets"
  },
  {
    id: "solitaire",
    name: "Solitaire",
    path: CDN_BASE + "games/solitaire/index.html",
    category: "games",
    tags: ["Cards", "Casual", "Classic"],
    badge: "Classic",
    desc: "Classic Klondike Solitaire with smooth card dragging, auto-complete, timer, and win animations.",
    controls: "Mouse: Drag & Drop Cards | Double Click: Auto-move to Foundation"
  },
  {
    id: "asteroids",
    name: "Asteroids",
    path: CDN_BASE + "games/asteroids/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Shooter"],
    badge: "Vector",
    desc: "Authentic vector-line space shooter — blast drifting space rocks and alien UFOs.",
    controls: "Left / Right Arrows: Rotate Ship | Up Arrow: Thrust | Spacebar: Fire Blaster | Down Arrow: Hyperspace"
  },
  {
    id: "skifree",
    name: "SkiFree.js",
    path: CDN_BASE + "games/skifree/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Classic"],
    badge: "DOS Retro",
    desc: "The iconic Windows skiing classic — weave around slalom flags, jump ramps, and outrun the Abominable Snow Monster.",
    controls: "Left / Right Arrows: Steer Skiier | Down Arrow: Accelerate | Up Arrow: Slow Down | F: Fast Mode"
  },
  {
    id: "tower-defense",
    name: "Canvas Tower Defense",
    path: CDN_BASE + "games/tower-defense/index.html",
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
    path: CDN_BASE + "games/2048/index.html",
    category: "games",
    tags: ["Puzzle", "Casual", "Math"],
    badge: "Classic",
    desc: "The addictive tile-sliding number puzzle — merge identical numbers to build the legendary 2048 tile.",
    controls: "Arrow Keys / Swipe: Slide all tiles on the grid"
  },
  {
    id: "1255-burgomaster",
    name: "1255 Burgomaster",
    path: CDN_BASE + "games/1255-burgomaster/index.html",
    category: "games",
    tags: ["Strategy", "RPG", "Medieval"],
    badge: "Strategy",
    desc: "Historical medieval city management, diplomacy, garrison defense, and economic tactical simulation.",
    controls: "Mouse: Navigate UI, Manage Resources, Issue Decrees"
  },
  {
    id: "3d-city",
    name: "3D.City",
    path: CDN_BASE + "games/3d.city/index.html",
    category: "games",
    tags: ["Simulation", "3D", "City Builder"],
    badge: "3D",
    desc: "Full 3D WebGL isometric city planning and zoning simulator running smoothly in the browser.",
    controls: "Mouse: Place Roads & Zones | Middle Mouse / Right Click: Rotate & Zoom Camera"
  },
  {
    id: "ancient-beast",
    name: "Ancient Beast",
    path: CDN_BASE + "games/AncientBeast/index.html",
    category: "games",
    tags: ["Strategy", "Turn-Based", "RPG"],
    badge: "Turn-Based",
    desc: "Turn-based tactical creature battling played on a hex grid with unique elemental beasts.",
    controls: "Mouse: Select Units, Move, Cast Special Abilities"
  },
  {
    id: "a-dark-room",
    name: "A Dark Room",
    path: CDN_BASE + "games/adarkroom/index.html",
    category: "games",
    tags: ["RPG", "Text", "Incremental"],
    badge: "Atmospheric",
    desc: "Minimalist, mysterious text adventure that grows from a silent fire into a sprawling world.",
    controls: "Mouse: Click choices and buttons to stoke fire and explore"
  },
  {
    id: "aquastax",
    name: "Aquastax",
    path: CDN_BASE + "games/aquastax/index.html",
    category: "games",
    tags: ["Puzzle", "Physics"],
    badge: "Puzzle",
    desc: "Satisfying physics puzzle where you balance and strategically place buoyant aquatic shapes.",
    controls: "Mouse: Drop and arrange puzzle pieces"
  },
  {
    id: "arashi-js",
    name: "Arashi JS",
    path: CDN_BASE + "games/arashi-js/index.html",
    category: "games",
    tags: ["Arcade", "Action", "Retro"],
    badge: "Retro",
    desc: "Vector-style arcade space shooter tribute to the arcade legend Tempest.",
    controls: "Left / Right Arrows: Rotate along web rim | Space: Fire blasters | Z: Superzapper"
  },
  {
    id: "asdf",
    name: "ASDF",
    path: CDN_BASE + "games/asdf/index.html",
    category: "games",
    tags: ["Arcade", "Reflex", "Typing"],
    badge: "Reflex",
    desc: "Test your lightning-quick reflexes in this rhythmic high-speed keyboard challenge.",
    controls: "A, S, D, F Keys: Tap corresponding keys to match descending patterns"
  },
  {
    id: "ball-and-wall",
    name: "Ball and Wall",
    path: CDN_BASE + "games/ball-and-wall/index.html",
    category: "games",
    tags: ["Arcade", "Classic", "Breakout"],
    badge: "Classic",
    desc: "Enhanced brick-breaker arcade game with multi-balls, powerups, lasers, and custom level editor.",
    controls: "Mouse / Left & Right Arrows: Move Paddle | Space / Click: Launch Ball"
  },
  {
    id: "banania",
    name: "Banania",
    path: CDN_BASE + "games/Banania/banania.html",
    category: "games",
    tags: ["Retro", "Puzzle", "Classic"],
    badge: "DOS Retro",
    desc: "Authentic remake of the classic DOS game — collect every banana in the maze and dodge monsters.",
    controls: "Arrow Keys: Move character through maze"
  },
  {
    id: "blockrain",
    name: "Blockrain",
    path: CDN_BASE + "games/blockrain/index.html",
    category: "games",
    tags: ["Arcade", "Retro", "Puzzle"],
    badge: "Arcade",
    desc: "Sleek retro-futuristic block falling puzzle with neon visual effects and smooth responsive controls.",
    controls: "Left / Right: Move | Up Arrow: Rotate | Down Arrow: Soft Drop | Space: Hard Drop"
  },
  {
    id: "canvas-tetris",
    name: "Canvas Tetris",
    path: CDN_BASE + "games/canvas-tetris/index.html",
    category: "games",
    tags: ["Arcade", "Classic", "Puzzle"],
    badge: "Classic",
    desc: "Clean HTML5 canvas implementation of standard Tetris with scoring and line clears.",
    controls: "Left / Right: Move | Up: Rotate | Down: Soft Drop | Space: Drop"
  },
  {
    id: "crappybird",
    name: "CrappyBird",
    path: CDN_BASE + "games/CrappyBird/index.html",
    category: "games",
    tags: ["Arcade", "Casual", "One-Button"],
    badge: "Casual",
    desc: "Humorous Flappy Bird parody — tap to flap your wings and weave through tricky pipe obstacles.",
    controls: "Spacebar / Mouse Click / Touch: Flap wings"
  },
  {
    id: "crystalquest",
    name: "CrystalQuest",
    path: CDN_BASE + "games/CrystalQuest/index.html",
    category: "games",
    tags: ["Arcade", "Shooter", "Retro"],
    badge: "Retro",
    desc: "Classic arcade arena shooter — vacuum up all crystals while blasting invading alien swarms.",
    controls: "Mouse: Move ship | Mouse Click: Fire blaster | Space: Smart Bomb"
  },
  {
    id: "enduro",
    name: "Enduro",
    path: CDN_BASE + "games/enduro/index.html",
    category: "games",
    tags: ["Racing", "Retro", "Classic"],
    badge: "Atari Retro",
    desc: "Tribute to the classic Atari 2600 endurance racer with dynamic weather, fog, and day/night cycles.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left / Right Arrows: Steer"
  },
  {
    id: "hexgl",
    name: "HexGL",
    path: CDN_BASE + "games/HexGL/index.html",
    category: "games",
    tags: ["Racing", "3D", "Sci-Fi"],
    badge: "3D",
    desc: "Futuristic high-speed anti-gravity 3D racer built in WebGL with stunning Three.js graphics.",
    controls: "Up / W: Accelerate | A / D or Left / Right: Steer | Q / E: Air brakes | Space: Boost"
  },
  {
    id: "hextris",
    name: "Hextris",
    path: CDN_BASE + "games/Hextris/index.html",
    category: "games",
    tags: ["Puzzle", "Arcade", "Hexagonal"],
    badge: "Popular",
    desc: "Fast-paced hexagonal puzzle — rotate the center hexagon to match 3 or more blocks of the same color.",
    controls: "Left / Right Arrows or A / D: Rotate hexagon | Down Arrow: Speed up block fall"
  },
  {
    id: "opensc2k",
    name: "OpenSC2K",
    path: CDN_BASE + "games/OpenSC2K/index.html",
    category: "games",
    tags: ["Simulation", "Classic", "Retro"],
    badge: "Retro Sim",
    desc: "Open-source WebGL recreation of the classic city simulator SimCity 2000.",
    controls: "Mouse: Select zoning tools, lay pipes, construct buildings and power grids"
  },
  {
    id: "pacman-canvas",
    name: "Pacman Canvas",
    path: CDN_BASE + "games/pacman-canvas/index.htm",
    category: "games",
    tags: ["Arcade", "Classic", "Retro"],
    badge: "Classic",
    desc: "Faithful HTML5 canvas recreation of the legendary arcade Pac-Man with original sounds.",
    controls: "Arrow Keys / WASD: Steer Pac-Man | Space: Pause / Start"
  },
  {
    id: "sandspiel",
    name: "Sandspiel",
    path: CDN_BASE + "games/sandspiel/index.html",
    category: "games",
    tags: ["Simulation", "Sandbox", "Physics"],
    badge: "Physics",
    desc: "Falling sand cellular automata physics game written in Rust & WebAssembly.",
    controls: "Mouse Left Click: Draw selected element | Right Click: Erase | 1-9: Select element"
  },
  {
    id: "space-company",
    name: "Space Company",
    path: CDN_BASE + "games/SpaceCompany/index.html",
    category: "games",
    tags: ["Incremental", "Sci-Fi", "Strategy"],
    badge: "Sci-Fi",
    desc: "Deep sci-fi incremental simulation — harvest solar energy, colonize planets, and build Dyson spheres.",
    controls: "Mouse: Manage industry, research technologies, build rockets"
  },
  {
    id: "teterjs",
    name: "Teterjs",
    path: CDN_BASE + "games/teterjs/index.html",
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
    path: CDN_BASE + "emulators/Emulatorjs/index.html",
    category: "emulators",
    tags: ["Emulator", "Retro", "Multi-System"],
    badge: "Emulator",
    desc: "Multi-console retro emulator supporting NES, SNES, GBA, GBC, N64, Genesis, PS1 with ROM drag-and-drop.",
    controls: "Drag & drop any ROM file or browse local files. Supports gamepad & custom keyboard mapping."
  },
  {
    id: "anura-os",
    name: "Anura OS",
    path: CDN_BASE + "emulators/anuraOS.html",
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
    path: CDN_BASE + "other/CyberChef/index.html",
    category: "other",
    tags: ["Tools", "Utility", "Cryptography"],
    badge: "Utility",
    desc: "The cyber Swiss Army knife by GCHQ for encoding, decoding, hashing, encryption, regex, and hex editing.",
    controls: "Mouse: Drag operations into recipe pipeline, paste input, inspect output"
  },
  {
    id: "gust-browser",
    name: "GUST",
    path: CDN_BASE + "browsers/GUST.html",
    category: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Full-featured web proxy browser client with tab management and stealth browsing.",
    controls: "Type any web address or search query in the address bar"
  },
  {
    id: "incognito-browser",
    name: "Incognito",
    path: CDN_BASE + "browsers/Incognito.html",
    category: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Fast, privacy-focused proxy gateway designed for unblocked web exploration.",
    controls: "Enter search terms or URL in the navigation bar"
  },
  {
    id: "interstellar-browser",
    name: "Interstellar",
    path: CDN_BASE + "browsers/Interstellar.html",
    category: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "Modern, streamlined web proxy interface with fast loading and responsive controls.",
    controls: "Type search query or website destination into the bar"
  },
  {
    id: "scramjet-browser",
    name: "Scramjet",
    path: CDN_BASE + "browsers/Scramjet.html",
    category: "other",
    tags: ["Browser", "Proxy", "Utility"],
    badge: "Browser",
    desc: "High-performance web proxy client built on modern service worker proxy technologies.",
    controls: "Enter URL or search keyword into the navigation search bar"
  }
,
  {
    id: "chip8-emulator",
    name: "CHIP-8 Virtual Machine",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/emulators/chip8/index.html",
    category: "emulators",
    tags: ["Emulator","Retro","CHIP-8","Arcade"],
    badge: "Retro",
    desc: "Classic CHIP-8 virtual machine emulator with 24 built-in retro games including Pong, Space Invaders, Brix, and Tetris.",
    controls: "Keyboard: Hex keypad (1-4, Q-R, A-F, Z-V) | Select ROM from dropdown menu"
  },
  {
    id: "binjgb-emulator",
    name: "binjgb Game Boy Emulator",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/emulators/binjgb/index.html",
    category: "emulators",
    tags: ["Emulator","GameBoy","GBC","WASM","Retro"],
    badge: "WASM",
    desc: "High-performance Game Boy and Game Boy Color WASM emulator with built-in Porklike roguelike and drag-and-drop ROM loading.",
    controls: "Arrow Keys: D-Pad | Z: A Button | X: B Button | Enter: Start | Shift: Select"
  },
  {
    id: "eaglercraft-1-5-2",
    name: "Eaglercraft 1.5.2 Offline",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Eaglercraft-1.5.2-Offline.html",
    category: "games",
    tags: ["Sandbox","Survival","3D","Minecraft"],
    badge: "3D",
    desc: "Classic Minecraft 1.5.2 running completely offline in your browser with singleplayer and world saves.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place | E: Inventory | Esc: Pause"
  },
  {
    id: "eaglercraft-beta-1-3",
    name: "Eaglercraft Beta 1.3 Offline",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Eaglercraft-Beta-1.3-Offline.html",
    category: "games",
    tags: ["Sandbox","Survival","Retro","Minecraft"],
    badge: "Retro",
    desc: "Nostalgic Minecraft Beta 1.3 offline edition featuring original terrain generation and retro gameplay.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place | E: Inventory"
  },
  {
    id: "eaglercraft-alpha-1-2-6",
    name: "Eaglercraft Alpha 1.2.6 Offline",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Eaglercraft-Alpha-1.2.6-Offline.html",
    category: "games",
    tags: ["Sandbox","Survival","Retro","Minecraft"],
    badge: "Retro",
    desc: "Classic Minecraft Alpha 1.2.6 running offline with vintage mechanics, Halloween update terrain, and early survival.",
    controls: "WASD: Move | Space: Jump | Left Click: Mine / Attack | Right Click: Place | I: Inventory"
  },
  {
    id: "eaglercraft-indev",
    name: "Eaglercraft Indev Offline",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Eaglercraft-Indev-Offline.html",
    category: "games",
    tags: ["Sandbox","Retro","Minecraft"],
    badge: "Retro",
    desc: "Very early Indev edition of Minecraft running directly in your browser with classic isometric blocks.",
    controls: "WASD: Move | Space: Jump | Left Click: Break | Right Click: Build"
  },
  {
    id: "escape-road-2",
    name: "Escape Road 2",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Escape-Road-2.html",
    category: "games",
    tags: ["Driving","3D","Action","Arcade"],
    badge: "3D",
    desc: "High-octane police getaway chase game with upgraded 3D city physics, explosive powerups, and new vehicles.",
    controls: "A/D or Left/Right Arrow Keys: Steer | Space: Drift / Boost"
  },
  {
    id: "slow-roads",
    name: "Slow Roads 3D",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Slow-Roads.html",
    category: "games",
    tags: ["Driving","3D","Casual","Relaxing"],
    badge: "3D",
    desc: "Anslo procedural 3D endless scenic driving game with dynamic weather, day/night cycles, and atmospheric music.",
    controls: "WASD or Arrow Keys: Drive & Steer | Space: Handbrake | C: Change Camera | R: Reset"
  },
  {
    id: "sandboxels",
    name: "Sandboxels",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Sandboxels.html",
    category: "games",
    tags: ["Sandbox","Physics","Simulation","Science"],
    badge: "Sim",
    desc: "R74n cellular automata sandbox game with hundreds of interacting chemical elements, heat, electricity, and life.",
    controls: "Mouse: Select element & Paint | Scroll: Brush size | Space: Pause simulation"
  },
  {
    id: "operius",
    name: "Operius 3D",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Operius.html",
    category: "games",
    tags: ["Shooter","3D","Arcade","Action","Sci-Fi"],
    badge: "3D",
    desc: "Fast-paced cylindrical 3D vector tube arcade shooter with intense synthwave beats and neon enemies.",
    controls: "A/D or Left/Right Arrow Keys: Rotate around tube | Space or Up Arrow: Shoot"
  },
  {
    id: "survev-io",
    name: "Survev.io",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Survev-io.html",
    category: "games",
    tags: ["Action","Shooter","Survival","Multiplayer"],
    badge: "Action",
    desc: "Top-down 2D battle royale survival shooter. Loot weapons, break crates, avoid the red zone, and be the last survivor.",
    controls: "WASD: Move | Mouse: Aim & Shoot | F: Interact / Loot | 1-4: Switch Weapons | R: Reload"
  },
  {
    id: "territorial-io",
    name: "Territorial.io",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Territorial-io.html",
    category: "games",
    tags: ["Strategy","Tactical","Multiplayer","Casual"],
    badge: "Strategy",
    desc: "Fast-paced real-time territory conquest strategy game. Expand your empire and outmaneuver rival armies.",
    controls: "Mouse: Click territory to attack / expand | Adjust troop percentage slider"
  },
  {
    id: "geometry-dash-scratch",
    name: "Geometry Dash Scratch",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Geometry-Dash-Scratch.html",
    category: "games",
    tags: ["Platformer","Rhythm","Music","Arcade"],
    badge: "Rhythm",
    desc: "Griffpatch rhythm platformer recreation featuring stereo tracks, jump rings, and high-speed gravity portals.",
    controls: "Space / Up Arrow / Left Click: Jump & Fly | P: Pause"
  },
  {
    id: "cat-mario",
    name: "Cat Mario (Syobon Action)",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Cat-Mario.html",
    category: "games",
    tags: ["Platformer","Puzzle","Retro","Comedy"],
    badge: "Retro",
    desc: "The infamous Japanese comedy rage platformer filled with unexpected traps, invisible blocks, and flying trolls.",
    controls: "Arrow Keys: Move & Jump | O: Self-Destruct | Esc: Pause"
  },
  {
    id: "paper-io-3d",
    name: "Paper.io 3D",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Paper-io-3D.html",
    category: "games",
    tags: ["Action","3D","Arcade","Casual"],
    badge: "3D",
    desc: "Capture territory across 3D geometric shapes by painting your trail and enclosing land while defending your tail.",
    controls: "Mouse or Arrow Keys: Steer your painter"
  },
  {
    id: "we-become-what-we-behold",
    name: "We Become What We Behold",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/wbwwb/index.html",
    category: "games",
    tags: ["Story","Simulation","Indie","Casual"],
    badge: "Story",
    desc: "Nicky Case 5-minute viral interactive game about news cycles, social media, cameras, and how stories shape human behavior.",
    controls: "Mouse: Aim viewfinder & Click to snap photographs"
  },
  {
    id: "evolution-of-trust",
    name: "The Evolution of Trust",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/trust/index.html",
    category: "games",
    tags: ["Strategy","Simulation","Indie","Educational"],
    badge: "Indie",
    desc: "Nicky Case interactive exploration of game theory, the Prisoner Dilemma, and why we cooperate or betray.",
    controls: "Mouse: Click choices and interact with the simulation"
  },
  {
    id: "parable-of-polygons",
    name: "Parable of the Polygons",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/polygons/index.html",
    category: "games",
    tags: ["Simulation","Indie","Educational"],
    badge: "Sim",
    desc: "Vi Hart & Nicky Case playable post about the mechanics of diversity, individual bias, and systemic patterns.",
    controls: "Mouse: Drag and move unhappy shapes until they feel comfortable"
  },
  {
    id: "javascript-racer",
    name: "OutRun 3D Javascript Racer",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/racer/index.html",
    category: "games",
    tags: ["Driving","3D","Retro","Arcade"],
    badge: "Retro",
    desc: "Jake Gordon classic pseudo-3D OutRun arcade racing game with music tracks, steep hills, tight curves, and rival cars.",
    controls: "Up Arrow: Accelerate | Down Arrow: Brake | Left/Right: Steer | M: Toggle Music"
  },
  {
    id: "tiny-platformer",
    name: "Tiny Platformer",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/platformer/index.html",
    category: "games",
    tags: ["Platformer","Retro","Arcade"],
    badge: "Retro",
    desc: "Jake Gordon retro tile-based physics platformer with smooth jumps, collectibles, and level challenges.",
    controls: "Arrow Keys: Move & Jump | Space: Action"
  },
  {
    id: "javascript-snakes",
    name: "Retro Snakes",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/snakes/index.html",
    category: "games",
    tags: ["Arcade","Casual","Retro"],
    badge: "Classic",
    desc: "Jake Gordon smooth multi-mode classic snake with custom speeds, obstacle walls, and score tracking.",
    controls: "Arrow Keys: Steer Snake | Space: Pause / Resume"
  },
  {
    id: "floppy-bird",
    name: "Floppy Bird",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/floppybird/index.html",
    category: "games",
    tags: ["Arcade","Casual","Retro"],
    badge: "Arcade",
    desc: "Nebez Briefkani pixel-perfect Flappy Bird recreation with sound effects and responsive physics.",
    controls: "Space / Click / Tap: Flap wings"
  },
  {
    id: "flappy-bird-canvas",
    name: "Flappy Bird Canvas",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/flappy-canvas/index.html",
    category: "games",
    tags: ["Arcade","Casual","Retro"],
    badge: "Arcade",
    desc: "Smooth HTML5 Canvas Flappy Bird with high score tracker, retro audio, and medals.",
    controls: "Space or Click: Flap wings"
  },
  {
    id: "sight-and-light",
    name: "Sight & Light",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/sight-and-light/index.html",
    category: "games",
    tags: ["Puzzle","Physics","Indie"],
    badge: "Indie",
    desc: "Nicky Case interactive 2D raycasting and dynamic light exploration game.",
    controls: "Mouse: Move light source | Click to interact"
  }
,
  {
    id: "pacman-dh",
    name: "Classic Pacman Canvas",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/pacman-dh/index.html",
    category: "games",
    tags: ["Arcade","Retro","Classic"],
    badge: "Retro",
    desc: "Dale Harvey accurate HTML5 canvas recreation of the original Pacman arcade classic with ghost AI and authentic sounds.",
    controls: "Arrow Keys or WASD: Move Pacman | N: New Game | P: Pause"
  },
  {
    id: "there-is-no-game",
    name: "There Is No Game",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/There-Is-No-Game.html",
    category: "games",
    tags: ["Puzzle","Comedy","Indie","Story"],
    badge: "Indie",
    desc: "Pascal Cammisotto award-winning meta comedy puzzle game. Whatever you do, do NOT play this non-game.",
    controls: "Mouse: Click, drag, and interact with the narrator elements"
  },
  {
    id: "tanuki-sunset",
    name: "Tanuki Sunset",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Tanuki-Sunset.html",
    category: "games",
    tags: ["Driving","3D","Arcade","Retro"],
    badge: "3D",
    desc: "Vaporwave downhill longboard skating raccoon cruising down scenic coastal roads to relaxing synth beats.",
    controls: "A/D or Left/Right: Steer | S or Down: Drift / 180 Spin | Space: Boost"
  },
  {
    id: "big-tower-tiny-square",
    name: "Big Tower Tiny Square",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Big-Tower-Tiny-Square.html",
    category: "games",
    tags: ["Platformer","Action","Arcade"],
    badge: "Platformer",
    desc: "Precision platformer where you guide a tiny square through a giant single-screen obstacle tower to rescue a pineapple.",
    controls: "A/D or Left/Right Arrow Keys: Move | Space or Up Arrow: Jump | Z: Restart checkpoint"
  },
  {
    id: "awesome-tanks-1",
    name: "Awesome Tanks",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Awesome-Tanks.html",
    category: "games",
    tags: ["Action","Shooter","Tanks","Arcade"],
    badge: "Action",
    desc: "Top-down tactical tank shooter. Destroy enemy turrets, collect coins, and upgrade your armor, lasers, and cannons.",
    controls: "WASD: Drive tank | Mouse: Aim turret & Shoot"
  },
  {
    id: "vex-3",
    name: "Vex 3",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Vex-3.html",
    category: "games",
    tags: ["Platformer","Parkour","Action","Stickman"],
    badge: "Parkour",
    desc: "The classic stickman obstacle course platformer with wall jumping, ziplines, and razor-sharp saws.",
    controls: "WASD or Arrow Keys: Run, Jump, Crouch, Slide"
  },
  {
    id: "vex-4",
    name: "Vex 4",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Vex-4.html",
    category: "games",
    tags: ["Platformer","Parkour","Action","Stickman"],
    badge: "Parkour",
    desc: "Fourth chapter of the Vex parkour saga with 9 action-packed acts and challenging Challenge Rooms.",
    controls: "WASD or Arrow Keys: Move, Jump, Swim, Slide"
  },
  {
    id: "vex-5",
    name: "Vex 5",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Vex-5.html",
    category: "games",
    tags: ["Platformer","Parkour","Action","Stickman"],
    badge: "Parkour",
    desc: "Fifth installment in the Vex franchise with death-defying stunts, laser cannons, and timed levels.",
    controls: "WASD or Arrow Keys: Run, Climb, Jump, Slide"
  },
  {
    id: "vex-6",
    name: "Vex 6",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Vex-6.html",
    category: "games",
    tags: ["Platformer","Parkour","Action","Stickman"],
    badge: "Parkour",
    desc: "Featuring unlockable character skins, daily bonus stages, and 9 brand new high-difficulty obstacle courses.",
    controls: "WASD or Arrow Keys: Move, Jump, Slide"
  },
  {
    id: "vex-7",
    name: "Vex 7",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Vex-7.html",
    category: "games",
    tags: ["Platformer","Parkour","Action","Stickman"],
    badge: "Parkour",
    desc: "Master high-speed stickman acrobatics, glide past surveillance drones, and collect gold stars.",
    controls: "WASD or Arrow Keys: Move, Jump, Slide, Wall-Jump"
  }
,
  {
    id: "basket-random",
    name: "Basket Random",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Basket-Random.html",
    category: "games",
    tags: ["Sports","Physics","2-Player","Arcade"],
    badge: "Sports",
    desc: "Hilarious 2-player ragdoll basketball game with bouncy physics, changing courts, and random balls.",
    controls: "Player 1: W | Player 2: Up Arrow | Tap on touch devices"
  },
  {
    id: "boxing-random",
    name: "Boxing Random",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Boxing-Random.html",
    category: "games",
    tags: ["Sports","Physics","2-Player","Action"],
    badge: "Action",
    desc: "Physics-based ragdoll boxing duel. Land headshots across snowy rings, rooftops, and stormy arenas.",
    controls: "Player 1: W | Player 2: Up Arrow | Tap to jump and punch"
  },
  {
    id: "volley-random",
    name: "Volley Random",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Volley-Random.html",
    category: "games",
    tags: ["Sports","Physics","2-Player","Arcade"],
    badge: "Sports",
    desc: "Ragdoll volleyball chaos with dynamic gravity, different ball types, and sun-soaked beach physics.",
    controls: "Player 1: W | Player 2: Up Arrow | Tap to jump and spike"
  },
  {
    id: "time-shooter-2",
    name: "Time Shooter 2",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Time-Shooter-2.html",
    category: "games",
    tags: ["Shooter","3D","Action","Tactical"],
    badge: "3D",
    desc: "First-person tactical shooter where time only moves when you move. Dodge bullets and eliminate targets.",
    controls: "WASD: Move | Mouse: Aim & Shoot | Right Click: Throw weapon"
  },
  {
    id: "time-shooter-3",
    name: "Time Shooter 3: SWAT",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Time-Shooter-3.html",
    category: "games",
    tags: ["Shooter","3D","Action","Tactical"],
    badge: "3D",
    desc: "SWAT breach and hostage rescue mission with slow-motion mechanics and ballistic shields.",
    controls: "WASD: Move | Mouse: Aim & Shoot | Right Click: Pick Up / Throw"
  },
  {
    id: "temple-of-boom",
    name: "Temple of Boom",
    path: "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/singlefiles/Temple-of-Boom.html",
    category: "games",
    tags: ["Action","Platformer","2-Player","Shooter"],
    badge: "Action",
    desc: "Fast-paced platform survival shooter. Fight endless monster waves or duel a friend in 2-player mode.",
    controls: "Player 1: WASD + E/C | Player 2: Arrow Keys + K/L"
  }
];
