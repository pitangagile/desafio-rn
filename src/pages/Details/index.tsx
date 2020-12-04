import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Linking } from 'react-native';
import SkeletonText from '../../components/SkeletonText';

import api from '../../services/api';

import {
  Container,
  Content,
  MovieImage,
  MovieTitle,
  DescriptionSection,
  DescriptionTitleText,
  DescriptionText,
  Footer,
  SearchButton,
  SearchButtonText,
} from './styles';

interface DetailsRouteParams {
  _id: string;
}

interface MovieDetails {
  _id: string;
  name: string;
  description: string;
  url: string;
  __v: number;
}

const Details: React.FC = () => {
  const route = useRoute();

  const params = route.params as DetailsRouteParams;

  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const handleOpenGoogleSearch = useCallback(() => {
    Linking.openURL(`https://www.google.com/search?q=${movieDetails.name}`);
  }, [movieDetails?.name]);

  useEffect(() => {
    api.get<MovieDetails>(`movies/detail/${params._id}`).then((response) => {
      setMovieDetails(response.data);
    });
  }, [params._id]);

  return (
    <Container>
      <Content contentContainerStyle={{ alignItems: 'center', padding: 32 }}>
        <MovieImage
          source={{
            uri: movieDetails?.url,
          }}
        />

        <MovieTitle>
          {movieDetails ? (
            movieDetails.name
          ) : (
            <SkeletonText length={10} fontSize={30} />
          )}
        </MovieTitle>

        <DescriptionSection>
          <DescriptionTitleText>
            {movieDetails ? (
              'Description'
            ) : (
              <SkeletonText length={11} fontSize={16} />
            )}
          </DescriptionTitleText>

          <DescriptionText>
            {movieDetails ? (
              movieDetails.description
            ) : (
              <SkeletonText length={250} fontSize={16} />
            )}
          </DescriptionText>
        </DescriptionSection>

        <Footer>
          <SearchButton onPress={handleOpenGoogleSearch}>
            <SearchButtonText>Search</SearchButtonText>
          </SearchButton>
        </Footer>
      </Content>
    </Container>
  );
};

export default Details;
