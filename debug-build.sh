#!/bin/bash

# Debugging script for Netlify build

set -e

echo "===== System Information ====="
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
echo "Current Directory: $(pwd)"
echo "Directory Contents:"
ls -la

echo -e "\n===== Checking Project Files ====="
REQUIRED_FILES=(
  "package.json"
  "next.config.js"
  "app/layout.tsx"
  "app/page.tsx"
)

for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "$file: Found ✓"
    echo "File contents:"
    cat "$file"
    echo "---"
  else
    echo "$file: NOT FOUND ✗"
  fi
done

echo -e "\n===== Installing Dependencies ====="
npm ci --verbose

echo -e "\n===== Building Project ====="
npm run build

echo -e "\n===== Build Completed Successfully ====="
exit 0