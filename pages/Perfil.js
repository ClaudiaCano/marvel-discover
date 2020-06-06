import React from "react";
import { observer } from "mobx-react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "@use-expo/font";

import UserHeader from "../components/UserHeader";
import UserPfp from "../components/UserPfp";
import UserInfo from "../components/UserInfo";
import AppBar from "../components/AppBar";
import HomeTitles from "../components/ProfileTitles";
import ProfileTitlesGuardados from "../components/ProfileTitlesGuardados";
import CardPerfilLeidos from "../components/CardPerfilLeidos";
import CardPerfilGuardados from "../components/CardPerfilGuardados";

import BackSvg from "../assets/back.svg";
import GearSvg from "../assets/settingsicon.svg";
import AppBarBackground from "../components/AppBarBackground";

const user = {
    pfp:
        "https://amayei.nyc3.digitaloceanspaces.com/2019/04/Screen-Shot-2019-04-26-at-11.50.46-PM.png",
    name: "User",
    username: "@User",
    about:
        "Egestas  Ornare Dius Consequat, Tristique Praesent A. Sagittis Suspendiese Scelerique Arcu Auctor Tellus Enim.",
};

const Perfil = observer(() => {
    const [fontsLoaded] = useFonts({
        "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <GearSvg style={styles.gearIcon} />
                <UserHeader />
                <UserPfp ProfilePic={user.pfp} />
                <UserInfo
                    Name={user.name}
                    Username={user.username}
                    Bio={user.about}
                />
                <Text style={styles.text_1}>MIS COLECCIONES</Text>
                <HomeTitles Title="LEÍDOS" screen="Leidos" />
                <CardPerfilLeidos />
                <ProfileTitlesGuardados Title="GUARDADOS" screen="Guardados" />
                <CardPerfilGuardados />
                <View style={styles.sizedbox} />
            </ScrollView>
            <AppBarBackground />
        </View>
    );
});

export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
    sizedbox: {
        height: 120,
    },

    //Back "ARROW" Icon
    backIcon: {
        position: "absolute",
        width: 20,
        height: 20,
        alignSelf: "flex-start", //moves the item to the left or horizontal start of the page
        top: 30,
        left: 30,
        zIndex: 2,
    },

    //Settings "GEAR" Icon
    gearIcon: {
        position: "absolute",
        width: 20,
        height: 20,
        alignSelf: "flex-end", //moves the item to the right or horizontal end of the page
        top: 30, // "10 + heightofbackIcon(20) = 30" | since it's written after - it's placed below instead of on the same level.
        right: 30,
        zIndex: 2,
    },

    //MIS COLECCIONES
    text_1: {
        paddingLeft: 10, //tiene que coincidir con el padding del slider y homeTitles
        color: "#D01C1F",
        fontSize: 18,
        fontFamily: "RobotoCondensed-Bold",
        textTransform: "uppercase",
        display: "flex",
        marginTop: 20,
    },

    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get("screen").height,
        zIndex: -1,
    },
});
