import React, { useContext, useEffect, Component, useState } from "react";

import { observer } from "mobx-react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import MarvelContext from "../model/MarvelModel";
import { useNavigation } from "@react-navigation/native";

import ImgVerMas from "../components/ImgVerMas";
import Comic from "../pages/Comic";
import BackSvg from "../assets/back.svg";

const CardPerfilLeidos = observer(() => {
  
  const marvel = useContext(MarvelContext);

  return (
    <View style={styles.card}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={marvel.leidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: rowData }) => {
          return (
            <Image
              source={{
                uri: rowData.images[0].path + "." + rowData.images[0].extension,
              }}
              style={styles.image}
            />
          );
        }}
        ListFooterComponent={() => <ImgVerMas style={styles.image} />}
      />
    </View>
  );
});

export default function (props) {
  const navigation = useNavigation();

  return <CardPerfilLeidos {...props} navigation={navigation} />;
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
    top: 30,
    left: 15,
    width: 40,
    height: 40,
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
