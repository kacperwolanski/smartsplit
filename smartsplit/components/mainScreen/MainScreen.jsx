import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import ScreenContent from "../appComponents/ScreenContent";
import useTheme from "../../hooks/useThemeHook";

const MainScreen = () => {
  const { mainHeader, contentField } = useTheme();
  const { moveTo } = usePath();
  const handleGroupsClick = () => {
    moveTo("/yourGroups");
  };
  const handleOptionsClick = () => {
    moveTo("/mainOptions");
  };
  return (
    <View>
      <Text style={mainHeader}>Hello Kacper</Text>
      <ScreenContent>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleGroupsClick} style={contentField}>
            <Text>Your groups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOptionsClick} style={contentField}>
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
});
