import React from "react";
import useStore from "../../store";
import MainScreen from "../mainScreen/MainScreen";
import { View } from "react-native";
import NewGroupScreen from "../newGroup/NewGroupScreen";
import GroupDetailsScreen from "../groupDetails/GroupDetailsScreen";
import OptionsScreen from "../groupDetails/buttonsScreens/OptionsScreen";
import HistoryScreen from "../groupDetails/buttonsScreens/HistoryScreen";
import SummaryScreen from "../groupDetails/buttonsScreens/SummaryScreen";

const Navigation = () => {
  const { actualScreen, actualGroup } = useStore();
  return (
    <View>
      {actualScreen === "/mainScreen" && <MainScreen />}
      {actualScreen === "/addGroup" && <NewGroupScreen />}
      {actualGroup && actualScreen === `/group/${actualGroup.id}` && (
        <GroupDetailsScreen />
      )}
      {actualGroup && actualScreen === `/group/${actualGroup.id}/summary` && (
        <SummaryScreen />
      )}
      {actualGroup && actualScreen === `/group/${actualGroup.id}/history` && (
        <HistoryScreen />
      )}
      {actualGroup && actualScreen === `/group/${actualGroup.id}/options` && (
        <OptionsScreen />
      )}
    </View>
  );
};

export default Navigation;
