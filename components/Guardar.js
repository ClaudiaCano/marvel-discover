import React, { useState } from "react";
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

export default function Guardar(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  const [selected, setSelected] = useState(false);

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
          setSelected(!selected)}}
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
}

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
