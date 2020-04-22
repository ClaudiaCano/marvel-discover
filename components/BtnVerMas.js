import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

const text = "VER MÁS";

export default class BtnVermas extends React.Component {
    constructor() {
        super();
        this.state = {
            fontloaded: false,
            selected: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
            "RobotoCondensed-BoldItalic": require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
            "RobotoCondensed-Italic": require("../assets/fonts/RobotoCondensed-Italic.ttf"),
            "RobotoCondensed-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
            "RobotoCondensed-LightItalic": require("../assets/fonts/RobotoCondensed-LightItalic.ttf"),
            "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        });

        this.setState({ fontloaded: true });
    }

    render() {
        return (
            <View style={styles.btn}>
                <View style={styles.btnTop} />
                <View style={styles.btnBottom} />
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    }
}

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