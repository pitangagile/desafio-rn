import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { Colors } from "~/utils/themes"
import Button from "./Button"

const ContainerView = styled.View`
    flex: 1;
    padding: 16px;
    align-items: center;
    justify-content: flex-start;
`

const TitleText = styled.Text`
    font-size: 20px;
    color: ${Colors.black};
    font-weight: bold;
`

const DescriptionText = styled.Text`
    font-size: 16px;
    color: ${Colors.black};
    margin-vertical: 24px;
`

const ButtonComponent = styled(Button)``

const ErrorPage = ({
    title, description, buttonLabel, onPress,
}) => (
    <ContainerView testID="errorPageContainerView">
        <TitleText testID="errorPageTitleText">{title}</TitleText>
        <DescriptionText testID="errorPageDescriptionText">{description}</DescriptionText>
        <ButtonComponent label={buttonLabel} onPress={onPress} testID="errorPage" />
    </ContainerView>
)

ErrorPage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default ErrorPage
