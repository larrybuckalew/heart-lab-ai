import request from 'supertest';
import { app } from '../../server';
import { prisma } from '../../utils/db';
import { createTestUser, createTestPatient } from '../helpers/testData';

describe('API Integration Tests', () => {
  let testUser: any;
  let testPatient: any;
  let authToken: string;

  beforeAll(async () => {
    // Setup test data
    testUser = await createTestUser();
    testPatient = await createTestPatient();
    authToken = generateTestToken(testUser);
  });

  afterAll(async () => {
    // Cleanup test data
    await prisma.patient.deleteMany({ where: { id: testPatient.id } });
    await prisma.user.deleteMany({ where: { id: testUser.id } });
  });

  describe('Patient API', () => {
    it('should get patient details', async () => {
      const response = await request(app)
        .get(`/api/patients/${testPatient.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(testPatient.id);
    });

    it('should create new patient', async () => {
      const newPatient = {
        name: 'Test Patient',
        dateOfBirth: '1990-01-01',
        gender: 'other'
      };

      const response = await request(app)
        .post('/api/patients')
        .set('Authorization', `Bearer ${authToken}`)
        .send(newPatient);

      expect(response.status).toBe(201);
      expect(response.body.name).toBe(newPatient.name);
    });
  });

  describe('Analysis API', () => {
    it('should analyze ECG data', async () => {
      const ecgData = Array(1000).fill(0).map(() => Math.random() * 100);

      const response = await request(app)
        .post('/api/analysis/ecg')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          patientId: testPatient.id,
          data: ecgData
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('heartRate');
      expect(response.body).toHaveProperty('qrsWidth');
    });
  });

  describe('Security Endpoints', () => {
    it('should handle rate limiting', async () => {
      // Make multiple requests to trigger rate limiting
      const requests = Array(110).fill(0).map(() =>
        request(app)
          .get('/api/patients')
          .set('Authorization', `Bearer ${authToken}`)
      );

      const responses = await Promise.all(requests);
      const tooManyRequests = responses.filter(r => r.status === 429);

      expect(tooManyRequests.length).toBeGreaterThan(0);
    });

    it('should require authentication', async () => {
      const response = await request(app)
        .get('/api/patients');

      expect(response.status).toBe(401);
    });
  });
});

function generateTestToken(user: any): string {
  // Implementation of test token generation
  return 'test-token';
}