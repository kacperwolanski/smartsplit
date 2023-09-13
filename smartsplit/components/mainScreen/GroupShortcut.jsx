import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import useStore from "../../store";
import { usePath } from "../../hooks/usePathHook";
import { controlTextLen } from "../../helpers/controlTextLen";
import { groupShortcutStyles } from "./styles";

const GroupShortcut = ({ groupData }) => {
  const { moveTo } = usePath();
  const styles = groupShortcutStyles;
  const { name, amount, createDate, id, groupType, groupNote } = groupData;
  const { setActualGroup } = useStore();
  const handlePress = () => {
    setActualGroup(groupData);
    moveTo(`/group/${id}`);
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
      <Text style={styles.groupNote}>{controlTextLen(groupNote, 30)}</Text>
    </TouchableOpacity>
  );
};

export default GroupShortcut;
