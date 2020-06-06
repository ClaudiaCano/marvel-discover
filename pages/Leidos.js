import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";

import TitleLeidos from "../components/TitleLeidosGuardados";
import CardListaLeidos from "../components/CardListaLeidos";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";

const Results = {
  text: "Leídos",
};

export default function Leidos() {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container]}>
        <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
        <ActivityIndicator size="large" color="#4E00B0"/>
      </View>
    );
  }
  return (
    <View>
      <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
      <LinearGradient colors={["#FAF2FF", "#fff0"]} style={styles.gradientsup} />
      
      <TitleLeidos Title={Results.text} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CardListaLeidos />
        <View style={styles.sizedbox} />
      </ScrollView>
    </View>
  );
}

//<BackIcon style={styles.backIcon} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -4,
    height: Dimensions.get("screen").height,
    zIndex: -1,
  },
  gradientsup: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
    zIndex: -1,
  },
  backIcon: {
    position: "absolute",
    top: 38,
    left: 30,
    zIndex: 2,
  },
  sizedbox: {
    height: 150,
  },
});
