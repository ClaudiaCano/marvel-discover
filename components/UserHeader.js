import * as React from "react"
import { StyleSheet, Image, ImageBackground, Dimensions, Text, View } from "react-native";
import Svg, { Defs, Path, ClipPath, Use, G } from "react-native-svg"

import UserPfp from "../components/UserPfp";
import imgHeader from "../assets/HeaderBackground.jpg";


export default function UserHeader() {
  return (
    <View style={styles.fullheader}>
      <ImageBackground
      style={styles.headerBackground}
      source={imgHeader}
      >
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({

  fullheader:{
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    marginBottom: -140, //Push the profile pic and all the other elements of the page up
  },

  headerBackground: {
    width: Dimensions.get("window").width,
    height: 250,
    overflow: 'hidden',
  },
});
