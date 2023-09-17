import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import ScreenContent from "../appComponents/ScreenContent";
import useTheme from "../../hooks/useThemeHook";
import SettingsField from "../appComponents/SettingsField";

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
          <SettingsField title="YOUR GROUPS">
            <TouchableOpacity onPress={handleGroupsClick} style={contentField}>
              <Text>jhuj</Text>
            </TouchableOpacity>
          </SettingsField>
          <SettingsField title="APP OPTIONS">
            <TouchableOpacity onPress={handleOptionsClick} style={contentField}>
              <Text>jhuj</Text>
            </TouchableOpacity>
          </SettingsField>
        </View>
      </ScreenContent>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { gap: 20 },
});
