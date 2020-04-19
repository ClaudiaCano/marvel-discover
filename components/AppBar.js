import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Dimensions } from "react-native";

import AppBarSvg from "../assets/appbar.svg";
import Logo from "../assets/logo.svg";
import ProfileIcon from "../assets/profileicon.svg";
import SearchIcon from "../assets/searchicon.svg";

export default class AppBar extends React.Component {
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
    const home = "Home";
    const profile = "Perfil";
    const dimensions = Dimensions.get("window");
    const imageWidth = dimensions.width;
    const ratio = imageWidth / 615.6;
    return (
      <View style={styles.appbar}>
        <View style={styles.appbarstructure}>
          <AppBarSvg
            width={imageWidth}
            height={136 * ratio}
            style={styles.appbarbackground}
          />
          <View style={styles.circle} />
          <SearchIcon width={20} height={20} style={styles.searchicon} />
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Logo width={20} height={20} />
            <Text style={styles.text}>{home}</Text>
          </View>
          <View style={styles.column}>
            <ProfileIcon width={20} height={20} />
            <Text style={styles.text}>{profile}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;
const ratio = windowwidth / 615.6;
const barheight = 136 * ratio;

const SEARCH_COLOR = "#D01C1F";

const styles = StyleSheet.create({
  appbar: {
    width: windowwidth,
    height: barheight + 30,
    position: "absolute",
    top: windowheight - barheight - 30,
  },
  /*appbarstructure: {
    position: "absolute",
    top: windowheight - barheight - 30,
  },*/
  appbarbackground: {
    position: "absolute",
    top: 30,
    shadowColor: "#826A92",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 24,
  },
  circle: {
    position: "absolute",
    left: windowwidth / 2 - 30,
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: SEARCH_COLOR,
  },
  searchicon: {
    position: "absolute",
    left: windowwidth / 2 - 10,
    top: 20,
  },
  row: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    //top: windowheight - barheight - 30 + 40,
    top: 40,
    elevation: 24,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
  },
});
