#!/bin/bash

echo "Debug Build Script"
echo "----------------"

# System Information
echo "System Information:"
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
echo "Current Directory: $(pwd)"

# Check Node and NPM versions
if [ "$(printf '%s\n' "18.0.0" "$NODE_VERSION" | sort -V | head -n1)" = "18.0.0" ]; then
    echo "Node version requirement met"
else
    echo "Node version is below 18.0.0"
    exit 1
fi

# Verify package.json
echo -e "\nVerifying package.json:"
npm pkg get name version

# Install dependencies with verbose output
echo -e "\nInstalling Dependencies:"
npm ci --verbose

# Build with detailed logging
echo -e "\nBuilding Project:"
npm run build --verbose

# Capture build exit status
BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -ne 0 ]; then
    echo -e "\nBuild Failed with Exit Code: $BUILD_EXIT_CODE"
    exit $BUILD_EXIT_CODE
fi

echo -e "\nBuild Completed Successfully"
exit 0