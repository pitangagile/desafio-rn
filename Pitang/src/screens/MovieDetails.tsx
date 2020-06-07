import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Image from 'react-native-fast-image';
import { SharedElement } from 'react-native-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const MovieDetails = ({ route }) => {
  const { item, rootScreen } = route.params;
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <SharedElement id={`${rootScreen}.item.${item._id}.photo`}>
          <FastImage
            source={{
              uri: item.url,
            }}
            resizeMode="contain"
          />
        </SharedElement>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'blue' }}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const FastImage = styled(Image)`
  width: 300px;
  align-self: center;
  height: 300px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: black;
`;

MovieDetails.sharedElements = (navigation) => {
  return [`item.1.photo`];
};

export default React.memo(MovieDetails);
