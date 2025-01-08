import { NextResponse } from 'next/server';

export async function GET() {
  const status = {
    activeSessions: 24,
    responseTime: 1.2,
    queueLength: 0,
    systemHealth: {
      cpu: 28,
      memory: 45,
      network: 18,
      status: 'operational'
    },
    activeConversations: [
      {
        id: 1,
        duration: '2m 34s',
        status: 'active',
        type: 'support'
      },
      {
        id: 2,
        duration: '1m 12s',
        status: 'active',
        type: 'onboarding'
      }
    ]
  };

  return NextResponse.json(status);
}