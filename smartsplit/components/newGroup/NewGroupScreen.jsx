import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import headerStyle from "../../styles/headerStyle";
import FriendName from "./FriendName";
import AddFriend from "./AddFriend";
import { inputColor } from "../../styles/consts";
import useStore from "../../store";
import getFormattedDate from "../../helpers/getFormattedDate";
import BlueTextInput from "../BlueTextInput";
import { newGroupStyles } from "./styles";
import ScreenContent from "../../ScreenContent";

const NewGroupScreen = () => {
  const { moveToScreen, groups, addGroup } = useStore();
  const styles = newGroupStyles;

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
      id: Math.floor(Math.random() * 10000),
    };
    addGroup(newGroup);
    moveToScreen("/mainScreen");
  };
  const handleCancelPress = () => {
    moveToScreen("/mainScreen");
  };

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

  const ableToAdd = groupName && friends.length > 1;

  console.log(groups);
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
      <ScreenContent>
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
            <View style={{ paddingVertical: 10 }}>
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
          <BlueTextInput
            placeholder={groupType}
            saveFunction={handleGroupTypeChange}
            header="Group type"
            width={150}
          />
          <BlueTextInput
            placeholder={groupCurrency}
            saveFunction={setGroupCurrency}
            header="Currency"
            width={150}
          />
        </View>

        <BlueTextInput
          placeholder={groupNote}
          saveFunction={setGroupNote}
          header="Note"
        />
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="cancel" onPress={handleCancelPress} />
        <Button title="save" onPress={handleSavePress} disabled={!ableToAdd} />
      </View>
    </View>
  );
};

export default NewGroupScreen;
