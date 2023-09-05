import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import useStore from "../../../../store";
import PersonSummary from "./PersonSummary";

const SummaryScreen = () => {
  const { goBack } = usePath();
  const { actualGroup } = useStore();
  const { people } = actualGroup;
  const handleBackPress = () => {
    goBack();
  };

  const summary1 = ["", "", "", ""];
  const summary2 = ["", ""];
  const summary3 = ["", "", ""];
  const summary4 = [""];
  const summaries = [summary1, summary2, summary3, summary4];
  const summariesViewElement = people.map((person, index) => {
    return (
      <PersonSummary
        key={index}
        index={index}
        personName={person.name}
        summaries={summaries[index]}
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
              <Text style={{ fontSize: 10, color: "white" }}>
                Total amount:
              </Text>
              <Text style={styles.total}>900PLN</Text>
            </View>
          </View>
        </View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
        <Button title="save" />
      </View>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    ...blueContainerStyle,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 700,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    marginTop: 38,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: "white",
    padding: 10,
  },
  total: {
    fontSize: 25,
    color: "white",
  },
});
