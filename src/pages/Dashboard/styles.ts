import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #15151c;
  padding: 16px;
`;

export const Header = styled.View``;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #5553;
  padding-top: 16px;
`;

export const MovieListHeaderText = styled.Text`
  color: #fff;
  font-size: 16px;
  /* font-weight: bold; */
  margin-bottom: 16px;
`;

export const MovieList = styled.View``;

export const MovieItem = styled.View`
  align-items: center;
`;

export const MovieImage = styled.Image`
  width: 150px;
  height: 250px;
  border-radius: 8px;
`;

export const MovieTitle = styled.Text`
  color: #949398;
  font-size: 16px;
  font-weight: bold;
`;
