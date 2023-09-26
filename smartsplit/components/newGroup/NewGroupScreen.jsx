import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import FriendName from "./FriendName";
import AddFriend from "./AddFriend";
import useStore from "../../store";
import getFormattedDate from "../../helpers/getFormattedDate";
import BlueTextInput from "../appComponents/BlueTextInput";
import { newGroupStyles } from "./styles";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import useTheme from "../../hooks/useThemeHook";
import ButtonsContainer from "../appComponents/ButtonsContainer";
import DiscardGroupModal from "./DiscardModal";
import { defaultGroupCurrency, defaultGroupType } from "../../appConsts";

const NewGroupScreen = () => {
  const { goBack } = usePath();
  const { addGroup } = useStore();
  const { theme } = useTheme();
  const { contentField, mainHeader } = useTheme();
  const styles = newGroupStyles;

  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState(defaultGroupType);
  const [groupCurrency, setGroupCurrency] = useState(defaultGroupCurrency);
  const [groupNote, setGroupNote] = useState("");
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [friends, setFriends] = useState([]);

  const [isDiscarding, setIsDiscarding] = useState(false);

  const handleSavePress = () => {
    const newGroup = {
      name: groupName,
      amount: friends.length,
      people: friends,
      createDate: getFormattedDate(),
      groupType: groupType,
      groupCurrency: groupCurrency,
      groupNote: groupNote,
      summaries: [],
      payments: [],
      statuses: [],
      id: Math.floor(Math.random() * 10000),
    };
    addGroup(newGroup);
    goBack();
  };
  const handleCancelPress = () => {
    if (
      groupName.length ||
      groupNote.length ||
      friends.length ||
      groupType !== defaultGroupType ||
      groupCurrency !== defaultGroupCurrency
    )
      setIsDiscarding(true);
    else goBack();
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

  const friendsViewElement = friends.map((friend, index) => {
    return (
      <FriendName
        key={index}
        friend={friend}
        friends={friends}
        updateFriends={updateFriends}
      />
    );
  });

  return (
    <View>
      <Text style={mainHeader}>Add new group</Text>
      <ScreenContent>
        <View style={[styles.container, contentField]}>
          <View style={styles.groupNameContainer}>
            <TextInput
              placeholder="group name"
              value={groupName}
              placeholderTextColor={theme.inputColor}
              style={[styles.groupNameInput, { color: theme.mainFontColor }]}
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
                color={theme.buttonColor}
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
            gap: 10,
          }}
        >
          <BlueTextInput
            placeholder={groupType}
            saveFunction={handleGroupTypeChange}
            header="Group type"
            inputType="strings"
          />
          <BlueTextInput
            placeholder={groupCurrency}
            saveFunction={setGroupCurrency}
            header="Currency"
            inputType={"strings"}
          />
        </View>

        <BlueTextInput
          placeholder={groupNote}
          saveFunction={setGroupNote}
          header="Note"
        />
        <View style={{ minHeight: 200 }}></View>
      </ScreenContent>

      <ButtonsContainer top={710}>
        <Button
          color={theme.passiveSysBtn}
          title="cancel"
          onPress={handleCancelPress}
        />
        <Button
          color={theme.buttonColor}
          title="save"
          onPress={handleSavePress}
          disabled={!ableToAdd}
        />
      </ButtonsContainer>
      {isDiscarding && (
        <DiscardGroupModal
          setIsDiscarding={setIsDiscarding}
          handleDiscard={goBack}
        />
      )}
    </View>
  );
};

export default NewGroupScreen;
