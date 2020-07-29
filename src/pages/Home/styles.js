import styled from 'styled-components';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  margin: 20px 0;
`;

export const Header = styled.View`
  margin-top: ${(props) => (Platform.OS === 'ios' ? '60px' : 0)};
  align-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  margin-left: 5px;
  font-size: 20px;
  color: #eee;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 25px;
`;

export const Title = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 20px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 90px;
  border-radius: 4px;
  background: #eee;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  max-width: 68%;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  margin-left: 10px;
  text-align: left;
`;
