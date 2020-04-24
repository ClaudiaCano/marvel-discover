import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    Dimensions,
    TouchableHighlight,
} from "react-native";
import { useFonts } from "@use-expo/font";

import Comic from "../pages/Comic";
import Guardar from "./GuardarLists";

export default function CardResultados(props) {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    const [modalVisible, setModalVisible] = useState(false);

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <>
            <TouchableHighlight
                underlayColor={"#f0f0"}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <View style={styles.card}>
                    <Image source={props.Cover} style={styles.image} />
                    <Text style={styles.title}>{props.Title}</Text>
                    <Guardar />
                </View>
            </TouchableHighlight>
            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={this.state.modalVisible}
                    style={styles.contentView}
                >
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            this.setState({ modalVisible: false });
                        }}
                        style={styles.closeIcon}
                    >
                        <Text style={styles.text}>x</Text>
                    </TouchableHighlight>
                    <Comic />
                </Modal>
            </View>
        </>
    );
}

const CARD_HEIGHT = 150;
const PADDING = 10;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "auto",
        height: CARD_HEIGHT,
        marginTop: 20,
        marginLeft: PADDING,
        marginRight: PADDING,
        borderRadius: 5,
        backgroundColor: "white",

        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.3,
        elevation: 8,
    },
    image: {
        marginLeft: 10,
        marginTop: 5,
        width: 80,
        height: CARD_HEIGHT - 10,
        resizeMode: "cover",
    },
    title: {
        fontSize: 17,
        fontFamily: "RobotoCondensed-Bold",
        display: "flex",
        height: CARD_HEIGHT,
        textAlignVertical: "center",
        width: (Dimensions.get("screen").width - 20) / 2.5,
    },
});
