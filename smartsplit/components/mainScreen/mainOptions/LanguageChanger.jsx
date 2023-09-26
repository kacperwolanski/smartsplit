import React from "react";
import { View } from "react-native";
import Select from "../../appComponents/Select";
import useStore from "../../../store";

const LanguageChanger = () => {
  const { setAppLanguage, appLanguage } = useStore();
  const languageOptions = ["Polski", "English", "Spanish"];

  const handleSelect = (option) => {
    setAppLanguage(option);
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
