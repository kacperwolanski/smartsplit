import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingsField from "../../appComponents/SettingsField";
import useTheme from "../../../hooks/useThemeHook";

const About = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    aboutText: {
      padding: 20,
      textAlign: "center",
      fontSize: 16,
      color: theme.mainFontColor,
    },
  });

  return (
    <SettingsField title={"SMARTSPLIT"}>
      <TouchableOpacity>
        <Text style={styles.aboutText}>About</Text>
      </TouchableOpacity>
    </SettingsField>
  );
};

export default About;
