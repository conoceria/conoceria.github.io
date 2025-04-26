import React from 'react';
import { render, screen } from '@testing-library/react';
import Join from './Join';

test('renders Join section with button', () => {
  render(<Join />);
  expect(screen.getByText(/Ready to Start/i)).toBeInTheDocument();
  expect(screen.getByText(/Join Now/i)).toBeInTheDocument();
});
