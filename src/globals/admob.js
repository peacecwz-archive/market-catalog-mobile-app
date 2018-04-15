import * as React from "react";
import { View, Text, Platform } from "react-native";
import { Footer } from "native-base";
import log from "./logger";

import { AdMobBanner, AdMobInterstitial } from "react-native-admob";

class AdmobGenerator {
  iOSBannerId = "ca-app-pub-8369844996707397/7545312136";
  androidBannerId = "ca-app-pub-8369844996707397/1227315793";
  iOSInterstitialId = "ca-app-pub-8369844996707397/1516083968";
  androidInterstitialId = "ca-app-pub-8369844996707397/1378506685";

  canShow() {
    var num = Math.floor(Math.random() * 100);
    return num % 5 === 0;
  }

  showInterstitial() {
    if (this.canShow()) {
      if (Platform.OS === "ios") {
        AdMobInterstitial.setAdUnitID(this.iOSInterstitialId);
      } else {
        AdMobInterstitial.setAdUnitID(this.androidInterstitialId);
      }
      AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
      AdMobInterstitial.requestAd().then(() => {
        AdMobInterstitial.showAd();
        log("Show Interstitial", {
          platform: Platform.OS
        });
      });
    }
  }

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
