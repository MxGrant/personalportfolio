# MO — Netflix-style portfolio

A dark, cinematic single-page portfolio that lets visitors browse projects like a
streaming catalogue. Built with plain HTML, CSS and JavaScript — no build step, no
dependencies.

## Run it

Open `index.html` directly, or serve the folder (recommended, since the site uses ES
modules):

```bash
python -m http.server 4173
# then visit http://localhost:4173
```

## Project structure

```
index.html          Page structure and section copy
css/styles.css      Design tokens, layout, components, responsive rules
js/data.js          All editable content: projects, skills, approach, contact links
js/app.js           Rendering, carousels, dialog, navigation, scroll reveal
assets/favicon.svg  Red MO mark
```

## Where to replace placeholders

Everything marked “[Placeholder …]” on the site is intentional. The design does not
invent screenshots, links, results or technical history.

### 1. Projects — `js/data.js`

Each project has:

| Field | Purpose |
| --- | --- |
| `overview` | The paragraph shown on the card and in the detail view |
| `problem` | Currently `null` → renders a labelled placeholder |
| `role` | Currently `null` → labelled placeholder |
| `learned` | Currently `null` → labelled placeholder |
| `tech`, `features` | Arrays; `null` shows a placeholder |
| `links.repo`, `links.demo` | URLs; `null` renders a disabled “placeholder” button |
| `poster` | Generated cover art (colours, initials, wordmark, motif) |

To fill in a real section, replace `null` with your text. For example:

```js
problem: 'Children meet other cultures through dense text that gives them no reason to keep exploring.',
role: 'Sole designer and developer — research, wireframes, front-end build and API integration.',
learned: 'I learned to scope an interaction down to one clear task before polishing the visuals.',
links: { repo: 'https://github.com/your-handle/global-village', demo: 'https://your-demo.example' }
```

`problem`, `role` and `learned` are already wired into the detail view and the project
facts panel: fill them in and the placeholder text disappears automatically. The card
poster stays decorative; the detail view never invents screenshots or results.

### 2. Screenshots

The gallery in each detail view shows three labelled placeholder frames. Add real images
to an `assets/projects/` folder, then extend `detailTemplate` in `js/app.js`:

```html
<figure class="shot">
  <img class="shot__img" src="assets/projects/global-village-map.png"
       alt="Interactive world map with a country selected">
  <figcaption>Interactive map</figcaption>
</figure>
```

Add `.shot__img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }`
to `css/styles.css` and keep the frame's aspect ratio in place.

### 3. Cover art

Card posters are generated from CSS gradients, initials and motifs — not fake
screenshots. To use real artwork, put images in `assets/projects/` and replace the
`.poster` markup in `projectCard()` inside `js/app.js` with an `<img>` element, keeping
`.card__overlay` on top.

### 4. Contact links — `js/data.js`

```js
export const contact = {
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  cv: 'assets/mo-cv.pdf'
};
```

Until these are set, the buttons render as clearly dashed “placeholder” states rather
than pretending to work.

## Features

- Sticky navigation with scroll progress, active-section highlighting and a mobile menu
- Cinematic hero with layered gradients, drifting light and an oversized monogram
- Featured “Global Village” banner with tech chips and a More Info action
- Three horizontal carousels (projects, skills, approach) with arrows, keyboard arrows,
  pointer dragging, scroll snapping and edge-aware button states
- Hover previews on project cards with red glow, play/info icons and extra detail
- Cinematic detail dialog per project, with an accessible focus-managed `<dialog>`
- About section styled like a streaming profile card
- Technical toolkit grid and an Agile/process row
- Contact panel with email, LinkedIn, GitHub and CV actions
- Responsive down to small phones, `prefers-reduced-motion` support, visible focus states,
  skip link and semantic landmarks

## Accessibility notes

- Cards are keyboard focusable (`Tab`, then `Enter` or `Space`) and labelled with their
  title, category and purpose.
- The detail view uses native `<dialog>` so `Esc`, focus trapping and focus return work.
- Carousels expose arrow buttons plus `ArrowLeft`/`ArrowRight` support and never hide
  content behind hover alone on touch devices.
- All decorative art is `aria-hidden`; meaningful text stays in the DOM.
