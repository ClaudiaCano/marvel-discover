import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/*------------------------ COMPONENTS ------------------------ */
import EventTitle from "../components/EventTitle";
import CardComic from "../components/CardComicEvent";
import Details from "../components/Details";
import BackIcon from "../assets/backblack.svg";

/*------------------------ OBJECTS ------------------------ */
const StarWars = {
    title: "Star Wars (2015)",
    description:
        "A long time ago in a galaxy far, far away, the adventures of Luke Skywalker, Han Solo, Princess, Leia, Darth Vader and more continue! Set following the events of Episode IV: A New Hope, Marvel's ongoing Star Wars comics reveal new stories featuring these classic characters!",
    creators:
        "Jason Aaron, John Cassaday, Kieron Gillen, Salvador Larroca, Adi Granov Mark Waid, Terry Dodson, Greg Weisman, Mark Brooks, Pepe Larraz, Stuart Immonen.",
};

/*------------------------ PAGE ------------------------ */
export default class Evento extends React.Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonBack = this.buttonBack.bind(this);
    }

    buttonPress() {
        console.log("comic");
        this.props.navigation.navigate("comic");
    }
    buttonBack() {
        console.log("back");
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <LinearGradient
                    colors={["#FAF2FF", "#fff0"]}
                    style={styles.gradient}
                />
                <BackIcon style={styles.backIcon} />
                <TouchableHighlight onPress={this.buttonBack}>
                    
                    
                <EventTitle Title={StarWars.title} />
                </TouchableHighlight>
                <ScrollView>
                    <TouchableHighlight onPress={this.buttonPress}>
                        <CardComic />
                    </TouchableHighlight>
                    <Details
                        Title="Descripción"
                        Description={StarWars.description}
                    />
                    <Details
                        Title="Creadores"
                        Description={StarWars.creators}
                    />
                    <View style={styles.sizedbox} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get("window").height,
        zIndex: -1,
    },
    backIcon: {
        position: "absolute",
        top: 38,
        left: 30,
        zIndex: 2,
    },
    sizedbox: {
        height: 150,
    },
});
