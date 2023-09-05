import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ScreenContent = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 50 }}>{children}</View>
    </ScrollView>
  );
};

export default ScreenContent;

const styles = StyleSheet.create({
  container: {
    maxHeight: 550,
    padding: 20,
  },
});