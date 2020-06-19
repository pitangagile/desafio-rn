import React from 'react';
import MovieDetails from '../src/components/movieDetails';

import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

describe('<MovieDetails />', () => {
  it('MovieDetails Snapshot', () => {
    const fakeData = [
      {
        title: 'Avatar',
        image:
          'https://http2.mlstatic.com/poster-cartaz-avatar-2-40x60cm-D_NQ_NP_701026-MLB25905406913_082017-O.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie eu velit et consequat. Maecenas a velit nec nibh euismod egestas at et eros. Proin imperdiet laoreet diam, at vehicula lacus ornare et. Proin auctor convallis bibendum.',
      },
    ];
    const fragment = renderer
      .create(
        <MovieDetails
          image={fakeData.image}
          title={fakeData.title}
          description={fakeData.description}
          onPress={() => null}
        />,
      )
      .toJSON();
    expect(fragment).toMatchSnapshot();
  });

  it('MovieDetails Press', () => {
    const fakeData = [
      {
        title: 'Avatar',
        image:
          'https://http2.mlstatic.com/poster-cartaz-avatar-2-40x60cm-D_NQ_NP_701026-MLB25905406913_082017-O.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie eu velit et consequat. Maecenas a velit nec nibh euismod egestas at et eros. Proin imperdiet laoreet diam, at vehicula lacus ornare et. Proin auctor convallis bibendum.',
      },
    ];
    const pressTouch = jest.fn();

    const { getByTestId } = render(
      <MovieDetails
        image={fakeData.image}
        title={fakeData.title}
        description={fakeData.description}
        onPress={pressTouch}
      />,
    );

    fireEvent.press(getByTestId('back'));
    expect(getByTestId('back')).toBeTruthy();
    expect(pressTouch).toHaveBeenCalledTimes(0);
  });
});
