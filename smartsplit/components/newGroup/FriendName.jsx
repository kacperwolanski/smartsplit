import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import EditButton from "../buttons/EditButton";
import RemoveButton from "../buttons/RemoveButton";
import { friendNameStyles } from "./styles";
import useTheme from "../../hooks/useThemeHook";
const FriendName = ({ friend, friends, updateFriends }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useTheme();
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
        { name: editedName, id: Math.floor(Math.random() * 10000), status: 0 },
      ]);
      setEditedName("");
    }
    setIsEditing(false);
  };
  return (
    <View>
      {!isEditing ? (
        <View style={styles.container}>
          <Text style={{ fontSize: 18, color: theme.mainFontColor }}>
            {name}
          </Text>
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
            placeholderTextColor={theme.inputColor}
            style={[styles.textInput, { color: theme.mainFontColor }]}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Button
              color={theme.passiveSysBtn}
              title="cancel"
              onPress={handleCancel}
            />
            <Button
              color={theme.activeSysBtn}
              title="save"
              onPress={handleSaveEdit}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default FriendName;
