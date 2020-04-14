import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import SaveIcon from "../assets/saveicon.svg";
import SaveIconSelected from "../assets/saveiconselected.svg";
import * as Font from "expo-font";

export default class Guardar extends React.Component {
  constructor() {
    super();
    this.state = {
      fontloaded: false,
      selected: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "RobotoCondensed-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
      "RobotoCondensed-BoldItalic": require("../assets/fonts/RobotoCondensed-BoldItalic.ttf"),
      "RobotoCondensed-Italic": require("../assets/fonts/RobotoCondensed-Italic.ttf"),
      "RobotoCondensed-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
      "RobotoCondensed-LightItalic": require("../assets/fonts/RobotoCondensed-LightItalic.ttf"),
      "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    this.setState({ fontloaded: true });
  }

  render() {
    const { selected } = this.state.selected;
    return (
      <View style={styles.page}>
        <TouchableHighlight
          underlayColor={"#f0f0"}
          onPress={() => {
            this.setState({ selected: !this.state.selected });
          }}
        >
          {this.state.selected ? (
            <SaveIconSelected width={120} height={40} />
          ) : (
            <SaveIcon width={120} height={40} />
          )}
        </TouchableHighlight>
        {this.state.selected ? (
          <Text style={styles.text}>Guardado</Text>
        ) : (
          <Text style={styles.text}>Guardar</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 7,
    fontFamily: "RobotoCondensed-Regular",
  },
  textSelected: {
    marginTop: 7,
    color: "#FF00FF",
    fontFamily: "RobotoCondensed-Regular",
  },
});
