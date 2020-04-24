import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";

import CloseSvg from "../assets/close.svg";
import SearchIcon from "../components/SearchIcon";
import Search from "../pages/Search";

export default SearchModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableHighlight
        underlayColor={"#f0f0"}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <SearchIcon />
      </TouchableHighlight>

      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <Search />
          <TouchableHighlight
            underlayColor={"#f0f0"}
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.closeIcon}
          >
            <Text>X</Text>
          </TouchableHighlight>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    //justifyContent: "flex-end",
    margin: 0,
  },
  buttonStyle: {
    height: 200,
    width: 110,
    backgroundColor: "red",
    borderRadius: 100,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    zIndex: 2,
  },
});
