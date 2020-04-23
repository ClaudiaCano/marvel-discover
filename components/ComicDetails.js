import React from "react";
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
import { useFonts } from "@use-expo/font";

export default function ComicDetails(props) {
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
            <Text style={styles.text_1}>{props.Name}</Text>
            <Text style={styles.text_1}>{props.Date}</Text>
            <Text style={styles.text_2}>Escritor</Text>
            <Text style={styles.text_2}>Publicación</Text>
        </View>
    );
}

const COLOR = "#757575";
const FONT_SIZE_1 = 18;
const FONT_SIZE_2 = 14;
const FONT = "RobotoCondensed-Regular";
const FONT_BOLD = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: 30,
    },
    text_1: {
        color: COLOR,
        fontSize: FONT_SIZE_1,
        fontFamily: FONT_BOLD,
        textTransform: "uppercase",
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 2,
    },
    text_2: {
        color: COLOR,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 2,
    },
});
