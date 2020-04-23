import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import Comic1 from "../assets/image1.png";
import Comic2 from "../assets/image2.png";

export default class CardComicEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.Data,
        };
    }

    render() {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        <View style={styles.card}>
                            <Image
                                source={{
                                    uri: rowData.imageUrl,
                                }}
                                style={styles.image}
                            />
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index}
                style={styles.box}
                ListHeaderComponent={() => <View width={PADDING} />}
                ListFooterComponent={() => <View width={PADDING} />}
            />
        );
    }
}

const HEIGHT = 400;
const WIDTH = 260;
const PADDING = 10;
const RADIUS = 10;

const styles = StyleSheet.create({
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
});
