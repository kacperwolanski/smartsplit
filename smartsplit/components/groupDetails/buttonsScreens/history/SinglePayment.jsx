import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import useActualGroup from "../../../../hooks/useActualGroupHook";

const SinglePayment = ({ payment }) => {
  const { actualGroup } = useActualGroup();
  const { groupCurrency } = actualGroup;
  const { person, note, amount } = payment;
  const { theme } = useTheme();
  const boldText = { fontWeight: "bold", color: theme.mainFontColor };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={boldText}>{person.name} </Text>

        <Text style={boldText}>
          {amount} {groupCurrency}
        </Text>
      </View>
      <Text style={{ fontSize: 12, color: theme.mainFontColor }}>{note}</Text>
    </View>
  );
};

export default SinglePayment;
const styles = StyleSheet.create({
  container: { padding: 5 },
});
