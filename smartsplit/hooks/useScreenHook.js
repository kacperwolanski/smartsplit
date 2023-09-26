import React from "react";
import useActualGroup from "./useActualGroupHook";
import MainScreen from "../components/mainScreen/MainScreen";
import NewGroupScreen from "../components/newGroup/NewGroupScreen";
import GroupDetailsScreen from "../components/groupDetails/GroupDetailsScreen";
import OptionsScreen from "../components/groupDetails/buttonsScreens/options/OptionsScreen";
import SummaryScreen from "../components/groupDetails/buttonsScreens/summary/SummaryScreen";
import HistoryScreen from "../components/groupDetails/buttonsScreens/history/HistoryScreen";
import NewPaymentScreen from "../components/newPayment/NewPaymentScreen";
import YourGroupsScreen from "../components/yourGroups/YourGroupsScreen";
import MainOptions from "../components/mainScreen/mainOptions/MainOptions";
import AboutScreen from "../components/mainScreen/mainOptions/AboutScreen";
import useStore from "../store";

const useScreen = () => {
  const { actualGroupId } = useStore();
  const { actualGroup } = useActualGroup();
  const chooseScreen = (pathElement) => {
    switch (pathElement) {
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
      switch (pathElement) {
        case `/group/${actualGroupId}`:
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

  return { chooseScreen };
};

export default useScreen;
