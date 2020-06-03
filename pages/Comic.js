import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import moment from "moment/min/moment-with-locales";
import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ComicHeader from "../components/ComicHeader";
import ComicTitle from "../components/ComicTitle";
import ComicTitlePersonajes from "../components/ComicTitlePersonajes";
import ComicDetails from "../components/ComicDetails";
import ComicSynopsis from "../components/ComicSynopsis";
import BackSvg from "../assets/back.svg";
import BtnLeido from "../components/BtnLeido";
import Guardar from "../components/Guardar";

import Personaje from "../components/Personaje";

import photoLeia from "../assets/Leia.jpg";
import photoDart from "../assets/DartVader.jpg";
import photoBoba from "../assets/BobaFett.png";
import photoDarth from "../assets/DarthMaul.jpg";
import photoPoe from "../assets/PoeDameron.jpg";
import photoThrawn from "../assets/Thrawn.jpeg";

import MarvelContext from "../model/MarvelModel";

const StarWars = {
    title: "Star Wars (2015) #1",
    author: "Jason Aaron",
    date: "14 enero, 2015",
    characters: [
        {
            character: "Princesa Leia",
            completeName: "Leia Organa",
            photo: photoLeia,
        },
        {
            character: "Darth Vader",
            completeName: "",
            photo: photoDart,
        },
        {
            character: "Darth Vader",
            completeName: "",
            photo: photoBoba,
        },
        {
            character: "Darth Maul",
            completeName: "",
            photo: photoDarth,
        },
        {
            character: "Poe Dameron",
            completeName: "",
            photo: photoPoe,
        },
        {
            character: "Thrawn",
            completeName: "",
            photo: photoThrawn,
        },
    ],
    synopsis:
        "THE GREATEST SPACE ADVENTURE OF ALL TIME RETURNS TO MARVEL! Luke Skywalker and the ragtag band of rebels fighting against the Galactic Empire are fresh off their biggest victory yet-the destruction of the massive battle station known as the Death Star. But the Empire's not toppled yet! Join Luke along with Princess Leia, smugglers Han Solo and Chewbacca, droids C-3PO and R2-D2 and the rest of the Rebel Alliance as they strike out for freedom against the evil forces of Darth Vader and his master, the Emperor. Written by Jason Aaron (Original Sin, Thor: God of Thunder) and with art by John Cassaday (Astonishing X-Men, Uncanny Avengers), this is the Star Wars saga as only Marvel Comics could make it!",
    cover:
        "https://i.annihil.us/u/prod/marvel/i/mg/1/20/567083a7957b5/clean.jpg",
};

const Comic = observer(({ comicId }) => {
    const marvel = useContext(MarvelContext);

    moment.locale("es"); //CONFIGURAR DATA EN ESPAÑOL

    useEffect(() => {
        marvel.loadComicById(comicId);
    }, []);

    if (marvel.comic == null || marvel.creatorsComic == null) {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View>
            <LinearGradient
                colors={["white", "white", "#B895C8"]}
                style={styles.gradient}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <ComicHeader
                    Cover={
                        marvel.comic[0].images[0].path +
                        "." +
                        marvel.comic[0].images[0].extension
                    }
                />
                <ComicTitle Title={marvel.comic[0].title} />

                <ComicDetails
                    Name={marvel.creatorsComic[0].fullName}
                    Date={moment(marvel.comic[0].dates[0].date).format(
                        "DD MMMM, YYYY"
                    )}
                />
                <ComicTitlePersonajes />

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={StarWars.characters}
                    renderItem={({ item: rowData }) => {
                        return (
                            <View style={styles.card}>
                                <Personaje
                                    character={rowData.character}
                                    completename={rowData.completeName}
                                    photo={rowData.photo}
                                />
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => `${index}`}
                    style={styles.list}
                    ListHeaderComponent={() => <View width={PADDING} />}
                />

                <ComicSynopsis Synopsis={marvel.comic[0].description} />
            </ScrollView>

            <View style={styles.comicbar}>
                <Guardar comic={marvel.comic[0]} />
                <BtnLeido comic={marvel.comic[0]} />
            </View>
        </View>
    );
});

export default Comic;

/*
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={StarWars.characters}
          renderItem={({ item: rowData }) => {
            return (
              <View style={styles.card}>
                <Personaje
                  character={rowData.character}
                  completename={rowData.completeName}
                  photo={rowData.photo}
                />

              </View>
            );
          }}
          keyExtractor={(item, index) => index}
          style={styles.list}
          ListHeaderComponent={() => <View width={PADDING} />}
        />
*/

const PADDING = 10;

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get("screen").height,
        zIndex: -1,
    },
    comicbar: {
        bottom: 0,
        position: "absolute",
        flex: 0,
        flexDirection: "row",
        backgroundColor: "rgba(196, 164, 216, 0.85)",
    },
    list: {
        marginBottom: 30,
    },
});
