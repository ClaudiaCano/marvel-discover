import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableHighlight,
    ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { useFonts } from "@use-expo/font";
import BackSvg from "../assets/backblack.svg";
import BtnVerMasPerfil from "./BtnVerMasPerfil";
import Guardados from "../pages/Guardados";

//<BtnVerMas style={styles.btn} screen={props.screen} />

export default function ProfileTitlesGuardados(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <>
            <View style={styles.box}>
                <Text style={styles.text}>{props.Title}</Text>
                <TouchableHighlight
                    underlayColor={"#f0f0"}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <BtnVerMasPerfil style={styles.btn} />
                </TouchableHighlight>
            </View>

            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    style={styles.contentView}
                >
                    <Guardados />
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        style={styles.closeIcon}
                    >
                        <BackSvg width={15} height={15} />
                    </TouchableHighlight>
                </Modal>
            </View>
        </>
    );
}

const COLOR = "black";
const FONT_SIZE = 20;
const FONT = "RobotoCondensed-Bold";
const MARGIN_BOTTOM = 10;
const MARGIN_TOP = 20;

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: MARGIN_BOTTOM,
        marginTop: MARGIN_TOP,
        alignItems: "center",
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
    content: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    contentView: {
        //justifyContent: "flex-end",
        marginTop: 42,
        marginLeft: 0,
        marginRight: 0,
    },
    buttonStyle: {
        height: 200,
        width: 110,
        backgroundColor: "red",
        borderRadius: 100,
    },
    closeIcon: {
        //borderWidth: 2,
        position: "absolute",
        top: -12,
        left: 20,
        width: 35,
        height: 35,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    },
    textIcon: {
        fontFamily: "Roboto",
        color: "black",
        width: 60,
        height: 60,
        //fontWeight: "bold",
        fontSize: 30,
    },
});
