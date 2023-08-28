import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import blueContainerStyle from "../../styles/BlueContainer";
import { inputColor } from "../../styles/consts";
const AddNote = () => {
  const [isEditing, setIsEditing] = useState(false);
  const cancelEditing = () => {
    setIsEditing(false);
  };
  const saveChanges = () => {
    setIsEditing(false);
  };
  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.headerStyle}>Note</Text>
      <View style={styles.blueContainer}>
        {!isEditing ? (
          <View>
            <Button
              title="edit"
              onPress={() => {
                setIsEditing(true);
              }}
            />
          </View>
        ) : (
          <View>
            <TextInput
              placeholder="note"
              placeholderTextColor={inputColor}
              style={{ ...styles.textInput, marginLeft: 5 }}
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
    minHeight: 40,
    marginTop: 5,
    ...blueContainerStyle,
  },
  headerStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    color: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});
export default AddNote;
