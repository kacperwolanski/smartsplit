import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import Modal from "../../../appComponents/Modal";

const DiscardModal = ({ setIsDiscarding, handleDiscard }) => {
  const { theme } = useTheme();
  const handleYesPress = () => {
    handleDiscard();
    setIsDiscarding(false);
  };
  return (
    <View style={styles.container}>
      <Modal opacity={0.75}>
        <Text> </Text>
      </Modal>
      <View style={styles.decisionContainer}>
        <Text
          style={{
            marginTop: 5,
            color: theme.mainFontColor,
            fontSize: 18,
            textAlign: "justify",
          }}
        >{`Do you want to discard changes ?`}</Text>
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
              setIsDiscarding(false);
            }}
          />
          <Button
            color={theme.buttonColor}
            title="yes"
            onPress={handleYesPress}
          />
        </View>
      </View>
    </View>
  );
};

export default DiscardModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  decisionContainer: {
    borderRadius: 20,
    backgroundColor: "rgba(155,155,155,0.65)",
    padding: 30,
    top: -400,
  },
});
