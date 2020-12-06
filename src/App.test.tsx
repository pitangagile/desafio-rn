import { Text } from 'react-native';
import React from 'react';

import { render, RenderAPI, waitFor } from '@testing-library/react-native';

import App from './App';

// TODO: mock Stack.Screen instead of Stack.Navigator
const mockNavigator = <Text>MockText</Text>;

jest.mock('@react-navigation/stack', () => {
  return {
    ...jest.requireActual<any>('@react-navigation/stack'),
    createStackNavigator: () => ({
      Navigator: jest.fn().mockImplementation(() => mockNavigator),
      Screen: jest.fn(),
    }),
  };
});

describe('Given that I opened the App', () => {
  let renderResult: RenderAPI;

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('then App loads', async () => {
    renderResult = await waitFor(() => render(<App />));

    expect(renderResult.getByText('MockText')).toBeTruthy();
  });
});
