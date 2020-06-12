import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import SaveIcon from "../assets/saveicon.svg";
import SaveIconSelected from "../assets/saveiconselected.svg";
import MarvelContext from "../model/MarvelModel";
import { useFonts } from "@use-expo/font";


export default function GuardarLists(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-BoldItalic": require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    "RobotoCondensed-Italic": require("../assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-LightItalic": require("../assets/fonts/RobotoCondensed-LightItalic.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  const marvel = useContext(MarvelContext);

  const [selected, setSelected] = useState(false);

  function setGuardados(data) {
    marvel.saveGuardado(data);
    setSelected(!selected);
  }

  function removeGuardados(currentId) {
    var newsaveGuardado = marvel.guardados.filter(gdo => gdo.id !== currentId);
    marvel.guardados = newsaveGuardado;
    setSelected(!selected);
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
}

const DISTANCE_ICON_TEXT = 1;

const styles = StyleSheet.create({
  /*page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },*/
  column: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    width: (Dimensions.get("screen").width - 20) / 5,
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
