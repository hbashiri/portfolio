# CLAUDE.md

Personal game-developer portfolio for Hamid (Rennd) Bashiri. Single-page React app (Create React App), deployed to GitHub Pages at https://hbashiri.github.io/portfolio/. Originally forked from Dorota1997's `react-frontend-dev-portfolio` template, then heavily customized.

## Commands

- `npm start` — dev server (react-scripts)
- `npm run build` — production build into `/build`
- `npm run deploy` — builds, then publishes `/build` to the `gh-pages` branch
- `npm test` — Jest via react-scripts. Only a single "renders without crashing" smoke test in `src/App.test.js`.

`homepage` in `package.json` must stay `https://hbashiri.github.io/portfolio/` or asset paths break on GitHub Pages.

## Stack

React 19 (class components throughout), react-bootstrap / Bootstrap 5, Sass, jQuery (only for `$.ajax` JSON loading), `react-vertical-timeline-component` (experience), `react-awesome-slider` (image carousels in modals), Iconify + Font Awesome + devicon loaded from CDNs in `public/index.html`. `package.json` uses `overrides` to force React 19 onto `react-vertical-timeline-component`.

## Architecture

**Content lives in `src/App.js`, not in JSON.** The `resumeData` object in `App`'s constructor state holds experience entries, personal projects, the Another Pint / Ephemeral Light feature sections, sketches, and section names. Images are imported at the top of `App.js` from `src/assets/images/...` and referenced in that object. To add or edit portfolio content, edit `App.js`.

`public/portfolio_shared_data.json` is fetched on mount (`loadSharedData`) and supplies `basic_info` (name → `document.title`, social links for the Footer). Its `skills` block is template leftover and unused.

Page order rendered by `App` (`src/App.js` `render`):
1. `Banner` — layered animated parallax clouds/sky (`src/css/Banner.css`, images in `assets/images/banner`)
2. `Header` — avatar, name, contact icons, bio paragraph (bio text and contact links are hardcoded here)
3. `Experience` — vertical timeline from `resumeData.experience`
4. `FeaturedProject` for Another Pint (`resumeData.anotherPint`, section id `anotherPintSection`)
5. `FeaturedProject` for Ephemeral Light (`resumeData.ephemeralLight`, section id `ephemeralLightSection`), with sub-tools (Wit, Mirage) as embedded YouTube videos
6. `Projects` — grid of personal projects; click opens `ProjectDetailsModal`
7. `Sketches` — "Life Interests" section; hobby text is hardcoded in the component
8. `Footer`

`ProjectDetailsModal` is the shared modal: an `AwesomeSlider` of `data.images`, with `data.youtube` (a YouTube video ID) inserted as the first slide; description is split on `\n` into paragraphs; `data.url` adds an external link icon.

`FeaturedProject` takes `sectionId` (drives the section background in `App.scss`), `sectionName`, and `project` (`{title, des, thumbnail, images, youtube, projects: [{title, description, youtube}]}`). To feature another game, add a data object in `App.js`, a section name, and a `#<id>` background rule in `App.scss`.

Banner height comes from `src/utils/bannerHeight.js` (`calculateBannerHeight`), used by `Banner` and `Header`; `Header` adds its own `mobileVersion` heuristic to switch layout. The `orientationchange` handlers deliberately pass width/height swapped because the window still reports pre-rotation dimensions when the event fires.

## Styling

- `src/App.scss` — main stylesheet. Palette is defined as SCSS variables at the top (`$--backGround-color`, `$--secondBackground-color`, `$--forthBackground-color`, etc.); each section's background is set by its id (`#resume`, `#portfolio`, `#sketches`, `#ephemeralLightSection`, `#anotherPintSection`).
- Many colors, font sizes (often `vh`/`vmin`), and layouts are inline styles inside components, so check the component as well as the SCSS.
- `src/scss/` holds slider themes; `theme-dark.scss` is empty. A light/dark toggle via `body[data-theme]` exists in `Header` but isn't wired to any UI.

## Conventions

- Commit messages use prefixes like `[Feat]` / `[Fix]` followed by a short description.
- Image assets are committed under `src/assets/images/<category>/<project>/`.
