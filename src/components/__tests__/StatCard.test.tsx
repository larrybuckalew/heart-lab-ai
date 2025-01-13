import { render, screen } from '@testing-library/react';
import StatCard from '../Dashboard/StatCard';

describe('StatCard', () => {
  it('renders title and value', () => {
    render(<StatCard title="Test Title" value={100} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('shows positive change correctly', () => {
    render(<StatCard title="Test" value={100} change={5} />);
    expect(screen.getByText('+5%')).toHaveClass('text-green-600');
  });
});