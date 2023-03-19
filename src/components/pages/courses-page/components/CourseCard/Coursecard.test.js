import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import CourseCard from './CourseCard';

describe('CourseCard component', () => {
  it('renders and works correctly with right data', () => {
    render(
      <CourseCard
        id="testIdforCard"
        tags={['productivity']}
        title={'Stop the procrastination'}
        image={
          'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination'
        }
        lessonsCount={10}
        skills={['first skill', 'second skill']}
        rating={5}
        duration={666}
        status={'launched'}
        launchDate={'2023-03-06T16:50:06.000Z'} //06.03.2023
        description={'this is the best course =)'}
        videoLink={
          'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8'
        }
        videoPreviewImage={
          'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview'
        }
      />,
    );

    expect(screen.getByText('productivity')).toBeInTheDocument();
    expect(screen.getByText('Stop the procrastination')).toBeInTheDocument();
    expect(screen.getByText('666 seconds')).toBeInTheDocument();
    expect(screen.getByText('first skill, second skill')).toBeInTheDocument();
    expect(screen.getByText('10 lessons')).toBeInTheDocument();
    expect(screen.getByAltText('image')).toBeInTheDocument();
    const card = document.querySelector('.wrapper');
    fireEvent.mouseOver(card);
    expect(() => screen.getByAltText('image')).toThrow(
      'Unable to find an element',
    );
    expect(screen.getByRole('video')).toBeInTheDocument();
    fireEvent.mouseLeave(card);
    expect(screen.getByAltText('image')).toBeInTheDocument();
  });

  it('renders container for tags if there are more than one', () => {
    render(
      <CourseCard
        id="testIdforCard"
        tags={['productivity', 'work', 'one more tag']}
        title={'Stop the procrastination'}
        image={
          'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination'
        }
        lessonsCount={10}
        skills={['first skill', 'second skill']}
        rating={5}
        duration={666}
        status={'launched'}
        launchDate={'2023-03-06T16:50:06.000Z'}
        description={'this is the best course =)'}
        videoLink={
          'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8'
        }
        videoPreviewImage={
          'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview'
        }
      />,
    );

    expect(screen.getByRole('tagsContainer')).toBeInTheDocument();
  });
});
