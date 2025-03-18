#!/bin/bash

echo "🚀 Preparing Fruitfy for Vercel deployment..."

# Remove unnecessary files
echo "🧹 Cleaning up unnecessary files..."
rm -f src/components/ImageTest.js
rm -rf public/src
rm -f package.json.bak package.json.mac-linux package.json.new pkg.json
rm -f cleanup.sh github-setup.sh prepare-for-github.sh

# Replace README with Vercel version
echo "📝 Updating README for Vercel..."
mv README.md.vercel README.md

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create a build to test everything works
echo "🏗️ Creating a test build..."
npm run build

echo ""
echo "✅ Project is now ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub and push your code:"
echo "   git add ."
echo "   git commit -m \"Prepare for Vercel deployment\""
echo "   git push"
echo ""
echo "2. Go to vercel.com, import your repository, and deploy"
echo ""
echo "3. For detailed instructions, see VERCEL_DEPLOYMENT.md"
echo ""
echo "Happy coding! 🚀"