
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Button,
  TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import SplashImage from "../assets/splash.gif";

const Splash = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      <Modal
        backdropOpacity={0.3}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.contentView}
      >
        
        <TouchableHighlight
          underlayColor={"#f0f0"}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("Home");
          }}
        >    
          <Image source={SplashImage} style={styles.splash} />    
        </TouchableHighlight>

      </Modal>
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
