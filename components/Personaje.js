import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

export default function Personaje(props) {
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
        <View style={styles.card}>
            <View style={styles.cardTop} />
            <View style={styles.line} />
            <View style={styles.cardBottom} />
            <Text style={styles.character}>{props.character}</Text>
            <Text style={[styles.character, styles.completename]}>
                {props.completename}
            </Text>
            <Image source={props.photo} style={styles.image} />
        </View>
    );
}

const PRIMARY_TEXT_COLOR = "white";
const SECONDARY_TEXT_COLOR = "#757575";
const LINE_COLOR = "#5E009C";
const CARD_HEIGHT = 175;
const CARD_WIDTH = 100;
const CARD_BACKGROUND = "#151515";

const styles = StyleSheet.create({
    character: {
        position: "absolute",
        width: CARD_WIDTH - 20,
        height: CARD_HEIGHT,
        color: PRIMARY_TEXT_COLOR,
        fontSize: 12,
        fontFamily: "RobotoCondensed-Bold",
        textTransform: "uppercase",
        textAlign: "left",
        marginTop: 110,
        marginLeft: 10,
    },
    completename: {
        color: SECONDARY_TEXT_COLOR,
        fontSize: 10,
        marginTop: 150,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: 10,
    },
    cardTop: {
        width: 100,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: 0,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: CARD_BACKGROUND,
        borderBottomWidth: CARD_HEIGHT - 10,
    },
    line: {
        position: "absolute",
        width: CARD_WIDTH,
        height: 0,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 3,
        marginTop: 100,
    },
    cardBottom: {
        width: CARD_WIDTH,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: 10,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: CARD_BACKGROUND,
        borderBottomWidth: 10,
        transform: [{ rotate: "180deg" }],
    },
    image: {
        position: "absolute",
        top: 0,
        width: CARD_WIDTH,
        height: 100,
    },
});
