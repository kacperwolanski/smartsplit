import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  groupsPlaceholderImage,
  paymentPlaceholderImage,
} from "../../appConsts";
import useTheme from "../../hooks/useThemeHook";

const GroupsPlaceHolder = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: groupsPlaceholderImage }}
        style={styles.paymentImage}
      />
      <Text style={[{ color: theme.mainFontColor }]}>No groups to show</Text>
    </View>
  );
};

export default GroupsPlaceHolder;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentImage: {
    marginLeft: 10,
    width: 150,
    height: 150,
  },
});
