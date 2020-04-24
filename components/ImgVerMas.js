import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import VerMasBackground from "../assets/VerMasBackground.jpg";

const ImgVerMas = () => {
    const text = "ver\nmás";
    return (
        <View style={styles.item}>
            <Image source={VerMasBackground} style={styles.image} />
            <View style={styles.tint} />
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

export default ImgVerMas;

const WIDTH = 95;
const HEIGHT = 140;
const TINT = "#5E009C";
const COLOR_TEXT = "white";

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        width: WIDTH,
        height: HEIGHT,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    image: {
        resizeMode: "cover",
        width: WIDTH,
        height: HEIGHT,
    },
    tint: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: TINT,
        opacity: 0.7,
    },
    title: {
        position: "absolute",
        color: COLOR_TEXT,
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "normal",
        textAlign: "center",
        alignSelf: "center",
        marginTop: 55,
    },
});
