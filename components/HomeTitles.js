import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import BtnVerMas from "../components/BtnVerMas1";

export default class HomeTitles extends React.Component {
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
            "RobotoCondensed-BoldItalic": require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
            "RobotoCondensed-Italic": require("../assets/fonts/RobotoCondensed-Italic.ttf"),
            "RobotoCondensed-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
            "RobotoCondensed-LightItalic": require("../assets/fonts/RobotoCondensed-LightItalic.ttf"),
            "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        });

        this.setState({ fontloaded: true });
    }

    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.text}>{this.props.Title}</Text>
                <BtnVerMas style={styles.btn}/>
            </View>
        );
    }
}

const COLOR = "black";
const FONT_SIZE = 20;
const FONT = "RobotoCondensed-Bold";
const MARGIN_BOTTOM = 10;
const MARGIN_TOP = 20;

const styles = StyleSheet.create({
    box: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: MARGIN_BOTTOM,
        marginTop: MARGIN_TOP,
    },
    text: {
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        textTransform: "uppercase",
        display: "flex",
    },
    btn: {
        alignItems: "flex-start",
    },
});