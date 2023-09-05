import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const ScreenContent = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default ScreenContent;

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
    padding: 20,
  },
});
