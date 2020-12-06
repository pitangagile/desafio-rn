// useOrientation.tsx
import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export function useDimensions(): ScaledSize {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const callback = () => setDimensions(Dimensions.get('window'));

    Dimensions.addEventListener('change', callback);

    return () => {
      Dimensions.removeEventListener('change', callback);
    };
  }, []);

  return dimensions;
}

export function useOrientation(): 'PORTRAIT' | 'LANDSCAPE' {
  const dimensions = useDimensions();

  return dimensions.height >= dimensions.width ? 'PORTRAIT' : 'LANDSCAPE';
}
