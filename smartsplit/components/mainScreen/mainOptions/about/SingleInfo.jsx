import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";

const SingleInfo = ({ title, value, first }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textContainer,
          {
            borderTopColor: theme.settingsFontColor,
            borderTopWidth: first ? 0 : 0.2,
          },
        ]}
      >
        <Text style={[{ color: theme.mainFontColor }, styles.textStyle]}>
          {title}
        </Text>
        <Text style={[{ color: theme.settingsFontColor }, styles.textStyle]}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default SingleInfo;
const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  textContainer: {
    padding: 2,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textStyle: {
    fontSize: 16,
  },
});
