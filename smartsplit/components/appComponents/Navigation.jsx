import React, { useEffect } from "react";
import useStore from "../../store";
import MainScreen from "../mainScreen/MainScreen";
import { Animated, View } from "react-native";
import NewGroupScreen from "../newGroup/NewGroupScreen";
import GroupDetailsScreen from "../groupDetails/GroupDetailsScreen";
import OptionsScreen from "../groupDetails/buttonsScreens/options/OptionsScreen";
import SummaryScreen from "../groupDetails/buttonsScreens/summary/SummaryScreen";
import HistoryScreen from "../groupDetails/buttonsScreens/history/HistoryScreen";
import NewPaymentScreen from "../newPayment/NewPaymentScreen";
import YourGroupsScreen from "../yourGroups/YourGroupsScreen";
import MainOptions from "../mainScreen/mainOptions/MainOptions";
import AppearAnimation from "./AppearAnimation";

const Navigation = () => {
  const { path, actualGroup, slideDirection } = useStore();
  const lastPathElement = path[path.length - 1];

  return (
    <AppearAnimation offset={1} direction={slideDirection}>
      <View>
        {lastPathElement === "/mainScreen" && <MainScreen />}
        {lastPathElement === "/mainOptions" && <MainOptions />}
        {lastPathElement === "/yourGroups" && <YourGroupsScreen />}
        {lastPathElement === "/addGroup" && <NewGroupScreen />}
        {lastPathElement === "/addPayment" && <NewPaymentScreen />}
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
    </AppearAnimation>
  );
};

export default Navigation;
