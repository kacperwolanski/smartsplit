import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import BlueTextInput from "../../../appComponents/BlueTextInput";
import useStore from "../../../../store";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import useTheme from "../../../../hooks/useThemeHook";
import SettingsField from "../../../appComponents/SettingsField";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import useActualGroup from "../../../../hooks/useActualGroupHook";
import DiscardModal from "./DiscardModal";

const OptionsScreen = () => {
  const { goBack, moveTo } = usePath();
  const { theme, mainHeader } = useTheme();
  const { groups, updateGroups } = useStore();
  const { actualGroup } = useActualGroup();

  const { name, groupCurrency, groupType, groupNote } = actualGroup;

  const [newName, setNewName] = useState(name);
  const [newType, setNewType] = useState(groupType);
  const [newCurrency, setNewCurrency] = useState(groupCurrency);
  const [newNote, setNewNote] = useState(groupNote);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDiscarding, setIsDiscarding] = useState(false);

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

    updateGroups([...filteredGroups, updatedGroup]);
    goBack();
  };

  const handleBackPress = () => {
    if (
      name !== newName ||
      groupCurrency !== newCurrency ||
      groupType !== newType ||
      groupNote !== newNote
    ) {
      setIsDiscarding(true);
    } else goBack();
  };

  const handleDeleteGroup = () => {
    const filteredGroups = groups.filter((group) => {
      return group.id !== actualGroup.id;
    });

    updateGroups(filteredGroups);
    moveTo("/yourGroups");
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
          <View style={{ marginTop: 20, marginBottom: 20 }}>
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
      <ButtonsContainer top={710}>
        <Button
          color={theme.passiveSysBtn}
          title="back"
          onPress={handleBackPress}
        />
        <Button
          color={theme.buttonColor}
          title="save"
          onPress={handleSavePress}
        />
      </ButtonsContainer>
      {isDeleting && (
        <DeleteModal
          setIsDeleting={setIsDeleting}
          handleDeleteGroup={handleDeleteGroup}
          groupName={name}
        />
      )}
      {isDiscarding && (
        <DiscardModal
          setIsDiscarding={setIsDiscarding}
          handleDiscard={goBack}
        />
      )}
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
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
