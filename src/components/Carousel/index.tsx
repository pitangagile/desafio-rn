/* eslint-disable react/require-default-props */
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { useDimensions } from '../../utils/useDimensions';

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
      ListFooterComponent={
        (loading || ListFooterComponent) && (
          <Item screenWidth={width} distanceToSelectedScroll={1}>
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
