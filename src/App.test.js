import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the healthcare engineering portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /meaghan ramlakhan/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /more about me/i })).toHaveAttribute('href', '/about');
});
