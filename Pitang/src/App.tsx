import React from 'react';
import Theme from './components/Theme';
import { StatusBar } from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
    <Theme>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </Theme>
  );
};

export default App;
