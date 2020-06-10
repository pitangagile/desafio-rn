import React, { useState, useMemo, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import MovieItem from '../components/MovieItem';
import Header from '../components/Header';
import { MovieListLoading } from '../components/MovieListLoading';
import { Movie } from '../typings';
import MovieContext from '../context/MovieContext';
import ErrorTemplate from '../components/ErrorTemplate';
import sizes from '../helpers/utils';

const size = sizes();

const Movies: React.FC = () => {
  const { loadMovies, state, isLoading, hasError } = useContext(MovieContext);

  const [search, setSearch] = useState('');

  const filteredMovies = useMemo(() => {
    //@ts-ignore
    return state.data.filter((movie: Movie) => {
      return movie?.name.toLowerCase().includes(search.toLowerCase());
    });
    //@ts-ignore
  }, [state, search]);

  if (hasError) {
    return <ErrorTemplate />;
  }

  return (
    <Container>
      <Header onChange={setSearch} />
      {isLoading && <MovieListLoading />}
      {!isLoading && (
        <FlatList
          data={search.length > 0 ? filteredMovies : state.data}
          numColumns={size === 'small' || size === 'medium' ? 2 : 3}
          keyExtractor={(item: Movie) => item._id}
          onEndReached={loadMovies}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => {
            return <MovieItem item={item} />;
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

export default React.memo(Movies);
