const { execSync } = require('child_process');

try {
  execSync('prisma generate', { stdio: 'inherit' });
} catch (error) {
  console.error('Error generating Prisma Client:', error);
  process.exit(1);
}