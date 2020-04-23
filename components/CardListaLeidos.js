import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

import Star1 from "../assets/image1.png";
import Star2 from "../assets/comicLeido2.png";
import Star3 from "../assets/comicLeido3.png";
import Star4 from "../assets/comicLeido4.png";
import Star5 from "../assets/comicLeido5.png";

import CardLeidos from "./CardLeidos";

const Leidos = {
  comics: {
    0: {
      title: "Star Wars (2015) #1",
      cover: Star1,
    },
    1: {
      title: "The Amazing\nSpider-Man #4",
      cover: Star2,
    },
    2: {
      title: "Jessica Jones:\nBlind Spot (2020) #1",
      cover: Star3,
    },
    3: {
      title: "Marvel-Verse:\nIron Man (2019)",
      cover: Star4,
    },
    4: {
      title: "Amazing Spider-Man:\nThe daily bugle #2",
      cover: Star5,
    },
  },
};

export default function CardListaLeidos() {
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
      <CardLeidos
        Title={Leidos.comics[0].title}
        Cover={Leidos.comics[0].cover}
      />
      <CardLeidos
        Title={Leidos.comics[1].title}
        Cover={Leidos.comics[1].cover}
      />
      <CardLeidos
        Title={Leidos.comics[2].title}
        Cover={Leidos.comics[2].cover}
      />
      <CardLeidos
        Title={Leidos.comics[3].title}
        Cover={Leidos.comics[3].cover}
      />
      <CardLeidos
        Title={Leidos.comics[4].title}
        Cover={Leidos.comics[4].cover}
      />
    </View>
  );
}