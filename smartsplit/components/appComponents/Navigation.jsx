import React from "react";
import useStore from "../../store";
import MainScreen from "../mainScreen/MainScreen";
import { View } from "react-native";
import NewGroupScreen from "../newGroup/NewGroupScreen";
import GroupDetailsScreen from "../groupDetails/GroupDetailsScreen";
import OptionsScreen from "../groupDetails/buttonsScreens/OptionsScreen";
import SummaryScreen from "../groupDetails/buttonsScreens/summary/SummaryScreen";
import HistoryScreen from "../groupDetails/buttonsScreens/history/HistoryScreen";

const Navigation = () => {
  const { path, actualGroup } = useStore();
  const lastPathElement = path[path.length - 1];

  return (
    <View>
      {lastPathElement === "/mainScreen" && <MainScreen />}
      {lastPathElement === "/addGroup" && <NewGroupScreen />}
      {actualGroup && lastPathElement === `/group/${actualGroup.id}` && (
        <GroupDetailsScreen />
      )}
      {actualGroup &&
        lastPathElement === `/group/${actualGroup.id}/summary` && (
          <SummaryScreen />
        )}
      {actualGroup &&
        lastPathElement === `/group/${actualGroup.id}/history` && (
          <HistoryScreen />
        )}
      {actualGroup &&
        lastPathElement === `/group/${actualGroup.id}/options` && (
          <OptionsScreen />
        )}
    </View>
  );
};

export default Navigation;
