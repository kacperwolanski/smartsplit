import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import blueContainerStyle from "../../styles/blueContainer";
import { inputColor } from "../../styles/consts";
const GroupType = () => {
  const [isEditing, setIsEditing] = useState(false);
  const cancelEditing = () => {
    setIsEditing(false);
  };
  const saveChanges = () => {
    setIsEditing(false);
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.headerStyle}>Group type</Text>
      <View style={styles.blueContainer}>
        {!isEditing ? (
          <View>
            <Text style={styles.textInput}>Friends</Text>
            <View style={{ marginTop: 10 }}>
              <Button
                title="edit"
                onPress={() => {
                  setIsEditing(true);
                }}
              />
            </View>
          </View>
        ) : (
          <View>
            <TextInput
              placeholder="Friends"
              placeholderTextColor={inputColor}
              style={{ ...styles.textInput }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Button color="white" title="cancel" onPress={cancelEditing} />
              <Button title="save" onPress={saveChanges} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blueContainer: {
    minHeight: 90,
    marginTop: 5,
    width: 150,
    ...blueContainerStyle,
  },
  headerStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});
export default GroupType;
