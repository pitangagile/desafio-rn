import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const MovieCard = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    marginBottom: 15,
    flexGrow: 1,
    flexBasis: 0,
    margin: 15,
  },
  imgContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 5,
    width: '100%',
    height: 250,
  },
  img: {
    flex: 1,
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MovieCard;
