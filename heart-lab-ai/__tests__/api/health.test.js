import { createMocks } from 'node-mocks-http';
import healthHandler from '@/pages/api/health';

describe('Health API', () => {
  it('returns health status', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await healthHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    
    const json = JSON.parse(res._getData());
    expect(json).toEqual(
      expect.objectContaining({
        status: 'healthy',
        timestamp: expect.any(String)
      })
    );
  });
});