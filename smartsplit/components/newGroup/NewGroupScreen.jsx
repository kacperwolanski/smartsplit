import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import headerStyle from "../../styles/headerStyle";
import blueContainerStyle from "../../styles/BlueContainer";
import EditButton from "../buttons/EditButton";
import FriendName from "./FriendName";
import AddFriend from "./AddFriend";
import { inputColor } from "../../styles/consts";
import GroupType from "./GroupType";
import AddNote from "./AddNote";
import AddCurrency from "./AddCurrency";

const NewGroupScreen = () => {
  const names = ["kacper", "dumin"];
  const styles = newGroupStyles;
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  const handleAddingFriend = (isAdding) => {
    setIsAddingFriend(isAdding);
  };
  const cancelGroup = () => {};
  const saveGroup = () => {};
  return (
    <View>
      <Text style={headerStyle}>Add new group</Text>
      <View style={styles.container}>
        <View style={styles.groupNameContainer}>
          <TextInput
            placeholder="group name"
            placeholderTextColor={inputColor}
            style={styles.groupNameInput}
          />
          <View style={styles.editButton}>
            <EditButton />
          </View>
        </View>
        <View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <ScrollView style={{ maxHeight: 200 }}>
              <FriendName friendName={names[0]} />
              <FriendName friendName={names[1]} />
              <FriendName friendName={names[0]} />
            </ScrollView>
          </View>
          {!isAddingFriend ? (
            <Button
              title="add friend"
              onPress={() => {
                handleAddingFriend(true);
              }}
            ></Button>
          ) : (
            <AddFriend handleAddingFriend={handleAddingFriend} />
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <GroupType />
        <AddCurrency />
      </View>

      <AddNote />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 70,
          padding: 20,
        }}
      >
        <Button color="white" title="cancel" onPress={cancelGroup} />
        <Button title="save" onPress={saveGroup} />
      </View>
    </View>
  );
};

export default NewGroupScreen;
const newGroupStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    minHeight: 130,
    ...blueContainerStyle,
  },
  groupNameContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupNameInput: {
    color: "white",
    fontSize: 24,
    paddingVertical: 12,
  },
  editButton: {
    marginTop: 15,
  },
});
