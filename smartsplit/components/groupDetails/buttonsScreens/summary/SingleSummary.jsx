import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useStore from "../../../../store";
import useTheme from "../../../../hooks/useThemeHook";
import { rightArrow } from "../../../../appConsts";

const SingleSummary = ({ summary }) => {
  const { theme } = useTheme();
  const { actualGroup } = useStore();
  const { groupCurrency } = actualGroup;
  const { forWho, amount } = summary;
  const { name } = forWho;
  return (
    <View style={styles.container}>
      <Image source={{ uri: rightArrow }} style={[styles.arrowIcon]} />
      <Text
        style={{ marginTop: 5, color: theme.settingsFontColor }}
      >{`${amount}${groupCurrency} for ${name}`}</Text>
    </View>
  );
};

export default SingleSummary;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  arrowIcon: {
    width: 15,
    marginRight: 10,
    marginTop: 4,
    height: 15,
  },
});
