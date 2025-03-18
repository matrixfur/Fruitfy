#!/bin/bash

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
  git init
  echo "Git repository initialized"
fi

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Fruitfy e-commerce app"

# Instructions for setting up remote repository
echo ""
echo "==== GitHub Setup Instructions ===="
echo "1. Create a new repository on GitHub (without README, license, or .gitignore)"
echo "2. Run the following commands to push to GitHub:"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/fruitfy.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Replace 'YOUR-USERNAME' with your actual GitHub username"
echo "=================================="