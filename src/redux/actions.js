import { fetchMovieInfo } from "~/api"
import { SCREENS } from "~/utils/constants"

export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_CURRENT_INFO = "SET_CURRENT_INFO"
export const SET_HAS_ERROR = "SET_HAS_ERROR"

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading,
})

export const setCurrentInfo = (currentInfo) => ({
    type: SET_CURRENT_INFO,
    currentInfo,
})

export const setHasError = (hasError) => ({
    type: SET_HAS_ERROR,
    hasError,
})

export const searchMovieInfo = (movieId, navigation) => (
    async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            dispatch(setHasError(false))
            const movieInfo = await fetchMovieInfo(movieId)
            dispatch(setCurrentInfo(movieInfo))
            navigation.navigate(SCREENS.Details)
        } catch (error) {
            dispatch(setHasError(true))
        } finally {
            dispatch(setIsLoading(false))
        }
    }
)
