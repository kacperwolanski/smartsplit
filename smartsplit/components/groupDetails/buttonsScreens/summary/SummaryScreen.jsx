import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import useStore from "../../../../store";
import PersonSummary from "./PersonSummary";
import useTheme from "../../../../hooks/useThemeHook";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import SettingsField from "../../../appComponents/SettingsField";
import SingleInfo from "../../../appComponents/SingleInfo";

const SummaryScreen = () => {
  const { goBack } = usePath();
  const { summaries } = useStore();

  const { theme } = useTheme();
  const handleBackPress = () => {
    goBack();
  };

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
      <Text style={headerStyle}>Summary</Text>
      <ScreenContent>
        <View style={styles.container}>
          <SettingsField title={"GROUP DEBTS"}>
            {summariesViewElement}
          </SettingsField>
          <View style={{ marginTop: 20 }}>
            <SettingsField title={"OTHER DETAILS"}>
              <View style={styles.totalContainer}>
                <SingleInfo
                  title={"Total expense:"}
                  value={"900PLN"}
                  first={true}
                />
                <SingleInfo title={"Total expense:"} value={"900PLN"} />
                <SingleInfo title={"Total expense:"} value={"900PLN"} />
              </View>
            </SettingsField>
          </View>
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
