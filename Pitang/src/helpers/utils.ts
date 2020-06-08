import { Dimensions } from 'react-native';

const sizes = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth === 320) {
    return 'small';
  }
  if (windowWidth === 414) {
    return 'large';
  }
  return 'medium';
};

export default sizes;
