import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Movies from '../screens/Movies';
import MovieDetails from '../screens/MovieDetails';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Home" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
