import React, { createContext, useContext } from "react";
import {
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    View,
    ShadowPropTypesIOS,
} from "react-native";

import BackSvg from "../assets/back.svg";
import CurveSvg from "../assets/curve.svg";
import BackgroundImg from "../assets/HeaderBackground.jpg";

export default class ComicHeader extends React.Component {
    render() {
        const Url = this.props.Cover;

        return (
            <View>
                <ImageBackground
                    style={styles.headerBackground}
                    source={BackgroundImg}
                >
                    <BackSvg style={styles.backIcon} />

                    <Image style={styles.poster} source={{ uri: Url }}></Image>
                    <CurveSvg style={styles.Curve} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        paddingTop: 20,
        width: "100%",
        height: 347, //height of the header, also relative to the poster height
        backgroundColor: "red",
        overflow: "hidden",
        alignItems: "stretch",
    },

    //Back "ARROW" Icon
    backIcon: {
        width: 20,
        height: 20,
        alignSelf: "flex-start", //moves the item to the left or start of the page
        top: 10,
        left: 20,
    },

    //COMIC
    poster: {
        width: 150,
        height: 232,
        alignSelf: "center",
    },

    //Curvy border
    Curve: {
        height: 100,
        alignSelf: "stretch",
    },
});
