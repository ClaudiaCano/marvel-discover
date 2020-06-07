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
  const [selected, setSelected] = useState(false);

  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  function setGuardados(id) {
    marvel.saveGuardado(id);
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.column}>
      <TouchableHighlight
        underlayColor={"#f0f0"}
        onPress={() => {
          setSelected(!selected)
          setGuardados(props.comic);
        }}
      >
        {selected ? (
          <SaveIconSelected style={styles.icon} />
        ) : (
          <SaveIcon style={styles.icon} />
        )}
      </TouchableHighlight>
      {selected ? (
        <Text style={styles.text}>Guardado</Text>
      ) : (
        <Text style={styles.text}>Guardar</Text>
      )}
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
