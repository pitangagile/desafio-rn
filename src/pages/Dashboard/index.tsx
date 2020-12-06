import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Carousel from '../../components/Carousel';

import api from '../../services/api';

import {
  Container,
  ContainerScroll,
  Header,
  HeaderText,
  Content,
  MovieListHeaderText,
  MovieList,
  MovieImage,
  MovieImageText,
  MovieTitle,
} from './styles';

interface Movie {
  _id: string;
  name: string;
  url: string;
  __v: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const loadMore = useCallback(() => {
    if (hasReachedEnd || loading) return;

    setLoading(true);

    api
      .get<Movie[]>(`movies/list?page=${page}&size=3`)
      .then((response) => {
        setData((oldData) => [...oldData, ...response.data]);
        if (response.data.length === 0) {
          setHasReachedEnd(true);
        }

        setPage((oldPage) => oldPage + 1);

        setLoading(false);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to load movie list');
      });
  }, [hasReachedEnd, loading, page]);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigation = useNavigation();

  const handleNavigateToDetails = useCallback(
    (_id: string) => {
      navigation.navigate('Details', { _id });
    },
    [navigation],
  );

  return (
    <Container>
      <ContainerScroll>
        <Header>
          <HeaderText>My Movies</HeaderText>
        </Header>

        <Content>
          <MovieListHeaderText>
            Choose a movie in the list to see details
          </MovieListHeaderText>

          <MovieList>
            <Carousel
              data={data}
              keyExtractor={(item) => item._id}
              indicatorStyle="white"
              onEndReached={loadMore}
              onEndReachedThreshold={1}
              loading={loading}
              hasReachedEnd={hasReachedEnd}
              ListFooterComponent={
                <MovieImageText>No more movies available</MovieImageText>
              }
              renderItem={({ item }) => (
                <RectButton onPress={() => handleNavigateToDetails(item._id)}>
                  <View>
                    <MovieImage
                      source={{
                        uri: item.url || undefined,
                      }}
                    >
                      {item.url ? null : (
                        <MovieImageText>No image available</MovieImageText>
                      )}
                    </MovieImage>
                    <MovieTitle>{item.name}</MovieTitle>
                  </View>
                </RectButton>
              )}
            />
          </MovieList>
        </Content>
      </ContainerScroll>
    </Container>
  );
};

export default Dashboard;
