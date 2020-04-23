import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

export default function EventDetails(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
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
  const description = props.Description;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
    </View>
  );
}

const TITLE_COLOR = "black";
const BODY_COLOR = "#757575";
const TITLE_SIZE = 18;
const BODY_SIZE = 14;
const TITLE_TYPE = "RobotoCondensed-Bold";
const BODY_TYPE = "RobotoCondensed-Regular";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  title: {
    color: TITLE_COLOR,
    fontSize: TITLE_SIZE,
    fontFamily: TITLE_TYPE,
    textTransform: "uppercase",
    display: "flex",
    marginBottom: 10,
  },
  body: {
    color: BODY_COLOR,
    fontSize: BODY_SIZE,
    fontFamily: BODY_TYPE,
    display: "flex",
  },
});
