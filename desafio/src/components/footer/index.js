import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Footer = ({ loading, end, endText }) => {
  return (
    <View style={styles.footer}>
      {loading && <ActivityIndicator animating size="large" />}
      {end && <Text style={styles.text}>{endText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
  },
  text: {
    color: '#ffdd00',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

export default Footer;
