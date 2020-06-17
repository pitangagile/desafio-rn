import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
  },
});

export default Footer;
