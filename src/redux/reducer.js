import * as actions from "./actions"

export const INITIAL_STATE = {
    isLoading: true,
    currentInfo: null,
    hasError: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actions.SET_CURRENT_INFO:
            return {
                ...state,
                currentInfo: action.currentInfo,
            }
        case actions.SET_HAS_ERROR:
            return {
                ...state,
                hasError: action.hasError,
            }
        default:
            return state
    }
}
