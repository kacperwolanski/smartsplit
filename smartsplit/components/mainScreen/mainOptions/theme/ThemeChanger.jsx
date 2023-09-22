import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeButton from "./ThemeButton";
import useTheme from "../../../../hooks/useThemeHook";

const ThemeChanger = () => {
  const { theme } = useTheme();
  const darkModeIcon = theme.icons.darkModeIconUrl;
  const lightModeIcon = theme.icons.lightModeIconUrl;
  const blueModeIcon = theme.icons.babyBlueModeIconUrl;
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <ThemeButton themeColor={"light"} iconUrl={lightModeIcon} />
        <ThemeButton themeColor={"babyBlue"} iconUrl={blueModeIcon} />
        <ThemeButton themeColor={"dark"} iconUrl={darkModeIcon} />
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
