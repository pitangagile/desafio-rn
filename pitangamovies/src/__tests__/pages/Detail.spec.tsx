import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react-native';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';

import Detail from '../../pages/Detail';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: jest.fn(),
    }),
    useRoute: jest.fn().mockReturnValue({
      params: {
        id: 1,
      },
    }),
  };
});

const apiMock = new AxiosMock(api);

describe('Detail Page', () => {
  it('should be able to render detail page', () => {
    const { getByText } = render(<Detail />);

    expect(getByText('2020')).toBeTruthy();
  });

  it('should be able to show the movie detail', async () => {
    const movie = {
      _id: '5d9e2b219aed8c0c42f775dd',
      name: 'Aladdin',
    };

    apiMock.onGet('detail/1').reply(200, movie);

    const { getByText } = render(<Detail />);

    await wait(() => expect(getByText('Aladdin')).toBeTruthy(), {
      timeout: 200,
    });

    const response = await api.get('detail/1');

    expect(response.data).toHaveProperty('name');
    expect(getByText('Aladdin')).toBeTruthy();
  });
});
