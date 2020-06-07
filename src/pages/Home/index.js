import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderText,
  List,
  Avatar,
  Title,
  Name,
} from './styles';
import api from '../../services/api';
import Background from '../../components/Background';

export default function Home({navigation}) {
  navigation.setOptions({
    headerTransparent: true,
    title: '',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    loadMore();
  }, []);

  async function loadMore() {
    if (loadingList) {
      return;
    }

    setLoadingList(true);

    await api
      .get('/list', {
        params: {page: page, size: 3},
      })
      .then((response) => {
        if (response.data.length === 0) {
          return;
        }
        setMovies([...movies, ...response.data]);
        setPage(page + 1);
      })
      .catch((err) => {});

    setLoadingList(false);
  }

  function navigateToDetails(id, name) {
    navigation.navigate('Details', {id, name});
  }

  return (
    <Background>
      <Container>
        <Header>
          <Icon name="local-movies" size={22} color="#eee" />
          <HeaderText>Filmes</HeaderText>
        </Header>
        <List
          TestId={'listMovies'}
          data={movies}
          keyExtractor={(movie) => String(movie._id)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigateToDetails(item._id, item.name)}>
              <Title>
                <Avatar
                  source={{
                    uri:
                      item.url ||
                      'https://www.si.edu/sites/default/files/newsdesk/press_releases/clip_art_film.jpeg',
                  }}
                />
                <Name>{item.name}</Name>
                <Icon
                  style={{marginLeft: 'auto'}}
                  name="keyboard-arrow-right"
                  size={22}
                  color="#eee"
                />
              </Title>
            </TouchableOpacity>
          )}
          refreshing={loadingList}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
        />
        <View>
          {loadingList ? <ActivityIndicator color="#111" size={24} /> : <></>}
        </View>
      </Container>
    </Background>
  );
}
