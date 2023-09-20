import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeButton from "./ThemeButton";

const ThemeChanger = () => {
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <ThemeButton themeColor={"light"} />
        <ThemeButton themeColor={"babyBlue"} />
        <ThemeButton themeColor={"dark"} />
      </View>
    </View>
  );
};

export default ThemeChanger;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
});
