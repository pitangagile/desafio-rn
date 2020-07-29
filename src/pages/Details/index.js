import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Header, Container, Avatar, Body, BodyText} from './styles';
import api from '../../services/api';
import Background from '../../components/Background';

export default function Details({route, navigation}) {
  const {id, name} = route.params;

  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  navigation.setOptions({
    headerBackTitle: '',
    headerBackTitleVisible: false,
    headerTransparent: true,
    title: name,
    headerTintColor: '#fff',
  });

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    setLoading(true);
    await api
      .get(`/detail/${id}`)
      .then((response) => {
        setDetail(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <Background>
      <Header />
      <Body>
        <Avatar
          source={{
            uri:
              detail.url ||
              'https://www.si.edu/sites/default/files/newsdesk/press_releases/clip_art_film.jpeg',
          }}
        />

        <Container>
          <BodyText>{detail.description}</BodyText>
        </Container>
        <View>
          {loading ? <ActivityIndicator color="#111" size={24} /> : <></>}
        </View>
      </Body>
    </Background>
  );
}
