import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  Text,
} from "react-native";
import Modal from "react-native-modal";

import ImgVerMas from "../components/ImgVerMas";
import Comic from "../pages/Comic";
import BackSvg from "../assets/back.svg";

export default class CardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.Data,
      modalVisible: false,
    };
  }

  render() {
    return (
      <>
        <View style={styles.card}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <TouchableHighlight
                  underlayColor={"#f0f0"}
                  onPress={() => {
                    this.setState({ modalVisible: true });
                  }}
                >
                  <Image
                    source={{
                      uri: rowData.imageUrl,
                    }}
                    style={styles.image}
                  />
                </TouchableHighlight>
              );
            }}
            keyExtractor={(item, index) => index}
            ListFooterComponent={() => <ImgVerMas style={styles.image} />}
          />
        </View>
        <View>
          <Modal
            backdropOpacity={0.3}
            isVisible={this.state.modalVisible}
            style={styles.contentView}
          >
            <TouchableHighlight
              underlayColor={"#f0f0"}
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
              style={styles.closeIcon}
            >
              <Text style={styles.text}>x</Text>
            </TouchableHighlight>
            <Comic />
          </Modal>
        </View>
      </>
    );
  }
}

//<BackSvg style={styles.backIcon} />

const CARD_HEIGHT = 150;
const PADDING = 10;

const styles = StyleSheet.create({
  box: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT - 10,
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  card: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 5,
    marginLeft: PADDING,
    marginRight: PADDING,
    borderRadius: 5,
    backgroundColor: "white",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 8,
  },
  image: {
    marginLeft: 10,
    marginTop: 5,
    height: CARD_HEIGHT - 10,
    width: 90,
    resizeMode: "cover",
  },
  contentView: {
    margin: 0,
  },
  backIcon: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 2,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 30,
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    zIndex: 2,
  },
  text: {
    fontFamily: "Roboto",
    color: "white",
    width: 60,
    height: 60,
    //fontWeight: "bold",
    fontSize: 30,
  },
});
