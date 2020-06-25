import { Dimensions } from 'react-native';

const screenSize = (): string => {
  const { width } = Dimensions.get('window');
  if (width <= 320) return 'small';
  if (width >= 411) return 'large';
  return 'medium';
};

export default screenSize;
