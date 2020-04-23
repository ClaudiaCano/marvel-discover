import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from "react-native";

const BtnLeido = () => {
    const text1 = "¿LEÍDO?";
    const text2 = "LEÍDO";

    return (
        <View style={styles.btn}>
                <View style={styles.btnTop} />
                <View style={styles.btnBottom} />
                <Text style={styles.text}>{text1}</Text>
        </View>
    );
};

export default BtnLeido;

const BTN_COLOR = "#5E009C";
const BTN_HEIGHT = 56;
const BTN_WIDTH = Dimensions.get("window").width * 0.7;
const BTN_BACKGROUND = "white";

const styles = StyleSheet.create({
    btn: {
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        top: 0,
        right: 0
    },
    text: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
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
        borderLeftWidth: 0,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND,
        borderBottomWidth: BTN_HEIGHT / 2,
        transform: [{ rotate: "180deg" }],
    },
});
