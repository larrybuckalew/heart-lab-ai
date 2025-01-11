#!/bin/bash

set -e

echo "Starting deployment process..."

# Print system and environment information
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
echo "Current Directory: $(pwd)"

# Install dependencies
npm ci

# Build the project
npm run build

# List contents of .next directory
echo "Contents of .next directory:"
ls -la .next

# Verify standalone output exists
if [ -d ".next/standalone" ]; then
  echo "Standalone build successful"
else
  echo "Error: Standalone build not found"
  exit 1
fi

echo "Deployment process completed successfully"
exit 0