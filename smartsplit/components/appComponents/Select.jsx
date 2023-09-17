import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { blueContainerStyle } from "../../styles/blueContainer";
import { mainFontColor } from "../../styles/consts";

const Select = ({ options, selectFunc }) => {
  console.log(options);
  const optionsViewElements = options.map((option, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          selectFunc(option);
        }}
      >
        <Text style={styles.options}>{option}</Text>
      </TouchableOpacity>
    );
  });
  return <View>{optionsViewElements}</View>;
};

export default Select;

const styles = StyleSheet.create({
  options: {
    color: mainFontColor,
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
});
