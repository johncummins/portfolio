# John Cummins Portfolio

A modern, minimal portfolio website inspired by [Alex Pate's design](https://alexpate.com/). Built with Next.js 15, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal aesthetic with neutral colors and subtle blue accents
- **Smooth Animations**: Framer Motion for scroll animations and Rough Notation for highlights
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Next.js 15 and minimal dependencies
- **Accessible**: Semantic HTML and proper ARIA labels
- **SEO Optimized**: Proper metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Highlights**: Rough Notation
- **Icons**: Lucide React
- **Font**: Inter
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Customization

### Adding Content

1. **Projects**: Edit `app/data/projects.ts` to add your projects
2. **Articles**: Edit `app/data/articles.ts` to add your articles
3. **Personal Info**: Update the Hero component in `app/components/Hero.tsx`
4. **Contact Info**: Update the Footer component in `app/components/Footer.tsx`

### Styling

- **Colors**: Modify the CSS variables in `app/globals.css`
- **Typography**: Update the font styles in `app/globals.css`
- **Components**: Customize shadcn/ui components in `components/ui/`

### SEO & Metadata

Update the metadata in `app/layout.tsx` with your information:

- Title and description
- Open Graph tags
- Twitter card data
- Social media links

## Project Structure

```
portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section with rough notation
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Articles.tsx    # Articles list
│   │   └── Footer.tsx      # Footer with contact info
│   ├── data/               # Data files
│   │   ├── projects.ts     # Project data structure
│   │   └── articles.ts     # Article data structure
│   ├── projects/[slug]/    # Dynamic project pages
│   │   └── page.tsx       # Project detail page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/ui/         # shadcn/ui components
├── lib/                   # Utility functions
│   ├── utils.ts          # General utilities
│   └── roughNotationHelpers.ts # Rough notation config
└── public/               # Static assets
```

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## TODO Items

All content placeholders are marked with `// TODO:` comments. Search for these to find what needs to be customized:

- Personal information (name, title, location)
- Project descriptions and images
- Article content and links
- Contact information and social links
- About section content

## License

MIT License - feel free to use this template for your own portfolio!
