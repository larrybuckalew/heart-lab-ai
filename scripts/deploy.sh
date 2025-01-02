#!/bin/bash

set -e

# Configuration
APP_NAME="heart-lab-ai"
DOCKER_REPO="your-docker-repo"
ENV=${1:-production}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "🚀 Starting deployment for $APP_NAME in $ENV environment"

# Build and tag Docker image
echo "📦 Building Docker image..."
docker build -t $DOCKER_REPO/$APP_NAME:latest .

# Run tests
echo "🧪 Running tests..."
npm run test

# Push to Docker registry
echo "⬆️ Pushing to Docker registry..."
docker push $DOCKER_REPO/$APP_NAME:latest

# Apply Kubernetes configs
if [ -d "./k8s/$ENV" ]; then
  echo "⚙️ Applying Kubernetes configurations..."
  kubectl apply -f ./k8s/$ENV/

  # Wait for deployment to complete
  echo "⏳ Waiting for deployment to complete..."
  kubectl rollout status deployment/$APP_NAME -n $ENV
fi

# Run database migrations if needed
if [ -f "./migrations/migrate.js" ]; then
  echo "🔄 Running database migrations..."
  node ./migrations/migrate.js
fi

# Verify deployment
echo "✅ Verifying deployment..."
sleep 10
KUBE_STATUS=$(kubectl get pods -n $ENV -l app=$APP_NAME -o jsonpath='{.items[*].status.phase}')

if [[ $KUBE_STATUS == *"Running"* ]]; then
  echo -e "${GREEN}✨ Deployment completed successfully!${NC}"
  exit 0
else
  echo -e "${RED}❌ Deployment verification failed${NC}"
  exit 1
fi