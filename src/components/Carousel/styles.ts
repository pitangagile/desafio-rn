import styled from 'styled-components/native';

interface ItemProps {
  screenWidth: number;
  screenHeight: number;
  enableZoom: boolean;
  distanceToSelectedScroll: number;
}

export const Item = styled.View<ItemProps>`
  width: ${(props) => props.screenWidth - 128}px;
  transform: scale(
    ${(props) =>
      props.enableZoom
        ? 0.8 +
          (props.distanceToSelectedScroll >= 1
            ? 0
            : (1 - props.distanceToSelectedScroll) * 0.2)
        : 0.9}
  );
  margin: 0 8px;
  align-items: center;
  padding-bottom: 16px;
`;

export const ListFooterItem = styled.View`
  width: 100%;
  aspect-ratio: ${2 / 3};
  justify-content: center;
`;
