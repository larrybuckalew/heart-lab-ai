import { render, screen } from '@testing-library/react';
import HealthMetrics from '@/components/HealthMetrics';

describe('HealthMetrics Component', () => {
  it('renders health metrics correctly', () => {
    const mockData = {
      heartRate: 75,
      bloodPressure: '120/80',
      oxygenSaturation: 98
    };

    render(<HealthMetrics data={mockData} />);

    expect(screen.getByText(/75/)).toBeInTheDocument();
    expect(screen.getByText(/120\/80/)).toBeInTheDocument();
    expect(screen.getByText(/98/)).toBeInTheDocument();
  });

  it('shows loading state when data is not available', () => {
    render(<HealthMetrics data={null} />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});