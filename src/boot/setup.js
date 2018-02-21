import * as React from "react";
import { StyleProvider, Text } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppCenter from "appcenter";
import Analytics from "appcenter-analytics";
import Crashes, { UserConfirmation } from "appcenter-crashes";
//import OneSignal from "react-native-onesignal";
import Loading from "../globals/components/Loading";
import configureStore from "./configureStore";
let { store, persistor } = configureStore();
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";

export interface Props {}
export interface State {
  store: Object;
  isLoading: boolean;
}
export default class Setup extends React.Component<Props, State> {
  constructor() {
    super();
  }

  async componentWillMount() {
    await AppCenter.setEnabled(true);
    await Crashes.setEnabled(true);
    await Analytics.setEnabled(true);
    Crashes.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND);
    /*OneSignal.enableVibrate(true);
    OneSignal.enableSound(true);
    OneSignal.inFocusDisplaying(2);
    OneSignal.addEventListener("ids", this.onIds);*/
  }

  componentWillUnmount() {
    //OneSignal.removeEventListener("ids", this.onIds);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
