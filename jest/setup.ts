/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Mocks react-native-reanimated and react-native-gesture-handler to setup React Navigation tests. Source: https://reactnavigation.org/docs/testing/
 */

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => null;

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
