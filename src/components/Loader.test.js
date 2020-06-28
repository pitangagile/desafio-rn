import React from "react"
import { render } from "@testing-library/react-native"
import Loader from "./Loader"

const newWrapper = () => (
    <Loader />
)

describe("components - Loader", () => {
    it("should render", () => {
        const { getByTestId } = render(newWrapper())

        expect(getByTestId("loaderContainerView")).toContainElement(getByTestId("loaderOverlayLoader"))
    })
})
