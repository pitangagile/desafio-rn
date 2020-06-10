import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { iOSUIKit, human } from 'react-native-typography';
import { Platform, Text } from 'react-native';
import MovieContext from '../context/MovieContext';

export default function ErrorTemplate() {
  const { loadMovies } = useContext(MovieContext);
  return (
    <Container>
      <Text
        style={Platform.OS === 'ios' ? iOSUIKit.bodyWhite : human.bodyWhite}>
        Couldn't retrieve the list of movies :/
      </Text>
      <Button onPress={loadMovies}>
        <Text style={iOSUIKit.subheadEmphasizedWhite}>TRY AGAIN</Text>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  margin-top: 30px;
`;
