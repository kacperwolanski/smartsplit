import React from "react";
import { Text, View } from "react-native";
import useTheme from "../../hooks/useThemeHook";

const SettingsField = ({ title, children }) => {
  const { theme, contentField } = useTheme();

  return (
    <View>
      <Text
        style={{
          fontSize: 13,
          marginBottom: 5,
          color: theme.settingsFontColor,
          paddingBottom: 2,
          paddingLeft: 14,
        }}
      >
        {title}
      </Text>
      <View style={contentField}>{children}</View>
    </View>
  );
};

export default SettingsField;
