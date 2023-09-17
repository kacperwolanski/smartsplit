import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import DayPayments from "./DayPayments";
import usePaymentsByDate from "../../../../hooks/usePaymentsByDateHook";
import SettingsField from "../../../appComponents/SettingsField";

const HistoryScreen = () => {
  const { goBack } = usePath();
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
        <SettingsField title="PAYMENTS">{dayPaymentsViewElement}</SettingsField>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color={"white"} title="back" onPress={handleBackPress} />
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
    top: 650,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    marginTop: 38,
  },
});
