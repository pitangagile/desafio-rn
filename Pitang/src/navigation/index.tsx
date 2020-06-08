import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from '../screens/Movies';
import MovieDetails from '../screens/MovieDetails';
import { ROUTENAMES } from './routeNames';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        gestureEnabled: true,
      }}
      headerMode="none"
      mode="modal">
      <Stack.Screen name={ROUTENAMES.MOVIES} component={Movies} />
      <Stack.Screen name={ROUTENAMES.MOVIE_DETAILS} component={MovieDetails} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
