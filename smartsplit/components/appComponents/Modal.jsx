import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Modal = ({ children, opacity }) => {
  return (
    <View style={styles.container}>
      <View style={[{ opacity: opacity }, styles.modal]}>
        <Text> </Text>
      </View>
      {children}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  modal: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "black",
    minHeight: 2000,
    minWidth: 1000,

    position: "absolute",
    top: -750,
    zIndex: 1,
  },
});
