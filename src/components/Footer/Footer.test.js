import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer with links', () => {
  render(<Footer />);
  expect(screen.getByText(/AI Learners Hub/i)).toBeInTheDocument();
  expect(screen.getByText(/Features/i)).toBeInTheDocument();
});
