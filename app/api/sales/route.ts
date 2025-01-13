import { NextResponse } from 'next/server';

export async function GET() {
  const salesData = {
    metrics: {
      totalSales: 125000,
      monthlyTarget: 150000,
      deals: {
        closed: 45,
        pipeline: 78,
        conversion: 68
      },
      topAgents: [
        { name: "John Doe", sales: 42000, deals: 15 },
        { name: "Jane Smith", sales: 38000, deals: 12 },
        { name: "Mike Johnson", sales: 35000, deals: 11 }
      ],
      revenueByProduct: [
        { name: "Voice AI", revenue: 55000, growth: 15 },
        { name: "Process Automation", revenue: 42000, growth: 22 },
        { name: "Analytics Suite", revenue: 28000, growth: 18 }
      ],
      monthlyTrends: [
        { month: "Jan", revenue: 98000, deals: 35 },
        { month: "Feb", revenue: 115000, deals: 42 },
        { month: "Mar", revenue: 125000, deals: 45 }
      ]
    },
    forecasts: {
      nextMonth: 142000,
      quarterEnd: 450000,
      growthRate: 12.5
    }
  };

  return NextResponse.json(salesData);
}