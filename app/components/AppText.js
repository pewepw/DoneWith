import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import color from "../config/colors";

function AppText({ children, style }) {
  return <Text style={([styles.text], style)}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: color.black,
  },
});

export default AppText;
