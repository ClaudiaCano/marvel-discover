import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    ActivityIndicator,
    StatusBar,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";

import TitleResults from "../components/TitleResults";
import CardListaResultados from "../components/CardListaResultados";
import BackIcon from "../assets/backblack.svg";
import AppBar from "../components/AppBar";

const Results = {
    text: "Resultados para 'WAR'",
};

export default function Resultados() {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={[styles.container]}>
                <LinearGradient
                    colors={["white", "white", "#B895C8"]}
                    style={styles.gradient}
                />
                <ActivityIndicator size="large" color="#4E00B0" />
            </View>
        );
    }
    return (
        <View>
            <LinearGradient
                colors={["white", "white", "#B895C8"]}
                style={styles.gradient}
            />

            <TitleResults Title={Results.text} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <CardListaResultados />
                <View style={styles.sizedbox} />
            </ScrollView>
        </View>
    );
}

//<BackIcon style={styles.backIcon} />

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	},
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: -4,
        height: Dimensions.get("screen").height,
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
