import React, { useCallback, useState } from 'react';
import {
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { useDimensions } from '../../utils/useDimensions';

import { Item } from './styles';

type CarouselProps = FlatListProps<any>;

const Carousel: React.FC<CarouselProps> = ({ renderItem, ...rest }) => {
  const { width } = useDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { x } = event.nativeEvent.contentOffset;
      setScrollPosition(x / (width - 128 + 16));
    },
    [width],
  );

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 48 }}
      horizontal
      pagingEnabled
      snapToInterval={width - 128 + 16}
      decelerationRate="fast"
      onScroll={handleScroll}
      renderItem={(renderItemProps) => (
        <Item
          screenWidth={width}
          distanceToSelectedScroll={Math.abs(
            scrollPosition - renderItemProps.index,
          )}
        >
          {renderItem && renderItem(renderItemProps)}
        </Item>
      )}
      {...rest}
    />
  );
};

export default Carousel;
