import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '150%',
  },
});

const Shadow: React.FC = () => {
  return (
    <LinearGradient
      colors={['transparent', '#000', '#000']}
      style={[styles.linearGradient, styles.container]}
    />
  );
};

export default Shadow;
