import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import useStore from "../../store";
import CirclePlusButton from "../buttons/CirclePlusButton";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import useTheme from "../../hooks/useThemeHook";
import ButtonsContainer from "../appComponents/ButtonsContainer";
import GroupsPlaceHolder from "../placeholders/GroupsPlaceholder";

const YourGroupsScreen = () => {
  const { groups } = useStore();
  const { mainHeader, theme } = useTheme();
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
      {groupsViewElement.length > 0 ? (
        <ScreenContent>{groupsViewElement}</ScreenContent>
      ) : (
        <GroupsPlaceHolder />
      )}

      <ButtonsContainer top={660}>
        <View style={{ marginTop: 50 }}>
          <Button
            color={theme.passiveSysBtn}
            title="back"
            onPress={goBack}
          ></Button>
        </View>
        <CirclePlusButton onPressFunc={handlePress} />
      </ButtonsContainer>
    </View>
  );
};

export default YourGroupsScreen;
