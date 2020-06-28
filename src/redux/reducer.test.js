import reducer, { INITIAL_STATE } from "./reducer"
import * as actions from "./actions"
import { MOVIE_INFO_MOCK } from "~/utils/mocks"
import { MovieInfo } from "~/utils/objects"

describe("reducer", () => {
    it("should update isLoading", () => {
        const state = reducer(
            INITIAL_STATE,
            actions.setIsLoading(true),
        )

        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            isLoading: true,
        })
    })

    it("should update hasError", () => {
        const state = reducer(
            INITIAL_STATE,
            actions.setHasError(true),
        )

        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            hasError: true,
        })
    })

    it("should update currentInfo", () => {
        const currentInfo = new MovieInfo(MOVIE_INFO_MOCK)
        const state = reducer(
            INITIAL_STATE,
            actions.setCurrentInfo(currentInfo),
        )

        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            currentInfo,
        })
    })

    it("should have default value", () => {
        const state = reducer(undefined, {})

        expect(state).toStrictEqual(INITIAL_STATE)
    })
})
