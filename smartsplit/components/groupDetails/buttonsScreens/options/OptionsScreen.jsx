import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import BlueTextInput from "../../../appComponents/BlueTextInput";
import useStore from "../../../../store";
import headerStyle from "../../../../styles/headerStyle";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const OptionsScreen = () => {
  const { goBack } = usePath();
  const { actualGroup, setActualGroup, groups, updateGroups } = useStore();
  const { name, people, groupCurrency, groupType, groupNote } = actualGroup;
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
      <Text style={headerStyle}>Options</Text>
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
          <Text style={styles.headerStyle}>Delete group</Text>
          <View style={styles.deleteButtonContainer}>
            <Button
              color="#C7372F"
              title="delete"
              onPress={handleDeletePress}
            ></Button>
          </View>
        </View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={goBack} />
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
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButtonContainer: {
    marginTop: 5,
    gap: 10,
    padding: 10,
    ...blueContainerStyle,
  },
});
