import React from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import * as Font from "expo-font";

import CardSliderHome1 from "../components/CardSliderHome1";
import CardSliderHome2 from "../components/CardSliderHome2";
import CardSliderHome3 from "../components/CardSliderHome3";
import AppBar from "../components/AppBar";
import CarouselItem from "../components/CarouselItem";

import HomeTitles from "../components/HomeTitles";

const StarWars = {
  title: "Secret Wars",
  title2: "Star Wars",
  title3: "Avengers VS X-Men",
};

export default class Home extends React.Component {
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
      <View>
        <CarouselItem />
        <ScrollView>
          <HomeTitles Title={StarWars.title} />
          <CardSliderHome1 />
          
          <HomeTitles Title={StarWars.title2} />
          <CardSliderHome2 />
          
          <HomeTitles Title={StarWars.title3} />
          <CardSliderHome3 />
          
          <View style={styles.sizedbox}/>
        </ScrollView>
        
        <AppBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sizedbox: {
    height: 350,
  },
});
