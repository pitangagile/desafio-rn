import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import SkeletonText from '../../components/SkeletonText';

import api from '../../services/api';

import {
  Container,
  Header,
  BackButton,
  Content,
  MovieImage,
  MovieImageText,
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
    Linking.openURL(`https://www.google.com/search?q=${movieDetails?.name}`);
  }, [movieDetails?.name]);

  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    api
      .get<MovieDetails>(`movies/detail/${params._id}`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to load movie details');
      });
  }, [params._id]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon testID="go-back" name="arrow-left" size={24} color="#ddd" />
        </BackButton>
      </Header>

      <Content contentContainerStyle={{ alignItems: 'center', padding: 32 }}>
        <MovieImage
          source={{
            uri: movieDetails?.url || undefined,
          }}
        >
          {movieDetails?.url ? null : (
            <MovieImageText>No image available</MovieImageText>
          )}
        </MovieImage>

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
