import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

import SplashImage from "../assets/splash.gif";

export default class Splash extends React.Component {
  render() {
    return (
      <View>
        <Image source={SplashImage} style={styles.splash} />
      </View>
    );
  }
}

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;

const styles = StyleSheet.create({
  splash: {
    width: windowwidth,
    height: windowheight,
  },
});
