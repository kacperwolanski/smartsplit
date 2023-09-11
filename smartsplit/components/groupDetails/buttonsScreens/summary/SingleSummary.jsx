import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useStore from "../../../../store";

const SingleSummary = ({ summary }) => {
  const { actualGroup } = useStore();
  const { groupCurrency } = actualGroup;
  const { forWho, amount } = summary;
  const { name } = forWho;
  return (
    <View>
      <Text
        style={styles.summary}
      >{`${amount}${groupCurrency} for ${name}`}</Text>
    </View>
  );
};

export default SingleSummary;
const styles = StyleSheet.create({
  summary: {
    color: "white",
    marginTop: 5,
  },
});
