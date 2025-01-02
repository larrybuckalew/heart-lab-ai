import { prisma } from '../../utils/db';
import { Encryption } from '../../security/encryption';

export async function createTestUser() {
  return await prisma.user.create({
    data: {
      email: `test-${Date.now()}@example.com`,
      name: 'Test User',
      role: 'DOCTOR',
      permissions: ['READ_PATIENT', 'WRITE_PATIENT', 'ANALYZE_ECG']
    }
  });
}

export async function createTestPatient() {
  const encryptedData = await Encryption.encrypt(
    JSON.stringify({
      ssn: '123-45-6789',
      address: '123 Test St',
      phoneNumber: '555-0123'
    }),
    process.env.ENCRYPTION_KEY!
  );

  return await prisma.patient.create({
    data: {
      name: `Test Patient ${Date.now()}`,
      dateOfBirth: new Date('1990-01-01'),
      gender: 'other',
      encryptedData: encryptedData.encrypted.toString('base64'),
      encryptedDataIV: encryptedData.iv.toString('base64'),
      encryptedDataTag: encryptedData.authTag.toString('base64')
    }
  });
}

export async function createTestECGData() {
  // Generate sample ECG data
  const baselineECG = Array(1000).fill(0).map((_, i) => {
    // Simulate normal ECG pattern
    const t = i / 1000 * 2 * Math.PI;
    return (
      Math.sin(t) * 0.5 +  // P wave
      Math.sin(2 * t) * 1.5 +  // QRS complex
      Math.sin(3 * t) * 0.5  // T wave
    );
  });

  // Add some noise
  return baselineECG.map(v => v + (Math.random() - 0.5) * 0.1);
}

export function mockWebSocket() {
  return {
    on: jest.fn(),
    send: jest.fn(),
    close: jest.fn()
  };
}

export function mockRedis() {
  return {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
    connect: jest.fn(),
    disconnect: jest.fn()
  };
}

export async function cleanupTestData() {
  // Clean up test data after tests
  await prisma.patient.deleteMany({
    where: {
      name: {
        startsWith: 'Test Patient'
      }
    }
  });

  await prisma.user.deleteMany({
    where: {
      email: {
        contains: 'test-'
      }
    }
  });
}