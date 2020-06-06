/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Image from 'react-native-fast-image';

type Props = {
  image: string;
};

const MovieDetails: React.FC<Props> = ({ image }) => {
  return (
    <View style={styles.item}>
      <FastImage
        resizeMode={'stretch'}
        fallback
        source={{ uri: image, priority: Image.priority.normal }}
      />
    </View>
  );
};

const FastImage = styled(Image)`
  width: 100px;
  align-self: center;
  height: 130px;
`;

const styles = StyleSheet.create({
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
    margin: 5,
  },
});

export default React.memo(MovieDetails);
