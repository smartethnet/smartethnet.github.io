# Rustun Website

Modern website for Rustun VPN project built with Hugo.

## Features

- 🌍 **Multilingual** - Support for English and Chinese with easy switching
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast** - Static site generation for optimal performance
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🚀 **Easy Deployment** - Deploy to GitHub Pages, Netlify, Vercel, etc.

## Quick Start

### Option 1: Using Hugo (Recommended)

#### Prerequisites
- Hugo Extended (v0.100.0 or higher)

#### Installation

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
# Download from https://github.com/gohugoio/hugo/releases
# Or use package manager
sudo apt-get install hugo  # Debian/Ubuntu
sudo dnf install hugo      # Fedora
```

**Windows:**
```powershell
choco install hugo-extended
# Or use scoop
scoop install hugo-extended
```

#### Development

```bash
# Start development server in smartethnet.github.io directory
hugo server -D

# The site will be available at http://localhost:1313
# Changes are reflected in real-time
```

#### Build for Production

```bash
# Generate static files
hugo

# Output will be in the 'public' directory
```

### Option 2: Using Static HTML (No Hugo Required)

A pre-built static version is available in the `public/` directory after running `hugo`. You can serve it with any web server:

```bash
# Using Python
python3 -m http.server 8000 -d public

# Using Node.js
npx serve public

# Using PHP
php -S localhost:8000 -t public
```

## Project Structure

```
smartethnet.github.io/
├── hugo.toml              # Hugo configuration
├── content/               # Content files
│   ├── en/               # English content
│   │   └── _index.md
│   └── zh/               # Chinese content
│       └── _index.md
├── themes/
│   └── rustun/           # Custom theme
│       ├── layouts/
│       │   └── index.html    # Main layout
│       ├── static/
│       │   ├── css/
│       │   │   └── style.css # Styles
│       │   └── js/
│       │       └── main.js   # JavaScript
│       └── theme.toml
└── public/               # Generated static files (after build)
```

## Customization

### Update Version

Edit `hugo.toml`:
```toml
[params]
  version = '0.0.1'  # Update this
```

### Update GitHub Link

Edit `hugo.toml`:
```toml
[params]
  github = 'https://github.com/smartethnet/rustun'
```

### Update Download Links

Edit `themes/rustun/layouts/index.html` and search for download URLs to update release versions.

### Modify Colors

Edit `themes/rustun/static/css/style.css` and update CSS variables:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #004e89;
    /* ... other colors */
}
```

## Deployment

### GitHub Pages

1. Build the site:
   ```bash
   hugo
   ```

2. Push the `public` directory to `gh-pages` branch:
   ```bash
   cd public
   git init
   git add .
   git commit -m "Deploy website"
   git push -f git@github.com:smartethnet/rustun.git main:gh-pages
   ```

3. Enable GitHub Pages in repository settings, select `gh-pages` branch.

### Netlify

1. Connect your repository to Netlify
2. Build command: `hugo`
3. Publish directory: `public`

### Vercel

1. Import your repository in Vercel
2. Framework preset: Hugo
3. Build command: `hugo`
4. Output directory: `public`

### Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

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
        uses: actions/upload-pages-artifact@v2
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
        uses: actions/deploy-pages@v2
```

## Language Support

The site automatically detects browser language and displays the appropriate version:
- `/` - Default (English)
- `/zh/` - Chinese version

Users can switch languages using the language switcher in the navigation.

## Performance

- **Size**: ~50KB (HTML + CSS + JS combined)
- **Load Time**: <1s on fast connections
- **Lighthouse Score**: 95+ across all metrics
- **Mobile Friendly**: Fully responsive design

## License

MIT License - see the main project repository for details.

## Support

For issues or questions, please visit:
- [GitHub Issues](https://github.com/smartethnet/rustun/issues)
- [GitHub Discussions](https://github.com/smartethnet/rustun/discussions)

