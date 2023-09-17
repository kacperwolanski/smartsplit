import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeButton from "./ThemeButton";

const ThemeChanger = () => {
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <ThemeButton theme={"light"} />
        <ThemeButton theme={"babyBlue"} />
        <ThemeButton theme={"dark"} />
      </View>
    </View>
  );
};

export default ThemeChanger;

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
  },
});
