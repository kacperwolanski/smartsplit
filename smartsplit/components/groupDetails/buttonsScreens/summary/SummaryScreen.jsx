import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import PersonSummary from "./PersonSummary";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import SettingsField from "../../../appComponents/SettingsField";
import SingleInfo from "../../../appComponents/SingleInfo";
import useActualGroup from "../../../../hooks/useActualGroupHook";
import PaymentsPlaceholder from "../../../placeholders/PaymentsPlaceholder";
import useTotalExpense from "../../../../hooks/useTotalExpenceHook";
import useTheme from "../../../../hooks/useThemeHook";
const SummaryScreen = () => {
  const { goBack } = usePath();
  const { mainHeader } = useTheme();
  const { actualGroup } = useActualGroup();
  const { summaries, groupCurrency } = actualGroup;
  const handleBackPress = () => {
    goBack();
  };
  const { totalExpense } = useTotalExpense();

  const summariesViewElement = summaries.map((summary, index) => {
    const summaryPerson = summary.person;
    return (
      <PersonSummary
        key={index}
        index={index}
        summaryPerson={summaryPerson}
        summaries={summary.payments}
      />
    );
  });

  return (
    <View>
      <Text style={mainHeader}>Summary</Text>
      <ScreenContent scrollEnabled={false}>
        <View style={styles.container}>
          {summaries.length > 0 ? (
            <>
              <SettingsField title={"GROUP DEBTS"}>
                {summariesViewElement}
              </SettingsField>
              <View style={{ marginTop: 20 }}>
                <SettingsField title={"OTHER DETAILS"}>
                  <View style={styles.totalContainer}>
                    <SingleInfo
                      title={"Total expense:"}
                      value={totalExpense + groupCurrency}
                      first={true}
                    />
                  </View>
                </SettingsField>
              </View>
            </>
          ) : (
            <PaymentsPlaceholder />
          )}
        </View>
      </ScreenContent>
      <ButtonsContainer top={710}>
        <Button color={"white"} title="back" onPress={handleBackPress} />
      </ButtonsContainer>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  totalContainer: {
    padding: 10,
  },
  total: {},
});
