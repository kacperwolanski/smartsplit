import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useTheme from "../../hooks/useThemeHook";

const Select = ({ options, selectFunc, defaultValue }) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;

  const optionsViewElements = options.map((option, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          {
            borderTopColor: theme.settingsFontColor,
          },
          styles.optionContainer,
        ]}
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
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(heightAnim, {
      toValue: isExpanded ? 0 : 60 * options.length,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Text style={[styles.options, { color: theme.mainFontColor }]}>
          {defaultValue}
        </Text>
      </TouchableOpacity>
      <Animated.View style={[styles.expandableContent, { height: heightAnim }]}>
        {optionsViewElements}
      </Animated.View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  optionContainer: {
    borderRadius: 10,
    borderTopWidth: 0.3,
    marginTop: 20,
  },
  options: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
  expandableContent: {
    overflow: "hidden",
  },
});
