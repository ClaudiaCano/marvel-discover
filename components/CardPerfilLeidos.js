import React, { useContext, useState } from "react";

import { observer } from "mobx-react";
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import MarvelContext from "../model/MarvelModel";

import ImgVerMas from "../components/ImgVerMas";
import Leidos from "../pages/Leidos";
import Comic from "../pages/Comic";
import BackSvg from "../assets/backblack.svg";

const CardPerfilLeidos = observer(({ navigation }) => {
    const marvel = useContext(MarvelContext);

    const [modalVisible, setModalVisible] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
    const [comicId, setComicId] = useState(false);

    return (
        <>
            <View style={styles.card}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={marvel.leidos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: rowData }) => {
                        return (
                            <TouchableHighlight
                                underlayColor={"#f0f0"}
                                onPress={() => {
                                    setModalVisible(true);
                                    setComicId(rowData.id);
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
                    ListFooterComponent={() => {
                        return (
                            <TouchableHighlight
                                underlayColor={"#f0f0"}
                                onPress={() => {
                                    setModalVisible2(true);
                                }}
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
					onRequestClose={() => { setModalVisible(false); } }
                >
                    <Comic comicId={comicId} />
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        style={styles.closeIcon}
                    >
                        <BackSvg width={15} height={15} />
                    </TouchableHighlight>
                </Modal>
            </View>
			<View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible2}
					style={styles.contentView2}
					onRequestClose={() => { setModalVisible2(false); } }
                >
                    <Leidos/>
                    <TouchableHighlight
                        underlayColor={"#f0f0"}
                        onPress={() => {
                            setModalVisible2(false);
                        }}
                        style={styles.closeIcon2}
                    >
                        <BackSvg width={15} height={15} />
                    </TouchableHighlight>
                </Modal>
            </View>
        </>
    );
});

export default CardPerfilLeidos;

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
	contentView2: {
        //justifyContent: "flex-end",
        marginTop: 50,
        marginLeft: 0,
        marginRight: 0,
    },
    closeIcon: {
		//borderWidth: 2,
		position: "absolute",
		backgroundColor: 'rgba(196, 164, 216, 0.8)',
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
	  closeIcon2: {
		//borderWidth: 2,
		position: "absolute",
		top: -17,
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
