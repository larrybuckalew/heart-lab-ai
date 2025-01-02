# Comprehensive Deployment Guide

## Prerequisites

- Node.js 20.x
- Docker & Docker Compose
- Redis (for caching)
- Git

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/larrybuckalew/heart-lab-ai.git
cd heart-lab-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development server:
```bash
npm run dev
```

## Production Deployment

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t heart-lab-ai .
```

2. Run with Docker Compose:
```bash
docker-compose up -d
```

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Monitoring & Maintenance

### Health Checks

Endpoint: `/api/health`
Monitors:
- Database connectivity
- Redis connection
- API endpoints

### Metrics

Endpoint: `/metrics`
Metrics collected:
- Request latency
- Error rates
- CPU/Memory usage

### Logging

- Production logs in JSON format
- Log levels: error, warn, info, debug
- Rotation policy: 7 days

## Security

- Rate limiting enabled
- CORS configured
- Helmet security headers
- Regular security updates

## Scaling

- Horizontal scaling with Docker Swarm/Kubernetes
- Load balancing configuration
- Cache strategies

## Troubleshooting

### Common Issues

1. Connection Issues
```bash
# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

2. Performance Issues
```bash
# Monitor resource usage
docker stats
```

### Support

For issues:
1. Check logs
2. Review documentation
3. Create GitHub issue

## Backup & Recovery

1. Database Backup
```bash
# Backup command
npm run backup
```

2. Recovery Process
```bash
# Restore command
npm run restore
```