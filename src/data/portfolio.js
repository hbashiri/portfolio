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
import anotherPintLogo from "../assets/images/projects/anotherPint/logo.png";

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
  // TODO: adjust to the roles you want to highlight.
  titles: ["Game Developer", "Game Designer", "Tools Developer"],
  avatar,
  location: null, // TODO: e.g. "Based in Luxembourg"
  bio: [
    "Passionate game developer with 5 years of experience focused on PC games using Unity engine and C#. I excel in various aspects of game development, including designing project architecture, developing AI systems, creating tools and implementing gameplay features.",
    "With an additional 2 years of experience in software engineering and an MSc degree in software engineering, I have a solid educational background that complements my practical experience. Have a look at my technical articles on Medium.",
  ],
  email: "hvbashiri@gmail.com",
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
  eyebrow: "Now building · Lead game developer",
  title: "Another Pint",
  image: anotherPintBanner,
  background: anotherPintBackground, // full-bleed backdrop; falls back to `image`
  logo: anotherPintLogo, // title image; falls back to the text title
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
    genre: "Mechanics prototypes",
    role: "Game developer",
    tags: ["Unity", "Simulation", "Prototyping"],
    thumbnail: playgroundIcon,
    thumbFit: "icon",
    availableOn: "itch.io",
    url: "https://moolfa.itch.io/playground",
    youtube: "o1SbL0i7x1M",
    images: [playgroundMushroom, playgroundSpidercube, playgroundLake],
    about: [
      "This game was created to prototype different mechanics in Unity. Each level is a minimal prototype where the objective is to reach the door.",
    ],
    contributions: ["Implemented challenging mechanics such as rope and water simulation"],
  },
  {
    slug: "hexa-dominoes",
    title: "Hexa Dominoes",
    year: 2021,
    studio: "Indie",
    category: "indie",
    genre: "Puzzle",
    role: "Game designer & developer",
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
      "Led a multi-disciplinary team to produce the game",
    ],
  },
  {
    slug: "rebel",
    title: "Rebel",
    year: 2019,
    studio: "Indie",
    category: "indie",
    genre: "Pixel-art platformer",
    role: "Game developer",
    tags: ["Unity", "Pixel art", "Animation"],
    thumbnail: rebelRose,
    thumbFit: "icon",
    availableOn: "itch.io",
    url: "https://moolfa.itch.io/rebel",
    youtube: "kRbxADt-gVc",
    images: [rebel1, rebel2, rebel3, rebel4],
    about: [], // TODO: a short paragraph about the game.
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
    about: ["Final project of the fundamentals of game design course."],
    contributions: ["Worked on character animations and core gameplay mechanics"],
  },
];

export const education = [
  {
    degree: "MSc, Software Engineering",
    school: "University of Tehran",
    logo: utLogo,
    years: "2018 — 2021",
    note: "Thesis: Multi-modal route advisory system",
  },
  {
    degree: "BSc, Computer Engineering",
    school: "Iran University of Science and Technology",
    logo: iustLogo,
    years: "2013 — 2018",
    note: "Hardware engineering · Game design course in 2016",
  },
];

export const experience = [
  {
    title: "Lead Game Developer",
    company: "Williwaw Games",
    logo: williwawLogo,
    dates: "Jun 2024 — Present",
    current: true,
    // TODO: add 2–3 bullets on what you own and have shipped.
    bullets: ["Leading development of Another Pint, a medieval tavern management game"],
    tags: ["Unity", "C#", "UI Toolkit", "HLSL"],
  },
  {
    title: "Game Developer",
    company: "Black Cube Games",
    logo: bcgLogo,
    dates: "Apr 2024 — Jun 2024",
    bullets: ["Worked on Street Mayhem"], // TODO: expand
    tags: ["Unity", "C#", "WebGL"],
  },
  {
    title: "Game Developer",
    company: "Paeezan Studio",
    logo: paeezanLogo,
    dates: "May 2022 — Mar 2024",
    bullets: [
      "Developed Ephemeral Light, a story-driven tactical RPG",
      "Built Wit, a graph-based narrative tool, and Mirage, a mesh generation tool, inside Unity",
    ],
    tags: ["Unity", "C#", "UI Toolkit", "MVP"],
  },
  {
    title: "Game Developer",
    company: "NoOp Army",
    logo: noopArmyLogo,
    dates: "Apr 2021 — Oct 2021",
    bullets: ["Worked on Enlightenment"], // TODO: expand
    tags: ["Unity", "C#", "DOTS", "UI Toolkit"],
  },
  {
    title: "Game Developer & Designer",
    company: "Colony11",
    logo: colonyLogo,
    dates: "Oct 2020 — Dec 2020",
    bullets: [], // TODO
    tags: ["Unity", "C#"],
  },
  {
    title: "Freelance Game Developer",
    company: "Independent",
    logo: freelanceLogo,
    dates: "Sep 2015 — Oct 2017",
    bullets: ["Made Hexa Dominoes and Waterfall"],
    tags: ["Unity", "C#"],
  },
];

export const tools = [
  {
    eyebrow: "Narrative design tool",
    title: "Wit",
    youtube: "VEHTnPa6LaU",
    description:
      "One of the key elements in a narrative-driven game is the art of storytelling. To manage branching and complex narratives in Ephemeral Light, I developed Wit, a graph-based tool inside the Unity game engine.",
    bullets: [
      "Write dialogues and design scenes",
      "Set triggers and player choices",
      "Manage branching, complex narratives as a graph",
    ],
    tags: ["Unity", "C#", "Editor tooling"],
  },
  {
    eyebrow: "Mesh generation tool",
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
];

// TODO: add Medium articles: { title, date: "Jan 2026", summary, url, image }.
export const articles = [];

export const about = {
  heading: "A game developer with a sketchbook",
  photo: avatar, // TODO: replace with a photo of you (portrait works best).
  paragraphs: [
    "In my free time, I sketch, play guitar, and play games. I like indie games, especially when they tell stories, and online multiplayer games that I can play with my friends. I like to learn anything related to creating a game, so currently I'm learning 3D modeling with Blender.",
    "I enjoy movies across various genres and formats, but my true passion lies in anime. I also read fantasy and science fiction novels. If you know the First Law series, or your favorite anime includes \"Howl's Moving Castle\" or \"Princess Mononoke\", I would be delighted to talk about them.",
    "I created this portfolio with love, passion, and of course React. If you have an idea to improve it or find a problem, please tell me so I can make it better.",
  ],
  sketches: [sketch1, watermill, pixelAsset1, pixelAsset2, paint1, sketch2],
};
