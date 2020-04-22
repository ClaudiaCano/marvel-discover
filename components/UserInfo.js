import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";

export default class ComicDetails extends React.Component {
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
            <View style={styles.container}>
                <View style={styles.box}>
                <Text style={styles.text_1}>{this.props.Name}</Text>
                <Text style={styles.text_2}>{this.props.Username}</Text>
                </View>
                <Text style={styles.text_3}>{this.props.Bio}</Text>
            </View>
        );
    }
}

const COLOR = "#000000";
const COLOR2 = "#757575";
const FONT_SIZE_1 = 24;
const FONT_SIZE_2 = 14;
const FONT = "RobotoCondensed-Regular";
const FONT_BOLD = "RobotoCondensed-Bold";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    
    box: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 10,
    },
    
    text_1: {
        color: COLOR,
        fontSize: FONT_SIZE_1,
        fontFamily: FONT_BOLD,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 2.5,
    },
    text_2: {
        color: COLOR,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
    },

    text_3: {
        color: COLOR2,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 1.25,
        textAlign: 'center',
    },
});