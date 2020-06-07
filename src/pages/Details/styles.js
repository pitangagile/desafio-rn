import styled from 'styled-components';
import {Platform} from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {padding: 5},
})`
  margin-top: 15%;
  height: 200px;
`;
export const Header = styled.View`
  margin-top: ${(props) => (Platform.OS === 'ios' ? '120px' : '40px')};
  margin-left: 20px;
  align-content: center;
  align-items: center;
  align-self: center;
`;

export const Body = styled.View`
  align-content: center;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.Image`
  min-width: 100px;
  min-height: 100px;
  width: 50%;
  height: 50%;
  background: #eee;
`;

export const BodyText = styled.Text`
  font-size: 16px;
  color: #eee;
  text-align: justify;
`;
