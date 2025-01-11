#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to log system information
function logSystemInfo() {
  console.log('System Information:');
  console.log('Node Version:', process.version);
  console.log('NPM Version:', require('child_process').execSync('npm --version').toString().trim());
  console.log('Current Directory:', process.cwd());
}

// Function to check project dependencies
function checkDependencies() {
  console.log('\nChecking Dependencies:');
  const packageJson = require('./package.json');
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  console.log('Dependencies:', Object.keys(dependencies));
  console.log('Dev Dependencies:', Object.keys(devDependencies));
}

// Function to verify critical configuration files
function checkConfigFiles() {
  console.log('\nVerifying Configuration Files:');
  const configFiles = [
    'next.config.mjs',
    'package.json',
    'tsconfig.json',
    'netlify.toml'
  ];

  configFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    try {
      fs.accessSync(filePath, fs.constants.R_OK);
      console.log(`${file}: Exists and is readable`);
    } catch (error) {
      console.error(`${file}: Cannot be read`);
    }
  });
}

// Main debug function
function runDebug() {
  logSystemInfo();
  checkDependencies();
  checkConfigFiles();

  // Attempt to build with verbose logging
  console.log('\nAttempting Build:');
  const buildProcess = exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error('Build Error:', error);
      console.error('Error Details:', stderr);
    }
    console.log('Build Output:', stdout);
  });

  buildProcess.stdout.pipe(process.stdout);
  buildProcess.stderr.pipe(process.stderr);
}

runDebug();