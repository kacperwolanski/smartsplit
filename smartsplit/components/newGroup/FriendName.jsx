import React from "react";
import { Text, View } from "react-native";
import EditButton from "../buttons/EditButton";
import RemoveButton from "../buttons/RemoveButton";
import { friendNameStyles } from "./styles";

const FriendName = ({ friend, friends, updateFriends }) => {
  const { name, id } = friend;
  const styles = friendNameStyles;
  const handleRemoveFriend = () => {
    const newFriends = friends.filter((friend) => {
      return friend.id !== id;
    });
    updateFriends(newFriends);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.friendName}>{name}</Text>
      <View style={styles.buttonsContainer}>
        <EditButton />
        <RemoveButton removeFunction={handleRemoveFriend} />
      </View>
    </View>
  );
};

export default FriendName;
