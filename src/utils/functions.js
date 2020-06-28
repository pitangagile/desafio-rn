import { Dimensions } from "react-native"

export const screenHeightPercentage = (value) => {
    const viewport = Dimensions.get("window")
    return (viewport.height / 100) * value
}

export const screenWidthPercentage = (value) => {
    const viewport = Dimensions.get("window")
    return (viewport.width / 100) * value
}
