# Aurex Flow Controls — Valve Manufacturer Demo Site

A multi-page demo website for a fictional industrial valve manufacturer, built as a portfolio project.

**Pages:** Home · Products (filterable catalogue with spec pop-ups) · About · Contact (validated enquiry form)

## Tech
- Plain HTML, CSS and vanilla JavaScript; no frameworks or build step
- Hand-drawn SVG valve illustrations (`assets/`)
- Product catalogue driven from one data array in `js/main.js`
- Responsive down to phone width; keyboard accessible; respects reduced-motion settings

## Run locally
```bash
python3 -m http.server 5173
```
Then open http://localhost:5173.

## Deploy
Static site: deploy the repository root on Netlify, GitHub Pages or any static host. No build command needed.

> Aurex Flow Controls is a fictional company. All names, figures, contacts and testimonials are placeholders.
