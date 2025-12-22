#!/bin/bash

set -e

echo "🚀 Building Rustun Website..."

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed."
    echo ""
    echo "Please install Hugo first:"
    echo "  macOS:   brew install hugo"
    echo "  Linux:   sudo apt install hugo (or use package manager)"
    echo "  Windows: choco install hugo-extended"
    echo ""
    echo "Or download from: https://github.com/gohugoio/hugo/releases"
    exit 1
fi

# Show Hugo version
echo "📦 Hugo version:"
hugo version

# Clean previous build
if [ -d "public" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf public
fi

# Build the site
echo "🔨 Building site..."
hugo --minify

# Show build info
echo ""
echo "✅ Build complete!"
echo "📁 Output directory: ./public"
echo ""
echo "To preview locally:"
echo "  cd public && python3 -m http.server 8000"
echo ""
echo "Or run development server:"
echo "  hugo server -D"

