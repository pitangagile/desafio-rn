import React from 'react';
import { Image, Text } from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  Content,
  MovieListHeaderText,
  MovieList,
  MovieItem,
  MovieImage,
  MovieTitle,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderText>My Movies</HeaderText>
      </Header>

      <Content>
        <MovieListHeaderText>
          Choose a movie in the list to see details
        </MovieListHeaderText>

        <MovieList>
          <MovieItem>
            <MovieImage
              source={{
                uri:
                  'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg',
              }}
            />
            <MovieTitle>Aladdin</MovieTitle>
          </MovieItem>
        </MovieList>
      </Content>
    </Container>
  );
};

export default Dashboard;
