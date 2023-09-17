import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Select from "../../appComponents/Select";
import useStore from "../../../store";
import { blueContainerStyle } from "../../../styles/blueContainer";
import { mainFontColor } from "../../../styles/consts";

const LanguageChanger = () => {
  const { setAppLanguage, appLanguage } = useStore();
  const [isClicked, setIsClicked] = useState(false);
  const languageOptions = ["Polski", "English"];

  const handleSelect = (option) => {
    setAppLanguage(option);
    setIsClicked(false);
  };
  return (
    <View>
      <Text style={styles.header}>LANGUAGE</Text>
      <TouchableOpacity
        style={[styles.container, blueContainerStyle]}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text style={styles.defaultLanguage}>{appLanguage}</Text>
        {isClicked && (
          <Select
            actualValue={appLanguage}
            options={languageOptions.filter((option) => {
              return option !== appLanguage;
            })}
            selectFunc={handleSelect}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LanguageChanger;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: {
    fontSize: 13,
    marginBottom: 5,
    color: mainFontColor,
  },
  defaultLanguage: {
    color: mainFontColor,
    textAlign: "center",
    fontSize: 16,
  },
});
