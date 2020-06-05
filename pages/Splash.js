import React from "react";
import { StyleSheet, Image, View, Dimensions, Button } from "react-native";

import SplashImage from "../assets/splash.gif";

const Splash = ({ navigation }) => {
  return (
    <View >
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
          color="#5b43a0"
        />
        
        <Image source={SplashImage} style={styles.splash} />
      </View>
  )
}

export default Splash;

/*
export default class Splash extends React.Component {
  render() {
    return (
      <View>
        <Image source={SplashImage} style={styles.splash} />
      </View>
    );
  }
}
*/

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;

const styles = StyleSheet.create({
  splash: {
    width: windowwidth,
    height: windowheight,
  },
});
