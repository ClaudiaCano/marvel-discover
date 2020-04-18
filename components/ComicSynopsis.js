import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";

export default class ComicSynopsis extends React.Component {
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
            "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        });

        this.setState({ fontloaded: true });
    }

    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.text_1}>Sinopsis</Text>
                <Text style={styles.text_2}>{this.props.Synopsis}</Text>
            </View>
        );
    }
}

const COLOR = "black";
const COLOR_TEXT = "#757575";
const FONT_SIZE_1 = 18;
const FONT_SIZE_2 = 14;
const FONT = "RobotoCondensed-Regular";
const FONT_BOLD = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: 80,
    },
    text_1: {
        color: COLOR,
        fontSize: FONT_SIZE_1,
        fontFamily: FONT_BOLD,
        textTransform: "uppercase",
        display: "flex",
        width: (Dimensions.get("screen").width - 20),
        marginBottom: 10,
    },
    text_2: {
        color: COLOR_TEXT,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
        width: (Dimensions.get("screen").width - 20),
    },
});
