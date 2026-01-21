#!/bin/bash

set -e

echo "🌐 Starting Rustun Website Preview..."
echo ""
echo "This will serve the static HTML version (no Hugo required)"
echo ""

# Check if we're in the correct directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run from the smartethnet.github.io directory."
    exit 1
fi

# Try different methods to serve the site
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3 HTTP server"
    echo "🌐 Open: http://localhost:8000"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Using Python 2 HTTP server"
    echo "🌐 Open: http://localhost:8000"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    echo "✅ Using PHP built-in server"
    echo "🌐 Open: http://localhost:8000"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable HTTP server found."
    echo ""
    echo "Please install one of the following:"
    echo "  - Python: brew install python3 (macOS) or apt install python3 (Linux)"
    echo "  - PHP: brew install php (macOS) or apt install php (Linux)"
    echo ""
    echo "Or use npx (requires Node.js):"
    echo "  npx serve ."
    exit 1
fi

