
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import SplashImage from "../assets/splash.gif";

const Splash = () => {
  return (
    <View>
        <Image source={SplashImage} style={styles.splash} />
      </View>    
  );
};

export default Splash;

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;

const styles = StyleSheet.create({
  splash: {
    width: windowwidth,
    height: windowheight,
  },
  contentView: {
    //justifyContent: "flex-end",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
},
});
