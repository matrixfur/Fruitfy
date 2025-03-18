#!/bin/bash

# Run cleanup script
bash cleanup.sh

# Install gh-pages package
echo "Installing gh-pages package..."
npm install --save-dev gh-pages

# Update username in files
read -p "Enter your GitHub username: " username

# Replace placeholder username in package.json
sed -i "s/your-username/$username/g" package.json

# Replace placeholder username in README.md
sed -i "s/your-username/$username/g" README.md

# Initialize git repository
bash github-setup.sh

echo ""
echo "Project is now ready to be pushed to GitHub!"
echo "After pushing to GitHub, you can deploy using: npm run deploy"