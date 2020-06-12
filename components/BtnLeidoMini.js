import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableHighlight,
} from "react-native";
import MarvelContext from "../model/MarvelModel";
import { useFonts } from "@use-expo/font";


export default function BtnLeidoMini(props) {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    const marvel = useContext(MarvelContext);

    const [selected, setSelected] = useState(false);

    function setLeidos(data) {
        marvel.saveLeido(data);
        setSelected(!selected);
    }

    function removeLeidos(currentId) {
        var newsaveLeido = marvel.leidos.filter(ldo => ldo.id !== currentId);
        marvel.leidos = newsaveLeido;
        //marvel.leidos.splice(newsaveLeido,1);
        setSelected(!selected);
    }

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    if (!selected && !marvel.leidos.some(ldo => ldo.id == props.comic.id)) {
        return (
            <View style={styles.btn}>
                <View style={styles.btnTop} />
                <View style={styles.btnBottom} />
                <TouchableHighlight
                    style={styles.touch}
                    underlayColor={"#f0f0"}
                    onPress={() => {
                        setLeidos(props.comic);
                    }}
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
                onPress={() => {
                    removeLeidos(props.comic.id);
                }}
            >
                <Text style={styles.text2}>Leído</Text>
            </TouchableHighlight>
        </View>
    );
}

const BTN_COLOR = "white";
const BTN_COLOR_2 = "white";
const BTN_HEIGHT = 20;
const BTN_WIDTH = 65;
const BTN_BACKGROUND = "#4E00B0";
const BTN_BACKGROUND_2 = "#D01C1F";
const FONT_TYPE = "RobotoCondensed-Regular";

const styles = StyleSheet.create({
    touch: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
    },
    btn: {
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        marginTop: 115,
        marginRight: 20,
    },
    text: {
        position: "absolute",
        width: BTN_WIDTH,
        height: BTN_HEIGHT,
        color: BTN_COLOR,
        fontSize: 11,
        fontFamily: FONT_TYPE,
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
        borderLeftWidth: BTN_HEIGHT / 2,
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
        fontSize: 11,
        fontFamily: FONT_TYPE,
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
        borderLeftWidth: BTN_HEIGHT / 2,
        borderRightColor: "transparent",
        borderRightWidth: 0,
        borderBottomColor: BTN_BACKGROUND_2,
        borderBottomWidth: BTN_HEIGHT / 2,
        transform: [{ rotate: "180deg" }],
    },
});
