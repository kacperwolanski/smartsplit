import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SinglePayment from "./SinglePayment";

const DayPayments = ({ date, payments, index }) => {
  console.log(date, payments);
  const paymentViewElements = payments.map((payment, index) => {
    return <SinglePayment payment={payment} key={index} />;
  });
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={[styles.container, { borderTopWidth: index ? 0.2 : 0 }]}>
        <Text style={styles.date}>{date}</Text>
        <View>{paymentViewElements}</View>
      </View>
    </View>
  );
};

export default DayPayments;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderTopColor: "white",
  },
  date: {
    color: "#007AFF",
    fontSize: 18,
  },
});
