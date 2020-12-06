/* eslint-disable react/require-default-props */
import React, { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { useDimensions, useOrientation } from '../../utils/useDimensions';

import { Item, ListFooterItem } from './styles';

type CarouselProps<ItemT> = FlatListProps<ItemT> & {
  loading?: boolean;
  hasReachedEnd?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = <T extends unknown = any>({
  renderItem,
  ListFooterComponent,
  loading = false,
  hasReachedEnd = true,
  ...rest
}: CarouselProps<T>): ReturnType<React.FC<CarouselProps<T>>> => {
  const { width, height } = useDimensions();

  const orientation = useOrientation();

  const carouselWidth = useMemo(() => {
    return Math.min(width, height * 0.8);
  }, [height, width]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { x } = event.nativeEvent.contentOffset;
      setScrollPosition(x / (carouselWidth - 128 + 16));
    },
    [carouselWidth],
  );

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 48 }}
      horizontal
      pagingEnabled={orientation === 'PORTRAIT'}
      snapToInterval={
        orientation === 'PORTRAIT' ? carouselWidth - 128 + 16 : undefined
      }
      decelerationRate="fast"
      onScroll={handleScroll}
      ListFooterComponent={
        (loading || ListFooterComponent) && (
          <Item
            screenWidth={carouselWidth}
            screenHeight={height}
            enableZoom={orientation === 'PORTRAIT'}
            distanceToSelectedScroll={1}
          >
            <ListFooterItem>
              {loading ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : (
                hasReachedEnd && ListFooterComponent
              )}
            </ListFooterItem>
          </Item>
        )
      }
      renderItem={(renderItemProps) => (
        <Item
          screenWidth={carouselWidth}
          screenHeight={height}
          enableZoom={orientation === 'PORTRAIT'}
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
