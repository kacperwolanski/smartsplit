import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import useTheme from "../../hooks/useThemeHook";
import ButtonsContainer from "../appComponents/ButtonsContainer";

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
        <GroupShortcut groupData={group} opacity={0} />
      </View>
    );
  });

  return (
    <View>
      <Text style={mainHeader}>Your groups</Text>
      <ScreenContent>
        <ScrollView>{groupsViewElement}</ScrollView>
      </ScreenContent>

      <ButtonsContainer top={660}>
        <View style={{ marginTop: 50 }}>
          <Button color="white" title="back" onPress={goBack}></Button>
        </View>
        <CirclePlusButton onPressFunc={handlePress} />
      </ButtonsContainer>
    </View>
  );
};

export default YourGroupsScreen;
