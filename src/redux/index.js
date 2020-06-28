import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "remote-redux-devtools"
import reducer from "./reducer"
import Reactotron from "../../ReactotronConfig"

const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: "localhost",
    port: 8000,
})
const store = __DEV__
    ? createStore(reducer, composeEnhancers(applyMiddleware(thunk), Reactotron.createEnhancer()))
    : createStore(reducer, applyMiddleware(thunk))

export default store
