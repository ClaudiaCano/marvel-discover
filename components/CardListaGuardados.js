import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import Star1 from "../assets/2.3.png";
import Star2 from "../assets/comicGuardado2.png";
import Star3 from "../assets/comicGuardado3.png";
import Star4 from "../assets/comicGuardado4.png";
import Star5 from "../assets/comicGuardado5.png";


export default class CardListaGuardados extends React.Component {
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
        const title1 = "Princess leia (2015)\n#1";
        const title2 = "Marvel Action\nCaptain Marvel\n(2019) #3";
        const title3 = "Ant-Man and the\nwasp: Lost and found";
        const title4 = "Avengers by jason\naaron vol.5:\nchallenge of the\nhost riders";
        const title5 = "Tarot (2020) #2";
        return (
          <View>
            <View style={styles.card}>
              <Image source={Star1} style={styles.image} />
              <Text style={styles.title}>{title1}</Text>
              <Leido />
            </View>

            <View style={styles.card}>
              <Image source={Star2} style={styles.image} />
              <Text style={styles.title}>{title2}</Text>
            </View>

            <View style={styles.card}>
              <Image source={Star3} style={styles.image} />
              <Text style={styles.title}>{title3}</Text>
            </View>

            <View style={styles.card}>
              <Image source={Star4} style={styles.image} />
              <Text style={styles.title}>{title4}</Text>
            </View>

            <View style={styles.card}>
              <Image source={Star5} style={styles.image} />
              <Text style={styles.title}>{title5}</Text>
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
    textTransform: "uppercase",
  },
});