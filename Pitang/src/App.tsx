import React from 'react';
import Theme from './components/Theme';
import { StatusBar } from 'react-native';
import Navigation from './navigation';
import { MovieProvider } from './context/MovieContext';

const App = () => {
  return (
    <Theme>
      <StatusBar barStyle="light-content" />
      <MovieProvider>
        <Navigation />
      </MovieProvider>
    </Theme>
  );
};

export default App;
