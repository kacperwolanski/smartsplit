import React from "react";
import useStore from "./store";
import MainScreen from "./components/mainScreen/MainScreen";
import { View } from "react-native";
import NewGroupScreen from "./components/newGroup/NewGroupScreen";

const Navigation = () => {
  const { actualScreen, groups } = useStore();

  console.log(actualScreen);
  return (
    <View>
      {actualScreen === "/mainScreen" && <MainScreen groups={groups} />}
      {actualScreen === "/addGroup" && <NewGroupScreen />}
    </View>
  );
};

export default Navigation;
