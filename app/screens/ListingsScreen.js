import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import BaseView from "../components/BaseView";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition for sale",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <BaseView style={styles.baseView}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </BaseView>
  );
}

const styles = StyleSheet.create({
  baseView: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
