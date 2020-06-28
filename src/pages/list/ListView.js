import React, { useCallback } from "react"
import {
    MovieList, ListItemComponent, LoaderComponent, ErrorPageComponent,
} from "./ListStyles"
import { LIST_STRINGS } from "~/utils/strings"

const ListView = ({
    list, isLoading, hasError, goToDetails, tryAgain,
}) => {
    const renderItem = useCallback(({ item, index }) => (
        <ListItemComponent
            text={item.name}
            imageUri={item.url}
            onPress={() => goToDetails(item.id)}
            testID={`listItem${index}`}
        />
    ), [goToDetails])

    const emptyList = useCallback(() => (
        <ErrorPageComponent
            title={LIST_STRINGS.noMovies.title}
            description={LIST_STRINGS.noMovies.description}
            buttonLabel={LIST_STRINGS.noMovies.button}
            onPress={tryAgain}
        />
    ), [tryAgain])

    if (hasError) {
        console.log("has error ein")
        return (
            <ErrorPageComponent
                title={LIST_STRINGS.error.title}
                description={LIST_STRINGS.error.description}
                buttonLabel={LIST_STRINGS.error.button}
                onPress={tryAgain}
            />
        )
    }

    if (isLoading) {
        return <LoaderComponent />
    }

    return (
        <MovieList
            data={list}
            renderItem={renderItem}
            ListEmptyComponent={emptyList}
            testID="listViewMovies"
        />
    )
}

export default ListView
