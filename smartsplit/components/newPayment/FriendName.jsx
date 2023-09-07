import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FriendName = ({ person }) => {
  const { name } = person;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsClicked(!isClicked);
      }}
      style={[
        styles.container,
        {
          borderColor: !isClicked ? "white" : "#007AFF",
        },
      ]}
    >
      <Text style={[styles.name, { color: !isClicked ? "white" : "#007AFF" }]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FriendName;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 20,
  },
  name: {
    textAlign: "center",

    fontWeight: "bold",
  },
});
