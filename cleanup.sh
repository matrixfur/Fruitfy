#!/bin/bash

# Remove unnecessary files
rm -f src/components/ImageTest.js
rm -rf public/src

# Replace README.md with the new version
mv README.md.new README.md

echo "Project cleanup completed successfully!"