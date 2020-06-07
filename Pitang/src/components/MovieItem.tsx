import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Image from 'react-native-fast-image';
import { Movie } from 'src/typings';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: Movie | any;
};

const MovieItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('MovieDetails', {
          item,
        })
      }>
      <SharedElement id={`item.${item._id}.photo`}>
        <FastImage
          resizeMode={'stretch'}
          fallback
          source={{ uri: item.url, priority: Image.priority.normal }}
        />
      </SharedElement>
      <MovieName numberOfLines={3}>{item.name}</MovieName>
    </TouchableOpacity>
  );
};

const FastImage = styled(Image)`
  width: 120px;
  align-self: center;
  height: 160px;
  margin: 5px;
`;

const MovieName = styled.Text`
  color: white;
  font-weight: 600;
  align-self: center;
  text-align: center;
  font-size: 18px;
`;

const styles = StyleSheet.create({
  item: {
    shadowColor: '#000',
    flex: 1,
    padding: 10,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
    margin: 5,
  },
});

export default React.memo(MovieItem);
