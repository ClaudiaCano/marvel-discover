import React from "react";
import { StyleSheet, View, StatusBar, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBar from "../components/SearchBar";

export default function Search({ navigation }) {
    const goToPreviousScreen = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.page}>
            <StatusBar hidden />
            <LinearGradient
                colors={["#D01C1F", "#3F2021"]}
                style={styles.gradient}
            />
            <SearchBar />
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
        alignSelf: "flex-end",
        zIndex: 2,
    },

    page: {
        height: "100%",
    },

    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        zIndex: -1,
    },
});
