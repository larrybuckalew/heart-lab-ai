import React from 'react';
import { render, screen } from '@testing-library/react';
import DataCard from '../DataCard';

describe('DataCard', () => {
  it('renders title and value correctly', () => {
    render(<DataCard title="Test Title" value={42} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <DataCard 
        title="Test Title" 
        value={42} 
        description="Test Description" 
      />
    );
    
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});