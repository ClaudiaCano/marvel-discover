import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

import Star1 from "../assets/2.3.png";
import Star2 from "../assets/comicGuardado2.png";
import Star3 from "../assets/comicGuardado3.png";
import Star4 from "../assets/comicGuardado4.png";
import Star5 from "../assets/comicGuardado5.png";

import CardGuardados from "./CardGuardados";

const Guardados = {
  comics: {
    0: {
      title: "Princess leia (2015)\n#1",
      cover: Star1,
    },
    1: {
      title: "Marvel Action\nCaptain Marvel\n(2019) #3",
      cover: Star2,
    },
    2: {
      title: "Ant-Man and the\nwasp: Lost and found",
      cover: Star3,
    },
    3: {
      title: "Avengers by jason\naaron vol.5:\nchallenge of the\nhost riders",
      cover: Star4,
    },
    4: {
      title: "Tarot (2020) #2",
      cover: Star5,
    },
  },
};

export default function CardListaGuardados() {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <CardGuardados
        Title={Guardados.comics[0].title}
        Cover={Guardados.comics[0].cover}
      />
      <CardGuardados
        Title={Guardados.comics[1].title}
        Cover={Guardados.comics[1].cover}
      />
      <CardGuardados
        Title={Guardados.comics[2].title}
        Cover={Guardados.comics[2].cover}
      />
      <CardGuardados
        Title={Guardados.comics[3].title}
        Cover={Guardados.comics[3].cover}
      />
      <CardGuardados
        Title={Guardados.comics[4].title}
        Cover={Guardados.comics[4].cover}
      />
    </View>
  );
}

const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    height: CARD_HEIGHT,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: "white",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  image: {
    marginLeft: 10,
    marginTop: 5,
    width: 80,
    height: CARD_HEIGHT - 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 17,
    fontFamily: "RobotoCondensed-Bold",
    display: "flex",
    top: "17%",
    textTransform: "uppercase",
  },
});
