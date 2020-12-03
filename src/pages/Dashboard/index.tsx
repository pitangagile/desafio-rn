import React from 'react';
import { FlatList } from 'react-native';

import { useDimensions } from '../../utils/useDimensions';

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

interface Movie {
  _id: string;
  name: string;
  url: string;
  __v: number;
}

const Dashboard: React.FC = () => {
  const data: Movie[] = [
    {
      _id: '5d9e2b219aed8c0c42f775dd',
      name: 'Aladdin',
      url:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg',
      __v: 0,
    },
    {
      _id: '5d9e50204aa94d85823838f0',
      name: 'Avatar',
      url:
        'https://media.fstatic.com/9Nj6GJcDtcgMG4FllePHuegogts=/fit-in/290x478/smart/media/movies/covers/2011/06/71fc1d0bb2bc1483e66941bb2f17d830.jpg',
      __v: 0,
    },
    {
      _id: '5d9e4ebc4aa94d85823838ee',
      name: 'Bacurau',
      url:
        'https://media.fstatic.com/yQz_oR8G5_y_OOCDHVesLVN3oyA=/fit-in/290x478/smart/media/movies/covers/2019/07/0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg',
      __v: 0,
    },
  ];

  const { width } = useDimensions();

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
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 48 }}
            horizontal
            pagingEnabled
            snapToInterval={width - 128 + 16}
            decelerationRate="fast"
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <MovieItem screenWidth={width}>
                <MovieImage
                  source={{
                    uri: item.url,
                  }}
                />
                <MovieTitle>{item.name}</MovieTitle>
              </MovieItem>
            )}
          />
        </MovieList>
      </Content>
    </Container>
  );
};

export default Dashboard;
