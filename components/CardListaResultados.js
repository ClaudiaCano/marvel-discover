import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

import Star1 from "../assets/image1.png";
import Star2 from "../assets/results2.png";
import Star3 from "../assets/results3.png";
import Star4 from "../assets/results4.png";
import Star5 from "../assets/results5.png";

import CardResultados from "./CardResultados";

const Resultados = {
  comics: {
    0: {
      title: "Star Wars (2015) #1",
      cover: Star1,
    },
    1: {
      title: "Infinity War (2019)",
      cover: Star2,
    },
    2: {
      title: "War of the Realms:\nWar Scrolls (2019)\n#2",
      cover: Star3,
    },
    3: {
      title: "Infinity War\nOmnibus (2019)",
      cover: Star4,
    },
    4: {
      title: "War of the Realms\nStrikeforce: The\nLand of Giants\n(2019) #1",
      cover: Star5,
    },
  },
};

export default function CardListaResultados(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  const results = props.Results;

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <CardResultados
        Title={Resultados.comics[0].title}
        Cover={Resultados.comics[0].cover}
      />
      <CardResultados
        Title={Resultados.comics[1].title}
        Cover={Resultados.comics[1].cover}
      />
      <CardResultados
        Title={Resultados.comics[2].title}
        Cover={Resultados.comics[2].cover}
      />
      <CardResultados
        Title={Resultados.comics[3].title}
        Cover={Resultados.comics[3].cover}
      />
      <CardResultados
        Title={Resultados.comics[4].title}
        Cover={Resultados.comics[4].cover}
      />
    </View>
  );
}


