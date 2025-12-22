# Quick Start Guide

## 🚀 Fastest Way (No Installation Required)

Just open `index.html` in your browser:

```bash
# Option 1: Double-click index.html in file explorer

# Option 2: From terminal
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

**Features:**
- ✅ Works offline
- ✅ No build tools needed
- ✅ Supports language switching (EN/中文)
- ✅ Fully responsive

## 🌐 Local Preview (Simple HTTP Server)

```bash
./preview.sh
```

Then open http://localhost:8000

## 🛠 Development with Hugo (Advanced)

### Install Hugo

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt install hugo

# Fedora
sudo dnf install hugo

# Or download from: https://github.com/gohugoio/hugo/releases
```

**Windows:**
```powershell
choco install hugo-extended
# or
scoop install hugo-extended
```

### Start Development Server

```bash
# Run from smartethnet.github.io directory
./dev.sh
```

Server will start at:
- English: http://localhost:1313/
- Chinese: http://localhost:1313/zh/

### Build for Production

```bash
./build.sh
```

Output will be in `public/` directory.

## 📤 Deploy

### GitHub Pages (Recommended)

```bash
# Build
./build.sh

# Deploy
cd public
git init
git add .
git commit -m "Deploy website"
git push -f git@github.com:smartethnet/rustun.git main:gh-pages
```

Enable GitHub Pages in repository settings → Pages → Source: `gh-pages`.

### Other Platforms

See [DEPLOY.md](DEPLOY.md) for detailed instructions on:
- Netlify
- Vercel
- Cloudflare Pages
- Self-hosted options

## 🎨 Customization

### Update Version
Edit `hugo.toml`:
```toml
[params]
  version = '0.0.1'
```

### Change Colors
Edit `themes/rustun/static/css/style.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #004e89;
}
```

### Update Content
- English: `content/en/_index.md`
- Chinese: `content/zh/_index.md`
- Layout: `themes/rustun/layouts/index.html`

## 📁 Project Structure

```
smartethnet.github.io/
├── index.html           # Static version (no build required)
├── hugo.toml           # Hugo configuration
├── themes/
│   └── rustun/
│       ├── layouts/    # HTML templates
│       └── static/     # CSS, JS, assets
├── content/            # Markdown content
├── preview.sh          # Preview script
├── dev.sh             # Hugo dev server
└── build.sh           # Build script
```

## 🔧 Scripts

- `./preview.sh` - Preview static HTML version
- `./dev.sh` - Hugo development server
- `./build.sh` - Build production site

## 📚 Learn More

- [README.md](README.md) - Full documentation
- [DEPLOY.md](DEPLOY.md) - Deployment guide
- [Hugo Docs](https://gohugo.io/documentation/)

## 💡 Tips

1. **No Hugo?** Just use `index.html` - it works perfectly!
2. **Want live reload?** Use `./dev.sh` with Hugo
3. **Ready to deploy?** See [DEPLOY.md](DEPLOY.md)
4. **Need help?** Check [README.md](README.md) or open an issue

## ✨ Features

- 🌍 **Bilingual** - English & Chinese
- 📱 **Responsive** - Works on all devices
- ⚡ **Fast** - Lightweight and optimized
- 🎨 **Modern** - Clean, professional design
- 🚀 **Easy Deploy** - Multiple hosting options

