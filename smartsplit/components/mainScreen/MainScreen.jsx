import React from "react";
import { Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import headerStyle from "../../styles/headerStyle";
import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";

const MainScreen = () => {
  const { moveToScreen, groups } = useStore();
  const handlePress = () => {
    moveToScreen("/addGroup");
  };
  return (
    <View>
      <Text style={headerStyle}>Your groups</Text>
      <View style={{ gap: 20 }}>
        <GroupShortcut groupData={groups[0]} />
        <GroupShortcut groupData={groups[1]} />
        <GroupShortcut groupData={groups[2]} />
      </View>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-end" }}>
        <CirclePlusButton onPressFunc={handlePress} />
      </View>
    </View>
  );
};

export default MainScreen;
