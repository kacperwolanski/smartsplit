import React from "react";
import { Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import DecisionModal from "../../../appComponents/DecisionModal";

const DeletePaymentModal = ({ setIsDeleting, handleDeletePayment }) => {
  const { theme } = useTheme();

  return (
    <View>
      <DecisionModal
        setIsHandlingFunc={setIsDeleting}
        handleActionFunc={handleDeletePayment}
        modalQuestion={
          <Text
            style={{
              marginTop: 5,
              color: theme.mainFontColor,
              fontSize: 18,
              textAlign: "justify",
            }}
          >
            Do you want to remove this payment ?
          </Text>
        }
      />
    </View>
  );
};

export default DeletePaymentModal;
