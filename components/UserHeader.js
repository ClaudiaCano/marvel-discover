import * as React from "react"
import { StyleSheet, Image, ImageBackground, Text, View } from "react-native";
import Svg, { Defs, Path, ClipPath, Use, G } from "react-native-svg"


//import UserSvg from "../assets/user.svg";
import UserSvg from "../assets/formaPerfil.svg";

import imgHeader from "../assets/HeaderBackground.jpg";

/*
<Svg viewBox="0 0 510 608">
  <Defs>
    <Path id="prefix__a" d="M85 0L0 88v520h430l80-88V0z" />
  </Defs>
  <ClipPath id="mascara">
    <Use xlinkHref="#prefix__a" overflow="visible" />
  </ClipPath>
  <G clipPath="url(#mascara)">
    <Image
      width={393}
      height={467}
      href="https://amayei.nyc3.digitaloceanspaces.com/2019/04/Screen-Shot-2019-04-26-at-11.50.46-PM.png"
      transform="scale(1.2977 1.3019)"
      overflow="visible"
    />
  </G>
</Svg>
*/


const UserHeader = () => {
  return (
    <View style={styles.fullheader}>

      <ImageBackground
      style={styles.headerBackground}
      source={imgHeader}
      blurRadius={2}
      >
      </ImageBackground>

      <View >
        <UserSvg style={styles.pfpShape}/>
      </View>

    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({

  fullheader:{
    flex: 1,
    flexDirection: "column",
    marginBottom: -140,
  },

  //PROFILE PICTURE
  headerBackground: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
  },

  pfpShape: {
    position: "relative",
    bottom: 150,
    height: 200,
    width: '100%',
    alignSelf: 'center',
  },
  
});
