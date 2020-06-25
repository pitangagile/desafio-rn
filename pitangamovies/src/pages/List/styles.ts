import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 32px;
`;

export const Bar = styled.View`
  margin-top: -20px;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: 'gilroy-semibold';
  font-size: 14px;
  color: #b7b7c8;
`;

export const HeaderDescription = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 32px;
  color: #313140;
`;
