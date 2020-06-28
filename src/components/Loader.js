import React from "react"
import styled from "styled-components/native"
import { Colors } from "~/utils/themes"

const ContainerView = styled.View`
    flex: 1;
    align-items: center;
`

const OverlayLoader = styled.ActivityIndicator.attrs({
    color: Colors.primary,
    size: "large",
})`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: transparent;
`

const Loader = () => (
    <ContainerView testID="loaderContainerView">
        <OverlayLoader testID="loaderOverlayLoader" />
    </ContainerView>
)

export default Loader
