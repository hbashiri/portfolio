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

**All content lives in `src/data/portfolio.js`**: `profile` (hero, socials, email, CV path), `nowBuilding` (Another Pint), `games` (Work grid + game pages), `education`, `experience`, `tools`, `articles`, `about`. Images are imported at the top of that file from `src/assets/images/...`.

Components hide empty/null fields, so unfinished content is left blank with a `// TODO` comment (e.g. `profile.location`, `articles`, some game `about` paragraphs and job bullets). The Another Pint key art and logo (`anotherPint/background.png`, `logo.png`) were taken from the reference site; `banner.jpg` is only a fallback. The CV button links to `public/cv.pdf`, which must be added by hand.

Each game needs a unique `slug` (used in its URL), `category` (`"studio"` or `"indie"`, drives the Work filter) and `thumbFit` (`"icon"` for square app icons shown on a blurred backdrop, `"cover"` to fill the card).

## Architecture

- `src/App.js` — renders `Nav`, then either the home sections or a `ProjectPage`, then `Contact` (which is also the footer).
- `src/hooks/useHashRoute.js` — tiny hash router: `#/projects/<slug>` shows a game page, anything else the home page. Hash routing keeps deep links working on GitHub Pages. Section links use `goToSection(id)`, which returns to the home page first if needed, instead of `#id` anchors.
- `src/hooks/useReveal.js` — fades in `.reveal` elements on scroll; re-run per route.
- `src/hooks/useActiveSection.js` — highlights the nav link for the section in view.
- Home sections, in order: `Hero` (`#home`, includes the animated pixel-art `Banner`), `NowBuilding` (`#now`), `Work` (`#work`), `Journey` (`#journey`), `Tools` (`#tools`), `About` (`#about`), `Contact` (`#contact`).
- `ProjectPage` — game hero, facts sidebar, video, about, contributions, screenshot grid, previous/next links.
- `Lightbox` — fullscreen image viewer used by the sketchbook and game screenshots.
- `components/common.js` — `SectionHeader`, `Tags`, `Bullets`, `YouTube`.
- `Banner` — the pixel-art scene from Rebel: sky, 8 drifting cloud layers and the foreground, all the same 3.2:1 artwork stacked and stretched to fill a box whose height follows its width (`aspect-ratio: 3.2`), so nothing (e.g. the moon) is ever cropped. `Hero` pins it to the bottom behind the text and adds twinkling pixel stars above it. Cloud animations are in `src/css/Banner.css`.

## Styling

- `src/App.scss` holds everything, organized by section. Design tokens are CSS custom properties on `:root` (`--bg`, `--accent`, `--font-display`, etc.); use them instead of hard-coded colors.
- Sizes are in `px` (no `62.5%` root font-size). Breakpoints: 991px (stack two-column layouts) and 767px (mobile nav, single column).
- `src/index.scss` is a small reset; `src/css/Banner.css` animates the banner clouds.

## Conventions

- Commit messages use prefixes like `[Feat]` / `[Fix]` followed by a short description.
- Image assets are committed under `src/assets/images/<category>/<project>/`.
