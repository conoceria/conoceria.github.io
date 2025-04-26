import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero with headline and button', () => {
  render(<Hero />);
  expect(screen.getByText(/Unlock Your AI Potential/i)).toBeInTheDocument();
  expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
});
