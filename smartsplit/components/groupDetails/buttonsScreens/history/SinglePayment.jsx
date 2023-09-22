import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import useActualGroup from "../../../../hooks/useActualGroupHook";

const SinglePayment = ({ payment }) => {
  const { actualGroup } = useActualGroup();
  const { groupCurrency } = actualGroup;
  const { person, note, amount } = payment;
  const { theme } = useTheme();
  const boldText = {
    fontWeight: "bold",
    color: theme.mainFontColor,
    marginTop: 10,
  };
  return (
    <View>
      <View style={styles.borderContainer}>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 0.3,
            borderTopColor: theme.settingsFontColor,
          }}
        >
          <Text style={boldText}>{person.name} </Text>

          <Text style={boldText}>
            {amount} {groupCurrency}
          </Text>
        </View>

        <Text style={{ fontSize: 12, color: theme.mainFontColor }}>
          {note.length > 0 ? note : "No description"}
        </Text>
      </View>
    </View>
  );
};

export default SinglePayment;
const styles = StyleSheet.create({
  borderContainer: { padding: 10 },
});
