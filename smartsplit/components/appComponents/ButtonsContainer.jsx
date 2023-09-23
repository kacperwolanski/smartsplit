import React from "react";
import { Dimensions, View } from "react-native";

const ButtonsContainer = ({ children, top }) => {
  const screenHeight = Dimensions.get("window").height;
  const marginTopOffset = screenHeight > 700 ? 840 : 800;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "absolute",
        top: screenHeight + top - marginTopOffset,
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
