import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

test('renders Features section with headline', () => {
  render(<Features />);
  expect(screen.getByText(/What We Offer/i)).toBeInTheDocument();
  expect(screen.getByText(/Real Projects/i)).toBeInTheDocument();
});
