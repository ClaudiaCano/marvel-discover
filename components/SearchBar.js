import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchSvg from "../assets/searchicon.svg";

export default function SearchBar() {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.page} >
            <View style={styles.container} >
                <TextInput
                    style={styles.searchBar}
                    placeholder="Type here!"
                    placeholderTextColor= "#856D6D"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <SearchSvg style={styles.searchIcon} />
            </View>
        </View>
    );
}


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

    searchBar: {
        position: "absolute",
        color: 'white',
        //placeholderTextColor: 'white',
        width: 250,
        height: 40,
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
    },

    searchIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
    },
    
  });
