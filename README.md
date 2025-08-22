# DevOps Portfolio Website

A modern, high-performance personal website for DevOps/SRE/Cloud engineers built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with custom DevOps theme
- **Smooth Animations**: Framer Motion with reduced motion support
- **Responsive Design**: Mobile-first approach with excellent UX
- **Dark Mode**: System preference detection with theme toggle
- **Performance**: Optimized for Lighthouse 95+ scores
- **Accessibility**: WCAG compliant with proper landmarks and focus states
- **SEO Ready**: OpenGraph, structured data, and sitemap generation

## 📱 Pages & Routes

- **Home** (`/`) - Hero section, stats, and tool showcase
- **About** (`/about`) - Bio, principles, timeline, downloadable resume
- **Skills** (`/skills`) - Grouped technical skills with proficiency levels
- **Portfolio** (`/portfolio`) - Filterable project showcase with metrics
- **Experience** (`/experience`) - Professional journey and impact
- **Open Source** (`/open-source`) - GitHub contributions and projects
- **Talks & Writing** (`/talks-writing`) - Conference talks and blog posts
- **Services** (`/services`) - Professional consulting services
- **Contact** (`/contact`) - Contact form and social links
- **Resume** (`/resume`) - Formatted resume view with download

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes with system preference
- **Components**: Radix UI primitives
- **Deployment**: Vercel (recommended)

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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

- **Header & Footer**: `components/header.tsx` and `components/footer.tsx`
- **Contact Details**: `app/contact/page.tsx`
- **Social Links**: Update URLs in footer and contact pages
- **Resume**: `app/resume/page.tsx` with your experience and skills
- **Portfolio**: `app/portfolio/page.tsx` with your projects
- **About**: `app/about/page.tsx` with your bio and timeline

### Content Updates

#### Portfolio Projects
Edit `app/portfolio/page.tsx` to add your projects:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description with outcomes",
    stack: ["AWS", "Kubernetes", "Terraform"],
    tags: ["AWS", "EKS", "Terraform"],
    metrics: {
      uptime: "99.95%",
      costReduction: "30%",
    },
    github: "https://github.com/yourusername/project",
    caseStudy: "/case-studies/project",
  },
  // ... more projects
]
```

#### Skills
Update `app/skills/page.tsx` with your skill levels:
```typescript
const skillCategories = [
  {
    name: "Your Category",
    description: "Category description",
    skills: [
      { name: "Skill Name", proficiency: "expert" }, // expert, advanced, intermediate, beginner
    ],
  },
]
```

#### Experience
Modify `app/experience/page.tsx` with your work history:
```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    location: "Location",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech 1", "Tech 2"],
    impact: {
      metric: "value",
    },
  },
]
```

### Theme Customization

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Update these colors to match your brand
      emerald: { /* your emerald shades */ },
      blue: { /* your blue shades */ },
      stone: { /* your neutral shades */ },
    },
  },
}
```

### SEO & Meta

Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - DevOps Engineer',
  description: 'Your description',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    url: 'https://yourdomain.com',
    // ... other OG properties
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Deploy automatically on every push

### Environment Variables

Create `.env.local` for local development:
```bash
# Add any environment variables you need
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Build & Test

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run typecheck
```

## 📊 Performance

The site is optimized for:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent performance
- **SEO**: 100/100 score
- **Accessibility**: WCAG 2.1 AA compliant
- **Best Practices**: 100/100 score

## 🔧 Development

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── portfolio/         # Portfolio page
│   ├── experience/        # Experience page
│   ├── open-source/       # Open source page
│   ├── talks-writing/     # Talks & writing page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   └── theme-toggle.tsx   # Theme switcher
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
└── public/                 # Static assets
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx` with your component
3. Update navigation in `components/header.tsx`
4. Add route to footer if needed

### Component Development

- Use shadcn/ui components as base
- Follow the established design patterns
- Maintain accessibility standards
- Test with reduced motion preferences

## 🎨 Design System

### Color Palette

- **Primary**: Emerald (green) - Professional, trustworthy
- **Secondary**: Blue - Technology, reliability
- **Neutral**: Stone - Clean, modern
- **Accent**: Various shades for highlights

### Typography

- **Headings**: Inter (semi-bold, bold)
- **Body**: Inter (regular, medium)
- **Code**: JetBrains Mono

### Spacing

- **Section Padding**: `py-16 sm:py-24`
- **Container Padding**: `px-4 sm:px-6 lg:px-8`
- **Grid Gaps**: `gap-8` for sections, `gap-4` for cards

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Systems**: Responsive grids that adapt to screen size
- **Touch Friendly**: Proper touch targets and interactions

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Screen Reader**: Proper ARIA labels and descriptions

## 🔍 SEO Features

- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: JSON-LD for Person, Article, Project
- **Sitemap**: Auto-generated sitemap.xml
- **Robots**: Proper robots.txt configuration
- **Performance**: Core Web Vitals optimization

## 🚀 Future Enhancements

- [ ] Blog system with MDX
- [ ] Case study detail pages
- [ ] GitHub API integration
- [ ] Contact form backend
- [ ] Analytics integration
- [ ] RSS feed generation
- [ ] Search functionality
- [ ] Internationalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Support

If you have questions or need help customizing your portfolio:

- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Happy coding! 🚀**

Built with ❤️ for the DevOps community.
