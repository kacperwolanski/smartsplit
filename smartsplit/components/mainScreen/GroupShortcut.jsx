import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { groupShortcutStyles } from "./styles";
import useStore from "../../store";

const GroupShortcut = ({ groupData }) => {
  const styles = groupShortcutStyles;
  const { name, amount, createDate, id, groupType } = groupData;
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
      <Text style={styles.date}>{createDate}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: "row", gap: 2, marginTop: 6 }}>
          <Image
            source={require("../../assets/personIcon.png")}
            style={styles.personImage}
          />
          <Text style={{ color: "white" }}>{amount}</Text>
        </View>
      </View>
      <Text style={styles.groupType}>{groupType}</Text>
    </TouchableOpacity>
  );
};

export default GroupShortcut;
