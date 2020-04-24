import React from "react";
import { StyleSheet, ScrollView, View, Text, ActivityIndicator  } from "react-native";
import { useFonts } from "@use-expo/font";

import UserHeader from "../components/UserHeader";
import UserPfp from "../components/UserPfp";
import UserInfo from "../components/UserInfo";
import UserColecciones from "../components/UserColecciones";
import AppBar from "../components/AppBar";
import HomeTitles from "../components/HomeTitles";
import CardHome from "../components/CardsHome";

import BackSvg from "../assets/back.svg";
import GearSvg from "../assets/settingsicon.svg";
import AppBarBackground from "../components/AppBarBackground";


const user = {
  pfp: "https://amayei.nyc3.digitaloceanspaces.com/2019/04/Screen-Shot-2019-04-26-at-11.50.46-PM.png",
  name: "User",
  username: "@User",
  about:
    "Egestas  Ornare Dius Consequat, Tristique Praesent A. Sagittis Suspendiese Scelerique Arcu Auctor Tellus Enim."
};

const data = [
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/1/20/567083a7957b5/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/50/5e5d47224c740/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/1/60/5e149e4447993/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/b/70/5db1d1b12a7c5/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/4/e0/5d49e69964c58/clean.jpg",
  },
];

const data2 = [
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/50/567084ad58a03/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/30/5dee805c28500/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/b/d0/5bdb7fc34300e/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/10/5e28b321b427e/clean.jpg",
  },
  {
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/5e28908b095b2/clean.jpg",
  },
];



export default function Perfil() {

  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!fontsLoaded) {
      return (
          <View style={styles.container}>
              <ActivityIndicator />
          </View>
      );
  }
  return (
    <View>
      <BackSvg style={styles.backIcon}/>
      <GearSvg style={styles.gearIcon}/>
        <ScrollView>
            <UserHeader/>
            <UserPfp ProfilePic = {user.pfp} />
            <UserInfo Name = {user.name} Username = {user.username} Bio = {user.about} />
            <Text style={styles.text_1}>MIS COLECCIONES</Text>
            <HomeTitles Title="LEÍDOS" screen="Leidos"/>
            <CardHome Data={data} />
            <HomeTitles Title="GUARDADOS" screen="Guardados" />
            <CardHome Data={data2} />
        </ScrollView>
      <AppBarBackground />
    </View>
  );
}


const styles = StyleSheet.create({

  //Back "ARROW" Icon
  backIcon: {
    position: "absolute",
    width: 20, 
    height: 20,
    alignSelf: 'flex-start', //moves the item to the left or horizontal start of the page
    top: 30,
    left: 30,
    zIndex: 2
  },

  //Settings "GEAR" Icon
  gearIcon: {
    position: "absolute",
    width: 20, 
    height: 20,
    alignSelf: 'flex-end', //moves the item to the right or horizontal end of the page
    top: 30, // "10 + heightofbackIcon(20) = 30" | since it's written after - it's placed below instead of on the same level.
    right: 30,
    zIndex: 2
  },

  //MIS COLECCIONES 
  text_1: {
    paddingLeft: 10, //tiene que coincidir con el padding del slider y homeTitles
    color: '#D01C1F',
    fontSize: 18,
    fontFamily: "RobotoCondensed-Bold",
    textTransform: "uppercase",
    display: "flex",
    marginTop: 20,
},
  
});
