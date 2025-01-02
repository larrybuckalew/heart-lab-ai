import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

// Custom metrics
export const errorRate = new Rate('errors');
export const requestDuration = new Trend('request_duration');
export const successfulLogins = new Counter('successful_logins');

// Test configuration
export const options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 200 }, // Ramp up to 200 users
    { duration: '5m', target: 200 }, // Stay at 200 users
    { duration: '2m', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    'http_req_duration': ['p(95)<500'], // 95% of requests should be below 500ms
    'http_req_failed': ['rate<0.01'],    // Less than 1% of requests should fail
    'errors': ['rate<0.05'],             // Less than 5% error rate
  },
};

// Test scenarios
export default function() {
  // User login
  const loginRes = http.post('http://localhost:3000/api/auth/login', {
    username: 'testuser',
    password: 'testpass',
  });

  check(loginRes, {
    'login successful': (r) => r.status === 200,
  }) || errorRate.add(1);

  if (loginRes.status === 200) {
    successfulLogins.add(1);
    const token = loginRes.json('token');

    // Patient list request
    const patientsRes = http.get('http://localhost:3000/api/patients', {
      headers: { Authorization: `Bearer ${token}` },
    });

    requestDuration.add(patientsRes.timings.duration);
    check(patientsRes, {
      'patients retrieved successfully': (r) => r.status === 200,
      'response time < 500ms': (r) => r.timings.duration < 500,
    }) || errorRate.add(1);

    // ECG analysis request
    const analysisRes = http.post(
      'http://localhost:3000/api/analysis/ecg',
      JSON.stringify({
        patientId: 'test-patient',
        data: generateTestData(),
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    requestDuration.add(analysisRes.timings.duration);
    check(analysisRes, {
      'analysis completed successfully': (r) => r.status === 200,
      'response time < 2000ms': (r) => r.timings.duration < 2000,
    }) || errorRate.add(1);
  }

  sleep(1);
}

function generateTestData() {
  return Array(1000).fill(0).map(() => Math.random() * 100);
}