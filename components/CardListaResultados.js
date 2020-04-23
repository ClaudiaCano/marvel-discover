import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import * as Font from "expo-font";
import Star1 from "../assets/image1.png";
import Star2 from "../assets/results2.png";
import Star3 from "../assets/results3.png";
import Star4 from "../assets/results4.png";
import Star5 from "../assets/results5.png";

import Guardar from "./GuardarLists";
import CardResultados from "./CardResultados";

const Resultados = {
  comics: {
    0:{
      title: "Star Wars (2015) #1",
      cover: Star1,
    }
  }
}

export default class CardListaResultados extends React.Component {
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
        const title1 = "Star Wars (2015) #1";
        const title2 = "Infinity War (2019)";
        const title3 = "War of the Realms:\nWar Scrolls (2019)\n#2";
        const title4 = "Infinity War\nOmnibus (2019)";
        const title5 = "War of the Realms\nStrikeforce: The\nLand of Giants\n(2019) #1";
        return (
          <View>

            <CardResultados Title = {Resultados.comics[0].title} Cover = {Resultados.comics[0].cover}/>

            <View style={styles.card}>
              <Image source={Star1} style={styles.image} />
              <Text style={styles.title}>{title1}</Text>
              <Guardar />
            </View>

            <View style={styles.card}>
              <Image source={Star2} style={styles.image} />
              <Text style={styles.title}>{title2}</Text>
              <Guardar />
            </View>

            <View style={styles.card}>
              <Image source={Star3} style={styles.image} />
              <Text style={styles.title}>{title3}</Text>
              <Guardar />
            </View>

            <View style={styles.card}>
              <Image source={Star4} style={styles.image} />
              <Text style={styles.title}>{title4}</Text>
              <Guardar />
            </View>

            <View style={styles.card}>
              <Image source={Star5} style={styles.image} />
              <Text style={styles.title}>{title5}</Text>
              <Guardar />
            </View>
          </View>
        );
    }
}


const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "auto",
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
  image:{
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
  },
});