# Juveria Nishath — Data Science Portfolio v2

A recruiter-friendly, resume-style static portfolio designed for GitHub Pages.

## Included
- Bold editorial hero with resume download CTA
- Resume-style professional experience cards based on the supplied resume
- Skills/toolkit filtering
- Five project case-study modals
- GitHub links
- Education
- Contact / get-in-touch section
- Responsive mobile navigation
- Scroll reveal animations
- No backend required

## Add your real resume
Place your latest PDF here:

`assets/Juveria_Nishath_Resume.pdf`

The "Download résumé" button is already wired to that filename.

## Run locally
Open `index.html` directly, or:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages
Create a repository named:

`juverianishath.github.io`

Upload the contents of this folder to the repository root and enable:
Settings → Pages → Deploy from a branch → main → /root.

Your site will be available at:

`https://juverianishath.github.io`

## Replace before publishing
- Add your latest resume PDF to `assets/`
- Replace the email if your preferred address differs
- Add project screenshots / dashboard images when available
- Optionally add a custom domain later


## v14 changes
- Category-first skills: Data Analytics, BI & Visualisation, Business Analysis, Data Engineering, ML & AI, Cloud & Tools. No All button.
- Skills cards are dynamically filtered by category.
- Added a small profile photo beside the About section.
- Projects are all equal-size cards; VicMart no longer spans the full width.
- Instagram Reels and VicMart sit naturally side by side in the project grid.
- Project filters also work dynamically without an All button.


### v14 refinements
- Compact About section with a smaller profile photo
- Stacked Experience cards connected by a timeline
- Removed the moving skills ticker
- Added dynamic skill category selector with neon-style cards
- Replaced “How I Work” with “What I Offer” cards
- Kept project cards compact and side-by-side
- Fixed project modal Impact & Result styling for dark mode
