import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";

export default class ComicDetails extends React.Component {
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
      return (
          <View style={styles.box}>
              <Text style={styles.text_1}>{this.props.Name}</Text>
              <Text style={styles.text_1}>{this.props.Date}</Text>
              <Text style={styles.text_2}>Escritor</Text> 
              <Text style={styles.text_2}>Fecha de publicación</Text>            
          </View>
      );
    };
  
};

const COLOR = "#757575";
const FONT_SIZE_1 = 18;
const FONT_SIZE_2 = 14;
const FONT = "RobotoCondensed-Regular";
const FONT_BOLD = "RobotoCondensed-Bold";

const styles = StyleSheet.create({
    box:{
      paddingLeft: 10,
      paddingRight: 10,
      flex:0,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    text_1:{
      color: COLOR,
      fontSize: FONT_SIZE_1,
      fontFamily: FONT_BOLD,
      textTransform: "uppercase",
      display: "flex",
      width: (Dimensions.get("screen").width - 20) / 2,
    },
    text_2: {
        color: COLOR,
        fontSize: FONT_SIZE_2,
        fontFamily: FONT,
        display: "flex",
        width: (Dimensions.get("screen").width - 20) / 2,
    }  
});