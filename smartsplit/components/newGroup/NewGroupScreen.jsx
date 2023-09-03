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
import blueContainerStyle from "../../styles/blueContainer";
import FriendName from "./FriendName";
import AddFriend from "./AddFriend";
import { inputColor } from "../../styles/consts";
import GroupType from "./GroupType";
import AddNote from "./AddNote";
import AddCurrency from "./AddCurrency";
import useStore from "../../store";
import getFormattedDate from "../../helpers/getFormattedDate";

const NewGroupScreen = () => {
  const { moveToScreen, groups, addGroup } = useStore();

  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState("Friends");
  const [groupCurrency, setGroupCurrency] = useState("PLN");
  const [groupNote, setGroupNote] = useState("");
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [friends, setFriends] = useState([]);

  const handleSavePress = () => {
    const newGroup = {
      name: groupName,
      amount: friends.length,
      people: friends,
      createDate: getFormattedDate(),
      groupType: groupType,
      id: groups.length,
    };
    addGroup(newGroup);
    moveToScreen("/mainScreen");
  };
  const handleCancelPress = () => {
    moveToScreen("/mainScreen");
  };

  const styles = newGroupStyles;

  const handleAddingFriend = (isAdding) => {
    setIsAddingFriend(isAdding);
  };
  const updateFriends = (newFriends) => {
    setFriends(newFriends);
  };
  const handleGroupNameChange = (newGroupName) => {
    setGroupName(newGroupName);
  };
  const handleGroupTypeChange = (newGroupType) => {
    setGroupType(newGroupType);
  };
  const handleGroupCurrencyChange = (newGroupCurrency) => {
    setGroupCurrency(newGroupCurrency);
  };
  const handleGroupNoteChange = (newGroupNote) => {
    setGroupNote(newGroupNote);
  };

  const ableToAdd = groupName && friends.length > 1;

  const friendsViewElement = friends.map((friend) => {
    return (
      <FriendName
        friend={friend}
        friends={friends}
        updateFriends={updateFriends}
      />
    );
  });
  return (
    <View>
      <Text style={headerStyle}>Add new group</Text>
      <View style={styles.container}>
        <View style={styles.groupNameContainer}>
          <TextInput
            placeholder="group name"
            value={groupName}
            placeholderTextColor={inputColor}
            style={styles.groupNameInput}
            onChangeText={handleGroupNameChange}
          />
        </View>
        <View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <ScrollView style={{ maxHeight: 200 }}>
              {friendsViewElement}
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
            <AddFriend
              handleAddingFriend={handleAddingFriend}
              updateFriends={updateFriends}
              friends={friends}
            />
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
        <Button color="white" title="cancel" onPress={handleCancelPress} />
        <Button title="save" onPress={handleSavePress} disabled={!ableToAdd} />
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
