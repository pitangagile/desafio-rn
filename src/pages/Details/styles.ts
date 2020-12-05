import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #15151c;
`;

export const Content = styled.ScrollView``;

export const Header = styled.View``;

export const BackButton = styled(RectButton)`
  width: 40px;
  padding: 8px;
  margin: 8px 8px 4px 8px;
  border-radius: 20px;
`;

export const MovieImage = styled.ImageBackground`
  width: 70%;
  aspect-ratio: ${2 / 3};
  border-radius: 8px;
  background-color: #ddd1;
  align-items: center;
  justify-content: center;
`;

export const MovieImageText = styled.Text`
  color: #ddd;
  text-align: center;
  margin: 16px;
`;

export const MovieTitle = styled.Text`
  text-align: center;
  color: #949398;
  font-size: 30px;
  font-weight: bold;
  margin-top: 8px;
`;

export const DescriptionSection = styled.View`
  width: 100%;
`;

export const DescriptionTitleText = styled.Text`
  color: #949398;
  font-size: 17px;
  font-weight: bold;
  margin-top: 32px;
`;

export const DescriptionText = styled.Text`
  color: #ddd;
  line-height: 20px;
  text-align: justify;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
`;

export const SearchButton = styled(RectButton)`
  width: 90%;
  height: 56px;
  background: #302f4d;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonText = styled.Text`
  color: #ddd;
  font-size: 18px;
  font-weight: bold;
`;
