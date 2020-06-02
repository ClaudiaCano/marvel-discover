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

/*------------------------ PAGE ------------------------ */

const Evento = observer(({ route, navigation }) => {
  const marvel = useContext(MarvelContext);
  const { event } = route.params;

  useEffect(() => {
    marvel.loadEventById(event);
  }, []);

  if (marvel.event == null) {
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
      <TouchableHighlight
        style={styles.backIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <BackIcon />
      </TouchableHighlight>
      <EventTitle Title={marvel.event[0].title} />
      <View style={styles.appbarrr}>
        <AppBarBackground />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollevent}>
        <CardComic Data={marvel.event[0].id} />
        <Details
          Title="Descripción"
          Description={marvel.event[0].description}
        />
        <Details Title="Creadores" Creators={marvel.event[0].creators.items} />
        <View style={styles.sizedbox} />
      </ScrollView>
    </View>
  );
});

/*
            <ScrollView showsVerticalScrollIndicator={false}>
                <CardComic Data={marvel.event[0].id} />
                <Details
                    Title="Descripción"
                    Description={marvel.event[0].description}
                />
                <Details
                    Title="Creadores"
                    Creators={marvel.event[0].creators.items}
                    
                />
				<View style={styles.sizedbox} />
            </ScrollView>*/

export default Evento;

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const ratio = windowwidth / 615.6;
const barheight = 136 * ratio;

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
    //borderWidth: 2,
    position: "absolute",
    top: 26,
    left: 10,
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  sizedbox: {
    height: 200,
  },

  appbarrr: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  scrollevent: {
    height: Dimensions.get("window").height - barheight + 20,
  }
});
