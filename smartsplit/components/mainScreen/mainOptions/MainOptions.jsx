import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { usePath } from "../../../hooks/usePathHook";
import ScreenContent from "../../appComponents/ScreenContent";

import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./theme/ThemeChanger";
import About from "./About";
import useTheme from "../../../hooks/useThemeHook";

const MainOptions = () => {
  const { goBack } = usePath();
  const { mainHeader } = useTheme();
  return (
    <View>
      <Text style={mainHeader}>App options</Text>
      <ScreenContent>
        <View style={styles.container}>
          <LanguageChanger />
          <ThemeChanger />
          {/* <Button title="sign out" />
          <About /> */}
          <Button title="back" onPress={goBack}></Button>
        </View>
      </ScreenContent>
    </View>
  );
};

export default MainOptions;

const styles = StyleSheet.create({
  container: { gap: 20 },
});
