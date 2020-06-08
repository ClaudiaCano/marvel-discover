import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import moment from "moment/min/moment-with-locales";
import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ComicHeader from "../components/ComicHeader";
import ComicTitle from "../components/ComicTitle";
import ComicTitlePersonajes from "../components/ComicTitlePersonajes";
import ComicDetails from "../components/ComicDetails";
import ComicSynopsis from "../components/ComicSynopsis";
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
};

const Comic = observer(({ comicId }) => {
    const marvel = useContext(MarvelContext);

    moment.locale("es"); //CONFIGURAR DATA EN ESPAÑOL

    useEffect(() => {
        marvel.loadComicById(comicId);
    }, []);

    if (marvel.comic == null || marvel.creatorsComic == null) {
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
                    keyExtractor={(item, index) => index.toString()}
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

const PADDING = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
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
