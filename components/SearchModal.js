import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";

import CloseSvg from "../assets/close.svg";
import SearchIcon from "../components/SearchIcon";
import Search from "../pages/Search";
import Svg from "react-native-svg";

export default SearchModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableHighlight
                underlayColor={"#f0f0"}
                onPress={() => {
                    setModalVisible(true);
                }}
                style={[styles.buttonStyle]}
            >
                <SearchIcon />
            </TouchableHighlight>

            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                    onRequestClose={() => { setModalVisible(false); } }
                >
                    <Search />
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        style={[styles.closeIcon]}
                    >
                        <CloseSvg width={15} height={15} ></CloseSvg>
                    </TouchableHighlight>
                </Modal>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
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
        margin: 0,
    },
    buttonStyle: {
        //borderWidth: 2,
        top: -22,
        height: 80,
    },
    closeIcon: {
        //borderWidth: 2,
        position: "absolute",
        top: 30,
        right: 30,
        width: 40,
        height: 40,
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
