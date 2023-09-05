import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SingleSummary = () => {
  return (
    <View>
      <Text style={styles.summary}>-15PLN for Dumin</Text>
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
