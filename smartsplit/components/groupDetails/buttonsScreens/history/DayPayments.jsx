import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SinglePayment from "./SinglePayment";
import useTheme from "../../../../hooks/useThemeHook";

const DayPayments = ({ date, payments, index }) => {
  const { theme } = useTheme();
  const paymentViewElements = payments.map((payment, index) => {
    return <SinglePayment payment={payment} key={index} />;
  });
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={[styles.container, { borderTopWidth: index ? 0.2 : 0 }]}>
        <Text style={{ fontSize: 18, color: theme.buttonColor }}>{date}</Text>
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
});
