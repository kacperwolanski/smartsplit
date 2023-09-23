import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import useTheme from "../../hooks/useThemeHook";

const AddFriend = ({ handleAddingFriend, updateFriends, friends }) => {
  const [newFriendName, setNewFriendName] = useState("");
  const { theme } = useTheme();
  const cancelAddingFriend = () => {
    handleAddingFriend(false);
  };
  const addFriend = () => {
    handleAddingFriend(false);
    if (newFriendName.length)
      updateFriends([...friends, { name: newFriendName, id: friends.length }]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ color: theme.mainFontColor, fontSize: 18 }}
        placeholder="friend name"
        placeholderTextColor={theme.inputColor}
        value={newFriendName}
        onChangeText={(value) => {
          setNewFriendName(value);
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          color={theme.passiveSysBtn}
          title="cancel"
          onPress={cancelAddingFriend}
        />
        <Button
          color={theme.activeSysBtn}
          title="save"
          disabled={!newFriendName}
          onPress={addFriend}
        />
      </View>
    </View>
  );
};

export default AddFriend;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  friendNameInput: {},
  buttonsContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
