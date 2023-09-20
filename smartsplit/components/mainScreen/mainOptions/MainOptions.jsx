import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePath } from "../../../hooks/usePathHook";
import ScreenContent from "../../appComponents/ScreenContent";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./theme/ThemeChanger";
import useTheme from "../../../hooks/useThemeHook";
import SettingsField from "../../appComponents/SettingsField";
import ButtonsContainer from "../../appComponents/ButtonsContainer";

const MainOptions = () => {
  const { goBack, moveTo } = usePath();
  const { mainHeader, theme } = useTheme();
  const handleAboutPress = () => {
    moveTo("/about");
  };
  return (
    <View>
      <Text style={mainHeader}>App settings</Text>
      <ScreenContent scrollEnabled={false}>
        <View style={styles.container}>
          <SettingsField title={"LANGUAGE"}>
            <LanguageChanger />
          </SettingsField>
          <SettingsField title={"APP THEME"}>
            <ThemeChanger />
          </SettingsField>
          <SettingsField title={"SMARTSPLIT"}>
            <TouchableOpacity onPress={handleAboutPress}>
              <Text style={[styles.aboutText, { color: theme.mainFontColor }]}>
                About
              </Text>
            </TouchableOpacity>
          </SettingsField>
          <SettingsField title={""}>
            <TouchableOpacity>
              <Text style={[styles.signOut, { color: theme.mainFontColor }]}>
                Sign out
              </Text>
            </TouchableOpacity>
          </SettingsField>
        </View>
      </ScreenContent>
      <ButtonsContainer top={710}>
        <Button color={theme.passiveSysBtn} title="back" onPress={goBack} />
      </ButtonsContainer>
    </View>
  );
};

export default MainOptions;

const styles = StyleSheet.create({
  container: { gap: 20 },
  signOut: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  aboutText: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
});
