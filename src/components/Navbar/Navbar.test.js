import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar with logo and links', () => {
  render(<Navbar />);
  expect(screen.getByAltText(/AI Learners Hub Logo/i)).toBeInTheDocument();
  expect(screen.getByText(/Features/i)).toBeInTheDocument();
  expect(screen.getByText(/Community/i)).toBeInTheDocument();
  expect(screen.getByText(/Join/i)).toBeInTheDocument();
});
