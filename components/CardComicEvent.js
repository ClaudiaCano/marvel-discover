import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Comic1 from "../assets/image1.png";
import Comic2 from "../assets/image2.png";


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
        return (
          <View style={styles.card}>
            <Image source={Comic1} style={styles.image} />
            <Image source={Comic2} style={styles.imageFinal} />
          </View>
        );
    }
}


const CARD_HEIGHT = 400;
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
    backgroundColor: "transparent",

    
  },
  image:{
    marginLeft: 2,
    marginTop: 5,
    width: 250,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    shadowColor: "grey",
    shadowOpacity: 0.2,
  },
  imageFinal:{
    marginLeft: 2,
    marginTop: 5,
    width: 103,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    shadowColor: "grey",
    shadowOpacity: 0.2,
  },

  
});