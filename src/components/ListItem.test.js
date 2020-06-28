import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import ListItem from "./ListItem"

const fakeOnPress = jest.fn()

const defaultProps = {
    text: "Label",
    imageUri: "https://www.google.com/image.png",
    onPress: fakeOnPress(),
}

const newWrapper = (props) => (
    <ListItem
        {...defaultProps}
        {...props}
    />
)

describe("components - ListItem", () => {
    it("should set custom test id", () => {
        const { getByTestId } = render(newWrapper({ testID: "myTest" }))

        expect(getByTestId("myTestContainerButton"))
    })

    it("should render text and image", () => {
        const { getByTestId } = render(newWrapper())

        expect(getByTestId("listItemIconImage")).toHaveProp("source", { uri: defaultProps.imageUri })
        expect(getByTestId("listItemNameText")).toHaveTextContent(defaultProps.text)
    })

    it("should call onPress", () => {
        const { getByTestId } = render(newWrapper())

        fireEvent.press(getByTestId("listItemContainerButton"))

        expect(fakeOnPress).toHaveBeenCalled()
    })
})
