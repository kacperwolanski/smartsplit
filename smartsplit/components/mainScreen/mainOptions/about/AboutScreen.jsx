import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import useTheme from "../../../../hooks/useThemeHook";
import ScreenContent from "../../../appComponents/ScreenContent";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import { usePath } from "../../../../hooks/usePathHook";
import SettingsField from "../../../appComponents/SettingsField";
import SingleInfo from "./SingleInfo";

const AboutScreen = () => {
  const { theme, mainHeader } = useTheme();
  const { goBack } = usePath();

  return (
    <View>
      <Text style={mainHeader}>About app</Text>
      <ScreenContent scrollEnabled={false}>
        <SettingsField title={""}>
          <SingleInfo title={"Name"} value={"Smartsplit"} first={true} />
          <SingleInfo title={"App Version"} value={"1.0"} />
          <SingleInfo title={"Support on"} value={"IOS"} />
          <SingleInfo title={"Released"} value={"01.02.2021"} />
          <SingleInfo title={"Developed by"} value={"kacper wolański"} />
        </SettingsField>
      </ScreenContent>
      <ButtonsContainer top={700}>
        <Button color={theme.passiveSysBtn} title="back" onPress={goBack} />
      </ButtonsContainer>
    </View>
  );
};

export default AboutScreen;
const styles = StyleSheet.create({
  aboutText: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
});
