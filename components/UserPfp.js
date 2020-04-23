import React from "react";
import { StyleSheet, Text, View} from "react-native";
import Svg, {Image, Path, Defs, ClipPath, Use, G  } from "react-native-svg";


export default class UserPfp extends React.Component {
  render() {
      const Url = this.props.ProfilePic;

      return (
        <Svg style={styles.Icon} viewBox="0 0 510 608">
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
              href={{ uri: Url }}
              transform="scale(1.2977 1.3019)"
              overflow="visible"
            />
          </G>
        </Svg>
      );
  }
}

const styles = StyleSheet.create({
  Icon:{
    height: 200,
    width: "100%",
    alignSelf: 'center',
  },
});
