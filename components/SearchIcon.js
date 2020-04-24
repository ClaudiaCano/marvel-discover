import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import SearchSvg from "../assets/searchicon.svg";

export default function SearchIcon(props) {
  return (
    <View style={styles.column}>
      <View style={styles.circle} />
      <SearchSvg width={20} height={20} style={styles.searchicon} />
    </View>
  );
}

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const SEARCH_COLOR = "#D01C1F";

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -22,
  },
  circle: {
    top: 0,
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: SEARCH_COLOR,
  },
  searchicon: {
    top: -40,
  },
});
