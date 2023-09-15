import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import useStore from "../../../../store";
import DayPayments from "./DayPayments";
import usePaymentsByDate from "../../../../hooks/usePaymentsByDateHook";
import { blueContainerStyle } from "../../../../styles/blueContainer";
const HistoryScreen = () => {
  const { goBack } = usePath();
  const { payments } = useStore();
  const { getPaymentsByDate } = usePaymentsByDate();
  const handleBackPress = () => {
    goBack();
  };

  const paymentsByDate = getPaymentsByDate();

  const dayPaymentsViewElement = paymentsByDate.map((paymentByDate, index) => {
    const { date, payments } = paymentByDate;

    return (
      <View key={index}>
        <DayPayments date={date} payments={payments} index={0} />
      </View>
    );
  });

  return (
    <View>
      <Text style={headerStyle}>History</Text>
      <ScreenContent>
        <View style={blueContainerStyle}>{dayPaymentsViewElement}</View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
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
