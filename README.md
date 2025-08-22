# DevOps Portfolio Website

A modern, high-performance personal website for DevOps/SRE/Cloud engineers built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Beautiful Design**: Clean, professional design with subtle animations using Framer Motion
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Automatic theme switching with system preference support
- **Performance**: Optimized for Lighthouse 95+ scores
- **Accessibility**: WCAG compliant with proper semantic markup
- **SEO Ready**: Built-in SEO optimization with OpenGraph and structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd devops-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── portfolio/         # Portfolio/Projects page
│   ├── experience/        # Experience timeline
│   ├── open-source/       # Open source contributions
│   ├── contact/           # Contact form
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Header & Footer**: Update `components/header.tsx` and `components/footer.tsx`
2. **Home Page**: Modify `app/page.tsx` with your stats and tools
3. **About Page**: Update `app/about/page.tsx` with your bio and timeline
4. **Skills**: Customize `app/skills/page.tsx` with your expertise
5. **Portfolio**: Add your projects in `app/portfolio/page.tsx`
6. **Experience**: Update `app/experience/page.tsx` with your work history
7. **Contact**: Update contact information in `app/contact/page.tsx`
8. **Resume**: Customize `app/resume/page.tsx` with your details

### Theme Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
// Custom DevOps theme colors
stone: { /* ... */ },      // Base neutral colors
emerald: { /* ... */ },    // Primary accent
blue: { /* ... */ },       // Secondary accent
```

### Content Updates

Most content is stored in the component files themselves. For easy updates:

- **Projects**: Edit the `projects` array in `app/portfolio/page.tsx`
- **Skills**: Modify the `skillCategories` array in `app/skills/page.tsx`
- **Experience**: Update the `experiences` array in `app/experience/page.tsx`
- **Stats**: Change the `stats` object in `app/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler
- `npm run test` - Run Playwright tests

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load when needed
- **Minification**: CSS and JavaScript minification in production
- **Caching**: Optimized caching headers for static assets

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **OpenGraph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🧪 Testing

The project includes Playwright for end-to-end testing:

```bash
npm run test          # Run tests in headless mode
npm run test:ui       # Run tests with UI
```

## 📚 Dependencies

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon set

### Animation & UX
- **Framer Motion** - Animation library
- **next-themes** - Theme management

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Playwright** - End-to-end testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing or deploying your portfolio:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Open an issue in this repository

## 🎉 Showcase

If you use this template, feel free to:

- Share your portfolio in the issues
- Tag me on social media
- Star this repository

---

**Built with ❤️ for the DevOps community**
