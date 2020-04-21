import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Star1 from "../assets/image1.png";
import Star2 from "../assets/comicLeido2.png";
import Star3 from "../assets/comicLeido3.png";
import Star4 from "../assets/comicLeido4.png";
import Star5 from "../assets/comicLeido5.png";
import Guardar from "../components/Guardar";

export default class CardListaLeidos extends React.Component {
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
        const title2 = "The Amazing\nSpider-Man #4";
        const title3 = "Jessica Jones:\nBlind Spot (2020) #1";
        const title4 = "Marvel-Verse:\nIron Man (2019)";
        const title5 = "Amazing Spider-Man:\nThe daily bugle #2";
        return (
          <View>
            <View style={styles.card}>
              <Image source={Star1} style={styles.image} />
              <Text style={styles.title}>{title1}</Text>
              <Guardar style={styles.vector} />
            </View>

            <View style={styles.card}>
              <Image source={Star2} style={styles.image} />
              <Text style={styles.title}>{title2}</Text>
              <Guardar style={styles.vector} />
            </View>

            <View style={styles.card}>
              <Image source={Star3} style={styles.image} />
              <Text style={styles.title}>{title3}</Text>
              <Guardar style={styles.vector} />
            </View>

            <View style={styles.card}>
              <Image source={Star4} style={styles.image} />
              <Text style={styles.title}>{title4}</Text>
              <Guardar style={styles.vector} />
            </View>

            <View style={styles.card}>
              <Image source={Star5} style={styles.image} />
              <Text style={styles.title}>{title5}</Text>
              <Guardar style={styles.vector} />
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
    marginLeft: 10,
    display: "flex",
    top: "15%",
    textTransform: "uppercase",
  },
  vector:{
    top: "15%",
  },
});