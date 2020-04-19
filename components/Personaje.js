import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Leia from "../assets/Leia.jpg";

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
        <View style={styles.cardTop} />
        <View style={styles.line} />
        <View style={styles.cardBottom} />
        <Text style={styles.character}>{this.props.character}</Text>
        <Text style={[styles.character, styles.completename]}>
          {this.props.completename}
        </Text>
        <Image source={Leia} style={styles.image} />
      </View>
    );
  }
}

const PRIMARY_TEXT_COLOR = "white";
const SECONDARY_TEXT_COLOR = "#757575";
const LINE_COLOR = "#5E009C";
const CARD_HEIGHT = 175;
const CARD_WIDTH = 100;
const CARD_BACKGROUND = "#151515";

const styles = StyleSheet.create({
  character: {
    position: "absolute",
    width: CARD_WIDTH - 20,
    height: CARD_HEIGHT,
    color: PRIMARY_TEXT_COLOR,
    fontSize: 12,
    fontFamily: "RobotoCondensed-Bold",
    textTransform: "uppercase",
    textAlign: "left",
    marginTop: 110,
    marginLeft: 10,
  },
  completename: {
    color: SECONDARY_TEXT_COLOR,
    fontSize: 10,
    marginTop: 150,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  cardTop: {
    width: 100,
    height: 0,
    borderTopWidth: 0,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderLeftWidth: 0,
    borderRightColor: "transparent",
    borderRightWidth: 0,
    borderBottomColor: CARD_BACKGROUND,
    borderBottomWidth: CARD_HEIGHT - 10,
  },
  line: {
    position: "absolute",
    width: CARD_WIDTH,
    height: 0,
    borderBottomColor: LINE_COLOR,
    borderBottomWidth: 3,
    marginTop: 100,
  },
  cardBottom: {
    width: CARD_WIDTH,
    height: 0,
    borderTopWidth: 0,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderLeftWidth: 10,
    borderRightColor: "transparent",
    borderRightWidth: 0,
    borderBottomColor: CARD_BACKGROUND,
    borderBottomWidth: 10,
    transform: [{ rotate: "180deg" }],
  },
  image: {
    position: "absolute",
    width: CARD_WIDTH,
    height: 100,
    resizeMode: "cover",
  },
});
