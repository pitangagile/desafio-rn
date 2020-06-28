import { NativeModules } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"

const { scriptURL } = NativeModules.SourceCode
const scriptHostname = scriptURL?.split("://")[1]?.split(":")[0]

const reactotron = __DEV__ ? Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: scriptHostname })
    .useReactNative()
    .use(reactotronRedux())
    .connect()
    : null

export default reactotron
