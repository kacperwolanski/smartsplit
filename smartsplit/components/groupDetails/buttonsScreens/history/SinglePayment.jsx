import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import useActualGroup from "../../../../hooks/useActualGroupHook";
import RemoveButton from "../../../buttons/RemoveButton";

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
  const handleRemovePayment = () => {};
  return (
    <View>
      <View>
        <View style={{ padding: 10 }}>
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
        <View style={{ position: "absolute", top: 25, right: 10 }}>
          <RemoveButton removeFunction={handleRemovePayment} />
        </View>
      </View>
    </View>
  );
};

export default SinglePayment;
const styles = StyleSheet.create({});
