import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, ActivityIndicator, TouchableHighlight } from "react-native";
import { useFonts } from "@use-expo/font";
import { LinearGradient } from "expo-linear-gradient";

import SearchSvg from "../assets/searchicon.svg";


const SearchBar = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    const [text, setText] = React.useState('');

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    const goToResults = () => {
        navigation.navigate("resultados")
    };

    return (
        <View style={styles.page} >
            <View style={styles.container} >
                <TextInput
                    style={styles.searchInput}
                    placeholder="Type here!"
                    placeholderTextColor= "#856D6D"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                    onSubmitEditing={goToResults}
                />
                <TouchableHighlight style={styles.searchIcon} onPress={goToResults} >
                    <SearchSvg />
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default SearchBar;

const COLOR = "white";
const FONT_SIZE = 18;
const FONT = "RobotoCondensed-Regular";

const styles = StyleSheet.create({

    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },

    container: {
        width: 250,
        height: 40,
        justifyContent: "center",
    },

    searchInput: {
        position: "absolute",
        color: COLOR,
        fontSize: FONT_SIZE,
        fontFamily: FONT,
        width: 250,
        height: 40,
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderBottomColor: COLOR,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },

    searchIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
  });
