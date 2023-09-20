import React from "react";
import { StyleSheet, View } from "react-native";
import Select from "../../appComponents/Select";
import useStore from "../../../store";

const LanguageChanger = () => {
  const { setAppLanguage, appLanguage } = useStore();
  const languageOptions = ["Polski", "English", "Spanish"];

  const handleSelect = (option) => {
    setAppLanguage(option);
    setIsClicked(false);
  };
  return (
    <View>
      <Select
        actualValue={appLanguage}
        defaultValue={appLanguage}
        options={languageOptions.filter((option) => {
          return option !== appLanguage;
        })}
        selectFunc={handleSelect}
      />
    </View>
  );
};

export default LanguageChanger;

const styles = StyleSheet.create({
  defaultLanguage: {
    textAlign: "center",
    fontSize: 16,
  },
});
