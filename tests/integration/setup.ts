import { prisma } from '../../utils/db';
import { cleanupTestData } from '../helpers/testData';

beforeAll(async () => {
  // Connect to test database
  await prisma.$connect();
});

beforeEach(async () => {
  // Clean up data before each test
  await cleanupTestData();
});

afterAll(async () => {
  // Disconnect from test database
  await prisma.$disconnect();
});

// Global test environment setup
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.ENCRYPTION_KEY = 'test-encryption-key';

// Mock Redis for testing
jest.mock('ioredis', () => {
  return jest.fn().mockImplementation(() => ({
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
    connect: jest.fn(),
    disconnect: jest.fn()
  }));
});