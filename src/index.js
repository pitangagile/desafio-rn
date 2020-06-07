import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      <Routes />
    </>
  );
}
