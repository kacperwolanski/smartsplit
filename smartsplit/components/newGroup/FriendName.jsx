import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import EditButton from "../buttons/EditButton";
import RemoveButton from "../buttons/RemoveButton";
import { friendNameStyles } from "./styles";
import { inputColor } from "../../styles/consts";

const FriendName = ({ friend, friends, updateFriends }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const { name, id } = friend;
  const styles = friendNameStyles;

  const handleRemoveFriend = () => {
    const newFriends = friends.filter((friend) => {
      return friend.id !== id;
    });
    updateFriends(newFriends);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    if (editedName.length) {
      const newFriends = friends.filter((friend) => {
        return friend.id !== id;
      });

      updateFriends([
        ...newFriends,
        { name: editedName, id: Math.floor(Math.random() * 10000) },
      ]);
      setEditedName("");
    }
    setIsEditing(false);
  };
  return (
    <View>
      {!isEditing ? (
        <View style={styles.container}>
          <Text style={styles.friendName}>{name}</Text>
          <View style={styles.buttonsContainer}>
            <EditButton onPressFunc={handleEdit} />
            <RemoveButton removeFunction={handleRemoveFriend} />
          </View>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder={name}
            value={editedName}
            onChangeText={(newValue) => {
              setEditedName(newValue);
            }}
            placeholderTextColor={inputColor}
            style={{
              ...styles.textInput,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button color="white" title="cancel" onPress={handleCancel} />
            <Button title="save" onPress={handleSaveEdit} />
          </View>
        </View>
      )}
    </View>
  );
};

export default FriendName;

const styles = StyleSheet.create({
  textInput: {
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});
