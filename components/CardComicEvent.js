import React, { Component } from "react";
import Modal from "react-native-modal";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { MarvelContext } from "../model/MarvelModel";
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";

import Comic from "../pages/Comic";
import BackSvg from "../assets/back.svg";

/*const CardComicEvent = observer(({ event }) => {
  const marvel = useContext(MarvelContext);

  useEffect(() => {
    marvel.loadEventComics(event);
  }, []);

  if (marvel.comics == null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={marvel.comics}
          renderItem={({ item: rowData }) => {
            return (
              <View style={styles.card}>
                <TouchableHighlight
                  underlayColor={"#f0f0"}
                  onPress={() => {
                    this.setState({ modalVisible: true });
                  }}
                >
                  <Image
                    source={{
                        uri: rowData.images[0].path + "." + rowData.images[0].extension,
                    }}
                    style={styles.image}
                  />
                </TouchableHighlight>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          style={styles.box}
          ListHeaderComponent={() => <View width={PADDING} />}
          ListFooterComponent={() => <View width={PADDING} />}
        />
      </>
  );
});*/

/*<Details Title="Descripción" Description={marvel.event[0].description} />*/

//export default CardComicEvent;

export default class CardComicEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      eventComics: [],
      isLoading: true,
      data: this.props.Data,
    };
  }

  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.props.Data !== prevProps.Data) {
        fetch(
            "http://gateway.marvel.com/v1/public/events/" +
              this.props.Data +
              "/comics?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665"
          )
            .then((response) => response.json())
            .then((json) => {
              this.setState({ eventComics: json.data.results });
            })
            .catch((error) => console.error(error))
            .finally(() => {
              this.setState({ isLoading: false });
            });
    }
  }

  componentDidMount() {
    fetch(
      "http://gateway.marvel.com/v1/public/events/" +
        this.props.Data +
        "/comics?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ eventComics: json.data.results });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { eventComics, isLoading, modalVisible } = this.state;
    return (
      <>
        {isLoading ? (
          <ActivityIndicator size="large"/>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={eventComics}
            renderItem={({ item: rowData }) => {
              return (
                <View style={styles.card}>
                  <TouchableHighlight
                    underlayColor={"#f0f0"}
                    onPress={() => {
                      this.setState({ modalVisible: true });
                    }}
                  >
                    <Image
                      source={{
                        uri:
                          rowData.images[0].path +
                          "." +
                          rowData.images[0].extension,
                      }}
                      style={styles.image}
                    />
                  </TouchableHighlight>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            style={styles.box}
            ListHeaderComponent={() => <View width={PADDING} />}
            ListFooterComponent={() => <View width={PADDING} />}
          />
        )}

        <View>
        <Modal
            backdropOpacity={0.3}
            isVisible={modalVisible}
            style={styles.contentView}
          >
            <TouchableHighlight
              underlayColor={"#f0f0"}
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
              style={[styles.closeIcon]}
            >
              <BackSvg style={styles.backIcon} width={15} height={15} />
            </TouchableHighlight>
            <Comic />
          </Modal>
        </View>
      </>
    );
  }
}

const HEIGHT = 400;
const WIDTH = 260;
const PADDING = 10;
const RADIUS = 10;

const styles = StyleSheet.create({
  box: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: HEIGHT,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  card: {
    marginLeft: 0,
    marginTop: 5,
    height: HEIGHT - 20,
    width: WIDTH,
    justifyContent: "center",
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 8,
    shadowColor: "#826A92",
    shadowOpacity: 0.3,
    elevation: 8,
    marginRight: 20,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: RADIUS,
  },
  image: {
    height: HEIGHT - 20,
    width: WIDTH,
    resizeMode: "cover",
    borderRadius: RADIUS,
  },

  //Estilos del Modal
  contentView: {
    margin: 0,
  },
  closeIcon: {
     //borderWidth: 2,
     position: "absolute",
     backgroundColor: 'rgba(196, 164, 216, 0.8)',
     borderRadius: 10,
     top: 15,
     left: 15,
     width: 35,
     height: 35,
     alignSelf: "flex-end",
     justifyContent: "center",
     alignItems: "center",
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
