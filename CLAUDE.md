# CLAUDE.md

Personal game-developer portfolio for Hamid (Rennd) Bashiri. Single-page React app (Create React App), deployed to GitHub Pages at https://hbashiri.github.io/portfolio/. Layout and visual style are modeled on https://vbashiri.github.io/portfolio/ (dark navy, teal accent, numbered sections, a page per game), filled with Hamid's own content and images.

## Commands

- `npm start` — dev server (react-scripts)
- `npm run build` — production build into `/build`
- `npm run deploy` — builds, then publishes `/build` to the `gh-pages` branch
- `npm test` — Jest via react-scripts. Only a single "renders without crashing" smoke test in `src/App.test.js`; `src/setupTests.js` stubs `IntersectionObserver` for jsdom.

`homepage` in `package.json` must stay `https://hbashiri.github.io/portfolio/` or asset paths break on GitHub Pages.

## Stack

React 19 with function components and hooks, Sass, no UI or routing libraries. Fonts (Inter, Space Grotesk, Press Start 2P) and Font Awesome 5 are loaded from CDNs in `public/index.html`.

## Content

**All content lives in `src/data/portfolio.js`**: `profile` (hero, socials, email, CV path), `nowBuilding` (Another Pint), `games` (Work grid + game pages), `education`, `experience`, `showcases` (section 03: `tools` and `features`; items with `youtube` render as large video cards, others as compact icon cards), `articles` (Medium posts; a single article renders as a wide featured card), `about` (two columns modeled on https://amirfery.github.io/portfolio/: paragraphs + `outside` label/value list on the left, grouped `skills` chips on the right, then the `sketches` sketchbook). Images are imported at the top of that file from `src/assets/images/...`.

Components hide empty/null fields, so unfinished content is left blank with a `// TODO` comment (e.g. Hexa Dominoes' `about`). Bio, job history and education follow Hamid's CV (`public/cv.pdf`); keep them in sync when the CV changes. Journey entries without a `logo` show an `icon` (Font Awesome class) instead. The Another Pint key art (`anotherPint/background.png`) was taken from the reference site; the stone logo (`anotherPint/logo.webp`) was supplied by Hamid and has wide transparent margins, which `nowBuilding.logoBounds` trims on the page. `banner.jpg` is only a fallback. Another Pint also has a game page (`games` slug `another-pint`, linked from `nowBuilding.slug`) whose screenshots are the Steam store screenshots in `anotherPint/steam/01–14.jpg`.

Each game needs a unique `slug` (used in its URL), `category` (`"studio"` or `"indie"`, drives the Work filter) and `thumbFit` (`"icon"` for square app icons shown on a blurred backdrop, `"cover"` to fill the card).

## Architecture

- `src/App.js` — renders `Nav`, then either the home sections or a `ProjectPage`, then `Contact` (which is also the footer).
- `src/hooks/useHashRoute.js` — tiny hash router: `#/projects/<slug>` shows a game page, anything else the home page. Hash routing keeps deep links working on GitHub Pages. Section links use `goToSection(id)`, which returns to the home page first if needed, instead of `#id` anchors.
- `src/hooks/useReveal.js` — fades in `.reveal` elements on scroll; re-run per route.
- `src/hooks/useActiveSection.js` — highlights the nav link for the section in view.
- Home sections, in order: `Hero` (`#home`, includes the animated pixel-art `Banner`), `NowBuilding` (`#now`), `Work` (`#work`), `Journey` (`#journey`), `Tools` (`#tools`, "Tools, features & writing"), `About` (`#about`), `Contact` (`#contact`).
- `ProjectPage` — game hero, facts sidebar, video, about, contributions, screenshot grid, previous/next links.
- `Lightbox` — fullscreen image viewer used by the sketchbook and game screenshots.
- `components/common.js` — `SectionHeader`, `Tags`, `Bullets`, `YouTube`.
- `Banner` — the pixel-art scene from Rebel: sky, 8 drifting cloud layers and the foreground, all the same 3.2:1 artwork stacked and stretched to fill a box whose height follows its width (`aspect-ratio: 3.2`), so nothing (e.g. the moon) is ever cropped. `Hero` pins it to the bottom behind the text (at least 1100px wide and centered; on phones it is 800px wide and shifted so the visible slice shows the portal, character and moon, and the hero shows only the first bio paragraph so text, land and moon fit in the first screen), adds twinkling pixel stars above it, and publishes `window.scrollY` as `--scroll` on `.hero` (once per animation frame); each layer has a `--depth` (sky 0.06, back clouds 0.15–0.2, front clouds 0.45–0.5, ground 0.8) and moves down by `--scroll × (1 − depth) × 0.45px`, the same vertical parallax as the reference, so the moon and clouds sink behind the land as you scroll. Cloud drift and the parallax transform are in `src/css/Banner.css`.

## Styling

- `src/App.scss` holds everything, organized by section. Design tokens are CSS custom properties on `:root` (`--bg`, `--accent`, `--font-display`, etc.); use them instead of hard-coded colors.
- Sizes are in `px` (no `62.5%` root font-size). Breakpoints: 991px (stack two-column layouts) and 767px (mobile nav, single column).
- `src/index.scss` is a small reset; `src/css/Banner.css` animates the banner clouds.

## Conventions

- Commit messages use prefixes like `[Feat]` / `[Fix]` followed by a short description.
- Image assets are committed under `src/assets/images/<category>/<project>/`.
