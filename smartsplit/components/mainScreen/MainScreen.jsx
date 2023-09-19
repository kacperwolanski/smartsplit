import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import ScreenContent from "../appComponents/ScreenContent";
import useTheme from "../../hooks/useThemeHook";
import SettingsField from "../appComponents/SettingsField";
import GroupShortcut from "../yourGroups/GroupShortcut";
import useStore from "../../store";
import Modal from "../appComponents/Modal";
import { settingsIcon } from "../../appConsts";
const MainScreen = () => {
  const { mainHeader, contentField } = useTheme();
  const { moveTo } = usePath();
  const { groups } = useStore();
  const handleGroupsClick = () => {
    moveTo("/yourGroups");
  };
  const handleOptionsClick = () => {
    moveTo("/mainOptions");
  };

  const slicedGroups = groups.length > 4 ? groups.slice(0, 4) : groups;
  const groupViewElements = slicedGroups.map((group, index) => {
    return (
      <View
        style={{
          borderWidth: 0.6,
          borderRadius: 10,
          borderColor: "white",
          position: "absolute",
          top: 0,
          left: 100 + index * 40 - groups.length * 17,
          marginTop: 20,
          marginRight: 20,
          overflow: "hidden",
        }}
      >
        <Modal opacity={0.6 - index * 0.2}>
          <GroupShortcut groupData={group} />
        </Modal>
      </View>
    );
  });

  return (
    <View>
      <Text style={mainHeader}>Hello Kacper</Text>
      <ScreenContent>
        <View style={styles.container}>
          <SettingsField title="YOUR GROUPS">
            <TouchableOpacity onPress={handleGroupsClick} style={contentField}>
              <View
                style={{
                  overflow: "hidden",
                  minHeight: 170,
                  position: "relative",
                }}
              >
                <Modal opacity={0.2}>{groupViewElements}</Modal>
              </View>
            </TouchableOpacity>
          </SettingsField>
          <SettingsField title="APP SETTINGS">
            <View style={styles.settingsContainer}>
              <TouchableOpacity
                onPress={handleOptionsClick}
                style={contentField}
              >
                <Image
                  source={{ uri: settingsIcon }}
                  style={styles.settingsIcon}
                />
              </TouchableOpacity>
            </View>
          </SettingsField>
        </View>
      </ScreenContent>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { gap: 20 },
  settingsContainer: {
    padding: 10,
  },
  settingsIcon: {
    width: 50,

    marginLeft: 140,
    height: 50,
    opacity: 0.6,
  },
});
