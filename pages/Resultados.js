import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    ActivityIndicator,
    FlatList,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";

import TitleResults from "../components/TitleResults";
import CardResultados from "../components/CardResultados";

export default function Resultados(props) {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    const results = props.Results;
    const query = props.Query;
    const Results = {
        text: "Resultados para '" + query + "'",
    };

    if (!fontsLoaded) {
        return (
            <View style={[styles.container]}>
                <LinearGradient
                    colors={["white", "white", "#B895C8"]}
                    style={styles.gradient}
                />
                <ActivityIndicator size="large" color="#4E00B0" />
            </View>
        );
    }
    return (
        <View>
            <LinearGradient
                colors={["white", "white", "#B895C8"]}
                style={styles.gradient}
            />

            <TitleResults Title={Results.text} />
            <FlatList
                data={results}
                renderItem={({ item: rowData }) => {
                    return (
                        <CardResultados ComicData={rowData}
                            Id={rowData.id}
                            Title={rowData.title}
                            Cover={
                                rowData.thumbnail.path +
                                "." +
                                rowData.thumbnail.extension
                            }
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View height={80} />}
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: -4,
        height: Dimensions.get("screen").height,
        zIndex: -1,
    },
    backIcon: {
        position: "absolute",
        top: 38,
        left: 30,
        zIndex: 2,
    },
    sizedbox: {
        height: 150,
    },
    flatList:{
        minHeight: Dimensions.get("window").height - 60,
    }
});
