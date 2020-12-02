import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <Text>My Movies</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
