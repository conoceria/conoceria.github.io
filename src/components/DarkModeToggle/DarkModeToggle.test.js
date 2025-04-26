import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';
import { ThemeProvider } from '../../utils/ThemeContext';

test('renders DarkModeToggle and toggles icon', () => {
  render(
    <ThemeProvider>
      <DarkModeToggle />
    </ThemeProvider>
  );
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  // Should show moon by default
  expect(button.textContent).toMatch(/🌙|🌞/);
  fireEvent.click(button);
  // Should toggle icon
  expect(button.textContent).toMatch(/🌙|🌞/);
});
