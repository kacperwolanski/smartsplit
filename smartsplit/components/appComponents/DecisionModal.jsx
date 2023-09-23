import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "./Modal";
import useTheme from "../../hooks/useThemeHook";

const DecisionModal = ({
  setIsHandlingFunc,
  handleActionFunc,
  modalQuestion,
}) => {
  const { theme } = useTheme();
  const handleYesPress = () => {
    handleActionFunc();
    setIsHandlingFunc(false);
  };
  return (
    <View style={styles.container}>
      <Modal opacity={0.75}>
        <Text> </Text>
      </Modal>
      <View style={styles.decisionContainer}>
        {modalQuestion}
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
              setIsHandlingFunc(false);
            }}
          />
          <Button
            color={theme.activeSysBtn}
            title="yes"
            onPress={handleYesPress}
          />
        </View>
      </View>
    </View>
  );
};

export default DecisionModal;

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
