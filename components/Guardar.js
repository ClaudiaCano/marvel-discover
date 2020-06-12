import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import SaveIcon from "../assets/saveicon.svg";
import SaveIconSelected from "../assets/saveiconselected.svg";
import { useFonts } from "@use-expo/font";
import MarvelContext from "../model/MarvelModel";

export default function Guardar(props) {

  const marvel = useContext(MarvelContext);
  //const [selected, setSelected] = useState(marvel.guardados.some(guardado => guardado.id === props.comic.id));
  //const [selected, setSelected] = useState(marvel.guardados.includes(props.comic));
  const [selected, setSelected] = useState(false);

  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  function setGuardados(data) {
    marvel.saveGuardado(data);
    setSelected(!selected);
  }

  function removeGuardados(currentId) {
    var newsaveGuardado = marvel.guardados.filter(gdo => gdo.id !== currentId);
    marvel.guardados = newsaveGuardado;
    setSelected(!selected);
    //const index = marvel.guardados.findIndex(gdo => gdo.id === id);
    //const index = marvel.guardados.indexOf(id);
    //marvel.guardados.splice(newsaveGuardado,1);
  }

  
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!selected && !marvel.guardados.some(gdo => gdo.id === props.comic.id)) {
    return (
      <View style={styles.column}>
        <TouchableHighlight
          underlayColor={"#f0f0"}
          onPress={() => {
            setGuardados(props.comic);
          }}
        >
          <SaveIcon style={styles.icon} />
        </TouchableHighlight>
        <Text style={styles.text}>Guardar</Text>
      </View>
    );
  }
  return (
    <View style={styles.column}>
      <TouchableHighlight
        underlayColor={"#f0f0"}
        onPress={() => {
          removeGuardados(props.comic.id);
        }}
      >
        <SaveIconSelected style={styles.icon} />
      </TouchableHighlight>
      <Text style={styles.text}>Guardado</Text>
    </View>
  );
};

const DISTANCE_ICON_TEXT = 1;

const styles = StyleSheet.create({
  /*page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },*/
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: DISTANCE_ICON_TEXT,
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 12,
  },
  icon: {
    height: "100%",
    aspectRatio: 1,
  },
});
