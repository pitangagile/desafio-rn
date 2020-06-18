import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const MovieDetails = ({image, title, description, onPress}) => {
  const img =
    image !== ''
      ? image
      : 'https://via.placeholder.com/300x450.png?text=Em+breve';
  return (
    
    <View style={styles.details}>
      <SafeAreaView>
        <TouchableOpacity onPress={onPress} style={styles.back}>
          <Text style={styles.backText}>{'<< Voltar'}</Text>
        </TouchableOpacity>
        <View style={styles.mask}>
          <Image source={{ uri: img }} style={styles.img} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sectionDescription}>{description}</Text>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  details: {
    flex: 1
  },
  mask: {
    marginBottom: 15,
    marginTop: 15,
    width: '100%',
    height: 450,
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  sectionDescription: {
    color: '#fff',
    fontSize: 16
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default MovieDetails;
