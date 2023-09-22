import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useTheme from "../../hooks/useThemeHook";

const FriendName = ({ friendName, moneyStatus, groupCurrency }) => {
  const { theme } = useTheme();

  const coinsIconUrl = theme.icons.coinsIconUrl;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, color: theme.mainFontColor }}>
        {friendName}
      </Text>
      <View style={styles.buttonsContainer}>
        <Text style={{ color: theme.mainFontColor, marginTop: 5 }}>
          {moneyStatus}
          {groupCurrency}
        </Text>
        <Image source={{ uri: coinsIconUrl }} style={styles.coinsIcon} />
      </View>
    </View>
  );
};

export default FriendName;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  coinsIcon: {
    width: 22,
    height: 22,
  },
});
