import request from 'supertest';
import { app } from '../../server';

describe('Health Endpoints', () => {
  it('should return system health status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('timestamp');
  });

  it('should check database connection', async () => {
    const response = await request(app).get('/api/health/db');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('database');
    expect(response.body.database).toBe('connected');
  });

  it('should check Redis connection', async () => {
    const response = await request(app).get('/api/health/cache');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('redis');
    expect(response.body.redis).toBe('connected');
  });
});