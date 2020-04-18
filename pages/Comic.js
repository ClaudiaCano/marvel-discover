import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import ComicHeader from "../components/ComicHeader";
import ComicTitle from "../components/ComicTitle";
import ComicDetails from "../components/ComicDetails";

export default class Comic extends React.Component {
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
            <ComicHeader />
            <ComicTitle Title = "Star Wars (2015) #1" />
            <ComicDetails Name = "Jason Aaron" Date = "14 enero, 2015" />
            
          </View>
      );
    };
  
};


const styles = StyleSheet.create({
    
});