import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import BaseView from "../components/BaseView";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <BaseView>
      <FlatList
        style={styles.container}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      ></FlatList>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MessagesScreen;
