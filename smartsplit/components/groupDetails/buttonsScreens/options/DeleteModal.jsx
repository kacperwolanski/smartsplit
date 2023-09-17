import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";

const DeleteModal = ({ setIsDeleting, handleDeleteGroup, groupName }) => {
  const { theme } = useTheme();
  const handleYesPress = () => {
    handleDeleteGroup();
    setIsDeleting(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text> </Text>
      </View>
      <View style={styles.decisionContainer}>
        <Text
          style={{
            marginTop: 5,
            color: theme.mainFontColor,
            fontSize: 18,
            textAlign: "justify",
          }}
        >{`Do you want to delete ${groupName} ?`}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            gap: 20,
          }}
        >
          <Button
            title="cancel"
            color={theme.mainFontColor}
            onPress={() => {
              setIsDeleting(false);
            }}
          />
          <Button title="yes" onPress={handleYesPress} />
        </View>
      </View>
    </View>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  modal: {
    backgroundColor: "black",
    minHeight: 1000,
    minWidth: 600,
    opacity: "0.8",
    position: "absolute",
    top: -750,
  },
  decisionContainer: {
    borderRadius: 20,
    backgroundColor: "rgba(155,155,155,0.3)",
    padding: 30,
    top: -400,
  },
});
