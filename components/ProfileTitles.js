import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import Modal from "react-native-modal";
import { useFonts } from "@use-expo/font";

import BtnVerMasPerfil from "./BtnVerMasPerfil";
import Leidos from "../pages/Leidos";

//<BtnVerMas style={styles.btn} screen={props.screen} />

export default function ProfileTitles(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <>
      <View style={styles.box}>
        <Text style={styles.text}>{props.Title}</Text>
        <TouchableHighlight
          underlayColor={"#f0f0"}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <BtnVerMasPerfil style={styles.btn} />
        </TouchableHighlight>
      </View>

      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          style={styles.contentView}
        >
          <Leidos />
          <TouchableHighlight
            underlayColor={"#f0f0"}
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.closeIcon}
          >
            <Text style={styles.textIcon}>x</Text>
          </TouchableHighlight>
        </Modal>
      </View>
    </>
  );
}

const COLOR = "black";
const FONT_SIZE = 20;
const FONT = "RobotoCondensed-Bold";
const MARGIN_BOTTOM = 10;
const MARGIN_TOP = 20;

const styles = StyleSheet.create({
  box: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: MARGIN_BOTTOM,
    marginTop: MARGIN_TOP,
    alignItems: "center",
  },
  text: {
    color: COLOR,
    fontSize: FONT_SIZE,
    fontFamily: FONT,
    textTransform: "uppercase",
    display: "flex",
  },
  btn: {
    alignItems: "flex-start",
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    //justifyContent: "flex-end",
    marginTop: 42,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonStyle: {
    height: 200,
    width: 110,
    backgroundColor: "red",
    borderRadius: 100,
  },
  closeIcon: {
    position: "absolute",
    top: -17,
    left: 30,
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    zIndex: 2,
  },
  textIcon: {
    fontFamily: "Roboto",
    color: "black",
    width: 60,
    height: 60,
    //fontWeight: "bold",
    fontSize: 30,
  },
});