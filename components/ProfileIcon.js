import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "@use-expo/font";

import ProfileIcon from "../assets/profileicon.svg";

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
      <ProfileIcon width={20} height={20} />
    </View>
  );
}

const DISTANCE_ICON_TEXT = 1;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bottom: -7,
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
  },
});