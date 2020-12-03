import React from 'react';
import { StatusBar } from 'react-native';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#15151c" />
      <Dashboard />
    </>
  );
};

export default App;
