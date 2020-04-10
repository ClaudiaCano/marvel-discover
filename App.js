import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BtnVerMas from "./components/BtnVerMas";
import BtnLeido from "./components/BtnLeido";

export default function App() {
    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B895C8",
        alignItems: "center",
        justifyContent: "center",
    },
});
