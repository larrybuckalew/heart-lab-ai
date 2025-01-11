#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function logSystemInfo() {
  console.log('===== System Information =====');
  console.log('Node Version:', process.version);
  console.log('NPM Version:', execSync('npm --version').toString().trim());
  console.log('Current Directory:', process.cwd());
}

function checkProjectFiles() {
  console.log('\n===== Project Files =====');
  const requiredFiles = [
    'package.json', 
    'next.config.js', 
    'tailwind.config.js', 
    'postcss.config.js',
    'app/layout.tsx', 
    'app/page.tsx'
  ];

  requiredFiles.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      const stats = fs.statSync(filePath);
      console.log(`${file}: Found (${stats.size} bytes)`);
    } catch (error) {
      console.error(`${file}: NOT FOUND`);
    }
  });
}

function checkDependencies() {
  console.log('\n===== Dependencies =====');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log('Dependencies:', Object.keys(packageJson.dependencies || {}));
    console.log('Dev Dependencies:', Object.keys(packageJson.devDependencies || {}));
  } catch (error) {
    console.error('Error reading package.json:', error);
  }
}

function runBuild() {
  console.log('\n===== Build Process =====');
  try {
    const buildOutput = execSync('npm run build', { 
      stdio: 'inherit',
      env: { 
        ...process.env, 
        NODE_ENV: 'production',
        NEXT_TELEMETRY_DISABLED: '1'
      }
    });
    console.log('Build completed successfully');
    return true;
  } catch (error) {
    console.error('Build failed:', error);
    return false;
  }
}

function main() {
  logSystemInfo();
  checkProjectFiles();
  checkDependencies();
  const buildSuccess = runBuild();
  
  process.exit(buildSuccess ? 0 : 1);
}

main();