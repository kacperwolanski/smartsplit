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
  return (
    <ScreenContent>
      <View style={styles.container}>
        <Text style={headerStyle}>Hello Kacper</Text>
        <TouchableOpacity
          onPress={handleGroupsClick}
          style={[styles.groupsButton, blueContainerStyle]}
        >
          <Text>Your groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.groupsButton, blueContainerStyle]}>
          <Text>Options</Text>
        </TouchableOpacity>
      </View>
    </ScreenContent>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {},
  groupsButton: {
    padding: 20,
  },
});
