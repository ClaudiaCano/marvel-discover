import React from "react";
import { StyleSheet, ScrollView, View, Dimensions, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/*------------------------ COMPONENTS ------------------------ */
import EventTitle from "../components/EventTitle";
import CardComic from "../components/CardComicEvent";
import Details from "../components/Details";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";

/*------------------------ OBJECTS ------------------------ */
const StarWars = {
  title: "Star Wars (2015)",
  description:
    "A long time ago in a galaxy far, far away, the adventures of Luke Skywalker, Han Solo, Princess, Leia, Darth Vader and more continue! Set following the events of Episode IV: A New Hope, Marvel's ongoing Star Wars comics reveal new stories featuring these classic characters!",
  creators:
    "Jason Aaron, John Cassaday, Kieron Gillen, Salvador Larroca, Adi Granov Mark Waid, Terry Dodson, Greg Weisman, Mark Brooks, Pepe Larraz, Stuart Immonen.",
};

/*------------------------ PAGE ------------------------ */
export default class Evento extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient colors={["#FAF2FF", "#fff0"]} style={styles.gradient} />
        <BackIcon style={styles.backIcon} />
        <ScrollView>
          <EventTitle Title={StarWars.title} />
          <CardComic />
          <Details
            Title="Descripción"
            Description={StarWars.description}
          />
          <Details Title="Creadores" Description={StarWars.creators} />
          <View style={styles.sizedbox}/>
        </ScrollView>
        <AppBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  backIcon: {
    position: "absolute",
    top: 38,
    left: 30,
    zIndex: 2,
  },
  sizedbox: {
    height: 150,
  },
});
