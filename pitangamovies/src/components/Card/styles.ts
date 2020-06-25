import styled, { css } from 'styled-components/native';
import FastImage from 'react-native-fast-image';

interface ImageProps {
  hasImage: boolean;
  size: string;
}

export const CustomImage = styled(FastImage).attrs({
  priority: FastImage.priority.normal,
})<ImageProps>`
  width: 110px;
  height: 210px;

  ${props =>
    props.size === 'medium' &&
    css`
      width: 95px;
      height: 180px;
    `}

  border-radius: 15px;

  ${props =>
    props.hasImage &&
    css`
      border-color: black;
      border-width: 1px;
    `}
`;
