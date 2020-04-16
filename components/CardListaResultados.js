import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Star1 from "../assets/image1.png";
import Vector from "../assets/vector.png";

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
        const character = "STAR WARS (2015) #1";
        return (
          <View style={styles.card}>
            <Image source={Star1} style={styles.image} />
            <Image source={Vector} style={styles.vector} />
            <Text style={styles.character}>{character}</Text>
          </View>
        );
    }
}



const CARD_HEIGHT = 150;
const CARD_WIDTH = 350;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 50,
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
  character:{
    flex: 0,
    flexDirection: "row",
    width: CARD_WIDTH - 20,
    height: CARD_HEIGHT,
    fontSize: 17,
    fontFamily: "RobotoCondensed-Bold",
    textAlign: "left",
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  vector:{
    width: 30,
    height: 38,  
    marginTop: 60,  
    marginLeft: 20,
    justifyContent: "center",
  },
});