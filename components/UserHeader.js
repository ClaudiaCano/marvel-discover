import React, { createContext, useContext } from "react";
import { StyleSheet, Image, ImageBackground, Text, View } from "react-native";
import * as Svg from 'react-native-svg';

import BackSvg from "../assets/back.svg";
import GearSvg from "../assets/settingsicon.svg";
import UserSvg from "../assets/user.svg";


const UserHeader = () => {
  return (
    <View>

      <ImageBackground
      style={styles.headerBackground}
      source={{ uri: "https://thebuzzpaper.com/wp-content/uploads/2019/11/space-signals-3246.jpg" }}
      blurRadius={3}
      >
        <BackSvg style={styles.backIcon}/>
        <GearSvg style={styles.gearIcon}/>
      </ImageBackground>

      <View>
          <UserSvg style={styles.pfpShape}/>
      </View>

    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({

  //Back "ARROW" Icon
  backIcon: {
    width: 20, 
    height: 20,
    alignSelf: 'flex-start', //moves the item to the left or horizontal start of the page
    top: 30,
    left: 20,
  },

  //Settings "GEAR" Icon
  gearIcon: {
    width: 20, 
    height: 20,
    alignSelf: 'flex-end', //moves the item to the right or horizontal end of the page
    top: 10, // "10 + heightofbackIcon(20) = 30" | since it's written after - it's placed below instead of on the same level.
    right: 20,
  },

  //PROFILE PICTURE
  headerBackground: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
  },
  pfpShape: {
    position: 'absolute',
    top: -100,
    height: 150,
    width: '100%',
    alignSelf: 'center',
    overflow: "hidden",
    color: 'transparent',
  },
  pfp: {
    height: 100,
    alignSelf: "stretch",
    overflow: 'hidden',
  },
  
});
