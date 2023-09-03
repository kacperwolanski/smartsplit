import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const EditButton = ({ onPressFunc }) => {
  return (
    <TouchableOpacity onPress={onPressFunc}>
      <Image
        source={require("../../assets/editIcon.png")}
        style={styles.editIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editIcon: {
    width: 25,
    height: 25,
  },
});

export default EditButton;
