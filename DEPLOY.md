# Deployment Guide

This guide covers deploying the Rustun website to various platforms.

## Quick Deploy (Static HTML)

The simplest way is to use the static `index.html` file which doesn't require Hugo:

```bash
# Preview locally
./preview.sh

# Then open http://localhost:8000 in your browser
```

## Option 1: GitHub Pages

### Method A: Manual Deployment

1. **Build with Hugo** (if installed):
   ```bash
   ./build.sh
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   cd public
   git init
   git add .
   git commit -m "Deploy website"
   git branch -M gh-pages
   git remote add origin https://github.com/smartethnet/rustun.git
   git push -f origin gh-pages
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

### Method B: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml` in your main repository:

```yaml
name: Deploy Website

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      
      - name: Build
        run: hugo --minify
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Method C: Without Hugo (Static Only)

If you prefer not to use Hugo:

```bash
# Copy static files to a gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r index.html themes .
git add .
git commit -m "Deploy static site"
git push -f origin gh-pages
```

## Option 2: Netlify

### Easy Deploy

1. **Push your code to GitHub**

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your repository

3. **Configure build settings**:
   ```
   Base directory: (leave empty)
   Build command: hugo
   Publish directory: public
   ```

4. **Deploy!**

### Using `netlify.toml`

Create `netlify.toml` in project root:

```toml
[build]
  publish = "public"
  command = "hugo"

[build.environment]
  HUGO_VERSION = "0.121.0"

[context.production]
  command = "hugo --minify"

[context.deploy-preview]
  command = "hugo --buildFuture"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

## Option 3: Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or connect via Web**:
   - Go to [Vercel](https://vercel.com)
   - Import your repository
   - Configure:
     - Framework: Hugo
     - Root Directory: (leave empty)
     - Build Command: `hugo`
     - Output Directory: `public`

## Option 4: Cloudflare Pages

1. **Connect repository to Cloudflare Pages**

2. **Build configuration**:
   ```
   Build command: hugo
   Build output directory: public
   Root directory: (leave empty)
   ```

3. **Environment variables** (if needed):
   ```
   HUGO_VERSION = 0.121.0
   ```

## Option 5: Self-Hosted

### Using Docker

Create `Dockerfile` in project root:

```dockerfile
FROM hugomods/hugo:latest AS builder
WORKDIR /src
COPY . .
RUN hugo --minify

FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
EXPOSE 80
```

Build and run:

```bash
docker build -t rustun-website .
docker run -d -p 8080:80 rustun-website
```

### Using Nginx

1. **Build the site**:
   ```bash
   ./build.sh
   ```

2. **Copy to web server**:
   ```bash
   scp -r public/* user@server:/var/www/rustun.io/
   ```

3. **Nginx config**:
   ```nginx
   server {
       listen 80;
       server_name rustun.io www.rustun.io;
       root /var/www/rustun.io;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }

       # Cache static assets
       location ~* \.(css|js|jpg|jpeg|png|gif|ico|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

## Option 6: Static Only (No Build Step)

If you don't want to use Hugo at all:

1. **Just use `index.html`**:
   ```bash
   # The index.html file works standalone
   # Upload it along with the themes/ directory
   
   scp -r index.html themes/ user@server:/var/www/
   ```

2. **Or use any static hosting**:
   - AWS S3 + CloudFront
   - Google Cloud Storage
   - Azure Static Web Apps
   - DigitalOcean Spaces
   - etc.

## Custom Domain

After deploying, configure your custom domain:

### GitHub Pages
1. Go to Settings → Pages
2. Add custom domain: `rustun.io`
3. Update DNS with:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  yourusername.github.io
   ```

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS as instructed

## SSL/HTTPS

Most platforms (GitHub Pages, Netlify, Vercel, Cloudflare) provide free SSL automatically via Let's Encrypt.

For self-hosted, use [Certbot](https://certbot.eff.org/):

```bash
sudo certbot --nginx -d rustun.io -d www.rustun.io
```

## Performance Optimization

### Enable Compression
- Gzip/Brotli compression
- Already configured in most platforms

### CDN
- Use CloudFlare (free plan available)
- Or platform's built-in CDN

### Caching
Headers are already set for static assets (1 year cache)

## Monitoring

Add analytics to `themes/rustun/layouts/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Or use privacy-friendly alternatives:
- [Plausible](https://plausible.io/)
- [Umami](https://umami.is/)
- [Fathom](https://usefathom.com/)

## Troubleshooting

### Hugo not found
```bash
# Install Hugo
brew install hugo  # macOS
sudo apt install hugo  # Linux
choco install hugo-extended  # Windows
```

### Build fails
```bash
# Check Hugo version
hugo version

# Clear cache
rm -rf public/ resources/

# Rebuild
./build.sh
```

### 404 errors on GitHub Pages
- Check that `baseURL` in `hugo.toml` matches your domain
- Ensure branch is set correctly in Settings → Pages
- Wait a few minutes for deployment

### Multilingual routes not working
- Make sure both `/en/` and `/zh/` directories exist in public
- Check language configuration in `hugo.toml`

## Need Help?

- [Hugo Documentation](https://gohugo.io/documentation/)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

