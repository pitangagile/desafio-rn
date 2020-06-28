import React, { useLayoutEffect } from "react"
import { useSelector } from "react-redux"
import DetailsView from "./DetailsView"

const DetailsController = ({ navigation }) => {
    const currentInfo = useSelector((state) => state.currentInfo)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: currentInfo?.name,
        })
    })

    return (
        <DetailsView
            currentInfo={currentInfo}
        />
    )
}

export default DetailsController
