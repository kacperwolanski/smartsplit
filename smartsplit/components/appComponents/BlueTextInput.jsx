import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { inputColor } from "../../styles/consts";
import useTheme from "../../hooks/useThemeHook";
import SettingsField from "./SettingsField";

const BlueTextInput = ({
  placeholder,
  saveFunction,
  header,
  width,
  scrollTop,
  inputType,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const { theme } = useTheme();
  const cancelEditing = () => {
    setIsEditing(false);
  };
  const saveChanges = () => {
    saveFunction(editedValue);
    setIsEditing(false);
  };

  const handleValueChange = (inputText) => {
    if (inputType === "numbers") {
      const numericText = inputText.replace(/[^0-9]/g, "");
      setEditedValue(numericText);
    } else if (inputType === "strings") {
      const alphabetText = inputText.replace(/[^A-Za-z]/g, "");
      setEditedValue(alphabetText);
    } else setEditedValue(inputText);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <SettingsField title={header}>
        <View style={{ marginTop: 5, width: width }}>
          {!isEditing ? (
            <View>
              <Text style={styles.textInput}>{placeholder}</Text>
              <View style={{ marginTop: 10 }}>
                <Button
                  color={theme.buttonColor}
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
                multiline={true}
                onFocus={scrollTop}
                placeholder={placeholder}
                value={editedValue}
                onChangeText={handleValueChange}
                placeholderTextColor={inputColor}
                style={{
                  ...styles.textInput,

                  width: width,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Button color="white" title="cancel" onPress={cancelEditing} />
                <Button
                  title="save"
                  onPress={saveChanges}
                  disabled={!editedValue.length}
                />
              </View>
            </View>
          )}
        </View>
      </SettingsField>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    textAlign: "center",
    color: inputColor,
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});
export default BlueTextInput;
