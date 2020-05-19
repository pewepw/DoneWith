import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

function BaseView({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default BaseView;
