import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Select from "../../appComponents/Select";
import useStore from "../../../store";
import useTheme from "../../../hooks/useThemeHook";

const LanguageChanger = () => {
  const { setAppLanguage, appLanguage } = useStore();
  const [isClicked, setIsClicked] = useState(false);
  const { theme } = useTheme();
  const languageOptions = ["Polski", "English", "Spanish"];

  const handleSelect = (option) => {
    setAppLanguage(option);
    setIsClicked(false);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text style={[styles.defaultLanguage, { color: theme.mainFontColor }]}>
          {appLanguage}
        </Text>
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
  container: { padding: 20, borderRadius: 10 },

  defaultLanguage: {
    textAlign: "center",
    fontSize: 16,
  },
});
