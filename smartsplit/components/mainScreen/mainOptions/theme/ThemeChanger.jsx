import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeButton from "./ThemeButton";
import useTheme from "../../../../hooks/useThemeHook";

const ThemeChanger = () => {
  const { theme } = useTheme();
  return (
    <View>
      <Text style={[styles.header, { color: theme.mainFontColor }]}>THEME</Text>
      <View
        style={[
          styles.buttonsContainer,
          { backgroundColor: theme.contentFieldColor },
        ]}
      >
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
  header: {
    fontSize: 13,
    marginBottom: 5,
  },
});
