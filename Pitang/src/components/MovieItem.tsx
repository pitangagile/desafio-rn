import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Image from 'react-native-fast-image';
import { Movie } from 'src/typings';
import MovieContext from '../context/MovieContext';
import { ROUTENAMES } from '../navigation/routeNames';

type Props = {
  item: Movie | any;
};

const MovieItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation();
  const { NOT_FOUND_IMAGE_URL } = useContext(MovieContext);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate(ROUTENAMES.MOVIE_DETAILS, {
          item,
        })
      }>
      <FastImage
        resizeMode={'stretch'}
        fallback
        source={{
          uri: item?.url ? item?.url : NOT_FOUND_IMAGE_URL,
          priority: Image.priority.normal,
        }}
      />
      <MovieName numberOfLines={3}>{item?.name}</MovieName>
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
    justifyContent: 'space-between',
    margin: 5,
  },
});

export default React.memo(MovieItem);
