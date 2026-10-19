// All portfolio content lives here. Components hide any field that is empty/null,
// so TODO entries can stay blank until there is real content for them.

import avatar from "../assets/images/header/Hamid.png";

import williwawLogo from "../assets/images/experience/Williwaw.png";
import bcgLogo from "../assets/images/experience/BCG.png";
import paeezanLogo from "../assets/images/experience/PaeezanLogo.png";
import noopArmyLogo from "../assets/images/experience/noopArmyLogo.png";
import colonyLogo from "../assets/images/experience/colony11.png";
import freelanceLogo from "../assets/images/experience/moolfa.png";
import utLogo from "../assets/images/experience/UT_logo.png";
import iustLogo from "../assets/images/experience/iust.png";

import anotherPintBanner from "../assets/images/projects/anotherPint/banner.jpg";
import anotherPintBackground from "../assets/images/projects/anotherPint/background.png";
import anotherPintLogo from "../assets/images/projects/anotherPint/logo.webp";
// Steam store screenshots, in the store's order.
import ap01 from "../assets/images/projects/anotherPint/steam/01.jpg";
import ap02 from "../assets/images/projects/anotherPint/steam/02.jpg";
import ap03 from "../assets/images/projects/anotherPint/steam/03.jpg";
import ap04 from "../assets/images/projects/anotherPint/steam/04.jpg";
import ap05 from "../assets/images/projects/anotherPint/steam/05.jpg";
import ap06 from "../assets/images/projects/anotherPint/steam/06.jpg";
import ap07 from "../assets/images/projects/anotherPint/steam/07.jpg";
import ap08 from "../assets/images/projects/anotherPint/steam/08.jpg";
import ap09 from "../assets/images/projects/anotherPint/steam/09.jpg";
import ap10 from "../assets/images/projects/anotherPint/steam/10.jpg";
import ap11 from "../assets/images/projects/anotherPint/steam/11.jpg";
import ap12 from "../assets/images/projects/anotherPint/steam/12.jpg";
import ap13 from "../assets/images/projects/anotherPint/steam/13.jpg";
import ap14 from "../assets/images/projects/anotherPint/steam/14.jpg";

import elLandscape from "../assets/images/projects/ephemeralLight/Landscap.jpg";
import el1 from "../assets/images/projects/ephemeralLight/1.png";
import el2 from "../assets/images/projects/ephemeralLight/2.png";
import el3 from "../assets/images/projects/ephemeralLight/3.png";
import el4 from "../assets/images/projects/ephemeralLight/4.png";
import el5 from "../assets/images/projects/ephemeralLight/5.png";
import el6 from "../assets/images/projects/ephemeralLight/6.png";
import el7 from "../assets/images/projects/ephemeralLight/7.png";
import el8 from "../assets/images/projects/ephemeralLight/8.png";

import brIcon from "../assets/images/projects/bridgeRun/icon.jpg";
import br1 from "../assets/images/projects/bridgeRun/1.png";
import br2 from "../assets/images/projects/bridgeRun/2.png";
import br3 from "../assets/images/projects/bridgeRun/3.png";
import br4 from "../assets/images/projects/bridgeRun/4.png";
import brShop from "../assets/images/projects/bridgeRun/shop.png";
import brStartPage from "../assets/images/projects/bridgeRun/startPage.png";
import brVictoryPanel from "../assets/images/projects/bridgeRun/victoryPanel.png";

import playgroundIcon from "../assets/images/projects/playground/playground_icon.jpg";
import playgroundMushroom from "../assets/images/projects/playground/mushroom.png";
import playgroundSpidercube from "../assets/images/projects/playground/spidercube.png";
import playgroundLake from "../assets/images/projects/playground/lake.png";

import hdIcon from "../assets/images/projects/hexaDominoes/icon.jpg";
import hd1 from "../assets/images/projects/hexaDominoes/1.png";
import hd2 from "../assets/images/projects/hexaDominoes/2.png";
import hd3 from "../assets/images/projects/hexaDominoes/3.png";
import hd4 from "../assets/images/projects/hexaDominoes/4.png";
import hd5 from "../assets/images/projects/hexaDominoes/5.png";
import hdSetting from "../assets/images/projects/hexaDominoes/setting.png";

import rebelRose from "../assets/images/projects/rebel/Rose.jpg";
import rebel1 from "../assets/images/projects/rebel/Rebel1.png";
import rebel2 from "../assets/images/projects/rebel/Rebel2.png";
import rebel3 from "../assets/images/projects/rebel/Rebel3.png";
import rebel4 from "../assets/images/projects/rebel/Rebel4.png";

import waterfall0 from "../assets/images/projects/waterfall/waterfall0.jpg";
import waterfall1 from "../assets/images/projects/waterfall/waterfall1.png";
import waterfall2 from "../assets/images/projects/waterfall/waterfall2.png";

import sketch1 from "../assets/images/arts/concept-art/Sketch1.jpg";
import sketch2 from "../assets/images/arts/concept-art/Sketch2.jpg";
import paint1 from "../assets/images/arts/concept-art/Paint1.jpg";
import pixelAsset1 from "../assets/images/arts/concept-art/PixelAsset1.png";
import pixelAsset2 from "../assets/images/arts/concept-art/PixelAsset2.png";
import watermill from "../assets/images/arts/concept-art/watermill.gif";

export const profile = {
  name: "Hamid (Rennd) Bashiri",
  shortName: "Hamid Bashiri",
  greeting: "Hi, I’m Hamid.",
  // Cycled by the typing effect under the greeting.
  titles: ["Game Developer", "Lead Unity Developer", "Game Designer"],
  avatar,
  location: "Sofia, Bulgaria",
  bio: [
    "Unity developer with more than 6 years of professional experience building PC games in C#, with hands-on work spanning gameplay features, animations and AI systems. I bring production experience in DOTS, data-oriented design and multi-threaded programming.",
    "As a team lead, I've designed systems that have stayed in production for years, which has sharpened my focus on clean, maintainable code that holds up under real-world iteration. Have a look at my technical articles on Medium.",
  ],
  email: "RenndBashiri@gmail.com",
  // Put your CV at public/cv.pdf.
  cv: "cv.pdf",
  socials: [
    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/hbashiri/" },
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/hbashiri/" },
    { name: "Medium", icon: "fab fa-medium-m", url: "https://medium.com/@hvbashiri" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/h__bashiri/" },
  ],
  footerNote: "Hero art from my game",
  footerNoteGame: "Rebel",
};

export const nowBuilding = {
  eyebrow: "Now building · Lead Unity developer",
  title: "Another Pint",
  slug: "another-pint", // links the section to the game's page in `games`
  image: anotherPintBanner,
  background: anotherPintBackground, // full-bleed backdrop; falls back to `image`
  logo: anotherPintLogo, // title image; falls back to the text title
  // The logo file has wide transparent margins; this is the box (in image pixels) the lettering fills,
  // so the page can trim the margins. Set to null if the logo is replaced with a tightly cropped one.
  logoBounds: { imageWidth: 2000, imageHeight: 1125, x: 272, y: 88, width: 1458, height: 958 },
  meta: ["Tavern management sim", "PC", "Coming 2027"],
  description: [
    "Another Pint is a dynamic management game where you get to build and run your own medieval tavern. Tasked with taking over a barebones shack, where you take it is up to you.",
  ],
  youtube: "MsRqJJk6IPA",
  steam: "https://store.steampowered.com/app/3150160/Another_Pint/",
};

// category: "studio" or "indie" (drives the filter on the Work section).
// thumbFit: "icon" shows a square app icon on a blurred backdrop; "cover" fills the card with the image.
export const games = [
  {
    // TODO: Hamid will add more images and text for Another Pint.
    slug: "another-pint",
    title: "Another Pint",
    year: "Coming 2027",
    studio: "Williwaw Games",
    category: "studio",
    genre: "Tavern management sim",
    role: "Lead Unity Developer",
    tags: ["Unity", "C#", "UI Toolkit", "HLSL"],
    thumbnail: anotherPintBackground,
    thumbFit: "cover",
    availableOn: "Steam (wishlist)",
    url: "https://store.steampowered.com/app/3150160/Another_Pint/",
    youtube: "MsRqJJk6IPA",
    images: [ap01, ap02, ap03, ap04, ap05, ap06, ap07, ap08, ap09, ap10, ap11, ap12, ap13, ap14],
    about: [
      "Build and run your own medieval tavern in Another Pint, a systems-driven management game. Starting with little more than an abandoned shack, it is up to you to turn it into a thriving establishment.",
      "Grow your tavern, discover ingredients, and brew special drinks to keep your patrons coming back.",
    ],
    contributions: [
      "Designing and implementing core gameplay features, animations and lighting systems",
      "Developing and maintaining tools that speed up workflows for the design, art and development teams",
      "Defining tasks, estimating and planning sprints, and running code reviews",
      "Guiding teammates on technical tasks and helping hire and onboard new developers",
    ],
  },
  {
    slug: "ephemeral-light",
    title: "Ephemeral Light",
    year: 2022,
    studio: "Paeezan Studio",
    category: "studio",
    genre: "Tactical RPG",
    role: "Game Developer",
    tags: ["Unity", "C#", "UI Toolkit", "MVP"],
    thumbnail: elLandscape,
    thumbFit: "cover",
    availableOn: null,
    url: null,
    youtube: null,
    images: [el1, el2, el3, el4, el5, el6, el7, el8],
    about: [
      "Ephemeral Light is a tactical RPG with a strong focus on storytelling. Players explore cities, talk to people, and make choices that shape the outcome of the game.",
      "In combat, which happens in turns on hexagonal tile environments, players control one to three heroes with unique abilities inspired by MOBA games. As the story unfolds, players choose companions, upgrade abilities using resources they collect, and influence the game's ending.",
    ],
    contributions: [
      "Built Wit, a graph-based narrative tool in Unity for writing dialogue, designing scenes, and setting triggers and player choices",
      "Built Mirage, a mesh generator that turns 2D sprites into exploration-world objects and draws walking-path previews for player and enemy units",
    ],
  },
  {
    slug: "bridge-run",
    title: "Bridge Run",
    year: 2022,
    studio: "Indie",
    category: "indie",
    genre: "Runner · Game jam",
    role: "Game designer & developer",
    tags: ["Unity", "HLSL", "Game jam"],
    thumbnail: brIcon,
    thumbFit: "icon",
    availableOn: "Google Play",
    url: "https://play.google.com/store/apps/details?id=com.Moolfa.BridgeRun",
    youtube: null,
    images: [br1, br2, brShop, brStartPage, brVictoryPanel, br3, br4],
    about: [
      "Bridge Run was created for the Bazaar Game Contest, where the focus was on creating runner games in three weeks. We participated as a team of two, used standard character models and Mixamo animations, and later published it on Google Play, where it got 10k organic users in 2 months.",
    ],
    contributions: [
      "Designed the gameplay and levels",
      "Implemented the game features and user interfaces",
      "Wrote the game's shaders in HLSL",
      "Created most of the 3D models",
    ],
  },
  {
    slug: "playground",
    title: "Playground",
    year: 2022,
    studio: "Indie",
    category: "indie",
    genre: "Mechanics & shader showcase",
    role: "Game designer & developer",
    tags: ["Unity", "HLSL", "Physics", "Simulation"],
    thumbnail: playgroundIcon,
    thumbFit: "icon",
    availableOn: "itch.io",
    url: "https://moolfa.itch.io/playground",
    youtube: "o1SbL0i7x1M",
    images: [playgroundMushroom, playgroundSpidercube, playgroundLake],
    about: [
      "I designed and developed Playground to demonstrate and test my skills in writing shaders and physics-based mechanics. Each level is a minimal prototype where the objective is to reach the door.",
    ],
    contributions: [
      "Implemented physics-based mechanics such as rope and water simulation",
      "Wrote the game's shaders in HLSL",
    ],
  },
  {
    slug: "hexa-dominoes",
    title: "Hexa Dominoes",
    year: 2020,
    studio: "Segal Games",
    category: "studio",
    genre: "Puzzle",
    role: "Game designer, developer & project manager",
    tags: ["Unity", "C#", "Team lead"],
    thumbnail: hdIcon,
    thumbFit: "icon",
    availableOn: "Google Play",
    url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
    youtube: "SWChghYIsMM",
    images: [hd1, hd2, hd3, hd4, hd5, hdSetting],
    about: [], // TODO: a short paragraph about the game.
    contributions: [
      "Designed and developed the game",
      "Managed a small multi-disciplinary team of 3 to deliver the game based on the business plan",
      "Worked as project manager, responsible for resources and deadlines",
    ],
  },
  {
    slug: "rebel",
    title: "Rebel",
    year: 2019,
    studio: "Indie",
    category: "indie",
    genre: "Pixel-art runner platformer",
    role: "Game designer & developer",
    tags: ["Unity", "Pixel art", "Animation"],
    thumbnail: rebelRose,
    thumbFit: "icon",
    availableOn: "itch.io",
    url: "https://moolfa.itch.io/rebel",
    youtube: "kRbxADt-gVc",
    images: [rebel1, rebel2, rebel3, rebel4],
    about: ["A pixel-art runner and platformer that I designed and developed. Its art also became the pixel scene at the top of this site."],
    contributions: [
      "Designed and developed the game logic",
      "Worked on character design and animations",
    ],
  },
  {
    slug: "waterfall",
    title: "Waterfall",
    year: 2016,
    studio: "Indie",
    category: "indie",
    genre: "Course project",
    role: "Game developer",
    tags: ["Unity", "Animation"],
    thumbnail: waterfall0,
    thumbFit: "icon",
    availableOn: "itch.io",
    url: "https://hvbashiri.itch.io/waterfall",
    youtube: null,
    images: [waterfall1, waterfall2],
    about: [
      "Developed and published as the final project of the Game Design course at Iran University of Science and Technology.",
    ],
    contributions: ["Worked on character animations and core gameplay mechanics"],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    school: "University of Tehran",
    logo: utLogo,
    years: "2018 — 2021",
    note: "Software Engineering · Thesis: Multi-modal route advisory system for public transport and online taxi networks",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Iran University of Science and Technology",
    logo: iustLogo,
    years: "2013 — 2018",
    note: "Computer Engineering (AI)",
  },
];

export const experience = [
  {
    title: "Lead Unity Developer",
    company: "Williwaw Games",
    logo: williwawLogo,
    dates: "Jun 2024 — Present",
    current: true,
    bullets: [
      "Designing and implementing core gameplay features, animations and lighting systems for Another Pint",
      "Developing and maintaining tools that speed up workflows for the design, art and development teams",
      "Defining tasks, estimating and planning sprints, and running code reviews to keep the codebase clean",
      "Guiding teammates on technical tasks and helping hire and onboard new developers",
    ],
    tags: ["Unity", "C#", "UI Toolkit", "HLSL", "Team lead"],
  },
  {
    title: "Lead Unity Developer",
    company: "Black Cube Games",
    logo: bcgLogo,
    dates: "Apr 2024 — Jun 2024",
    bullets: [
      "Developed a WebGL game for the Ready Player Me platform",
      "Prototyped, implemented and refined features together with the design and art teams",
      "Created custom tools to streamline the art and design workflow",
    ],
    tags: ["Unity", "C#", "WebGL"],
  },
  {
    title: "Unity Developer",
    company: "Paeezan Studio",
    logo: paeezanLogo,
    dates: "May 2022 — Mar 2024",
    bullets: [
      "Designed the project architecture for Ephemeral Light (MVP with the command pattern)",
      "Created Wit, a graph-based visual novel tool built with UI Toolkit, and an in-game map creator",
      "Developed gameplay features, wrote shaders and took part in game design decisions",
      "Defined and estimated tasks, ran Scrum meetings, managed the tech team and brought git flow to the team",
    ],
    tags: ["Unity", "C#", "UI Toolkit", "MVP", "Scrum"],
  },
  {
    title: "DOTS Game Developer",
    company: "NoOp Army",
    logo: noopArmyLogo,
    dates: "Apr 2021 — Oct 2021",
    bullets: [
      "Worked on Enlightenment, a survival PC game built with Unity DOTS",
      "Developed utility AI systems based on Curvature, and an influence map for DOTS from scratch",
      "Built UI Toolkit plugins for editing and monitoring the AI behaviour of entities",
    ],
    tags: ["Unity", "DOTS", "Utility AI", "UI Toolkit"],
  },
  {
    title: "Independent Game Developer",
    company: "Independent",
    logo: freelanceLogo,
    dates: "Jan 2021 — Present",
    bullets: [
      "Designed, developed and published Bridge Run, originally made for the Bazaar Contest 2022",
      "Built Playground to test shaders and physics-based mechanics like rope and water simulation",
      "Designed and developed Rebel, a pixel-art runner platformer, and take part in game jams",
    ],
    tags: ["Unity", "C#", "HLSL", "Game jams"],
  },
  {
    title: "Game Developer & Designer",
    company: "Segal Games",
    logo: colonyLogo,
    dates: "Oct 2020 — Dec 2020",
    bullets: [
      "Designed and developed Hexa Dominoes and multiple prototypes",
      "Managed a small multi-disciplinary team of 3 as project manager, owning resources and deadlines",
    ],
    tags: ["Unity", "C#", "Team lead"],
  },
  {
    title: "Data Scientist",
    company: "TAPSI",
    logo: null,
    icon: "fas fa-chart-line",
    dates: "Jun 2019 — Mar 2021",
    bullets: [],
    tags: ["Data science"],
  },
];

// Section 03. Items with a `youtube` id render as large video showcases;
// items without one render as compact cards (icon + text) in a grid below them.
export const showcases = {
  tools: [
    {
      eyebrow: "Narrative design tool · Ephemeral Light",
      title: "Wit",
      youtube: "VEHTnPa6LaU",
      description:
        "A graph-based narrative design tool I built inside Unity with UI Toolkit, so designers can write branching missions with thousands of lines and preview them in-game without waiting on code.",
      bullets: [
        "Two-stage graphs: mission flow first (dialogue scenes, cutscenes, battles), then the lines and choices inside each scene",
        "Four branching nodes: player choices, companion, flag and custom condition nodes",
        "Per-line setup for characters, expressions, SFX, VFX and FMOD music, with an in-game preview of any line",
        "Grouped lines for exploration mode, so NPC conversations react to earlier player choices",
      ],
      tags: ["Unity", "C#", "UI Toolkit", "FMOD"],
    },
    {
      eyebrow: "Mesh generation tool · Ephemeral Light",
      title: "Mirage",
      youtube: "wizsP7tyWHw",
      description:
        "We used mesh generation in two key areas of Ephemeral Light, so I built Mirage to handle both.",
      bullets: [
        "Creates exploration-world objects from 2D sprites",
        "Draws path previews showing the walking paths of both player and enemy units",
      ],
      tags: ["Unity", "C#", "Mesh generation"],
    },
    // TODO: the in-game map creator from Paeezan Studio could go here once there is a video or description.
  ],
  // TODO: Hamid plans to add more features here.
  features: [
    {
      eyebrow: "AI system · NoOp Army",
      icon: "fas fa-brain",
      title: "Utility AI for DOTS",
      description:
        "Utility AI systems based on Curvature for a survival PC game running on Unity DOTS, with UI Toolkit plugins for editing and monitoring each entity's AI behaviour. A MonoBehaviour version exists as WF Utility AI.",
      tags: ["Unity", "DOTS", "Utility AI", "UI Toolkit"],
    },
    {
      eyebrow: "AI system · NoOp Army",
      icon: "fas fa-map",
      title: "Influence map for DOTS",
      description:
        "An influence map implemented from scratch for Unity DOTS, feeding spatial information into the AI's decisions. A MonoBehaviour version exists as WF Influence Map.",
      tags: ["Unity", "DOTS", "AI"],
    },
  ],
};

// Medium articles, newest first.
export const articles = [
  {
    title: "Wit, A Narrative Design Tool for Unity",
    date: "Jan 2024",
    readTime: "4 min read",
    summary:
      "Why we built our own graph-based narrative tool for Ephemeral Light, how its mission and dialogue graphs, branching nodes and in-game preview work, the challenges along the way, and a short tutorial on building graph-based tools in Unity.",
    url: "https://medium.com/@hvbashiri/wit-a-narrative-design-tool-for-unity-3f5cc446985c",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*JuXUo9rOfjCpahQ5RWVfiA.png",
  },
];

// Two-column About: text + "Outside work" on the left, grouped skill chips on the right,
// then the sketchbook. Skills follow the CV's areas of expertise and job history.
export const about = {
  heading: "Between gameplay and the tools behind it",
  paragraphs: [
    "I'm a Unity developer who loves building the systems behind games: gameplay, AI, and the tools that let designers and artists move without waiting on code. Leading teams has taught me to take a large feature, break it into well-scoped tasks and drive each one through to delivery.",
    "Outside of code I sketch, play guitar, and I'm currently learning 3D modeling in Blender. If you know the First Law series, or your favorite anime includes \"Howl's Moving Castle\" or \"Princess Mononoke\", I would be delighted to talk about them.",
  ],
  outside: [
    { label: "Games", value: "MOBA, RTS, platformers, story-driven indies" },
    { label: "Books", value: "Fantasy, science fiction" },
    { label: "Film", value: "Mystery, anime, science fiction" },
    { label: "Music", value: "Metal, rock" },
    { label: "Sport", value: "Ping pong, futsal" },
    { label: "Making", value: "Sketching, guitar, Blender" },
  ],
  skills: [
    { group: "Engines & languages", items: ["Unity", "C#", "HLSL", "Unreal Engine", "C++"] },
    {
      group: "Gameplay & systems",
      items: ["Gameplay features", "Animation", "Lighting", "Mesh generation", "Physics-based mechanics", "Shaders"],
    },
    { group: "AI", items: ["Utility AI", "Influence maps", "AI debugging tools"] },
    {
      group: "Architecture & performance",
      items: ["DOTS", "Data-oriented design", "Multi-threading", "SOLID", "OOP design patterns", "MVP & command pattern"],
    },
    { group: "Tools", items: ["Editor tools with UI Toolkit", "Graph-based editors", "In-game preview systems", "FMOD"] },
    {
      group: "Team & process",
      items: ["Team lead", "Agile / Scrum", "Sprint planning", "Code review", "Git flow", "Hiring & onboarding"],
    },
  ],
  sketches: [sketch1, watermill, pixelAsset1, pixelAsset2, paint1, sketch2],
};
