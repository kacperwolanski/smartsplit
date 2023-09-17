import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import BlueTextInput from "../../../appComponents/BlueTextInput";
import useStore from "../../../../store";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import useTheme from "../../../../hooks/useThemeHook";
import SettingsField from "../../../appComponents/SettingsField";

const OptionsScreen = () => {
  const { goBack } = usePath();
  const { theme, mainHeader } = useTheme();
  const { actualGroup, setActualGroup, groups, updateGroups } = useStore();
  const { name, groupCurrency, groupType, groupNote } = actualGroup;
  const [newName, setNewName] = useState(name);
  const [newType, setNewType] = useState(groupType);
  const [newCurrency, setNewCurrency] = useState(groupCurrency);
  const [newNote, setNewNote] = useState(groupNote);
  const [isDeleting, setIsDeleting] = useState(false);
  const { moveTo } = usePath();
  const handleDeletePress = () => {
    setIsDeleting(true);
  };
  const handleSavePress = () => {
    const updatedGroup = {
      ...actualGroup,
      name: newName,
      groupType: newType,
      groupCurrency: newCurrency,
      groupNote: newNote,
    };
    const filteredGroups = groups.filter((group) => {
      group.id !== actualGroup.id;
    });
    setActualGroup(updatedGroup);
    updateGroups([...filteredGroups, updatedGroup]);
    goBack();
  };

  const handleDeleteGroup = () => {
    const filteredGroups = groups.filter((group) => {
      group.id !== actualGroup.id;
    });
    updateGroups(filteredGroups);
    moveTo("/mainScreen");
  };

  return (
    <View>
      <Text style={mainHeader}>Options</Text>
      <View style={{ marginTop: -20 }}>
        <ScreenContent>
          <BlueTextInput
            placeholder={newName}
            saveFunction={setNewName}
            header="GROUP NAME"
          />
          <BlueTextInput
            placeholder={newType}
            saveFunction={setNewType}
            header="GROUP TYPE"
            inputType="strings"
          />
          <BlueTextInput
            placeholder={newCurrency}
            saveFunction={setNewCurrency}
            header="GROUP CURRENCY"
            inputType="strings"
          />
          <BlueTextInput
            placeholder={newNote}
            saveFunction={setNewNote}
            header="GROUP NOTE"
          />
          <View style={{ marginTop: 20 }}>
            <SettingsField title="DELETE GROUP">
              <View style={[styles.deleteButtonContainer]}>
                <Button
                  color="#C7372F"
                  title="delete"
                  onPress={handleDeletePress}
                ></Button>
              </View>
            </SettingsField>
          </View>
        </ScreenContent>
      </View>
      <View style={styles.buttonsContainer}>
        <Button color={theme.passiveSysBtn} title="back" onPress={goBack} />
        <Button
          color={theme.buttonColor}
          title="save"
          onPress={handleSavePress}
        />
      </View>
      {isDeleting && (
        <View>
          <DeleteModal
            setIsDeleting={setIsDeleting}
            handleDeleteGroup={handleDeleteGroup}
            groupName={name}
          />
        </View>
      )}
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 700,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    marginTop: 38,
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButtonContainer: {
    marginTop: 5,
    gap: 10,
    padding: 10,
  },
});
