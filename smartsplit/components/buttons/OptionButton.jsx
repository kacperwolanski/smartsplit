import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { historyIconUrl, optionsIconUrl } from "../../appConsts";
const OptionButton = ({ imagePath }) => {
  let additionalStyle = {
    marginLeft: imagePath === optionsIconUrl ? 5 : 0,
    marginRight: imagePath === historyIconUrl ? 5 : 0,
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: imagePath }}
        style={[styles.icon, additionalStyle]}
      />
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#191B3F",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 65,
    height: 65,
  },
});
