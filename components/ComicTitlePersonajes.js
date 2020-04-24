import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default class ComicTitlePersonajes extends React.Component {
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
            <View style={styles.container}>
                <Text style={styles.text}>Personajes</Text>
            </View>
        );
    }
}

const FONT_COLOR = "#D01C1F";
const FONT_SIZE = 18;
const FONT_TYPE = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    text: {
        color: FONT_COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT_TYPE,
        textTransform: "uppercase",
        display: "flex",
    },
});