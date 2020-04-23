import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default class EventDetails extends React.Component {
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
      "RobotoCondensed-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
    });

    this.setState({ fontloaded: true });
  }

  render() {
    const title = this.props.Title;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{this.props.Description}</Text>
      </View>
    );
  }
}

const TITLE_COLOR = "black";
const BODY_COLOR = "#757575";
const TITLE_SIZE = 18;
const BODY_SIZE = 14;
const TITLE_TYPE = "RobotoCondensed-Bold";
const BODY_TYPE = "RobotoCondensed-Regular";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  title: {
    color: TITLE_COLOR,
    fontSize: TITLE_SIZE,
    fontFamily: TITLE_TYPE,
    textTransform: "uppercase",
    display: "flex",
  },
  body: {
    color: BODY_COLOR,
    fontSize: BODY_SIZE,
    fontFamily: BODY_TYPE,
    display: "flex",
  },
});
