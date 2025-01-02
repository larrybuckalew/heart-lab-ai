#!/bin/bash

set -e

# Configuration
APP_NAME="heart-lab-ai"
ENV=${1:-production}

echo "⏮️ Starting rollback for $APP_NAME in $ENV environment"

# Get previous deployment
PREVIOUS_REVISION=$(kubectl rollout history deployment/$APP_NAME -n $ENV | tail -n 2 | head -n 1 | awk '{print $1}')

# Rollback deployment
echo "🔄 Rolling back to revision $PREVIOUS_REVISION..."
kubectl rollout undo deployment/$APP_NAME -n $ENV --to-revision=$PREVIOUS_REVISION

# Wait for rollback to complete
echo "⏳ Waiting for rollback to complete..."
kubectl rollout status deployment/$APP_NAME -n $ENV

# Verify rollback
echo "✅ Verifying rollback..."
sleep 10
KUBE_STATUS=$(kubectl get pods -n $ENV -l app=$APP_NAME -o jsonpath='{.items[*].status.phase}')

if [[ $KUBE_STATUS == *"Running"* ]]; then
  echo "✨ Rollback completed successfully!"
  exit 0
else
  echo "❌ Rollback verification failed"
  exit 1
fi