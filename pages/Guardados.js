import React, { useContext } from "react";
import { observer } from "mobx-react";
import {
    StyleSheet,
    FlatList,
    View,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";
import MarvelContext from "../model/MarvelModel";

import TitleGuardados from "../components/TitleLeidosGuardados";
import CardGuardados from "../components/CardGuardados";

const Results = {
    text: "Guardados",
};

const Guardados = observer(() => {
    const marvel = useContext(MarvelContext);

    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

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
            <LinearGradient
                colors={["#FAF2FF", "#fff0"]}
                style={styles.gradient}
            />

            <TitleGuardados Title={Results.text} />

            <FlatList
                data={marvel.guardados}
                renderItem={({ item: rowData }) => {
                    return (
                        <CardGuardados ComicData={rowData}/>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View height={80} />}
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
            />
        </View>
    );
});

export default Guardados;

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
        height: 200,
    },
    flatList: {
        minHeight: Dimensions.get("window").height - 60,
    },
});
