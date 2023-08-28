import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { inputColor } from "../../styles/consts";

const AddFriend = ({ handleAddingFriend }) => {
  const cancelAddingFriend = () => {
    handleAddingFriend(false);
  };
  const addFriend = () => {
    handleAddingFriend(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.friendNameInput}
        placeholder="friend name"
        placeholderTextColor={inputColor}
      />
      <View style={styles.buttonsContainer}>
        <Button color="white" title="cancel" onPress={cancelAddingFriend} />
        <Button title="add" onPress={addFriend} />
      </View>
    </View>
  );
};

export default AddFriend;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  friendNameInput: {
    color: "white",
    fontSize: 18,
  },
  buttonsContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
