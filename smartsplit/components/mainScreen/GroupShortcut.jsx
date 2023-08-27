import React from "react";
import { Image, Text, View } from "react-native";
import { groupShortcutStyles } from "./styles";

const GroupShortcut = ({ groupData }) => {
  const { name, amount, createDate } = groupData;
  return (
    <View style={groupShortcutStyles.container}>
      <Text style={groupShortcutStyles.date}>{createDate}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={groupShortcutStyles.name}>{name}</Text>
        <View style={{ flexDirection: "row", gap: 2, marginTop: 6 }}>
          <Image
            source={require("../../assets/personIcon.png")}
            style={groupShortcutStyles.personImage}
          />
          <Text style={{ color: "white" }}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default GroupShortcut;
