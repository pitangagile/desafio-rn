import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

const HeaderApp = () => {
  return (
    <SafeAreaView>
      <Appbar.Header dark style={styles.headerContainer}>
        <View style={styles.container}>
          <Title style={styles.title}>Desafio Pitang</Title>
        </View>
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#273545',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
});

export default HeaderApp;
