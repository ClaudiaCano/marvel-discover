import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBar from "../components/SearchBar";

import SearchSvg from "../assets/searchicon.svg";
import CloseSvg from "../assets/close.svg";

export default function Search() {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.page}>
            <CloseSvg style={styles.closeIcon} />
            <StatusBar hidden />
            <LinearGradient
                colors={["#D01C1F", "#3F2021"]}
                style={styles.gradient}
            />
            <SearchBar/>
        </View>
    );
}


const styles = StyleSheet.create({

    closeIcon: {
        position: "absolute",
        top: 30,
        right: 30,
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        zIndex: 2,
    },

    page: {
      height: Dimensions.get("window").height,
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
