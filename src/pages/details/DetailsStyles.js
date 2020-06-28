import styled from "styled-components/native"
import { Colors } from "~/utils/themes"
import { screenHeightPercentage } from "~/utils/functions"

export const ContainerView = styled.View`
    flex: 1;
    margin-vertical: 16px;
`

export const HeaderImage = styled.Image`
    width: 100%;
    height: ${screenHeightPercentage(30)}px;
    resize-mode: contain;
    margin-bottom: 16px;
    margin-bottom: 16px;
`

export const DescriptionText = styled.Text`
    font-size: 16px;
    margin-horizontal: 16px;
    color: ${Colors.black};
`
