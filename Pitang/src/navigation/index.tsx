import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Movies from '../screens/Movies';
import MovieDetails from '../screens/MovieDetails';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// const Stack = createStackNavigator();

const Stack = createSharedElementStackNavigator();

function SharedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
      headerMode="none"
      mode="modal">
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        sharedElements={(route) => {
          const { item, rootScreen } = route.params;
          console.log('sharedElement called', item._id, rootScreen);
          return [`${rootScreen}.item.${item._id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <SharedStack />
    </NavigationContainer>
  );
}

export default Navigation;
