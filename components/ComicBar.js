import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";

import Guardar from "./Guardar";
import BtnLeido from "./BtnLeido";


export default class ComicBar extends React.Component {
    render() {
        return (
            <View>
                <Guardar style={styles.guardar}/>
                <BtnLeido />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        position: "absolute",
        top: Dimensions.get("window").height - 56,
    },
    guardar: {
        position: "absolute",
        
    }
});