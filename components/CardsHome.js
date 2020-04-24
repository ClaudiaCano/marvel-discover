import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";

import ImgVerMas from "../components/ImgVerMas";

export default class CardHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.Data,
        };
    }

    render() {
        return (
            <View style={styles.card}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        
                        <Image
                            source={{
                                uri: rowData.imageUrl,
                            }}
                            style={styles.image}
                        />
                    );
                }}
                keyExtractor={(item, index) => index}
                ListFooterComponent={() => <ImgVerMas style={styles.image} />}
            />
            </View>
        );
    }
}


const CARD_HEIGHT = 150;
const PADDING = 10;

const styles = StyleSheet.create({
    box: {
        flex: 0,
        flexDirection: "row",
        width: "auto",
        height: CARD_HEIGHT - 10,
        backgroundColor: "transparent",
        marginBottom: 30,
    },
    card: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "auto",
        height: CARD_HEIGHT,
        marginTop: 5,
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
        height:  CARD_HEIGHT - 10,
        width: 90,
        resizeMode: "cover",
    },
});