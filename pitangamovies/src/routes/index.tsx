import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import Detail from '../pages/Detail';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="List" component={List} />
    <Auth.Screen name="Detail" component={Detail} />
  </Auth.Navigator>
);

export default AppRoutes;
