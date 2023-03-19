import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import LessonCard from './LessonCard';

describe('VideoCard component ', () => {
  it('renders correctly if this is current lesson', () => {
    render(
      <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="unlocked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => {}}
        currentVideo={0}
      />,
    );

    const element = document.querySelector('.active');
    expect(element).toBeInTheDocument();
  });
  it('renders correctly if lesson is locked', () => {
    render(
      <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="locked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => {}}
        currentVideo={1}
      />,
    );

    const element = document.querySelector('.locked');
    expect(element).toBeInTheDocument();
  });

  it('renders correctly for other unlocked lessons', () => {
    render(
      <LessonCard
        id=""
        title="first lesson"
        duration={564}
        order={1}
        type=""
        link="duyeryuier"
        status="unlocked"
        previewImageLink="vbnghgh"
        setCurrentVideo={() => {}}
        currentVideo={4}
      />,
    );

    const element = document.querySelector('.wrapper');
    expect(element).toBeInTheDocument();
  });
});
