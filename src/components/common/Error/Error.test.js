import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Error from './Error';

describe('Error component', () => {
  beforeEach(() => {
    render(<Error text={'error text'} />);
  });
  it('renders with message', () => {
    expect(screen.getByText('error text')).toBeInTheDocument();
    expect(screen.getByText('Go home')).toBeInTheDocument();
  });
  it('has a right link', () => {
    expect(screen.getByText('Go home').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
  });
});
