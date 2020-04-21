import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default class EventTitle extends React.Component {
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
        var string = this.props.Title;
        var number = string.indexOf("'");
        var text1 = string.slice(0, number);
        var text2 = string.slice(number);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text1}</Text>
                <Text style={[styles.text, styles.textcolor]}>{text2}</Text>
            </View>
        );
    }
}

const FONT_COLOR = "black";
const SECONDARY_FONT_COLOR = "#5E009C";
const FONT_SIZE = 24;
const FONT_TYPE = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 80,
        paddingRight: 20,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginTop: 30,
        marginBottom: 20,
    },
    text: {
        color: FONT_COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT_TYPE,
        textTransform: "uppercase",
        display: "flex",
    },
    textcolor: {
        color: SECONDARY_FONT_COLOR,
    },
});