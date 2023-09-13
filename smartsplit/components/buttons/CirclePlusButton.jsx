import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { darkerBlue } from "../../styles/consts";

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
    backgroundColor: darkerBlue,
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
