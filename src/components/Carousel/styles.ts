import styled from 'styled-components/native';

interface ItemProps {
  screenWidth: number;
  distanceToSelectedScroll: number;
}

export const Item = styled.View<ItemProps>`
  width: ${(props) => props.screenWidth - 128}px;
  transform: scale(
    ${(props) =>
      0.8 +
      (props.distanceToSelectedScroll >= 1
        ? 0
        : (1 - props.distanceToSelectedScroll) * 0.2)}
  );
  margin: 0 8px;
  align-items: center;
`;
