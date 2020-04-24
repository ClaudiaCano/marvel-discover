import React, { Component } from "react";
import Modal from "react-native-modal";
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from "react-native";

import Comic from "../pages/Comic";

export default class CardComicEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.Data,
        };
    }

    render() {
        return (
            <>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        <View style={styles.card}>
                        <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                        this.setState({ modalVisible: true });
                        }}
                        >
                        <Image
                            source={{
                                uri: rowData.imageUrl,
                            }}
                            style={styles.image}
                        />
                        </TouchableHighlight>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index}
                style={styles.box}
                ListHeaderComponent={() => <View width={PADDING} />}
                ListFooterComponent={() => <View width={PADDING} />}
            />

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
}

const HEIGHT = 400;
const WIDTH = 260;
const PADDING = 10;
const RADIUS = 10;

const styles = StyleSheet.create({
    contentView: {
        margin: 0,
    },
    box: {
        flex: 0,
        flexDirection: "row",
        width: "auto",
        height: HEIGHT,
        backgroundColor: "transparent",
        marginBottom: 20,
    },
    card: {
        marginLeft: 0,
        marginTop: 5,
        height: HEIGHT - 20,
        width: WIDTH,
        justifyContent: "center",
        shadowOffset: { width: 8, height: 8 },
        shadowRadius: 8,
        shadowColor: "#826A92",
        shadowOpacity: 0.3,
        elevation: 8,
        marginRight: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: RADIUS,
    },
    image: {
        height: HEIGHT - 20,
        width: WIDTH,
        resizeMode: "cover",
        borderRadius: RADIUS,
    },
    closeIcon: {
        position: "absolute",
        top: 30,
        left: 30,
        width: 20,
        height: 20,
        alignSelf: "flex-end",
        zIndex: 2,
    },
    text: {
        fontFamily: "Roboto",
        color: "white",
        width: 60,
        height: 60,
        //fontWeight: "bold",
        fontSize: 30,
      },
});