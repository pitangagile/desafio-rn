import React from "react"
import { useSelector } from "react-redux"
import { render, wait } from "@testing-library/react-native"
import DetailsController from "./DetailsController"
import { REDUX_MOCK } from "~/utils/mocks"

const mockNavigate = jest.fn()
const mockSetOptions = jest.fn()

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}))

const defaultProps = {
    navigation: {
        navigate: mockNavigate,
        setOptions: mockSetOptions,
    },
}
const newWrapper = () => (
    <DetailsController
        {...defaultProps}
    />
)

describe("pages - Details", () => {
    beforeAll(() => {
        useSelector.mockImplementation((cb) => cb(REDUX_MOCK))
        mockNavigate.mockClear()
        mockSetOptions.mockClear()
    })

    it("should put header title", () => {
        wait(() => expect(mockSetOptions).toHaveBeenCalledWith({
            headerTitle: REDUX_MOCK.currentInfo.name,
        }))
    })

    it("should show image and description", () => {
        const { getByTestId } = render(newWrapper())
        wait(() => {
            expect(getByTestId("headerImage")).toHaveProp("source", { uri: REDUX_MOCK.currentInfo.url })
            expect(getByTestId("descriptionText")).toHaveTextContent(REDUX_MOCK.currentInfo.description)
        })
    })
})
