import React from "react";
import { StyleSheet, Text, ScrollView, View, Dimensions } from "react-native";
import * as Font from "expo-font";

import CardSliderUserLeidos from "../components/CardSliderUserLeidos";
import CardSliderUserGuardados from "../components/CardSliderUserGuardados";

import HomeTitles from "../components/HomeTitles";


export default class Home extends React.Component {
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
          <Text style={styles.text_1}>MIS COLECCIONES</Text>
          <HomeTitles Title="LEÍDOS" />
          <CardSliderUserLeidos />
          
          <HomeTitles Title="GUARDADOS" />
          <CardSliderUserGuardados />
      </View>
    );
  }
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