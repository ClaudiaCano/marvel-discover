import React from "react";
import { StyleSheet, Text, ScrollView, View, Dimensions, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

import CardSliderUserLeidos from "../components/CardSliderUserLeidos";
import CardSliderUserGuardados from "../components/CardSliderUserGuardados";

import HomeTitles from "../components/HomeTitles";


export default function UserColecciones() {

  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!fontsLoaded) {
      return (
          <View style={styles.container}>
              <ActivityIndicator />
          </View>
      );
  }
  return (
    <View>
      <Text style={styles.text_1}>MIS COLECCIONES</Text>
      <HomeTitles Title="LEÍDOS" />
      <CardSliderUserLeidos />
      <HomeTitles Title="GUARDADOS" />
      <CardSliderUserGuardados />
    </View>
  );
}

const styles = StyleSheet.create({
    text_1: {
        paddingLeft: 20, //tiene que coincidir con el padding del slider y homeTitles
        color: '#D01C1F',
        fontSize: 18,
        fontFamily: "RobotoCondensed-Bold",
        textTransform: "uppercase",
        display: "flex",
        marginTop: 20,
    },
});