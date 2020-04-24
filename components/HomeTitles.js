import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

import BtnVerMas from "./BtnVerMas";

export default function HomeTitles(props) {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        );
      }
        return (
            <View style={styles.box}>
                <Text style={styles.text}>{props.Title}</Text>
                <BtnVerMas style={styles.btn} screen={props.screen}/>
            </View>
        );
    }

const COLOR = "black";
const FONT_SIZE = 20;
const FONT = "RobotoCondensed-Bold";
const MARGIN_BOTTOM = 10;
const MARGIN_TOP = 20;

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: MARGIN_BOTTOM,
        marginTop: MARGIN_TOP,
        alignItems: "center",
    },
    text: {
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        textTransform: "uppercase",
        display: "flex",
        
    },
    btn: {
        alignItems: "flex-start",
    },
});