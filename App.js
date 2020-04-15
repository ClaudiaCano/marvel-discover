import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Guardar from "./components/Guardar";
import BtnVerMas from "./components/BtnVerMas";
import BtnLeido from "./components/BtnLeido";
import Personaje from "./components/Personaje";
import AppBar from "./components/AppBar";
import CarouselItem from "./components/CarouselItem";
import CardSliderHome from "./components/CardSliderHome";
import CardCommicEvent from "./components/CardComicEvent";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
			<LinearGradient
                colors={["white", "#B895C8"]}
                style={styles.gradient}
            />
			<CarouselItem />
            <AppBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B895C8",
        //alignItems: "center",
        //justifyContent: "center",

        //justifyContent: "flex-end",
    },
    gradient: {
		position: "absolute",
        left: 0,
        right: 0,
        top: 220,
        height: Dimensions.get("window").height,
    },
});
