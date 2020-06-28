import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import Button from "./Button"

const fakeOnPress = jest.fn()

const defaultProps = {
    label: "Label",
    onPress: fakeOnPress(),
}

const newWrapper = (props) => (
    <Button
        {...defaultProps}
        {...props}
    />
)

describe("components - Button", () => {
    it("should set custom test id", () => {
        const { getByTestId } = render(newWrapper({ testID: "myTest" }))

        expect(getByTestId("myTestLabelText"))
    })

    it("should render label", () => {
        const { getByTestId } = render(newWrapper())

        expect(getByTestId("buttonLabelText")).toHaveTextContent(defaultProps.label)
    })

    it("should call onPress", () => {
        const { getByTestId } = render(newWrapper())

        fireEvent.press(getByTestId("buttonContainerButton"))

        expect(fakeOnPress).toHaveBeenCalled()
    })
})
