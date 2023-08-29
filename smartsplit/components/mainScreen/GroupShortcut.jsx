import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { groupShortcutStyles } from "./styles";
import useStore from "../../store";

const GroupShortcut = ({ groupData }) => {
  const { name, amount, createDate, id } = groupData;
  const { setActualGroup, moveToScreen } = useStore();
  const handlePress = () => {
    setActualGroup(groupData);
    moveToScreen(`/group/${id}`);
  };
  return (
    <TouchableOpacity
      style={groupShortcutStyles.container}
      onPress={handlePress}
    >
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
    </TouchableOpacity>
  );
};

export default GroupShortcut;
