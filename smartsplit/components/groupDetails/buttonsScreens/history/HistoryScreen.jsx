import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import useStore from "../../../../store";
import DayPayments from "./DayPayments";

const HistoryScreen = () => {
  const { goBack } = usePath();
  const { payments } = useStore();

  const handleBackPress = () => {
    goBack();
  };

  const dayPaymentsViewElement = payments.map((payment, index) => {
    return (
      <View key={index}>
        <DayPayments
          date={payments[0].date}
          payments={[payments[0]]}
          index={0}
        />
      </View>
    );
  });

  return (
    <View>
      <Text style={headerStyle}>History</Text>
      <ScreenContent>
        <View style={styles.container}>{dayPaymentsViewElement}</View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
      </View>
    </View>
  );
};

export default HistoryScreen;

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
});
