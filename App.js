import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Guardar from "./components/Guardar";
import BtnLeido from "./components/BtnLeido";
import Personaje from "./components/Personaje";
import AppBar from "./components/AppBar";
import CarouselItem from "./components/CarouselItem";
import ImgVerMas from "./components/ImgVerMas";
import CardCommicEvent from "./components/CardComicEvent";
import UserHeader from "./components/UserHeader";

import CardListaResultados from "./components/CardListaResultados";



/*------------------------ PAGES ------------------------ */
import Comic from "./pages/Comic";
import Evento from "./pages/Evento";
import Splash from "./pages/Splash";
import Resultados from "./pages/Resultados";
import Leidos from "./pages/Leidos";
import Guardados from "./pages/Guardados";
import Perfil from "./pages/Perfil";
import Search from "./pages/Search";
import HomeModif from "./pages/HomeModif";

//--------- PARA EL SEARCH (porque la gradiente es diferente)-------------
/*
export default function App() {
  return (
    <Search/>
  );
}
*/


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LinearGradient
        colors={["white", "white", "#B895C8"]}
        style={styles.gradient}
      />

      <HomeModif />
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
