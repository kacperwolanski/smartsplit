import React from "react";
import useStore from "./store";
import MainScreen from "./components/mainScreen/MainScreen";
import { View } from "react-native";
import NewGroupScreen from "./components/newGroup/NewGroupScreen";
import GroupDetailsScreen from "./components/groupDetails/GroupDetailsScreen";

const Navigation = () => {
  const { actualScreen, actualGroup } = useStore();
  return (
    <View>
      {actualScreen === "/mainScreen" && <MainScreen />}
      {actualScreen === "/addGroup" && <NewGroupScreen />}
      {actualGroup && actualScreen === `/group/${actualGroup.id}` && (
        <GroupDetailsScreen />
      )}
    </View>
  );
};

export default Navigation;
