import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View } from 'react-native';
import Shadow from '../../components/Shaddow';

import api from '../../services/api';

import {
  Container,
  Content,
  BackContainer,
  Title,
  InfoContainer,
  InfoContent,
  InfoText,
  Description,
} from './styles';

interface IParams {
  id: string;
}
interface IMovie {
  _id: string;
  name: string;
  description: string;
  url: string;
}

const List: React.FC = () => {
  const navigation = useNavigation();
  const movieParms = useRoute();
  const { id } = movieParms.params as IParams;

  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      const { data } = await api.get(`detail/${id}`);

      if (data) setMovie(data);
    }

    if (id) loadMovie();
  }, [id]);

  return (
    <Container
      source={{
        uri:
          movie.url ||
          'https://image.freepik.com/free-vector/red-coming-soon-lettering_23-2147501123.jpg?1',
      }}
    >
      <Shadow />

      <BackContainer onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </BackContainer>

      <Content>
        <View>
          <Title>{movie.name}</Title>
        </View>

        <InfoContainer>
          <InfoContent>
            <Icon name="clock" size={30} color="#fff" />
            <InfoText>143min</InfoText>
          </InfoContent>
          <InfoContent>
            <Icon name="calendar" size={30} color="#fff" />
            <InfoText>2020</InfoText>
          </InfoContent>
          <InfoContent>
            <Icon name="star" size={30} color="#fff" />
            <InfoText>3.5/5</InfoText>
          </InfoContent>
        </InfoContainer>

        <View>
          <Description>{movie.description}</Description>
        </View>
      </Content>
    </Container>
  );
};

export default List;
