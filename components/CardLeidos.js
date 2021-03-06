import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "@use-expo/font";
import Modal from "react-native-modal";

import Guardar from "./GuardarLists";
import Comic from "../pages/Comic";
import BackSvg from "../assets/back.svg";

export default function CardLeidos(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <View style={styles.card}>
        <TouchableHighlight
          underlayColor={"#f0f0"}
          style={styles.searchIcon}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri:
                props.ComicData.images[0].path +
                "." +
                props.ComicData.images[0].extension,
            }}
          />
        </TouchableHighlight>
        <Text style={styles.title}>{props.ComicData.title}</Text>
        <Guardar comic={props.ComicData} />
      </View>

      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <Comic comicId={props.ComicData.id} />
          <TouchableHighlight
            underlayColor={"#f0f0"}
            onPress={() => {
              setModalVisible(false);
            }}
            style={[styles.closeIcon]}
          >
            <BackSvg style={styles.backIcon} width={15} height={15} />
          </TouchableHighlight>
        </Modal>
      </View>
    </>
  );
}

const CARD_HEIGHT = 150;
const PADDING = 10;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 20,
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
    width: 80,
    height: CARD_HEIGHT - 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 17,
    fontFamily: "RobotoCondensed-Bold",
    display: "flex",
    height: CARD_HEIGHT,
    textAlignVertical: "center",
    width: (Dimensions.get("screen").width - 20) / 2.5,
  },

  //Estilos del Modal
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
