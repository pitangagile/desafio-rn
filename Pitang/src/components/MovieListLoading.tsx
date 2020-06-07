import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export function MovieListLoading() {
  const [fillLoading] = useState([...new Array(18).fill({})]);
  return (
    <Container>
      <FlatList
        numColumns={3}
        data={fillLoading}
        keyExtractor={(item) => item}
        renderItem={() => (
          <CardItem style={styles.CardItem}>
            <Placeholder Animation={Fade}>
              <PlaceholderMediaStyled />
              <PlaceholderLineStyled />
            </Placeholder>
          </CardItem>
        )}
      />
    </Container>
  );
}

const PlaceholderMediaStyled = styled(PlaceholderMedia)`
  height: 160px;
  width: 120px;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const CardItem = styled.View`
  margin-top: 15px;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PlaceholderLineStyled = styled(PlaceholderLine).attrs({ width: 80 })`
  margin-top: 10px;
  margin-left: 1px;
  background: rgba(0, 0, 0, 0.6);
`;

const styles = StyleSheet.create({
  CardItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 5,
  },
});
