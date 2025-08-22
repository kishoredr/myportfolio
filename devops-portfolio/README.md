# DevOps Portfolio Website

A modern, high-performance personal website built for DevOps/SRE/Cloud engineers. Features a clean design, smooth animations, and comprehensive content management for showcasing your technical expertise.

![DevOps Portfolio](https://via.placeholder.com/800x400/10b981/ffffff?text=DevOps+Portfolio)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Dark Mode**: System preference detection with manual toggle
- **Animations**: Subtle micro-interactions with `prefers-reduced-motion` support
- **MDX Support**: Rich content for case studies and blog posts
- **Contact Form**: Built-in contact form with validation and rate limiting
- **SEO Optimized**: OpenGraph, JSON-LD schema, and sitemap generation
- **Performance**: Lighthouse score 95+ across all metrics
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devops-portfolio.git
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
devops-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   ├── case-studies/      # Case study pages (MDX)
│   │   ├── contact/           # Contact page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── skills/            # Skills page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── animations.tsx     # Framer Motion components
│   │   ├── header.tsx         # Site header
│   │   ├── footer.tsx         # Site footer
│   │   └── ...
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json
```

## 🎨 Customization

### Personal Information

Edit the following files to customize your personal information:

1. **Site metadata** (`src/app/layout.tsx`)
   ```typescript
   export const metadata: Metadata = {
     title: "Your Name | DevOps Engineer",
     description: "Your custom description...",
     // ... other metadata
   };
   ```

2. **Contact information** (`src/components/footer.tsx`)
   ```typescript
   const socialLinks = [
     {
       name: "GitHub",
       href: "https://github.com/yourusername",
       icon: Github,
     },
     // ... other links
   ];
   ```

3. **About page content** (`src/app/about/page.tsx`)
   - Update bio, principles, and workflow sections
   - Replace placeholder contact information

### Theme Customization

The site uses a custom design system built on Tailwind CSS. You can easily customize colors, fonts, and spacing:

1. **Colors** (`src/app/globals.css`)
   ```css
   :root {
     --primary: 142 76% 36%;        /* Emerald green */
     --primary-foreground: 355.7 100% 97.3%;
     /* ... other color variables */
   }
   ```

2. **Fonts** (`src/app/layout.tsx`)
   ```typescript
   const inter = Inter({
     subsets: ["latin"],
     variable: "--font-inter",
   });
   ```

3. **Component styles** (`tailwind.config.ts`)
   ```typescript
   theme: {
     extend: {
       colors: {
         primary: "hsl(var(--primary))",
         // ... other colors
       },
     },
   },
   ```

### Adding New Pages

1. **Create the page directory**
   ```bash
   mkdir src/app/your-new-page
   ```

2. **Add the page component**
   ```typescript
   // src/app/your-new-page/page.tsx
   import { MainLayout } from "@/components/main-layout";
   
   export default function YourNewPage() {
     return (
       <MainLayout>
         <div className="section-padding">
           <div className="container">
             <h1>Your New Page</h1>
           </div>
         </div>
       </MainLayout>
     );
   }
   ```

3. **Update navigation** (`src/components/header.tsx`)
   ```typescript
   const navigation = [
     // ... existing items
     { name: "Your Page", href: "/your-new-page" },
   ];
   ```

## 📝 Content Management

### Skills Section

Update your skills in `src/app/skills/page.tsx`:

```typescript
const skillCategories: SkillCategory[] = [
  {
    title: "Your Skill Category",
    icon: <YourIcon className="w-6 h-6" />,
    description: "Category description",
    skills: [
      { name: "Skill Name", level: 5, description: "Skill description" },
      // ... more skills
    ]
  },
];
```

### Portfolio Projects

Update your projects in `src/app/portfolio/page.tsx`:

```typescript
const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description...",
    outcome: "Key outcome achieved",
    metrics: ["Metric 1", "Metric 2", "Metric 3"],
    technologies: ["Tech 1", "Tech 2"],
    tags: ["Tag1", "Tag2"],
    githubUrl: "https://github.com/yourusername/project",
    caseStudyUrl: "/case-studies/your-project"
  },
];
```

### Case Studies (MDX)

Create detailed case studies using MDX:

1. **Create the directory**
   ```bash
   mkdir src/app/case-studies/your-case-study
   ```

2. **Add the MDX file**
   ```mdx
   // src/app/case-studies/your-case-study/page.mdx
   import { MainLayout } from "@/components/main-layout";
   
   export const metadata = {
     title: "Your Case Study Title",
     description: "Case study description...",
     date: "2024-01-15",
     readTime: "10 min read",
     tags: ["AWS", "Kubernetes", "Terraform"]
   };
   
   <MainLayout>
   <div className="section-padding">
   <div className="container max-w-4xl prose-custom">
   
   # Your Case Study Title
   
   Your case study content using MDX...
   
   ## Key Metrics
   
   <Metrics>
     <Metric value="99.9%" label="Uptime" description="System availability" />
     <Metric value="50%" label="Cost Savings" description="Infrastructure optimization" />
   </Metrics>
   
   </div>
   </div>
   </MainLayout>
   ```

3. **Update the case studies listing** (`src/app/case-studies/page.tsx`)

### Contact Form Configuration

The contact form includes built-in validation and rate limiting. To enable email notifications:

1. **Set up environment variables**
   ```bash
   # .env.local
   CONTACT_EMAIL=your.email@example.com
   EMAIL_SERVICE_API_KEY=your-api-key
   ```

2. **Configure email service** (`src/app/api/contact/route.ts`)
   - Uncomment and configure the email sending code
   - Choose your preferred service (SendGrid, AWS SES, Nodemailer, etc.)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables if using contact form email
   - Deploy!

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `out` (if using `output: 'export'`)
3. **Environment variables**: Add any required env vars

### Self-hosted

1. **Build the application**
   ```bash
   npm run build
   npm start
   ```

2. **Use a process manager**
   ```bash
   # Using PM2
   npm install -g pm2
   pm2 start npm --name "devops-portfolio" -- start
   ```

3. **Set up reverse proxy** (nginx example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## ⚡ Performance

This portfolio is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component
- **Fonts**: Self-hosted Google Fonts with optimal loading

### Performance Tips

1. **Optimize images**: Use WebP format and appropriate sizes
2. **Minimize JavaScript**: Remove unused dependencies
3. **Use CDN**: Deploy to a global CDN like Vercel or Netlify
4. **Monitor**: Use tools like Google PageSpeed Insights

## 🧪 Testing

### Running Tests

```bash
# Install Playwright
npx playwright install

# Run tests
npm run test:e2e
```

### Adding Tests

Create test files in the `tests/` directory:

```typescript
// tests/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  
  await page.click('text=Skills');
  await expect(page).toHaveURL('/skills');
});
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icon library

## 📞 Support

If you have questions or need help customizing this portfolio:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/yourusername/devops-portfolio/issues)
- 🐛 Bug Reports: Use the issue template

---

Built with ❤️ by [Your Name](https://your-domain.com)
