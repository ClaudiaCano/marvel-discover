import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ComicHeader from "../components/ComicHeader";
import ComicTitle from "../components/ComicTitle";
import ComicDetails from "../components/ComicDetails";
import ComicPersonajes from "../components/ComicPersonajes";
import ComicSynopsis from "../components/ComicSynopsis";
import ComicBar from "../components/ComicBar";
import BackSvg from "../assets/back.svg";
import BtnLeido from "../components/BtnLeido";

const StarWars = {
    title: "Star Wars (2015) #1",
    author: "Jason Aaron",
    date: "14 enero, 2015",
    characters: {
        leia: {
            character: "Princesa Leia",
            completeName: "Leia Organa",
            photo: "../assets/Leia.jpg",
        },
        darthVader: {
            character: "Darth Vader",
            completeName: "",
        },
    },
    synopsis:
        "THE GREATEST SPACE ADVENTURE OF ALL TIME RETURNS TO MARVEL! Luke Skywalker and the ragtag band of rebels fighting against the Galactic Empire are fresh off their biggest victory yet-the destruction of the massive battle station known as the Death Star. But the Empire's not toppled yet! Join Luke along with Princess Leia, smugglers Han Solo and Chewbacca, droids C-3PO and R2-D2 and the rest of the Rebel Alliance as they strike out for freedom against the evil forces of Darth Vader and his master, the Emperor. Written by Jason Aaron (Original Sin, Thor: God of Thunder) and with art by John Cassaday (Astonishing X-Men, Uncanny Avengers), this is the Star Wars saga as only Marvel Comics could make it!",
    cover:
        "https://i.annihil.us/u/prod/marvel/i/mg/1/20/567083a7957b5/clean.jpg",
};

export default class Comic extends React.Component {
    render() {
        return (
            <View>
                <BackSvg style={styles.backIcon} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ComicHeader Cover={StarWars.cover} />
                    <ComicTitle Title={StarWars.title} />
                    <ComicDetails Name={StarWars.author} Date={StarWars.date} />
                    <ComicPersonajes Characters={StarWars.characters} />
                    <ComicSynopsis Synopsis={StarWars.synopsis} />
                </ScrollView>

                <ComicBar />
                <BtnLeido />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 10,
        left: 20,
        zIndex: 2,
    },
});
