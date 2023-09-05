import React from "react";
import { ScrollView, Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import headerStyle from "../../styles/headerStyle";
import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";

const MainScreen = () => {
  const { groups } = useStore();
  const { moveTo } = usePath();
  const handlePress = () => {
    moveTo("/addGroup");
  };
  const groupsViewElement = groups.map((group) => {
    return (
      <View style={{ marginBottom: 20 }} key={group.id}>
        <GroupShortcut groupData={group} />
      </View>
    );
  });

  return (
    <View>
      <Text style={headerStyle}>Your groups</Text>
      <ScreenContent>
        <ScrollView>{groupsViewElement}</ScrollView>
      </ScreenContent>

      <View
        style={{
          alignItems: "flex-end",
          marginRight: 20,
        }}
      >
        <CirclePlusButton onPressFunc={handlePress} />
      </View>
    </View>
  );
};

export default MainScreen;
