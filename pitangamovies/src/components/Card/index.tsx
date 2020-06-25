import React from 'react';
import { TouchableOpacity } from 'react-native';
import screenSize from '../../utils/screenSize';

import { CustomImage } from './styles';

interface ICharacter {
  imagePath: string;
  onPress: () => void;
}

const Card: React.FC<ICharacter> = ({ imagePath, onPress }) => {
  const size = screenSize();

  const uri =
    imagePath ||
    'https://image.freepik.com/free-vector/red-coming-soon-lettering_23-2147501123.jpg?1';
  return (
    <TouchableOpacity testID="onPress" onPress={onPress}>
      <CustomImage
        resizeMode="cover"
        fallback
        source={{ uri }}
        hasImage={!imagePath}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default Card;
