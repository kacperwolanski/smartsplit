import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import useStore from "../../../../store";
import PersonSummary from "./PersonSummary";
import useTheme from "../../../../hooks/useThemeHook";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";

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
          {summariesViewElement}
          <View style={{ padding: 20 }}>
            <View style={styles.totalContainer}>
              <Text style={{ fontSize: 10, color: theme.mainFontColor }}>
                In total:
              </Text>
              <Text style={{ fontSize: 25, color: theme.mainFontColor }}>
                900PLN
              </Text>
            </View>
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
    borderTopWidth: 1,
    borderTopColor: "white",
    padding: 10,
  },
  total: {},
});
