import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight,
} from "react-native";
import { useFonts } from "@use-expo/font";

const text = "VER MÁS";

const BtnVermas = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    });

    const goToEvento = () => {
        navigation.navigate("evento");
    };

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <TouchableHighlight onPress={goToEvento}>
            <View style={styles.btn}>
                <View style={styles.btnTop} />
                <View style={styles.btnBottom} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default BtnVermas;

const BTN_COLOR = "white";
const BTN_HEIGHT = 20;
const BTN_WIDTH = 65;
const BTN_BACKGROUND = "#4E00B0";
const FONT_TYPE = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR,
        fontSize: 11,
        fontFamily: FONT_TYPE,
        textAlign: "center",
        textAlignVertical: "center",
    },
    btn: {
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
    },
    btnTop: {
        width: BTN_WIDTH,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: BTN_HEIGHT / 2,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND,
        borderBottomWidth: BTN_HEIGHT / 2,
    },
    btnBottom: {
        width: BTN_WIDTH,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: BTN_HEIGHT / 2,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND,
        borderBottomWidth: BTN_HEIGHT / 2,
        transform: [{ rotate: "180deg" }],
    },
});
