import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import BaseView from "./app/components/BaseView";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountSceen from "./app/screens/AccountSceen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  testContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
