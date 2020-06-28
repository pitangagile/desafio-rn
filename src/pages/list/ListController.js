import React, {
    useState, useLayoutEffect, useEffect, useCallback,
} from "react"
import { useDispatch, useSelector } from "react-redux"
import ListView from "./ListView"
import { setHasError, setIsLoading, searchMovieInfo } from "~/redux/actions"
import { LIST_STRINGS } from "~/utils/strings"
import { fetchMovies } from "~/api"

const ListController = ({ navigation }) => {
    const dispatch = useDispatch()
    const [list, setList] = useState([])
    const { isLoading, hasError } = useSelector((state) => state)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: LIST_STRINGS.header,
        })
    })

    const searchMovies = useCallback(async () => {
        try {
            dispatch(setHasError(false))
            const movieList = await fetchMovies()
            setList(movieList)
        } catch (error) {
            dispatch(setHasError(true))
        } finally {
            dispatch(setIsLoading(false))
        }
    }, [dispatch])

    useEffect(() => {
        searchMovies()
    }, [searchMovies])

    const goToDetails = useCallback((movieId) => {
        dispatch(searchMovieInfo(movieId, navigation))
    }, [dispatch, navigation])

    return (
        <ListView
            list={list}
            isLoading={isLoading}
            hasError={hasError}
            goToDetails={goToDetails}
            tryAgain={searchMovies}
        />
    )
}

export default ListController
