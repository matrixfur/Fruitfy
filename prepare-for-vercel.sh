#!/bin/bash

echo "Preparing Fruitfy for Vercel deployment..."

# Remove unnecessary files
echo "Cleaning up unnecessary files..."
rm -f src/components/ImageTest.js
rm -rf public/src
rm -f package.json.bak package.json.mac-linux package.json.new pkg.json README.md.new
rm -f cleanup.sh github-setup.sh prepare-for-github.sh

# Remove GitHub Pages specific files and configurations
echo "Removing GitHub Pages specific configurations..."
npm uninstall gh-pages --save-dev

# Install dependencies
echo "Installing dependencies..."
npm install

# Create a build to test everything works
echo "Creating a test build..."
npm run build

echo ""
echo "✅ Project is now ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub and push your code"
echo "2. Go to vercel.com and import your repository"
echo "3. Follow the instructions in VERCEL_DEPLOYMENT.md"
echo ""
echo "Happy coding! 🚀"