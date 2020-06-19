import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const HeaderApp = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#2f425a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderApp;
