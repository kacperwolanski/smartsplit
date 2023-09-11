import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FriendName = ({ person, onPressFunc, ableToMark }) => {
  const { name } = person;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (ableToMark) {
      if (isClicked) {
        setIsClicked(false);
        onPressFunc(person, "delete");
      } else {
        setIsClicked(true);
        onPressFunc(person, "add");
      }
    } else {
      setIsClicked(false);
      onPressFunc(person, "delete");
    }
  };
  const clickDisabled = !ableToMark && !isClicked;
  const getBorderColor = () => {
    if (clickDisabled) return "#D3D3D3";
    if (!isClicked) return "white";
    else return "#007AFF";
  };
  return (
    <TouchableOpacity
      disabled={clickDisabled}
      onPress={handleClick}
      style={[
        styles.container,
        {
          borderColor: getBorderColor(),
        },
      ]}
    >
      <Text
        style={[
          styles.name,
          {
            color: getBorderColor(),
            fontWeight: !isClicked ? "normal" : "bold",
          },
        ]}
      >
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
  },
});
