import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import axios from 'axios';
import Modal from 'react-native-modal';

import HeaderApp from './components/header/';
import Footer from './components/footer';
import MovieCard from './components/movieCard/';
import MovieDetails from './components/movieDetails/';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    movieListLoader(page);
  }, []);

  const movieListLoader = async pageNum => {
    setLoading(true);
    await axios
      .get(
        `https://desafio-mobile-pitang.herokuapp.com/movies/list?page=${pageNum}&size=12`,
      )
      .then(res => {
        const movieApi = res.data;
        setEnd(!movieApi.length);
        if (!end) {
          setMovieList([...movieList, ...movieApi]);
          setPage(page + 1);
        }
        setLoading(false);
      });
  };

  const handleInfinityLoading = () => {
    !end && movieListLoader(page);
  };

  const handleOpenInfo = async id => {
    setLoading(true);
    await axios
      .get(`https://desafio-mobile-pitang.herokuapp.com/movies/detail/${id}`)
      .then(res => {
        const movieData = res.data;
        setMovieInfo(movieData);
        setModal(true);
        setLoading(false);
      });
  };

  return (
    <>
      <HeaderApp title="Desafio Pitang" />
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item._id}
          data={movieList}
          renderItem={({ item }) => (
            <MovieCard
              title={item.name}
              image={item.url}
              onPress={() => handleOpenInfo(item._id)}
            />
          )}
          ListFooterComponent={loading && <Footer />}
          onEndReached={handleInfinityLoading}
          onEndReachedThreshold={0.1}
        />
        {modal && (
          <Modal
            isVisible={modal}
            onBackButtonPress={() => setModal(!modal)}
            hideModalContentWhileAnimating
            animationOut="slideOutDown"
            animationIn="slideInUp">
            <MovieDetails
              image={movieInfo.url}
              title={movieInfo.name}
              description={movieInfo.description}
              onPress={() => setModal(!modal)}
            />
          </Modal>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273545',
  },
});

export default App;
