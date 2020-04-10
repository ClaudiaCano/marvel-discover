import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const BtnVerMas = () => {
    const text = "VER MÁS";

    return (
        <View style={styles.btn}>
            <View style={styles.btnTop} />
            <View style={styles.btnBottom} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default BtnVerMas;

const BTN_COLOR = "white";
const BTN_HEIGHT = 20;
const BTN_WIDTH = 65;
const BTN_BACKGROUND = "#4E00B0";

const styles = StyleSheet.create({
    text: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR,
        fontSize: 11,
        fontFamily: "Roboto",
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
