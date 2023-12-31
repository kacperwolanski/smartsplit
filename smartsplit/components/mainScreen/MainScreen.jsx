import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import ScreenContent from "../appComponents/ScreenContent";
import useTheme from "../../hooks/useThemeHook";
import SettingsField from "../appComponents/SettingsField";
import GroupShortcut from "../yourGroups/GroupShortcut";
import useStore from "../../store";
import Modal from "../appComponents/Modal";
import { screenHeight } from "../../appConsts";
import GroupsPlaceHolder from "../placeholders/GroupsPlaceholder";

const MainScreen = () => {
  const { mainHeader, contentField, theme } = useTheme();
  const { moveTo } = usePath();
  const { groups, signedUser } = useStore();

  const handleGroupsClick = () => {
    moveTo("/yourGroups");
  };
  const handleOptionsClick = () => {
    moveTo("/mainOptions");
  };

  const slicedGroups = groups.length > 4 ? groups.slice(0, 4) : groups;
  const marginLeftOffset = screenHeight > 700 ? 100 : 75;

  const groupViewElements = slicedGroups.map((group, index) => {
    return (
      <View
        key={index}
        style={{
          borderWidth: 0.6,
          borderRadius: 10,
          borderColor: "white",
          position: "absolute",
          top: 0,
          left: marginLeftOffset + index * 40 - groups.length * 17,
          marginTop: 20,
          marginRight: 20,
          overflow: "hidden",

          zIndex: slicedGroups.length - index,
        }}
      >
        <Modal opacity={0.1 + index * 0.1}>
          <View style={{ minWidth: 180, maxWidth: 200, maxHeight: 120 }}>
            <GroupShortcut groupData={group} />
          </View>
        </Modal>
      </View>
    );
  });

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={mainHeader}>{`Hello ${signedUser}`}</Text>
        <TouchableOpacity
          style={styles.settingsContainer}
          onPress={handleOptionsClick}
        >
          <Image
            source={theme.icons.settingsIcon}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
      <ScreenContent scrollEnabled={false}>
        <View style={styles.container}>
          <SettingsField title="YOUR GROUPS">
            <TouchableOpacity onPress={handleGroupsClick} style={contentField}>
              <View
                style={{
                  overflow: "hidden",
                  minHeight: 170,
                  position: "relative",
                  paddingBottom: 10,
                }}
              >
                <Modal opacity={0.2}>
                  {groupViewElements.length > 0 ? (
                    groupViewElements
                  ) : (
                    <GroupsPlaceHolder marginTop={10} />
                  )}
                </Modal>
              </View>
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
  settingsContainer: { marginTop: 112, marginRight: 25 },
  settingsIcon: {
    width: 25,
    height: 25,
    opacity: 0.9,
    marginTop: screenHeight > 700 ? -28 : -65,
  },
});
