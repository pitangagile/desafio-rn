import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import ErrorPage from "./ErrorPage"

const fakeOnPress = jest.fn()

const defaultProps = {
    title: "Title",
    description: "Description",
    buttonLabel: "Button",
    onPress: fakeOnPress(),
}

const newWrapper = () => (
    <ErrorPage
        {...defaultProps}
    />
)

describe("components - ErrorPage", () => {
    it("should render texts", () => {
        const { getByTestId } = render(newWrapper())

        expect(getByTestId("errorPageTitleText")).toHaveTextContent(defaultProps.title)
        expect(getByTestId("errorPageDescriptionText")).toHaveTextContent(defaultProps.description)
    })

    it("should call onPress", () => {
        const { getByTestId } = render(newWrapper())

        fireEvent.press(getByTestId("errorPageContainerButton"))

        expect(fakeOnPress).toHaveBeenCalled()
    })
})
