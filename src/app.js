import React from "react"
import "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import store from "./redux"
import MainNavigation from "./navigation"
import { SCREENS } from "~/utils/constants"

const App = () => (
    <SafeAreaProvider>
        <Provider store={store}>
            <MainNavigation initialRoute={SCREENS.ListScreen} />
        </Provider>
    </SafeAreaProvider>
)

export default App
