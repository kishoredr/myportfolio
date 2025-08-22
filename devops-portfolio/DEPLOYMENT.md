# Deployment Guide

This guide covers different deployment options for your DevOps portfolio website.

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository

2. **Configure Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install`

3. **Environment Variables**
   ```
   CONTACT_EMAIL=your.email@example.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Custom Domain** (Optional)
   - Add your custom domain in the Vercel dashboard
   - Update DNS records as instructed

### 2. Netlify

Deploy to Netlify with continuous deployment:

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `.next`
   - Node Version: `18` (in environment variables)

3. **Environment Variables**
   ```
   NODE_VERSION=18
   CONTACT_EMAIL=your.email@example.com
   NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
   ```

### 3. GitHub Pages (Static Export)

For static deployment without server-side features:

1. **Configure Static Export**
   ```typescript
   // next.config.ts
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

2. **GitHub Actions Workflow**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
         
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build
         run: npm run build
         
       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./out
   ```

## Self-Hosted Deployment

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   COPY package.json package-lock.json* ./
   RUN npm ci --only=production
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   RUN npm run build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   ENV HOSTNAME "0.0.0.0"
   
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t devops-portfolio .
   docker run -p 3000:3000 devops-portfolio
   ```

### Traditional VPS Deployment

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/devops-portfolio.git
   cd devops-portfolio
   
   # Install dependencies
   npm ci --only=production
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "devops-portfolio" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Configuration**
   ```nginx
   # /etc/nginx/sites-available/devops-portfolio
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/devops-portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **SSL with Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

## AWS Deployment

### AWS Amplify

1. **Connect Repository**
   - Visit AWS Amplify Console
   - Connect your GitHub repository
   - Configure build settings

2. **Build Specification**
   ```yaml
   # amplify.yml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### AWS App Runner

1. **Create apprunner.yaml**
   ```yaml
   version: 1.0
   runtime: nodejs18
   build:
     commands:
       build:
         - npm ci
         - npm run build
   run:
     runtime-version: 18
     command: npm start
     network:
       port: 3000
       env: PORT
     env:
       - name: NODE_ENV
         value: production
   ```

2. **Deploy via AWS Console**
   - Create new App Runner service
   - Connect to your repository
   - Configure environment variables

## Environment Variables

### Required Variables
```env
CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Optional Variables
```env
# Email service for contact form
SENDGRID_API_KEY=your-sendgrid-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# GitHub integration
GITHUB_TOKEN=your-github-token
GITHUB_USERNAME=your-username
```

## Performance Optimization

### CDN Configuration

1. **Vercel** - Built-in global CDN
2. **Netlify** - Built-in global CDN
3. **CloudFlare** - Add as proxy for any deployment

### Caching Headers

Add to your `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## Monitoring and Analytics

### Error Monitoring
- **Sentry**: Add error tracking
- **LogRocket**: Session replay
- **Bugsnag**: Error monitoring

### Performance Monitoring
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Web analytics
- **Plausible**: Privacy-friendly analytics

### Uptime Monitoring
- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Professional monitoring
- **StatusPage**: Status page for users

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and rebuild
   npm run clean
   npm ci
   npm run build
   ```

2. **Memory Issues**
   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

3. **TypeScript Errors**
   ```bash
   # Check types
   npm run type-check
   ```

4. **ESLint Errors**
   ```bash
   # Fix linting issues
   npm run lint:fix
   ```

### Performance Issues

1. **Bundle Analysis**
   ```bash
   npm run analyze
   ```

2. **Image Optimization**
   - Use WebP format
   - Optimize image sizes
   - Use Next.js Image component

3. **Code Splitting**
   - Use dynamic imports
   - Lazy load components
   - Optimize bundle size

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive data
   - Use platform-specific secret management
   - Rotate API keys regularly

2. **Headers**
   - Configure security headers
   - Use HTTPS everywhere
   - Implement CSP headers

3. **Dependencies**
   - Keep dependencies updated
   - Run security audits
   - Use dependabot for updates

---

Need help with deployment? [Create an issue](https://github.com/yourusername/devops-portfolio/issues) or reach out via the contact form.