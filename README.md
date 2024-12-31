# Heart Lab AI Project

## Project Setup Instructions

### Prerequisites
- Node.js (version 18.17.0 or later)
- npm (version 9.5.0 or later)

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/larrybuckalew/heart-lab-ai.git
cd heart-lab-ai
```

2. Install Dependencies
```bash
npm install
```

3. Environment Configuration
- Copy `.env.local.example` to `.env.local`
- Fill in the required environment variables

4. Development Server
```bash
npm run dev
```

5. Build for Production
```bash
npm run build
```

### Project Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Start production server
- `npm run test`: Run test suite
- `npm run lint`: Run linter

## Configuration Files
- `package.json`: Dependency management and scripts
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `render.yaml`: Deployment configuration

## Troubleshooting
- Ensure all dependencies are installed
- Check Node.js and npm versions
- Verify environment variables
