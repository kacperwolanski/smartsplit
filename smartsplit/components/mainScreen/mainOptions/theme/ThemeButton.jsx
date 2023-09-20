import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useStore from "../../../../store";
import { getImagePath } from "./getImagePath";
import useTheme from "../../../../hooks/useThemeHook";

const ThemeButton = ({ themeColor }) => {
  const { setAppTheme } = useStore();
  const imageUrl = getImagePath(themeColor);
  const { theme } = useTheme();

  const handlePress = () => {
    setAppTheme(themeColor);
  };
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={handlePress}>
        <Image
          source={{ uri: imageUrl }}
          style={[
            styles.icon,
            { marginLeft: themeColor === "babyBlue" ? 3 : 0 },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
  },

  icon: {
    width: 60,
    height: 60,
  },
});
