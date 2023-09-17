import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useStore from "../../../../store";
import useTheme from "../../../../hooks/useThemeHook";

const SingleSummary = ({ summary }) => {
  const { theme } = useTheme();
  const { actualGroup } = useStore();
  const { groupCurrency } = actualGroup;
  const { forWho, amount } = summary;
  const { name } = forWho;
  return (
    <View>
      <Text
        style={{ marginTop: 5, color: theme.mainFontColor }}
      >{`${amount}${groupCurrency} for ${name}`}</Text>
    </View>
  );
};

export default SingleSummary;
const styles = StyleSheet.create({
  summary: {},
});
