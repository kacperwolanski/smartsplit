import React from "react";
import { Text, View } from "react-native";
import DecisionModal from "../appComponents/DecisionModal";
import useTheme from "../../hooks/useThemeHook";

const DiscardGroupModal = ({ setIsDiscarding, handleDiscard }) => {
  const { theme } = useTheme();

  return (
    <View>
      <DecisionModal
        setIsHandlingFunc={setIsDiscarding}
        handleActionFunc={handleDiscard}
        modalQuestion={
          <Text
            style={{
              marginTop: 5,
              color: theme.mainFontColor,
              fontSize: 18,
              textAlign: "justify",
            }}
          >{`Do you want to discard new group ?`}</Text>
        }
      />
    </View>
  );
};

export default DiscardGroupModal;
