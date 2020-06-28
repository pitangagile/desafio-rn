import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "~/utils/themes"

const ContainerButton = styled(TouchableOpacity)`
    padding: 16px;
    background-color: ${Colors.secondary};
    align-items: center;
`

const LabelText = styled.Text`
    font-size: 16px;
    color: ${Colors.white};
`

const Button = ({ label, onPress, testID }) => (
    <ContainerButton onPress={() => onPress()} testID={`${testID}ContainerButton`}>
        <LabelText testID={`${testID}LabelText`}>{label}</LabelText>
    </ContainerButton>
)

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
}

Button.defaultProps = {
    testID: "button",
}

export default Button
