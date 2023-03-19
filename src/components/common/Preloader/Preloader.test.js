import { render, screen } from '@testing-library/react';

import Preloader from '@/components/common/Preloader';

import '@testing-library/jest-dom';

describe('Preloader component', () => {
  beforeEach(() => {
    render(<Preloader />);
  });
  it('renders', () => {
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
