import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CirclePlusButton from "../buttons/CirclePlusButton";
import useStore from "../../store";
import FriendName from "./FriendName";
import OptionButton from "../buttons/OptionButton";
import { coinsIconUrl, historyIconUrl, optionsIconUrl } from "../../appConsts";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import { useSummaries } from "../../hooks/useSummariesHook";
import useMoneyStatus from "../../hooks/useMoneyStatusHook";
import { blueContainerStyle } from "../../styles/blueContainer";

const GroupDetailsScreen = () => {
  const { goBack, moveTo } = usePath();
  const { actualGroup, summaries } = useStore();
  const { name, people, groupCurrency } = actualGroup;
  const styles = groupDetailsScreen;
  const { addSummaries } = useSummaries();
  const { getMoneyStatus } = useMoneyStatus();
  const friendsViewElement = people.map((person, index) => {
    return (
      <FriendName
        key={index}
        friendName={person.name}
        moneyStatus={person.status}
        groupCurrency={groupCurrency}
      />
    );
  });
  const handleAddPaymentPress = () => {
    moveTo("/addPayment");
  };

  useEffect(() => {
    if (!summaries.length) {
      addSummaries();
      getMoneyStatus();
    }
  }, []);
  return (
    <View>
      <Text style={headerStyle}>{name}</Text>
      <ScreenContent>
        <View style={[styles.container, blueContainerStyle]}>
          {friendsViewElement}
        </View>
        <View style={[styles.container, styles.buttonsContainer]}>
          <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
            <OptionButton imagePath={coinsIconUrl} pathKeyword="summary" />
            <OptionButton imagePath={historyIconUrl} pathKeyword="history" />
            <OptionButton imagePath={optionsIconUrl} pathKeyword="options" />
          </View>
        </View>
      </ScreenContent>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.underButtonsContainer}>
          <View style={{ marginTop: 50 }}>
            <Button
              color="white"
              title="back"
              onPress={() => {
                goBack();
              }}
            />
          </View>

          <CirclePlusButton onPressFunc={handleAddPaymentPress} />
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
  },
  buttonsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  underButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 12,
    left: 0,
    right: 0,
    padding: 20,
  },
});
