import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import SaveIcon from "../assets/saveicon.svg";
import SaveIconSelected from "../assets/saveiconselected.svg";
import { useFonts } from "@use-expo/font";

import Logo from "../assets/logo.svg";

export default function Guardar(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.column}>
      <Logo width={20} height={20} />
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const DISTANCE_ICON_TEXT = 1;

const styles = StyleSheet.create({
  /*page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },*/
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
  },
});
