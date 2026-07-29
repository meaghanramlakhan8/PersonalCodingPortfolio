import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the healthcare engineering portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /meaghan ramlakhan/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /more about me/i })).toHaveAttribute('href', '/about');
});

test('opens and closes the mobile navigation', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /open navigation/i });
  const navigation = document.getElementById('primary-navigation');

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(navigation).toHaveClass('open');

  fireEvent.click(navigation.querySelector('a[href="/about"]'));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(navigation).not.toHaveClass('open');
  expect(window.location.pathname).toBe('/about');
  expect(screen.getByRole('heading', { name: /engineer, educator, curious human/i })).toBeInTheDocument();
});
