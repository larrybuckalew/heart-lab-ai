# Heart Lab AI Deployment Guide

## Deployment Options

### 1. Render Deployment

#### Prerequisites
- GitHub repository
- Render account
- Node.js 20.x
- npm 10.x

#### Deployment Steps
1. Connect GitHub Repository
   - Go to Render Dashboard
   - Create a New Web Service
   - Select your GitHub repository

2. Configure Build Settings
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Production

#### Environment Variables
Set the following in Render's environment settings:
- `NODE_ENV`: production
- `NODE_VERSION`: 20.x
- `NPM_VERSION`: 10.x
- `NEXT_PUBLIC_APP_URL`: Your deployed app URL

### 2. Manual Deployment Troubleshooting

#### Node.js and npm Version
Update your `package.json`:
```json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

#### Render CLI Alternative
- Use GitHub integration
- Manual deploy through Render web interface

### 3. Common Deployment Issues

#### Dependency Problems
```bash
# Clean install
npm ci

# Update dependencies
npm update
```

### Troubleshooting

1. Check Node.js Version
```bash
node --version
npm --version
```

2. Verify Build
```bash
npm run build
npm start
```

### Support
- Render Documentation: https://render.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment