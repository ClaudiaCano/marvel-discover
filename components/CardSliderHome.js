import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Star1 from "../assets/1.1.png";
import Star2 from "../assets/2.1.png";
import Star3 from "../assets/3.1.png";
import Star4 from "../assets/4.1.png";

export default class Personaje extends React.Component {
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
        const character = "PRINCESA LEIA";
        const completename = "LEIA ORGANA";
        return (
          <View style={styles.card}>
            <Image source={Star1} style={styles.image} />
            <Image source={Star2} style={styles.image} />
            <Image source={Star3} style={styles.image} />
            <Image source={Star4} style={styles.imageFinal} />
          </View>
        );
    }
}


const PRIMARY_TEXT_COLOR = "white";
const SECONDARY_TEXT_COLOR = "#757575";
const CARD_HEIGHT = 150;
const CARD_WIDTH = 350;
const CARD_BACKGROUND = "#151515";

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "white",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  image:{
    marginLeft: 10,
    marginTop: 5,
    width: 80,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageFinal:{
    marginLeft: 10,
    marginTop: 5,
    width: 40,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",
  },
  
});