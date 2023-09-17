import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { mainFontColor } from "../../../../styles/consts";
import useStore from "../../../../store";
import { getImagePath } from "./getImagePath";

const ThemeButton = ({ theme }) => {
  const { setAppTheme } = useStore();
  const imageUrl = getImagePath(theme);

  const handlePress = () => {
    setAppTheme(theme);
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image
          source={{ uri: imageUrl }}
          style={[styles.icon, { marginLeft: theme === "babyBlue" ? 3 : 0 }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#224c8c",
    borderRadius: 20,
    padding: 10,
  },

  icon: {
    width: 60,
    height: 60,
  },
});
