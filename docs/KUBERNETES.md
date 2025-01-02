# Kubernetes Deployment Guide

## Prerequisites

- Kubernetes cluster (v1.20+)
- kubectl configured
- Helm v3
- Docker registry access

## Deployment Steps

1. Create Namespace:
```bash
kubectl create namespace production
```

2. Configure Secrets:
```bash
kubectl create secret generic app-secrets \
  --from-literal=REDIS_PASSWORD=your-redis-password \
  --namespace production
```

3. Deploy Redis:
```bash
kubectl apply -f k8s/production/redis.yml
```

4. Deploy Application:
```bash
kubectl apply -f k8s/production/deployment.yml
```

5. Deploy Monitoring:
```bash
kubectl apply -f k8s/production/monitoring.yml
```

6. Apply Network Policies:
```bash
kubectl apply -f k8s/production/network-policies.yml
```

7. Configure Auto-scaling:
```bash
kubectl apply -f k8s/production/autoscaling.yml
```

8. Setup Backup Job:
```bash
kubectl apply -f k8s/production/backup-job.yml
```

## Monitoring

1. Access Grafana:
```bash
kubectl port-forward svc/grafana 3000:3000 -n production
```

2. Access Prometheus:
```bash
kubectl port-forward svc/prometheus 9090:9090 -n production
```

## Scaling

The application will automatically scale based on:
- CPU utilization > 70%
- Memory utilization > 80%

Manual scaling:
```bash
kubectl scale deployment heart-lab-ai --replicas=5 -n production
```

## Backup and Restore

1. Manual Backup:
```bash
kubectl create job --from=cronjob/redis-backup manual-backup -n production
```

2. Restore from Backup:
```bash
# Copy backup file to Redis pod
kubectl cp backup-file redis-0:/data/dump.rdb -n production

# Restart Redis to load backup
kubectl rollout restart statefulset/redis -n production
```

## Troubleshooting

1. Check Logs:
```bash
kubectl logs deployment/heart-lab-ai -n production
```

2. Debug Pods:
```bash
kubectl describe pod <pod-name> -n production
```

3. Monitor Resources:
```bash
kubectl top pods -n production
```