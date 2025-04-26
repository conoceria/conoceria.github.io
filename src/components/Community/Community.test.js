import React from 'react';
import { render, screen } from '@testing-library/react';
import Community from './Community';

test('renders Community section with testimonials', () => {
  render(<Community />);
  expect(screen.getByText(/What Members Say/i)).toBeInTheDocument();
  expect(screen.getByText(/Alex, Data Scientist/i)).toBeInTheDocument();
});
