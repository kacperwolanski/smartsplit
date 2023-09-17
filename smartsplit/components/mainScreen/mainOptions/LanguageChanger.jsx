import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Select from "../../appComponents/Select";
import useStore from "../../../store";
import { mainFontColor } from "../../../styles/consts";
import useTheme from "../../../hooks/useThemeHook";

const LanguageChanger = () => {
  const { setAppLanguage, appLanguage } = useStore();
  const [isClicked, setIsClicked] = useState(false);
  const { theme } = useTheme();
  const languageOptions = ["Polski", "English"];

  const handleSelect = (option) => {
    setAppLanguage(option);
    setIsClicked(false);
  };
  return (
    <View>
      <Text style={[styles.header, { color: theme.mainFontColor }]}>
        LANGUAGE
      </Text>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: theme.contentFieldColor }]}
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
  header: {
    fontSize: 13,
    marginBottom: 5,
  },
  defaultLanguage: {
    textAlign: "center",
    fontSize: 16,
  },
});
