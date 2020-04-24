import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Button, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CarouselItem from "../components/CarouselItem";
import AppBar from "../components/AppBar";
import BtnVerMas from "../components/BtnVerMas";
import Titles from "../components/HomeTitles";

import CardHome from "../components/CardsHome";

const Title = {
  title1: "Secret Wars",
}

const data = [
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/c/70/5cb736a3cdd49/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/c/70/5cb736a3cdd49/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/f/03/5cb7377845092/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/5cb73456184e4/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/5cb736208d76d/clean.jpg",
  },
];



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    console.log('Perfil');
    this.props.navigation.navigate('evento');
  }

  render() {
    return (
      <View>
         <LinearGradient
        colors={["white", "white", "#B895C8"]}
        style={styles.gradient}
      />
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{color: 'blue'}} onPress={this.buttonPress}>Evento</Text>
        <CarouselItem />

          <Titles Title={Title.title1} />
          <CardHome Data={data}/>


          <View style={styles.sizedbox} />
        </ScrollView>
      </View>
    );
  }
}

const PADDING = 10;

const styles = StyleSheet.create({
  sizedbox: {
    height: 70,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
    marginLeft: PADDING,
    textTransform: "uppercase",
  },
  box: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: PADDING,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
});
