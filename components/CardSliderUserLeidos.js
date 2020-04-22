import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Img1 from "../assets/2.1.png";
import Img2 from "../assets/4.2.jpg";
import Img3 from "../assets/4.3.jpg";
import Img4 from "../assets/4.4.jpg";

export default class CardSliderUserLeidos extends React.Component {
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
            <Image source={Img1} style={styles.image} />
            <Image source={Img2} style={styles.image} />
            <Image source={Img3} style={styles.image} />
            <Image source={Img4} style={styles.imageFinal} />
          </View>
        );
    }
}



const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 5,
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