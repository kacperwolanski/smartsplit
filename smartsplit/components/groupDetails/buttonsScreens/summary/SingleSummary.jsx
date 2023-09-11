import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SingleSummary = ({ summary }) => {
  const { forWho, amount } = summary;
  const { name } = forWho;
  return (
    <View>
      <Text style={styles.summary}>{`${amount}PLN for ${name}`}</Text>
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
