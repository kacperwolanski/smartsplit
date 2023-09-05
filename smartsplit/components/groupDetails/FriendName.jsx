import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FriendName = ({ friendName, moneyStatus, groupCurrency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.friendName}>{friendName}</Text>
      <View style={styles.buttonsContainer}>
        <Text style={{ color: "white", marginTop: 5 }}>
          {moneyStatus}
          {groupCurrency}
        </Text>
        <Image
          source={require("../../assets/coins.png")}
          style={styles.coinsIcon}
        />
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
  friendName: {
    color: "white",
    fontSize: 18,
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
