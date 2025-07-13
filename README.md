# Seema's Cognitive Science Portfolio

A personal website built with Astro featuring an elegant, animated cognitive science theme.

## Site Structure

The site is built with modular components and data files for easy editing.

### Data Files

Site configuration and text content is managed through data files in the `src/data` directory:

- `siteConfig.js` - Global site configuration (name, title, social links, etc.)
- `navigation.js` - Navigation menu items
- `homeContent.js` - Content for the home page
- Add more data files as needed for other pages

### Blog Content

The blog system ("Thoughts" section) is powered by Astro's content collections. Blog posts are stored as Markdown files in the `src/content/blog` directory.

Each blog post includes:
- Frontmatter metadata (title, date, tags, etc.)
- Content written in Markdown format
- Automatic tag pages and post listings

### Components

Reusable components are in the `src/components` directory:

- `Header.astro` - Site header with navigation
- `Footer.astro` - Site footer with social links
- `Icon.astro` - Icon component with a centralized icon library
- `InterestCard.astro` - Card component for research interests
<!-- - `BrainwaveBackground.astro` - Neural network animated background -->
- `CursorTrail.jsx` - Interactive cursor effect

### Pages

- `index.astro` - Home page
- `about.astro` - About page
- `research.astro` - Research page
- `thoughts.astro` - Blog/thoughts page

## Editing Content

### Updating Site Content

To update general site content, edit the files in the `src/data` directory:

- To add a new navigation item: Edit `src/data/navigation.js`
- To update the site title or social links: Edit `src/data/siteConfig.js`
- To add a new research interest: Edit the `interests` section in `src/data/homeContent.js`

### Managing Blog Posts

To manage blog posts in the "Thoughts" section:

1. **Adding a new post**: Create a new `.md` file in `src/content/blog/` with the required frontmatter
2. **Editing a post**: Modify the markdown file directly
3. **Deleting a post**: Remove the file from the directory

See `src/content/blog/README.md` for detailed instructions on blog post formatting.

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
<!-- │   │   ├── BrainwaveBackground.astro -->
│   │   ├── BlogPost.astro
│   │   ├── CursorTrail.jsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Icon.astro
│   │   ├── InterestCard.astro
│   │   └── PageTransition.jsx
│   ├── content/
│   │   ├── blog/
│   │   │   ├── README.md
│   │   │   ├── memory-formation.md
│   │   │   ├── meditation-and-neuroplasticity.md
│   │   │   └── neural-networks-in-brain-research.md
│   │   └── config.ts
│   ├── data/
│   │   ├── README.md
│   │   ├── homeContent.js
│   │   ├── navigation.js
│   │   └── siteConfig.js
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── research.astro
│   │   └── thoughts/
│   │       ├── index.astro
│   │       ├── [slug].astro
│   │       └── tag/
│   │           └── [tag].astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── formatDate.ts
└── package.json
```

## Development

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm install`          | Installs dependencies                        |
| `npm run dev`          | Starts local dev server at `localhost:4321`  |
| `npm run build`        | Build your production site to `./dist/`      |
| `npm run preview`      | Preview your build locally, before deploying |

## Color Palette

The site uses a refined cognitive science-inspired color palette:

- `light-pink`: #D4D4F7 - Light purple for backgrounds and accents
- `creamy-white`: #FFFBE6 - Warm cream color for the main background
- `soft-blue`: #94B2D6 - Medium blue for buttons and highlights
- `muted-rose`: #F0A5C0 - Soft pink for accents and hover states
