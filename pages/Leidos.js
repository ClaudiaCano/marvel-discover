import React from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

import EventTitleResults from "../components/EventTitleLeidosGuardados";
import CardListaLeidos from "../components/CardListaLeidos";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";

const Results = {
  text: "Leídos",
};

export default class Leidos extends React.Component {
  constructor() {
    super();
    this.state = {
      fontloaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
      "RobotoCondensed-BoldItalic": require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
      "RobotoCondensed-Italic": require("../assets/fonts/RobotoCondensed-Italic.ttf"),
      "RobotoCondensed-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
      "RobotoCondensed-LightItalic": require("../assets/fonts/RobotoCondensed-LightItalic.ttf"),
      "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    this.setState({ fontloaded: true });
  }

  render() {
    return (
      <View>
        <LinearGradient colors={["#FAF2FF", "#fff0"]} style={styles.gradient} />
        <BackIcon style={styles.backIcon} />
        <EventTitleResults Title={Results.text} />

        <ScrollView>
          <CardListaLeidos />
          <View style={styles.sizedbox}/>
        </ScrollView>
        
        <AppBar />
      </View>
    );
  }
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