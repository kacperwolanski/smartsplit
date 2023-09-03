import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CirclePlusButton from "../buttons/CirclePlusButton";
import useStore from "../../store";
import FriendName from "./FriendName";
import OptionButton from "../buttons/OptionButton";
import { coinsIconUrl, historyIconUrl, optionsIconUrl } from "../../appConsts";

const GroupDetailsScreen = () => {
  const { moveToScreen, actualGroup } = useStore();
  const { name, people } = actualGroup;
  const styles = groupDetailsScreen;
  return (
    <View>
      <Text style={headerStyle}>{name}</Text>

      <View style={styles.container}>
        <FriendName friendName="andrzej" />
        <FriendName friendName="kszychu" />
        <FriendName friendName="franio" />
      </View>
      <View style={[styles.container, styles.buttonsContainer]}>
        <View style={{ flexDirection: "row", gap: 30, marginTop: 20 }}>
          <OptionButton imagePath={coinsIconUrl} />
          <OptionButton imagePath={historyIconUrl} />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 30,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <OptionButton imagePath={optionsIconUrl} />
          <OptionButton imagePath={"xxx"} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Button
            color="white"
            title="cancel"
            onPress={() => {
              moveToScreen("/mainScreen");
            }}
          />
        </View>

        <View style={{ marginLeft: 172 }}>
          <CirclePlusButton />
        </View>
      </View>
    </View>
  );
};

export default GroupDetailsScreen;

export const groupDetailsScreen = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    minHeight: 130,
    ...blueContainerStyle,
  },
  buttonsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
});
