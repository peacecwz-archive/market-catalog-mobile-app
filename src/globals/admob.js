import * as React from "react";
import { View, Text, Platform } from "react-native";
import { Footer } from "native-base";
import log from "./logger";

import { AdMobBanner } from "react-native-admob";

class AdmobGenerator {
  iOSBannerId = "ca-app-pub-8369844996707397/7545312136";
  androidBannerId = "ca-app-pub-8369844996707397/1227315793";

  getBanner() {
    return (
      <Footer style={{ backgroundColor: "transparent" }}>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID={
            Platform.OS === "ios" ? this.iOSBannerId : this.androidBannerId
          }
          testDevices={[AdMobBanner.simulatorId]}
        />
      </Footer>
    );
  }
}

export default new AdmobGenerator();
