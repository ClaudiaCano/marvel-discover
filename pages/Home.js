import React, { useContext, useEffect, useState } from "react";
import Modal from "react-native-modal";
import "mobx-react-lite/batchingForReactNative";
import { observer } from "mobx-react";
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import MarvelContext from "../model/MarvelModel";

import Carousel from "../components/Carousel";
import Titles from "../components/HomeTitles";

import CardHome from "../components/CardsHome";
import AppBarBackground from "../components/AppBarBackground";

import Splash from "../pages/Splash";

const Home = observer(({ navigation }) => {
    const marvel = useContext(MarvelContext);
    const [modalVisible, setModalVisible, timePassed] = useState(true);

    useEffect(() => {
        marvel.loadEvents();

        const timer = setTimeout(() => {
            setModalVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (
        marvel.secretWarsEvent == null ||
        marvel.starWarsEvent == null ||
        marvel.avengersEvent == null
    ) {
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
                <Carousel />

                <Titles
                    Title={marvel.secretWarsEvent[0].title}
                    screen={"Evento"}
                    eventId={marvel.secretWarsEvent[0].id}
                />
                <CardHome Data={marvel.secretWarsEvent[0].id} />

                <Titles
                    Title={marvel.starWarsEvent[0].title}
                    screen={"Evento"}
                    eventId={marvel.starWarsEvent[0].id}
                />
                <CardHome Data={marvel.starWarsEvent[0].id} />

                <Titles
                    Title={marvel.avengersEvent[0].title}
                    screen={"Evento"}
                    eventId={marvel.avengersEvent[0].id}
                />
                <CardHome Data={marvel.avengersEvent[0].id} />

                <View style={styles.sizedbox} />
            </ScrollView>
            <AppBarBackground />

            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                >
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            setModalVisible(false);
                            navigation.navigate("Home");
                        }}
                    >
                        <Splash />
                    </TouchableHighlight>
                </Modal>
            </View>
        </View>
    );
});

export default Home;

const PADDING = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    sizedbox: {
        height: 120,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 8,
        marginLeft: PADDING,
        textTransform: "uppercase",
    },
    box: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: PADDING,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get("screen").height,
        zIndex: -1,
    },
    contentView: {
        //justifyContent: "flex-end",
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
    },
});
