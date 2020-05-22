import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

export default function Title(props) {
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

  var string = props.Title;
  var stringHasDate = string.includes("(");

  if (stringHasDate) {
    var number = string.indexOf("(");
    var text1 = string.slice(0, number);
    var text2 = string.slice(number);
  } else {var text1 = string;}
  

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textcolor]}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  );
}

const FONT_COLOR = "black";
const SECONDARY_FONT_COLOR = "#5E009C";
const FONT_SIZE = 24;
const FONT_TYPE = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 80,
    paddingRight: 20,
    flex: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginTop: 30,
    marginBottom: 20,
  },
  text: {
    color: FONT_COLOR,
    fontSize: FONT_SIZE,
    fontFamily: FONT_TYPE,
    textTransform: "uppercase",
    display: "flex",
  },
  textcolor: {
    color: SECONDARY_FONT_COLOR,
  },
});
