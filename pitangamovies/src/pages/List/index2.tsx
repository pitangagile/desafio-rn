import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { View, FlatList, TouchableOpacity } from 'react-native';
// import Card from '../../components/Card';
import api from '../../services/api';

import screenSize from '../../utils/screenSize';

import Logo from '../../assets/pitang.svg';

import {
  Container,
  Bar,
  HeaderTitle,
  HeaderDescription,
  CustomImage,
} from './styles';

interface IMovie {
  _id: string;
  name: string;
  url: string;
}

const List: React.FC = () => {
  const navigation = useNavigation();
  const size = screenSize();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState<number>(0);

  const loadMovies = useCallback(async () => {
    const { data } = await api.get('list', {
      params: { page, size: 12 },
    });

    if (data && data.length > 0) setMovies([...movies, ...data]);

    return () => setMovies([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <Container>
      <Bar>
        <Icon name="menu" size={20} color="#000" />
        <Logo width={150} height={100} />
        <Icon name="search" size={20} color="#000" />
      </Bar>

      <View>
        <HeaderTitle>Bem vindo ao Pitang Movies</HeaderTitle>
        <HeaderDescription>Escolha o seu filme</HeaderDescription>
      </View>

      <FlatList
        testID="FlatList"
        numColumns={3}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
        keyExtractor={(item: IMovie) => item._id}
        data={movies}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { id: item._id })}
          >
            <CustomImage
              resizeMode="cover"
              fallback
              source={{ uri: item.url }}
              hasImage={!item.url}
              size={size}
            />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default List;
