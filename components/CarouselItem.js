import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CarouselItemImage from "../assets/CarouselItem1.jpg";

const CarouselItem = () => {
    const Title = "avenging women";
    return (
        <View style={styles.item}>
            <Image source={CarouselItemImage} style={styles.image} />
            <View style={styles.tint} />
            <LinearGradient
                colors={["transparent", "transparent", "rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: HEIGHT,
                }}
            />
            <Text style={styles.title}>{Title}</Text>
        </View>
    );
};

export default CarouselItem;

const MAX_WIDTH = Dimensions.width;
const HEIGHT = 220;
const TINT = "#5E009C";
const COLOR_TEXT = "white";

const styles = StyleSheet.create({
    item: {
        position: window.top,
        backgroundColor: "white",
        width: MAX_WIDTH,
        height: HEIGHT,
    },
    image: {
        resizeMode: "cover",
        width: MAX_WIDTH,
        height: HEIGHT,
    },
    tint: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: TINT,
        opacity: 0.6,
    },
    title: {
        position: "absolute",
        color: COLOR_TEXT,
        textTransform: "uppercase",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: HEIGHT / 2,
    },
});
