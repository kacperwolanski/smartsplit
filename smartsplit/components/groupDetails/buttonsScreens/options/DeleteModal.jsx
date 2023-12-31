import React from "react";
import { Text, View } from "react-native";
import useTheme from "../../../../hooks/useThemeHook";
import DecisionModal from "../../../appComponents/DecisionModal";

const DeleteModal = ({ setIsDeleting, handleDeleteGroup, groupName }) => {
  const { theme } = useTheme();

  return (
    <View>
      <DecisionModal
        setIsHandlingFunc={setIsDeleting}
        handleActionFunc={handleDeleteGroup}
        modalQuestion={
          <Text
            style={{
              marginTop: 5,
              color: theme.mainFontColor,
              fontSize: 18,
              textAlign: "justify",
            }}
          >
            Do you want to delete
            <Text style={{ fontWeight: "600" }}> {groupName}</Text>?
          </Text>
        }
      />
    </View>
  );
};

export default DeleteModal;
