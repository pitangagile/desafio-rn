import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "~/utils/themes"

const ContainerButton = styled(TouchableOpacity)`
    flex-direction: row;
    padding: 16px;
    align-items: center;
`

const IconImage = styled.Image`
    width: 80px;
    height: 80px;
    resizeMode: contain;
    margin-right: 16px;
`

const NameText = styled.Text`
    font-size: 16px;
    color: ${Colors.black};
`

const ListItem = ({
    text, imageUri, onPress, testID,
}) => (
    <ContainerButton onPress={() => onPress()} testID={`${testID}ContainerButton`}>
        <IconImage source={{ uri: imageUri }} testID={`${testID}IconImage`} />
        <NameText testID={`${testID}NameText`}>{text}</NameText>
    </ContainerButton>
)

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
}

ListItem.defaultProps = {
    testID: "listItem",
}

export default ListItem
