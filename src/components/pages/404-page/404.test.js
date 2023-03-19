import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import NotFoundPage from './notfound-page';

describe('404 page component', () => {
  beforeEach(() => {
    render(<NotFoundPage />);
  });
  it('renders correctly', () => {
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back home')).toBeInTheDocument();
  });
  it('has a right link', () => {
    expect(screen.getByText('Back home').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
  });
});
