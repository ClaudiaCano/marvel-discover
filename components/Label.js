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

export default function Label(props) {
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

  const title = props.Title;
  const focused = props.focused;

  return (
    <View style={styles.column}>
      <Text style={[styles.text,  props.focused? styles.textActive : {}]} >{title}</Text>
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
    bottom: 15,
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
  },
  textActive: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 14,
    color: "red",
  },
});