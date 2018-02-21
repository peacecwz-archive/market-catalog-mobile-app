import React, { Component } from "react";
import { View } from "react-native";

import { DotIndicator } from "react-native-indicators";

export default class Loading extends Component {
  render() {
    return <View style={{ flex: 1, backgroundColor: "#41b4c5", padding: 20 }}>
        <View style={{ flex: 1 }}>
          <DotIndicator count={3} color="white" animationDuration={800} />
        </View>
      </View>;
  }
}
