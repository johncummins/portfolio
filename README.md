# Portfolio Website

A clean, minimal portfolio site built with Next.js 15 and Tailwind CSS.

## What's included

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (Button, Card)
- **Framer Motion** for smooth animations
- **Responsive design** that works on mobile and desktop
- **Dynamic project pages** with routing
- **SEO ready** with proper metadata

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to see it in action.

## Project structure

```
app/
├── components/          # Main components
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Projects grid
│   ├── Articles.tsx    # Articles list
│   └── Footer.tsx      # Contact info
├── data/               # Content data
│   ├── projects.ts     # Project data
│   └── articles.ts     # Article data
├── projects/[slug]/    # Dynamic project pages
└── page.tsx           # Main page

components/ui/          # shadcn/ui components
lib/                   # Utilities
public/                # Static assets
```

## Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Typography**: Modify font styles in `app/globals.css`
- **Components**: Customize shadcn/ui components in `components/ui/`
- **SEO**: Update metadata in `app/layout.tsx`

## Deployment

Deploy to Vercel with one click:

1. Push to GitHub
2. Connect to Vercel
3. Deploy

## License

MIT - use it for your own portfolio!
