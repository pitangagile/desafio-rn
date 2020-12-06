import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MockAdapter from 'axios-mock-adapter';

import { parseQueryString } from '../../../jest/utils';

import api from '../../services/api';

import Dashboard from '.';

const Stack = createStackNavigator();

const movieList = [
  {
    _id: 'id1',
    name: 'Valid Movie Name 1',
    url: 'valid-movie-name-url-1',
    __v: 0,
  },
  {
    _id: 'id2',
    name: 'Valid Movie Name 2',
    url: 'valid-movie-name-url-2',
    __v: 0,
  },
  {
    _id: 'id3',
    name: 'Valid Movie Name 3',
    url: 'valid-movie-name-url-3',
    __v: 0,
  },
  {
    _id: 'id4',
    name: 'Valid Movie Name 4',
    url: 'valid-movie-name-url-4',
    __v: 0,
  },
  {
    _id: 'id5',
    name: 'Valid Movie Name 5',
    url: 'valid-movie-name-url-5',
    __v: 0,
  },
  {
    _id: 'id6',
    name: 'Valid Movie Name 6',
    url: 'valid-movie-name-url-6',
    __v: 0,
  },
];

const mockApi = new MockAdapter(api);

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<any>('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Given that I'm in the Dashboard screen", () => {
  let renderResult: RenderAPI;

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('and the API is working', () => {
    beforeEach(async () => {
      mockApi.onGet(/movies\/list\/?.*/).reply((config) => {
        const queryParams = parseQueryString(config.url);

        if (queryParams && typeof queryParams.size === 'string') {
          return [200, movieList.slice(0, Number(queryParams.size))];
        }

        return [404];
      });

      const component = (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      );

      renderResult = await waitFor(() => render(component));
    });

    test('then the page renders at least the first movie', () => {
      expect(renderResult.getByText(movieList[0].name)).toBeTruthy();
    });

    describe('when I press a movie', () => {
      beforeEach(() => {
        fireEvent.press(renderResult.getByText(movieList[0].name));
      });

      test('then the it navigates to Details screen', () => {
        expect(mockedNavigate).toHaveBeenCalledWith('Details', {
          _id: movieList[0]._id,
        });
      });
    });
  });
});
