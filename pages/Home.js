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
  title2: "Star Wars",
  title3: "Avengers vs X-men",
}

const data = [
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/c/70/5cb736a3cdd49/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/9/40/5cb737237a2de/clean.jpg",
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

const data2 = [
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/1/20/567083a7957b5/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/5670864d95ab0/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/3/50/567084ad58a03/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5519439c0b32c/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/e/d0/54a2fda8ace40/clean.jpg",
  },
];

const data3 = [
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/d/90/4f7dc878b57fe/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/9/10/515f1a2cbc874/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/f/c0/4fa4390203731/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/80/515f1a31c0d36/clean.jpg",
  },
  {
      imageUrl:
          "https://i.annihil.us/u/prod/marvel/i/mg/e/90/515f1a1dcd1ce/clean.jpg",
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

          <Titles Title={Title.title2} />
          <CardHome Data={data2}/>

          <Titles Title={Title.title3} />
          <CardHome Data={data3}/>

          <View style={styles.sizedbox} />
        </ScrollView>
      </View>
    );
  }
}

const PADDING = 10;

const styles = StyleSheet.create({
  sizedbox: {
    height: 100,
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
