import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MarvelContext from "../model/MarvelModel";

import CarouselItem from "../components/CarouselItem";
import Titles from "../components/HomeTitles";

import CardHome from "../components/CardsHome";
import AppBarBackground from "../components/AppBarBackground";

const Home = observer(() => {
  const marvel = useContext(MarvelContext);

  useEffect(() => {
    marvel.loadEvents();
  }, []);

  if (
    marvel.secretWarsEvent == null ||
    marvel.starWarsEvent == null ||
    marvel.avengersEvent == null
  ) {
    return (
      <View>
        <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
        <CarouselItem />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselItem />

        <Titles Title={marvel.secretWarsEvent[0].title} screen={"Evento"} />
        <CardHome Data={marvel.secretWarsEvent[0].id} />

        <Titles Title={marvel.starWarsEvent[0].title} screen={"Evento"} />
        <CardHome Data={marvel.starWarsEvent[0].id} />

        <Titles Title={marvel.avengersEvent[0].title} screen={"Evento"} />
        <CardHome Data={marvel.avengersEvent[0].id} />

        <View style={styles.sizedbox}/>
      </ScrollView>
      <AppBarBackground />
    </View>
  );
});

export default Home;

/*export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    console.log("Perfil");
    this.props.navigation.navigate("Evento");
  }

  render() {
    return (
      <View>
        <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CarouselItem />

          <Titles Title={Title.title1} screen={"Evento"}/>
          <CardHome Data={data} />

          <Titles Title={Title.title2} screen={"Evento"}/>
          <CardHome Data={data2} />

          <Titles Title={Title.title3} screen={"Evento"}/>
          <CardHome Data={data3} />

          <View style={styles.sizedbox} navigation={this.props.navigation}/>
        </ScrollView>
        <AppBarBackground />
      </View>
    );
  }
}*/

const PADDING = 10;

const styles = StyleSheet.create({
  sizedbox: {
    height: 120,
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
    height: Dimensions.get("screen").height,
    zIndex: -1,
  },
});
