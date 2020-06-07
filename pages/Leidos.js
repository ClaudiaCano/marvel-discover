import React, { useContext, useEffect, Component, useState } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";
import MarvelContext from "../model/MarvelModel";

import TitleLeidos from "../components/TitleLeidosGuardados";
import CardListaLeidos from "../components/CardListaLeidos";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";
import CardLeidos from "../components/CardLeidos";

const Results = {
  text: "Leídos",
};

const Leidos = observer(() => {

  const marvel = useContext(MarvelContext);

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

      <FlatList
        data={marvel.leidos}
        renderItem={({ item: rowData }) => {
          return (
            <CardLeidos
              Title={rowData.title}
              Cover={{
                uri: rowData.images[0].path + "." + rowData.images[0].extension,
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => <View height={80} />}
      />

    </View>
  );
})

export default Leidos;
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
