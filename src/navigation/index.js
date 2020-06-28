import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ListController from "~/pages/list/ListController"
import DetailsController from "~/pages/details/DetailsController"
import { SCREENS } from "../utils/constants"

const Stack = createStackNavigator()

const MainNavigator = ({ initialRoute }) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
                name={SCREENS.List}
                component={ListController}
            />
            <Stack.Screen
                name={SCREENS.Details}
                component={DetailsController}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
export default MainNavigator
