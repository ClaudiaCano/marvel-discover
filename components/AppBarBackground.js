import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";
import { Dimensions } from "react-native";

import AppBarSvg from "../assets/appbar.svg";

const AppBarBackground = (props) => {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const ratio = imageWidth / 615.6;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarstructure}>
        <AppBarSvg
          width={imageWidth}
          height={136 * ratio}
          style={styles.appbarbackground}
        />
      </View>
    </View>
  );
}

export default AppBarBackground;

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;
const ratio = windowwidth / 615.6;
const barheight = 136 * ratio;

const SEARCH_COLOR = "#D01C1F";

const styles = StyleSheet.create({
  appbar: {
    width: windowwidth,
    height: barheight + 30,
    position: "absolute",
    bottom: - 35,
  },
  /*appbarstructure: {
    position: "absolute",
    top: windowheight - barheight - 30,
  },*/
  appbarbackground: {
    position: "absolute",
    top: 0,
    shadowColor: "#826A92",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 0,
  },
});