import React from "react";
import { View } from "react-native";

const ButtonsContainer = ({ children, top }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: top,
        left: 0,
        right: 0,
        padding: 20,
        marginTop: 10,
      }}
    >
      {children}
    </View>
  );
};

export default ButtonsContainer;
