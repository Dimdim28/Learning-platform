import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Preloader from './Preloader';

describe('Preloader component', () => {
  beforeEach(() => {
    render(<Preloader />);
  });
  it('renders', () => {
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
