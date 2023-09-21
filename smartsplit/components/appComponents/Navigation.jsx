import React, { useEffect } from "react";
import useStore from "../../store";
import MainScreen from "../mainScreen/MainScreen";
import { View } from "react-native";
import NewGroupScreen from "../newGroup/NewGroupScreen";
import GroupDetailsScreen from "../groupDetails/GroupDetailsScreen";
import OptionsScreen from "../groupDetails/buttonsScreens/options/OptionsScreen";
import SummaryScreen from "../groupDetails/buttonsScreens/summary/SummaryScreen";
import HistoryScreen from "../groupDetails/buttonsScreens/history/HistoryScreen";
import NewPaymentScreen from "../newPayment/NewPaymentScreen";
import YourGroupsScreen from "../yourGroups/YourGroupsScreen";
import MainOptions from "../mainScreen/mainOptions/MainOptions";
import AppearAnimation from "./AppearAnimation";
import AboutScreen from "../mainScreen/mainOptions/AboutScreen";

const Navigation = () => {
  const { path, actualGroup, slideDirection } = useStore();
  const lastPathElement = path[path.length - 1];

  const chooseScreen = () => {
    switch (lastPathElement) {
      case "/mainScreen":
        return <MainScreen />;
      case "/mainOptions":
        return <MainOptions />;
      case "/yourGroups":
        return <YourGroupsScreen />;
      case "/addGroup":
        return <NewGroupScreen />;
      case "/addPayment":
        return <NewPaymentScreen />;
      case "/about":
        return <AboutScreen />;
    }
    if (actualGroup) {
      switch (lastPathElement) {
        case `/group/${actualGroup.id}`:
          return <GroupDetailsScreen />;
        case `/group/${actualGroup.id}/summary`:
          return <SummaryScreen />;
        case `/group/${actualGroup.id}/history`:
          return <HistoryScreen />;
        case `/group/${actualGroup.id}/options`:
          return <OptionsScreen />;
      }
    }

    return <MainScreen />;
  };
  const chosenScreen = chooseScreen();

  return (
    <View>
      <AppearAnimation offset={1} direction={slideDirection}>
        <View>{chosenScreen}</View>
      </AppearAnimation>
    </View>
  );
};

export default Navigation;
