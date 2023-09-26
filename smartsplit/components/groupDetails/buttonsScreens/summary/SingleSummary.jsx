import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import { rightArrow } from "../../../../appConsts";
import useActualGroup from "../../../../hooks/useActualGroupHook";

const SingleSummary = ({ summary }) => {
  const { theme } = useTheme();
  const { actualGroup } = useActualGroup();
  const { groupCurrency } = actualGroup;
  const { forWho, amount } = summary;
  const { name } = forWho;
  return (
    <View style={styles.container}>
      <Image source={theme.icons.rightArrow} style={[styles.arrowIcon]} />
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
