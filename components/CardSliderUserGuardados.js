import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Img1 from "../assets/2.3.png";
import Img2 from "../assets/5.2.jpg";
import Img3 from "../assets/5.3.jpg";
import Img4 from "../assets/5.4.jpg";

export default class CardSliderUserGuardados extends React.Component {
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