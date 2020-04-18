import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default class ComicTitle extends React.Component {
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
                <Text style={styles.text}>{this.props.Title}</Text>
            </View>
        );
    }
}

const COLOR = "black";
const FONT_SIZE = 24;
const FONT = "RobotoCondensed-Bold";
const MARGIN_BOTTOM = 20;

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: MARGIN_BOTTOM,
    },
    text: {
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        textTransform: "uppercase",
        display: "flex",
    },
});
