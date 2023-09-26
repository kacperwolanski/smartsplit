import React from "react";
import useStore from "../../store";
import { View } from "react-native";
import useScreen from "../../hooks/useScreenHook";

const Navigation = () => {
  const { path } = useStore();
  const lastPathElement = path[path.length - 1];
  const { chooseScreen } = useScreen();
  const actualScreen = chooseScreen(lastPathElement);

  return <View>{actualScreen}</View>;
};

export default Navigation;
