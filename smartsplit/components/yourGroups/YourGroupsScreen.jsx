import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";

import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import useTheme from "../../hooks/useThemeHook";

const YourGroupsScreen = () => {
  const { groups } = useStore();
  const { mainHeader } = useTheme();
  const { moveTo, goBack } = usePath();
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
      <Text style={mainHeader}>Your groups</Text>
      <ScreenContent>
        <ScrollView>{groupsViewElement}</ScrollView>
      </ScreenContent>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          top: 600,
          left: 0,
          right: 0,
          padding: 20,
          marginTop: 10,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Button color="white" title="back" onPress={goBack}></Button>
        </View>

        <CirclePlusButton onPressFunc={handlePress} />
      </View>
    </View>
  );
};

export default YourGroupsScreen;
