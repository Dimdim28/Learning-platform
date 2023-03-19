import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Pagination from './Pagination';

describe('Pagination component ', () => {
  it('renders with all buttons', () => {
    render(<Pagination totalPages={3} currentPage={1} />);
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
  });
});
