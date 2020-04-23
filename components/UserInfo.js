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
        <View style={styles.container}>
            <View style={styles.box}>
            <Text style={styles.text_1}>{props.Name}</Text>
            <Text style={styles.text_2}>{props.Username}</Text>
            </View>
            <Text style={styles.text_3}>{props.Bio}</Text>
        </View>
    );
}

const COLOR = "#000000";
const COLOR2 = "#757575";
const FONT_SIZE_1 = 24;
const FONT_SIZE_2 = 14;
const FONT = "RobotoCondensed-Regular";
const FONT_BOLD = "RobotoCondensed-Bold";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    
    box: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 10,
    },
    
    text_1: {
        color: COLOR,
        fontSize: FONT_SIZE_1,
        fontFamily: FONT_BOLD,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 2.5,
    },
    text_2: {
        color: COLOR,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
    },

    text_3: {
        color: COLOR2,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 1.25,
        textAlign: 'center',
    },
});