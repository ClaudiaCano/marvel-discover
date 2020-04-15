import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Guardar from "./components/Guardar";
import BtnVerMas from "./components/BtnVerMas";
import BtnLeido from "./components/BtnLeido";
import Personaje from "./components/Personaje";
import AppBar from "./components/AppBar";
import CardSliderHome from "./components/CardSliderHome";
import CardCommicEvent from "./components/CardComicEvent";

export default function App() {
  return (
    <View style={styles.container}>
        <CardCommicEvent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B895C8",
    //alignItems: "center",
    //justifyContent: "center",

    //justifyContent: "flex-end",
  },
});
