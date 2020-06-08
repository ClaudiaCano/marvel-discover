import React, { useState, useContext } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    ActivityIndicator,
    TouchableHighlight,
} from "react-native";
import { useFonts } from "@use-expo/font";
import Modal from "react-native-modal";
import SearchSvg from "../assets/searchicon.svg";
import Resultados from "../pages/Resultados";
import BackSvg from "../assets/backblack.svg";
import { observer } from "mobx-react";
import { MarvelContext } from "../model/MarvelModel";

const SearchBar = observer(() => {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    const [text, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const marvel = useContext(MarvelContext);

    function getResults() {
        marvel.search(text);
    }

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <>
            <View style={styles.page}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Type here!"
                        placeholderTextColor="#856D6D"
                        onChangeText={(text) => setText(text)}
                        defaultValue={text}
                        onSubmitEditing={() => {
                            setModalVisible(true);
                            getResults();
                        }}
                    />

                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        style={styles.searchIcon}
                        onPress={() => {
                            setModalVisible(true);
                            getResults();
                        }}
                    >
                        <SearchSvg />
                    </TouchableHighlight>
                </View>
            </View>

            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <Resultados Results={marvel.searchresults} Query={text} />
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
});

export default SearchBar;

const COLOR = "white";
const FONT_SIZE = 18;
const FONT = "RobotoCondensed-Regular";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    container: {
        width: 250,
        height: 40,
        justifyContent: "center",
    },
    contentView: {
        //justifyContent: "flex-end",
        marginTop: 42,
        marginLeft: 0,
        marginRight: 0,
    },
    searchInput: {
        position: "absolute",
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        width: 250,
        height: 40,
        borderWidth: 1,
        borderTopColor: "transparent",
        borderBottomColor: COLOR,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },
    searchIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        alignSelf: "flex-end",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
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
    text: {
        fontFamily: "Roboto",
        color: "black",
        width: 60,
        height: 60,
        //fontWeight: "bold",
        fontSize: 30,
    },
});
