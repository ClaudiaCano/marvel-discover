import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

import CarouselItem from "../components/CarouselItem";
import AppBar from "../components/AppBar";
import BtnVerMas from "../components/BtnVerMas";

import Secret1 from "../assets/1.1.png";
import Secret2 from "../assets/1.2.png";
import Secret3 from "../assets/1.3.png";

import Star1 from "../assets/2.1.png";
import Star2 from "../assets/2.2.png";
import Star3 from "../assets/2.3.png";

import Avengers1 from "../assets/3.1.png";
import Avengers2 from "../assets/3.2.png";
import Avengers3 from "../assets/3.3.png";

const sequences = {
  "Secret Wars": [1, 2, 3, 4, 5],
  "Star Wars": [2, 3, 5, 7, 9],
  "Avengers VS X-Men": [2, 4, 6, 8, 10],
};

const Number = ({ number }) => (
  <View>
    <View style={styles.number}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  </View>
);

const NumberList = ({ array }) => (
  <FlatList
    data={array.map((n, index) => ({ key: index.toString(), number: n }))}
    renderItem={({ item }) => <Number {...item} />}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    ListHeaderComponent={() => <View width={10} />}
    ListFooterComponent={() => <View width={10} />}
  />
);

export default class HomeModif extends React.Component {
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselItem />
          <View height={20} />

          {Object.entries(sequences).map(([title, array]) => {
            return (
              <View key={title} style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.title}>{title}</Text>
                  <BtnVerMas style={styles.btn} />
                </View>

                <View style={styles.card}>
                  <NumberList array={array} />
                </View>
              </View>
            );
          })}

          <View style={styles.sizedbox} />
        </ScrollView>

        <AppBar />
      </View>
    );
  }
}

const CARD_HEIGHT = 150;
const PADDING = 20;

const styles = StyleSheet.create({
  sizedbox: {
    height: 100,
  },
  container: {
    flex: 1,
    marginBottom: 40,
  },
  number: {
    height: CARD_HEIGHT - 10,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
    resizeMode: "cover",
  },
  numberText: {
    fontSize: 25,
    color: "gray",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
    marginLeft: PADDING,
    textTransform: "uppercase",
  },
  box: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: PADDING,
  },
  card: {
    flex: 0,
    flexDirection: "row",
    width: "auto",
    height: CARD_HEIGHT,
    marginTop: 0,
    marginLeft: PADDING,
    marginRight: PADDING,
    borderRadius: 5,
    backgroundColor: "white",

    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
});
