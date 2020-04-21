import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Guardar from "./components/Guardar";
import BtnVerMas from "./components/BtnVerMas";
import BtnLeido from "./components/BtnLeido";
import Personaje from "./components/Personaje";
import AppBar from "./components/AppBar";
import CarouselItem from "./components/CarouselItem";
import CardSliderHome1 from "./components/CardSliderHome1";
import ImgVerMas from "./components/ImgVerMas";
import CardCommicEvent from "./components/CardComicEvent";
import UserHeader from "./components/UserHeader";
import CardListaResultados from "./components/CardListaResultados";

/*------------------------ PAGES ------------------------ */
import Comic from "./pages/Comic";
import Evento from "./pages/Evento";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Resultados from "./pages/Resultados";
import Leidos from "./pages/Leidos";
import Guardados from "./pages/Guardados";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LinearGradient
        colors={["white", "white", "#B895C8"]}
        style={styles.gradient}
      />

      <Guardados />
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
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
});
