import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import useTheme from "../../hooks/useThemeHook";

const GroupsPlaceHolder = ({ marginTop }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        marginTop: marginTop,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={theme.icons.groupsPlaceholderImage}
        style={styles.paymentImage}
      />
      <Text style={[{ color: theme.mainFontColor }]}>No groups to show</Text>
    </View>
  );
};

export default GroupsPlaceHolder;

const styles = StyleSheet.create({
  container: {},
  paymentImage: {
    marginLeft: 10,
    width: 150,
    height: 150,
  },
});
