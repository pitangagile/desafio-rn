import React from 'react';
import styled from 'styled-components/native';
import { iOSUIKit, material } from 'react-native-typography';
import { Platform, Text } from 'react-native';
import sizes from '../helpers/utils';

type Props = {
  onChange: (text: string) => void;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ onChange }) => {
  return (
    <Container>
      <Text
        style={
          Platform.OS === 'ios'
            ? iOSUIKit.largeTitleEmphasizedWhite
            : material.display2White
        }>
        Search
      </Text>
      <Input onChangeText={onChange} />
    </Container>
  );
};

const Container = styled.View`
  padding: ${sizes() === 'small' || sizes() === 'medium' ? '10px' : '20px'};
`;

const Input = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholder: 'Search by movie name',
  placeholderTextColor: 'rgba(255,255,255, 0.3)',
})`
  padding: 10px;
  border-bottom-width: 1;
  border-color: 'rgba(255,255,255, 0.3)';
  color: white;
  font-size: 20px;
`;

export default React.memo(Header);
