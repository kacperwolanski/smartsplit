import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ScreenContent = ({ children, scrollEnabled }) => {
  return (
    <ScrollView style={styles.container} scrollEnabled={scrollEnabled}>
      <View>{children}</View>
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
