import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import * as Font from "expo-font";
import UserHeader from "../components/UserHeader";
import UserInfo from "../components/UserInfo";
import UserColecciones from "../components/UserColecciones";
import AppBar from "../components/AppBar";

import BackSvg from "../assets/back.svg";
import GearSvg from "../assets/settingsicon.svg";

const user = {
  name: "User",
  username: "@User",
  about:
    "Egestas  Ornare Dius Consequat, Tristique Praesent A. Sagittis Suspendiese Scelerique Arcu Auctor Tellus Enim."
};

export default class Perfil extends React.Component {
  render() {
      return (
          <View>
            <BackSvg style={styles.backIcon}/>
            <GearSvg style={styles.gearIcon}/>
              <ScrollView>
                  <UserHeader/>
                  <UserInfo Name = {user.name} Username = {user.username} Bio = {user.about} />
                  <UserColecciones/>
              </ScrollView>
            <AppBar/>
          </View>
      );
  };
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
  
});
