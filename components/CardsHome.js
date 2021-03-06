import React, { Component } from "react";
import { observer } from "mobx-react";
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

import ImgVerMas from "../components/ImgVerMas";
import Comic from "../pages/Comic";
import BackSvg from "../assets/backblack.svg";

class CardHome extends Component {
    constructor(props) {
        super(props);
        this.verMas = this.verMas.bind(this);
        this.state = {
            modalVisible: false,
            eventComics: [],
            isLoading: true,
            comicId: null,
        };
    }

    verMas() {
        this.props.navigation.navigate("Evento", { event: this.props.Data });
    }

    componentDidMount() {
        fetch(
            "http://gateway.marvel.com/v1/public/events/" +
                this.props.Data +
                "/comics?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665"
        )
            .then((response) => response.json())
            .then((json) => {
                this.setState({ eventComics: json.data.results });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { eventComics, isLoading, modalVisible, comicId } = this.state;
        const { navigation } = this.props;
        return (
            <>
                <View style={styles.card}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={eventComics}
                        renderItem={({ item: rowData }) => {
                            return (
                                <TouchableHighlight
                                    underlayColor={"#f0f0"}
                                    onPress={() => {
                                        this.setState({ modalVisible: true });
                                        this.setState({ comicId: rowData.id });
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri:
                                                rowData.images[0].path +
                                                "." +
                                                rowData.images[0].extension,
                                        }}
                                        style={styles.image}
                                    />
                                </TouchableHighlight>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={() => {
                            return (
                                <TouchableHighlight
                                    underlayColor={"#f0f0"}
                                    onPress={this.verMas}
                                >
                                    <ImgVerMas style={styles.image} />
                                </TouchableHighlight>
                            );
                        }}
                    />
                </View>
                <View>
                    <Modal
                        backdropOpacity={0.3}
                        isVisible={modalVisible}
                        style={styles.contentView}
                        onRequestClose={() => {
                            this.setState({ modalVisible: false });
                        }}
                    >
                        <TouchableHighlight
                            underlayColor={"#f0f0"}
                            onPress={() => {
                                this.setState({ modalVisible: false });
                            }}
                            style={[styles.closeIcon]}
                        >
                            <BackSvg
                                style={styles.backIcon}
                                width={15}
                                height={15}
                            />
                        </TouchableHighlight>

                        <Comic comicId={comicId} />
                    </Modal>
                </View>
            </>
        );
    }
}

export default function (props) {
    const navigation = useNavigation();

    return <CardHome {...props} navigation={navigation} />;
}

const CARD_HEIGHT = 150;
const PADDING = 10;

const styles = StyleSheet.create({
    box: {
        flex: 0,
        flexDirection: "row",
        width: "auto",
        height: CARD_HEIGHT - 10,
        backgroundColor: "transparent",
        marginBottom: 30,
    },
    card: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "auto",
        height: CARD_HEIGHT,
        marginTop: 5,
        marginLeft: PADDING,
        marginRight: PADDING,
        borderRadius: 5,
        backgroundColor: "white",
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.3,
        elevation: 8,
    },
    image: {
        marginLeft: 10,
        marginTop: 5,
        height: CARD_HEIGHT - 10,
        width: 90,
        resizeMode: "cover",
    },
    contentView: {
        margin: 0,
    },
    closeIcon: {
        //borderWidth: 2,
        position: "absolute",
        backgroundColor: "rgba(196, 164, 216, 0.8)",
        borderRadius: 10,
        top: 15,
        left: 15,
        width: 35,
        height: 35,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    },
    text: {
        fontFamily: "Roboto",
        color: "white",
        width: 60,
        height: 60,
        //fontWeight: "bold",
        fontSize: 30,
    },
});
