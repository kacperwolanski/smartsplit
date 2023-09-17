import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { mainFontColor } from "../../styles/consts";
import useTheme from "../../hooks/useThemeHook";

const Select = ({ options, selectFunc }) => {
  const { theme } = useTheme();
  const optionsViewElements = options.map((option, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          borderTopWidth: 0.3,
          marginTop: 20,
          borderTopColor: theme.settingsFontColor,
        }}
        onPress={() => {
          selectFunc(option);
        }}
      >
        <Text style={[styles.options, { color: theme.mainFontColor }]}>
          {option}
        </Text>
      </TouchableOpacity>
    );
  });
  return <View>{optionsViewElements}</View>;
};

export default Select;

const styles = StyleSheet.create({
  options: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
});
