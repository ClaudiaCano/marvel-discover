import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { useFonts } from "@use-expo/font";
import Personaje from "../components/Personaje";

export default function ComicPersonajes(props) {

    const [data, setData] = useState(props.data);

    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={styles.box}>
            <Text style={styles.text_1}>PERSONAJES</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item: rowData }) => {
                    return (
                        <View style={styles.card}>
                            <Personaje
                                character= {rowData.character}
                                completename= {rowData.completename}
                                photo= {rowData.photo}
                            />
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                style={styles.box}
                ListHeaderComponent={() => <View width={PADDING} />}
                ListFooterComponent={() => <View width={PADDING} />}
            />
        </View>
    );
}

const COLOR = "#D01C1F";
const FONT_SIZE = 18;
const FONT = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginBottom: 30,
    },
    text_1: {
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        textTransform: "uppercase",
        display: "flex",
        width: Dimensions.get("screen").width - 20,
        marginBottom: 10,
    },
});
