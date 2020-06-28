import React from "react"
import { useSelector } from "react-redux"
import { render, wait, fireEvent } from "@testing-library/react-native"
import axios from "axios"
import ListController from "./ListController"
import { REDUX_MOCK, MOVIE_LIST_MOCK } from "~/utils/mocks"
import { LIST_STRINGS } from "~/utils/strings"
import * as api from "~/api"

const mockDispatch = jest.fn()
const mockNavigate = jest.fn()
const mockSetOptions = jest.fn()

jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(),
}))

jest.mock("axios")

const defaultProps = {
    navigation: {
        navigate: mockNavigate,
        setOptions: mockSetOptions,
    },
}
const newWrapper = () => (
    <ListController
        {...defaultProps}
    />
)

describe("pages - List", () => {
    beforeAll(() => {
        useSelector.mockImplementation((cb) => cb(REDUX_MOCK))
        mockDispatch.mockClear()
        mockNavigate.mockClear()
        mockSetOptions.mockClear()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    // it("should put header title", () => {
    //     wait(() => expect(mockSetOptions).toHaveBeenCalledWith({
    //         headerTitle: LIST_STRINGS.title,
    //     }))
    // })

    it("should return error from request", async () => {
        jest.spyOn(api, "fetchMovies").mockRejectedValue({ error: "error" })
        const { getByTestId } = render(newWrapper())

        await wait(() => expect(mockDispatch).toBeCalledTimes(3))
        await wait(() => expect(getByTestId("errorPageDescriptionText")).toHaveTextContent(LIST_STRINGS.error.description))
    })

    // it("should return error from request and try again", () => {
    //     axios.get.mockRejectedValue({ error: "error" })
    //     const { getByTestId } = render(newWrapper())

    //     wait(() => {
    //         fireEvent.press(getByTestId("errorPageButtonComponent"))
    //         axios.get.mockResolvedValue(MOVIE_LIST_MOCK)
    //     })

    //     wait(() => {
    //         expect(mockDispatch).toBeCalledTimes(3)
    //         expect(getByTestId("listViewMovies"))
    //     })
    // })

    // describe("earching movies return success", () => {
    //     it("should return an empty list from request", () => {
    //         axios.get.mockRejectedValue({ error: "error" })
    //     })

    //     it("should return an empty list from request and try again", () => {
    //         axios.get.mockRejectedValue({ error: "error" })
    //     })

    //     it("should return success from request and show all items", () => {
    //         axios.get.mockResolvedValue(MOVIE_LIST_MOCK)
    //     })

    //     it("should select movie and navigate to details screen", () => {
    //         axios.get.mockResolvedValue(MOVIE_LIST_MOCK)

    //         const { getByTestId } = render(newWrapper())

    //         fireEvent.press(getByTestId("nextScreenButton"))
    //         wait(() => expect(mockNavigate).toHaveBeenCalledWith("SecondScreen"))
    //     })
    // })
})
