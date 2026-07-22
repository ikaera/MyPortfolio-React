# Portfolio — Irakli Eradze

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev/)

A responsive single-page portfolio built with React, showcasing selected
projects, technical skills, and contact information. Designed with a clean,
modern interface and a refined green theme.

**Live site:** https://ikaera.github.io/MyPortfolio-React/

**Repository:** https://github.com/ikaera/MyPortfolio-React

![Portfolio screenshot](/src/assets/img-project/MyPortfolioReact.png)

## Overview

The portfolio presents a data science and software engineering profile across
three sections, navigated without page reloads:

- **Home** — an introduction combining a profile photo, headline, and a short
  bio, with quick links to Projects and Contact.
- **Projects** — a filterable gallery of work samples. Each card shows the
  project's tech stack as tags and links to the live demo and source code.
- **Contact** — a validated contact form (name, email, subject, message)
  powered by EmailJS, plus direct links.

## Tech Stack

- **Framework:** React 18 (Create React App)
- **Styling:** CSS with a shared design-token palette
- **UI / Icons:** Bootstrap, Font Awesome
- **Forms:** EmailJS
- **Maps:** React Leaflet
- **Deployment:** GitHub Pages via `gh-pages`

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/ikaera/MyPortfolio-React.git
cd MyPortfolio-React
npm install
```

Run the development server:

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000) and reloads on
save.

## Available Scripts

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm start`     | Start the development server.                      |
| `npm run build` | Create an optimized production build in `build/`.  |
| `npm test`      | Run the test runner in watch mode.                 |
| `npm run deploy`| Build and publish to GitHub Pages.                 |

## Deployment

After committing your changes, publish the updated site:

```bash
git add .
git commit -m "your commit message"
git push origin main

npm run deploy
```

`npm run deploy` runs the production build and pushes it to the `gh-pages`
branch, which serves the live site.

## Project Structure

```
src/
  components/
    pages/        Home, Project, Contact page components
    Navigation.*  Top navigation bar
    Footer.*      Footer with social links
    SearchBox/    Reusable search input
  utils/          Project data and form helpers
  assets/         Images, icons, and resume
  App.js          Page routing and shared layout
  App.css         Design tokens and base styles
```

## License

Released under the MIT License.

Copyright (c) 2023–present Irakli Eradze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
