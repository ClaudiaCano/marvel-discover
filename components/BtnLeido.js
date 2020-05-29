import React, { useState } from "react";
import { observer } from "mobx-react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableHighlight,
} from "react-native";
import { useFonts } from "@use-expo/font";

const BtnLeido = observer(({ comic }) => {
    
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
    
    if (!comic.leido) {
        return (
            <View style={styles.btn}>
                <View style={styles.btnTop} />
                <View style={styles.btnBottom} />
                <TouchableHighlight
                    style={styles.touch}
                    underlayColor={"#f0f0"}
                    onPress={() => comic.leido = !comic.leido}
                >
                    <Text style={styles.text}>¿Leído?</Text>
                </TouchableHighlight>
            </View>
        );
    }
    return (
        <View style={styles.btn}>
            <View style={styles.btnTop2} />
            <View style={styles.btnBottom2} />
            <TouchableHighlight
                style={styles.touch}
                underlayColor={"#f0f0"}
                onPress={() => comic.leido = !comic.leido}
            >
                <Text style={styles.text2}>Leído</Text>
            </TouchableHighlight>
        </View>
    );
    
});

export default BtnLeido;


const BTN_COLOR = "#5E009C";
const BTN_COLOR_2 = "white";
const BTN_HEIGHT = 56;
const BTN_WIDTH = Dimensions.get("window").width * 0.7;
const BTN_BACKGROUND = "white";
const BTN_BACKGROUND_2 = "#D01C1F";

const styles = StyleSheet.create({
    btn: {
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        top: 0,
        right: 0,
    },
    touch: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,        
    },
    text: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR,
        fontFamily: "RobotoCondensed-Bold",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "uppercase",
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
    text2: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR_2,
        fontFamily: "RobotoCondensed-Bold",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "uppercase",
    },
    btnTop2: {
        width: BTN_WIDTH,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: BTN_HEIGHT / 2,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND_2,
        borderBottomWidth: BTN_HEIGHT / 2,
    },
    btnBottom2: {
        width: BTN_WIDTH,
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: 0,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND_2,
        borderBottomWidth: BTN_HEIGHT / 2,
        transform: [{ rotate: "180deg" }],
    },
});
