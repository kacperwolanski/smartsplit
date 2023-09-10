import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SinglePayment = ({ payment }) => {
  const { person, title, amount, date } = payment;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.boldText}>{person.name} </Text>

        <Text style={styles.boldText}>{amount}</Text>
      </View>
      <Text style={{ fontSize: 12, color: "white" }}>{note}</Text>
    </View>
  );
};

export default SinglePayment;
const styles = StyleSheet.create({
  container: { padding: 5 },
  boldText: { fontWeight: "bold", color: "white" },
});
