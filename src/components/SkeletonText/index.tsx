import React from 'react';
import { Text } from 'react-native';

const SkeletonText: React.FC<{ length: number; fontSize: number }> = ({
  length,
  fontSize,
}) => {
  return (
    <Text style={{ letterSpacing: -fontSize / 2 }}>
      {[...Array(length)].map(() => '■')}
    </Text>
  );
};

export default SkeletonText;
