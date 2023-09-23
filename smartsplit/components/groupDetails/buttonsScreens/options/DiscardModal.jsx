import React from "react";
import { Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import DecisionModal from "../../../appComponents/DecisionModal";

const DiscardModal = ({ setIsDiscarding, handleDiscard }) => {
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
          >{`Do you want to discard changes ?`}</Text>
        }
      />
    </View>
  );
};

export default DiscardModal;
