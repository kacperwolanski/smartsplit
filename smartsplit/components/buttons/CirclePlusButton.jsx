import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import useTheme from "../../hooks/useThemeHook";

const CirclePlusButton = ({ onPressFunc }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.circleButtonStyle, { backgroundColor: theme.buttonColor }]}
      onPress={onPressFunc}
    >
      <Text
        style={{
          fontSize: 45,
          color: theme.mainFontColor,
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        +
      </Text>
    </TouchableOpacity>
  );
};

export default CirclePlusButton;

const styles = StyleSheet.create({
  circleButtonStyle: {
    borderRadius: "50%",
    width: 70,
    height: 70,
    justifyContent: "center",
    marginTop: 40,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
  },
});
