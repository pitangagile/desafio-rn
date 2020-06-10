import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Image from 'react-native-fast-image';
import { BlurView } from '@react-native-community/blur';
import { iOSUIKit } from 'react-native-typography';
import MovieService from '../service';
import BackHeader from '../components/BackHeader';
import { Movie } from '../typings';
import MovieContext from '../context/MovieContext';
import sizes from '../helpers/utils';

function LoadingSynopsis() {
  return (
    <>
      <Loader />
      <LoadingText>Loading synopsis...</LoadingText>
    </>
  );
}

const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'white',
})``;

const LoadingText = styled.Text`
  align-self: center;
  font-size: 20px;
  color: white;
`;

const size = sizes() === 'small' || sizes() === 'medium';

const MovieDetails = ({ route }: any) => {
  const { NOT_FOUND_IMAGE_URL } = useContext(MovieContext);
  const { item } = route.params;
  const [isLoadingImage, setLoadingImage] = useState(false);
  const [details, setDetails] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDetails();
  }, []);

  async function loadDetails() {
    try {
      const movie = await MovieService.details(item._id);
      setDetails(movie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Background source={{ uri: item.url }}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={100}
          reducedTransparencyFallbackColor="white"
        />
        <BackHeader />
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          fallback
          source={{
            uri: item?.url ? item?.url : NOT_FOUND_IMAGE_URL,
            priority: Image.priority.normal,
          }}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
        />
        {isLoadingImage && <ActivityIndicator size={'small'} color={'white'} />}
      </Background>
      <MovieInfoWrapper>
        <View>
          <Text style={iOSUIKit.largeTitleEmphasizedWhite}>{item.name}</Text>
          <Divider />
        </View>
        {loading && <LoadingSynopsis />}
        {!loading && (
          <Synopsis>
            <Text style={iOSUIKit.title3EmphasizedWhite}>Synopsis</Text>
            <Description style={iOSUIKit.bodyWhite}>
              {details.description}
            </Description>
          </Synopsis>
        )}
      </MovieInfoWrapper>
    </Container>
  );
};

const FastImage = styled(Image)`
  width: ${size ? 200 : 300};
  align-self: center;
  height: ${size ? 200 : 300};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background: transparent;
`;

const MovieInfoWrapper = styled.View`
  flex: 1;
  padding: 15px;
  border-bottom-width: 1;
  background: black;
`;

const Divider = styled.View`
  border-width: 1;
  border-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
`;

const Synopsis = styled.ScrollView`
  margin-top: 20px;
`;

const Description = styled.Text`
  letter-spacing: 2;
  margin-top: 20px;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default React.memo(MovieDetails);
