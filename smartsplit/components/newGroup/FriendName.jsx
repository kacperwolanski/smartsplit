import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditButton from "../buttons/EditButton";
import RemoveButton from "../buttons/RemoveButton";

const FriendName = ({ friendName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.friendName}>{friendName}</Text>
      <View style={styles.buttonsContainer}>
        <EditButton />
        <RemoveButton />
      </View>
    </View>
  );
};

export default FriendName;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  friendName: {
    color: "white",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
