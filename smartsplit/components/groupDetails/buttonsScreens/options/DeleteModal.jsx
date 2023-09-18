import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import Modal from "../../../appComponents/Modal";

const DeleteModal = ({ setIsDeleting, handleDeleteGroup, groupName }) => {
  const { theme } = useTheme();
  const handleYesPress = () => {
    handleDeleteGroup();
    setIsDeleting(false);
  };
  return (
    <Modal opacity={0.8}>
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
          <Button
            color={theme.buttonColor}
            title="yes"
            onPress={handleYesPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  decisionContainer: {
    borderRadius: 20,
    backgroundColor: "rgba(155,155,155,0.65)",
    padding: 30,
    top: -400,
  },
});
