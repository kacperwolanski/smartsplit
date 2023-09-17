import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import BlueTextInput from "../../../appComponents/BlueTextInput";
import useStore from "../../../../store";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import useTheme from "../../../../hooks/useThemeHook";

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
      <ScreenContent>
        <BlueTextInput
          placeholder={newName}
          saveFunction={setNewName}
          header="Group name"
        />
        <BlueTextInput
          placeholder={newType}
          saveFunction={setNewType}
          header="Group type"
          inputType="strings"
        />
        <BlueTextInput
          placeholder={newCurrency}
          saveFunction={setNewCurrency}
          header="Group currency"
          inputType="strings"
        />
        <BlueTextInput
          placeholder={newNote}
          saveFunction={setNewNote}
          header="Group note"
        />
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.headerStyle, { color: theme.mainFontColor }]}>
            Delete group
          </Text>
          <View
            style={[
              styles.deleteButtonContainer,
              { backgroundColor: theme.contentFieldColor },
            ]}
          >
            <Button
              color="#C7372F"
              title="delete"
              onPress={handleDeletePress}
            ></Button>
          </View>
        </View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color={theme.passiveSysBtn} title="back" onPress={goBack} />
        <Button title="save" onPress={handleSavePress} />
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
