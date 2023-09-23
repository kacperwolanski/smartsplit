import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useStore from "../../store";
import { usePath } from "../../hooks/usePathHook";
import { controlTextLen } from "../../helpers/controlTextLen";
import useTheme from "../../hooks/useThemeHook";
import { LinearGradient } from "expo-linear-gradient";

const GroupShortcut = ({ groupData }) => {
  const { moveTo } = usePath();
  const { setActualGroup } = useStore();
  const { contentField, theme } = useTheme();
  const styles = groupShortcutStyles;
  const { name, amount, createDate, id, groupType, groupNote } = groupData;

  const handlePress = () => {
    setActualGroup(id);
    moveTo(`/group/${id}`);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <LinearGradient
        colors={theme.groupColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[groupShortcutStyles.container, contentField]}
      >
        <Text style={[styles.date, { color: theme.buttonColor }]}>
          {createDate}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 24, color: theme.mainFontColor }}>
            {name}
          </Text>
          <View style={{ flexDirection: "row", gap: 2, marginTop: 6 }}>
            <Image
              source={{ uri: theme.icons.groupsPlaceholderImage }}
              style={styles.personImage}
            />
            <Text style={{ color: theme.mainFontColor }}>{amount}</Text>
          </View>
        </View>
        <Text style={{ textAlign: "right", color: theme.mainFontColor }}>
          {groupType}
        </Text>
        <Text
          style={{ marginTop: 20, fontSize: 12, color: theme.mainFontColor }}
        >
          {controlTextLen(groupNote, 30)}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GroupShortcut;

const groupShortcutStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    minHeight: 130,
  },

  date: {
    marginBottom: 5,
    fontSize: 12,
  },
  personImage: {
    width: 14,
    height: 14,
    marginTop: 1,
  },
});
