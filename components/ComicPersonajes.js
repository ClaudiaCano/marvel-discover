import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import Personaje from "../components/Personaje";

export default class ComicPersonajes extends React.Component {
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
        });

        this.setState({ fontloaded: true });
    }

    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.text_1}>PERSONAJES</Text>
                <Personaje character = "Princesa Leia" completename = "Leia Organa"/>
            </View>
        );
    }
}

const COLOR = "#D01C1F";
const FONT_SIZE = 18;
const FONT = "RobotoCondensed-Bold";

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
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        textTransform: "uppercase",
        display: "flex",
        width: (Dimensions.get("screen").width - 20),
        marginBottom: 10,
    },
});