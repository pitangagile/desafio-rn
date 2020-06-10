import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

function BackHeader() {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.goBack()}>
      <Feather name={'arrow-left'} color={'white'} size={30} />
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export default BackHeader;
