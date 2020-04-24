import React from "react";
import { StyleSheet, ScrollView, View, Dimensions, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";

import TitleGuardados from "../components/TitleLeidosGuardados";
import CardListaGuardados from "../components/CardListaGuardados";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";

const Results = {
  text: "Guardados",
};

export default function Guardados() {
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
    return (
      <View>
        <LinearGradient colors={["#FAF2FF", "#fff0"]} style={styles.gradient} />
        <BackIcon style={styles.backIcon} />
        <TitleGuardados Title={Results.text} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <CardListaGuardados />
          <View style={styles.sizedbox}/>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  backIcon: {
    position: "absolute",
    top: 38,
    left: 30,
    zIndex: 2,
  },
  sizedbox: {
    height: 200,
  },
});