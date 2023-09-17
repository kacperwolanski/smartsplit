import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import ScreenContent from "../appComponents/ScreenContent";
import headerStyle from "../../styles/headerStyle";
import { blueContainerStyle } from "../../styles/blueContainer";

const MainScreen = () => {
  const { moveTo } = usePath();
  const handleGroupsClick = () => {
    moveTo("/yourGroups");
  };
  const handleOptionsClick = () => {
    moveTo("/mainOptions");
  };
  return (
    <View>
      <Text style={headerStyle}>Hello Kacper</Text>
      <ScreenContent>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={handleGroupsClick}
            style={[styles.groupsButton, blueContainerStyle]}
          >
            <Text>Your groups</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOptionsClick}
            style={[styles.groupsButton, blueContainerStyle]}
          >
            <Text>Options</Text>
          </TouchableOpacity>
        </View>
      </ScreenContent>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { gap: 20 },
  groupsButton: {
    padding: 20,
  },
});
