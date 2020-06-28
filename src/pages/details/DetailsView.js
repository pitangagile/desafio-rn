import React from "react"
import {
    ContainerView, HeaderImage, DescriptionText,
} from "./DetailsStyles"

const DetailsView = ({ currentInfo }) => (
    <ContainerView>
        <HeaderImage
            source={{ uri: currentInfo.url }}
            testID="headerImage"
        />
        <DescriptionText testID="descriptionText">{currentInfo.description}</DescriptionText>
    </ContainerView>
)

export default DetailsView
