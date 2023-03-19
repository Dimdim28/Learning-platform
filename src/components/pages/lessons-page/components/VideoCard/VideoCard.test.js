import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import VideoCard from './VideoCard';

describe('VideoCard component ', () => {
  it('renders on the page', () => {
    render(<VideoCard src={'link to the video'} title={'this is a title'} />);
    const video = document.querySelector('.video');
    expect(video).toBeInTheDocument();
    expect(screen.getByText('this is a title')).toBeInTheDocument();
  });
});
