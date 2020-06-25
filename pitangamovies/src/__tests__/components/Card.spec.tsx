import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Card from '../../components/Card';

interface IMock {
  url: string;
}

describe('Card Component', () => {
  it('should ble able to render card', () => {
    const mock: IMock = {
      url:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg',
    };

    const onPress = jest.fn();
    const { getByTestId } = render(
      <Card imagePath={mock.url} onPress={onPress} />,
    );

    fireEvent.press(getByTestId('onPress'));
    expect(getByTestId('onPress')).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
