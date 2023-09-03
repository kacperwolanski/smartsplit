import React from "react";
import { ScrollView, Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import headerStyle from "../../styles/headerStyle";
import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";

const MainScreen = () => {
  const { moveToScreen, groups } = useStore();
  const handlePress = () => {
    moveToScreen("/addGroup");
  };
  const groupsViewElement = groups.map((group) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <GroupShortcut groupData={group} />
      </View>
    );
  });
  return (
    <View>
      <Text style={headerStyle}>Your groups</Text>
      <ScrollView>{groupsViewElement}</ScrollView>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-end",
          marginTop: 20,
        }}
      >
        <CirclePlusButton onPressFunc={handlePress} />
      </View>
    </View>
  );
};

export default MainScreen;
