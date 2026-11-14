# matus.tomlein.org

Personal site of Matúš Tomlein. A short profile and selected projects come first; older writing and research remain available at their original URLs.

## Local development

With dependencies installed (`npm ci`):

- `npm run build` creates a one-off production bundle in `scripts/app.js` and updates its content-based version.
- `npm run dev` watches source files and rebuilds the development bundle.
- `npm run preview` serves the site at http://127.0.0.1:4173, including the SPA route fallback. Run a build first; use a second terminal for the watcher when editing. Set `PORT` to choose another port.

The existing React / Browserify setup is retained. No new packages are required. `scripts/app.js` is tracked because the existing hosting serves the built bundle directly.

## Content

- `app/IndexPage.js`: introduction and selected work.
- `app/CVPage.js`: high-level background and career overview (`/cv`).
- `app/PortfolioSection.js`: selected projects (`/portfolio`).
- `app/WritingPage.js`: older writing and talks (`/writing`). No new external blog posts have been added.
- `app/ResearchPage.js`: publication index (`/research`).
- `api/blogs.json`, `api/publications.json`, and the corresponding Markdown files: original article and publication content.
- `styles/index.css`: shared design and responsive styles, including archived articles.

## Existing hosting

The existing Apache/PHP entry point and rewrite rules are retained. After building, deploy through the site's usual workflow. PHP short tags are not required by the updated entry point or sitemap. This change does not publish the site or alter hosting configuration.

## Verification

Build with `npm run build`. Validate the PHP entry points with `php -l index.php` and `php -l sitemap.php`. Review the homepage at desktop and mobile sizes, then check `/cv`, `/portfolio`, `/writing`, `/research`, and a sample existing `/blogs/...` and `/publications/...` URL.
