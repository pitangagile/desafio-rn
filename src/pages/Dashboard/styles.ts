import styled from 'styled-components/native';

interface MovieItemProps {
  screenWidth: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #15151c;
`;

export const Header = styled.View`
  padding: 16px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;

export const MovieListHeaderText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 16px;
`;

export const MovieList = styled.View`
  padding-top: 32px;
`;

export const MovieItem = styled.View<MovieItemProps>`
  width: ${(props) => props.screenWidth - 128}px;
  margin: 0 8px;
  align-items: center;
`;

export const MovieImage = styled.Image`
  width: 100%;
  aspect-ratio: ${2 / 3};
  border-radius: 8px;
`;

export const MovieTitle = styled.Text`
  text-align: center;
  color: #949398;
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
`;
