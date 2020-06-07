import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';
import MovieItem from '../components/MovieItem';
import Header from '../components/Header';
import MovieContext from '../context/MovieContext';
import { MovieListLoading } from '../components/MovieListLoading';

type Props = {};

const Movies: React.FC<Props> = () => {
  const { state } = useContext(MovieContext);
  console.log(state);
  const isLoading = state.status === 'start';

  return (
    <Container>
      <Header />
      {isLoading && <MovieListLoading />}
      {!isLoading && (
        <FlatList
          data={state.data}
          numColumns={3}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <MovieItem item={item} />}
        />
      )}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

export default Movies;
