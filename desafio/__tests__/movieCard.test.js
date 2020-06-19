import React from 'react';
import MovieCard from '../src/components/movieCard';

import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

describe('<MovieCard />', () => {
  it('MovieCard Snapshot', () => {
    const fakeData = [
      {
        title: 'Avatar',
        image:
          'https://http2.mlstatic.com/poster-cartaz-avatar-2-40x60cm-D_NQ_NP_701026-MLB25905406913_082017-O.webp',
      },
    ];
    const fragment = renderer
      .create(
        <MovieCard
          image={fakeData.image}
          title={fakeData.title}
          onPress={() => null}
        />,
      )
      .toJSON();
    expect(fragment).toMatchSnapshot();
  });

  it('MovieCard Press', () => {
    const fakeData = [
      {
        title: 'Avatar',
        image:
          'https://http2.mlstatic.com/poster-cartaz-avatar-2-40x60cm-D_NQ_NP_701026-MLB25905406913_082017-O.webp',
      },
    ];
    const pressTouch = jest.fn();

    const { getByTestId } = render(
      <MovieCard
        image={fakeData.image}
        title={fakeData.title}
        onPress={pressTouch}
      />,
    );

    fireEvent.press(getByTestId('touch'));
    expect(getByTestId('touch')).toBeTruthy();
    expect(pressTouch).toHaveBeenCalledTimes(0);
  });
});
