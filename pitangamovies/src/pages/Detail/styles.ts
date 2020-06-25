import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const BackContainer = styled.TouchableOpacity`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 40px;
  color: #fff;
  flex-shrink: 1;
`;

export const Description = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 14px;
  color: #fff;
  opacity: 0.75;
`;

export const InfoContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContent = styled.View`
  width: 60px;
  height: 48px;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 12px;
  color: #ffffff;
`;
