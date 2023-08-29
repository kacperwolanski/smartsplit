import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CirclePlusButton = ({ onPressFunc }) => {
  return (
    <TouchableOpacity style={styles.circleButtonStyle} onPress={onPressFunc}>
      <Text
        style={{
          fontSize: 45,
          color: "white",
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
    backgroundColor: "#191B3F",
    width: 70,
    height: 70,
    justifyContent: "center",
    marginTop: 40,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});
