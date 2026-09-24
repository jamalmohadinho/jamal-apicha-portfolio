# Jamal Apicha — portfolio

React 19, Vite 8, JavaScript, and Tailwind CSS 4. Uses npm and the existing lockfile. No environment variables or backend required. Use Node 22.12+ (verified with 22.19.0).

## Run locally

From the `my-portfolio` directory:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the URL printed by Vite, normally http://127.0.0.1:5173.

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Edit content

- `src/data/portfolio.js`: profile, URLs, graduation, projects, experience, skills, and certificates. Technology icons come from react-icons; text works when no icon is available.
- `src/App.jsx`: page sections and navigation.
- `src/components/`: HomeSection and reusable ProjectCard, SkillsSection, TechnologyBadge, and CertificateCard.
- `src/index.css`: Tailwind and global styles. `src/App.css`: layout, responsive behavior, and motion.
- `index.html`: title and search/social metadata. Add a canonical URL and absolute social image URL after choosing the real deployment domain.

Resume is the supplied PDF, copied unchanged to `public/documents/Jamal-Apicha-Resume.pdf`. Replace this file to update every resume link; keep the filename or update `profile.resume`. Graduation is December 2027, confirmed by the owner.

The Springboard certificate PDF was not supplied. Its certificate section remains hidden. Education includes only program participation documented in the resume. Place the certificate PDF in `public/documents/`, then add an entry to `certificates` using its exact title, issuer, date, and file path. Add a verification URL only if supplied:

```js
// Shape only: populate with the actual PDF's verified information.
{ title, issuer, date, file: '/documents/certificate.pdf', verification: null }
```

View/download links appear automatically. No credential title or completion date has been inferred. Memories has no supplied live URL; its button stays hidden until `live` is populated. The project-card screenshot was not supplied, so cards follow the written specifications.

## Home layout and portrait

The home section uses a portrait beside the introduction, with the skills panel immediately below. Edit `profile.headline`, `profile.introduction`, and `profile.photo` in `src/data/portfolio.js`. The supplied portrait is stored at `public/images/jamal-apicha.png`; replace that file or update the path. Home layout styles are in `src/App.css`, and the reusable markup is in `src/components/HomeSection.jsx`. The layout stacks on phones.

## Accessibility and motion

Skills tabs support Left/Right, Home, and End. Pause/Play controls the badge loop; hover or focus pauses it temporarily. Reduced-motion preferences show a static wrapping list and remove animations. Repeated visual groups are hidden from screen readers. Navigation includes a skip link, visible focus, and a mobile menu with Escape support.

## Deploy to Vercel

1. Push this project to your own Git repository.
2. Import it in Vercel. If the repository contains the parent directory, set Root Directory to `my-portfolio`; otherwise use the repository root.
3. Select Vite. Install command: `npm ci`. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No secrets, environment variables, or routing rewrites are needed; the site uses section anchors.
5. Check the deployed resume and external links. Update metadata once the final domain is known.

## Verification

Production build and ESLint passed. Chrome inspection covered 1440px desktop, 768px tablet, and 390px/320px mobile widths without horizontal overflow. Automated browser checks passed for mobile menu and Escape, section navigation, skill selection and keyboard navigation, Pause/Play, hover/focus pause, repeat-group geometry, reduced motion, resume serving/download, and external-link attributes. No browser console errors were observed. All three project GitHub URLs and both supplied demos returned HTTP 200. This verifies URL reachability, not every feature of those separate applications. Certificate links cannot be tested without the PDF.

Local screenshots and `artifacts/verify.mjs` are excluded from Git. To rerun that local browser check with the dev server running and Google Chrome installed: `node artifacts/verify.mjs`. Build and lint are the portable project checks.

## Experience cards and logos

Edit roles, dates, contributions, tags, and logo paths in `src/data/portfolio.js`. `src/components/ExperienceCard.jsx` renders each card. Company logo files are stored locally in `public/images/companies/`.

Official asset sources:

- [covermymeds.ico](https://external-us.covermymeds.health/favicon.ico?favicon.0z30b2572gt71.ico)
- [jpmorgan-chase.png](https://www.jpmorganchase.com/etc.clientlibs/cws/clientlibs/clientlib-base/resources/jpmc/images/jpmc-favicon-152.png)
- [walmart.svg](https://corporate.walmart.com/content/dam/corporate/site-images/WMT-Spark-New-SparkYellow-RGB.svg)


## Work and Leadership tabs

`src/components/ExperienceSection.jsx` provides the accessible Work/Leadership tabs. Work uses the `experience` array; Leadership uses `leadership`, both in `src/data/portfolio.js`. Each tab displays its full entries immediately. Arrow keys, Home, and End switch tabs. Cards use `ExperienceCard.jsx`; optional roles, dates, contributions, and logos appear only when supplied.

Minorities in Tech role and dates come from the resume. Jamal confirmed ColorStack membership (December 2024 to present) and CodePath Technical Interview Prep (August 2025). Leadership logos are stored locally in `public/images/companies/`.

### Leadership logo sources

- [minorities-in-tech.png](https://ugc.production.linktr.ee/5f082a66-0340-4f01-9a3e-67a378cb8a7e_IMG-0627.png)
- [colorstack.png](https://cdn.prod.website-files.com/61ae4846c32bb55b23085ccd/621150da29e6f9048c44a6dd_Logo.png)
- [codepath.png](https://www.codepath.org/hubfs/codepath-1x1_solid-dark.png)

## About view

The About navigation link (`#about`) opens a separate view with the biography. Home does not render the About section. About links to Projects, Experience, and Skills return to the main portfolio and scroll to the chosen section. Browser Back/Forward and direct `#about` links are supported without server routing changes.


## Day and night themes

Use the sun/moon button in the header to switch themes. Night is the default and uses the original navy background; day uses white. The choice is saved in browser local storage. `public/theme-init.js` applies the saved preference before rendering, and the toggle still works if storage is disabled. Shared background, text, border, and About highlight colors are defined in `src/theme.css`. Work, Leadership, Projects, Skills, and Contact cards share the page background. Buttons and badges keep distinct backgrounds for visibility.

Theme verification covered desktop and mobile layouts, keyboard toggling, persistence after reload, both experience tabs, and About highlight contrast in both modes. Build and lint pass.

Springboard logo: [official Springboard blog](https://www.springboard.com/blog/), stored locally as `public/images/companies/springboard.svg`.
