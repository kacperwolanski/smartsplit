import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useStore from "../../../../store";

const ThemeButton = ({ themeColor, iconUrl }) => {
  const { setAppTheme } = useStore();
  const handlePress = () => {
    setAppTheme(themeColor);
  };
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={handlePress}>
        <Image
          source={{ uri: iconUrl }}
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
