import React from 'react';
import { StatusBar } from 'react-native';
import Theme from './components/Theme';
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
