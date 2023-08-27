import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GroupShortcut from "./GroupShortcut";
import { mainScreenStyles } from "./styles";

const MainScreen = ({ groups }) => {
  return (
    <View>
      <Text style={mainScreenStyles.headerStyle}>Your groups</Text>
      <View style={{ gap: 20 }}>
        <GroupShortcut groupData={groups[0]} />
        <GroupShortcut groupData={groups[0]} />
        <GroupShortcut groupData={groups[0]} />
      </View>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-end" }}>
        <TouchableOpacity style={mainScreenStyles.circleButton}>
          <Text
            style={{
              fontSize: 45,
              color: "white",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
