import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Comic1 from "../assets/image1.png";
import Comic2 from "../assets/image2.png";

export default function CardComicEvent() {
  return (
    <View style={styles.card}>
      <Image source={Comic1} style={styles.image} />
      <Image source={Comic2} style={styles.imageFinal} />
    </View>
  );
}

const CARD_HEIGHT = 400;
const CARD_WIDTH = 350;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  image: {
    marginLeft: 0,
    marginTop: 5,
    width: 250,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",

    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 8,
    shadowColor: "#826A92",
    shadowOpacity: 0.3,
  },
  imageFinal: {
    marginLeft: 10,
    marginTop: 5,
    width: 103,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
    justifyContent: "center",

    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 8,
    shadowColor: "#826A92",
    shadowOpacity: 0.3,
  },
});
