import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const RemoveButton = ({ onPressFunc }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPressFunc}>
      <Text style={styles.text}>-</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    marginTop: 2,
  },
  text: {
    marginTop: -2,
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default RemoveButton;
