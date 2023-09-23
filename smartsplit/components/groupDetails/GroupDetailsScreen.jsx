import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CirclePlusButton from "../buttons/CirclePlusButton";
import FriendName from "./FriendName";
import OptionButton from "../buttons/OptionButton";
import { historyIconUrl, optionsIconUrl } from "../../appConsts";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import { useSummaries } from "../../hooks/useSummariesHook";
import useMoneyStatus from "../../hooks/useMoneyStatusHook";
import useTheme from "../../hooks/useThemeHook";
import SettingsField from "../appComponents/SettingsField";
import ButtonsContainer from "../appComponents/ButtonsContainer";
import useActualGroup from "../../hooks/useActualGroupHook";
import { lightIcons } from "../../assets/urls";

const GroupDetailsScreen = () => {
  const { goBack, moveTo } = usePath();
  const { theme, mainHeader } = useTheme();
  const { actualGroup } = useActualGroup();
  const { addSummaries } = useSummaries();
  const { getMoneyStatus } = useMoneyStatus();
  const { name, people, groupCurrency, statuses } = actualGroup;

  const styles = groupDetailsScreen;
  const friendsViewElement = people.map((person, index) => {
    const statusObject = statuses.find((status) => status.id === person.id);
    const money = statusObject ? statusObject.status : 0;
    return (
      <FriendName
        key={index}
        friendName={person.name}
        moneyStatus={money}
        groupCurrency={groupCurrency}
      />
    );
  });
  const handleAddPaymentPress = () => {
    moveTo("/addPayment");
  };

  useEffect(() => {
    if (!actualGroup.summaries.length) {
      if (actualGroup.payments) {
        addSummaries();
        getMoneyStatus();
      }
    }
  }, []);
  return (
    <View>
      <Text style={mainHeader}>{name}</Text>
      <ScreenContent>
        <SettingsField title="GROUP MEMBERS">
          <View style={{ padding: 10 }}>{friendsViewElement}</View>
        </SettingsField>
        <View style={{ marginTop: 20 }}>
          <SettingsField title="MORE ACTIONS">
            <View style={styles.buttonsContainer}>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <OptionButton
                  imagePath={lightIcons.coinsIconUrl}
                  pathKeyword="summary"
                />
                <OptionButton
                  imagePath={historyIconUrl}
                  pathKeyword="history"
                />
                <OptionButton
                  imagePath={optionsIconUrl}
                  pathKeyword="options"
                />
              </View>
            </View>
          </SettingsField>
        </View>
      </ScreenContent>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <ButtonsContainer top={100}>
          <View style={{ marginBottom: 15 }}>
            <Button
              color={theme.mainFontColor}
              title="back"
              onPress={() => {
                goBack();
              }}
            />
          </View>

          <CirclePlusButton onPressFunc={handleAddPaymentPress} />
        </ButtonsContainer>
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
    borderRadius: 20,
  },
  buttonsContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
});
