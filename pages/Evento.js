import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MarvelContext } from "../model/MarvelModel";
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";

/*------------------------ COMPONENTS ------------------------ */
import EventTitle from "../components/EventTitle";
import CardComic from "../components/CardComicEvent";
import Details from "../components/Details";
import BackIcon from "../assets/backblack.svg";
import AppBarBackground from "../components/AppBarBackground";

/*------------------------ OBJECTS ------------------------ */
const data = [
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
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/90/5536b03673fdf/clean.jpg",
  },
];
const StarWars = {
  title: "Star Wars (2015)",
  description:
    "A long time ago in a galaxy far, far away, the adventures of Luke Skywalker, Han Solo, Princess, Leia, Darth Vader and more continue! Set following the events of Episode IV: A New Hope, Marvel's ongoing Star Wars comics reveal new stories featuring these classic characters!",
  creators:
    "Jason Aaron, John Cassaday, Kieron Gillen, Salvador Larroca, Adi Granov Mark Waid, Terry Dodson, Greg Weisman, Mark Brooks, Pepe Larraz, Stuart Immonen.",
};

/*------------------------ PAGE ------------------------ */

const marvel = useContext(MarvelContext);

@observer
export default class Evento extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
    this.buttonBack = this.buttonBack.bind(this);
  }

  buttonPress() {
    console.log("comic");
    this.props.navigation.navigate("comic");
  }

  buttonBack() {
    console.log("back");
    this.props.navigation.goBack();
  }

 /* componentDidMount() {
    marvel.loadEvents();
  }*/

  render() {
    if (marvelc.events == null) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View>
        <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
        <LinearGradient
          colors={["#FAF2FF", "#fff0"]}
          style={styles.gradientsup}
        />
        <BackIcon style={styles.backIcon} />
        <TouchableHighlight onPress={this.buttonBack}>
          <EventTitle Title={StarWars.title} />
        </TouchableHighlight>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardComic Data={data} />
          <Details Title="Descripción" Description={StarWars.description} />
          <Details Title="Creadores" Description={StarWars.creators} />
          <View style={styles.sizedbox} />
        </ScrollView>
        <AppBarBackground />
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
  gradientsup: {
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
