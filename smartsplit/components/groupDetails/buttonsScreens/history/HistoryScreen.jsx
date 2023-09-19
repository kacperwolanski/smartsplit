import { Button, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import DayPayments from "./DayPayments";
import usePaymentsByDate from "../../../../hooks/usePaymentsByDateHook";
import SettingsField from "../../../appComponents/SettingsField";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";

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
      <ButtonsContainer top={710}>
        <Button color={"white"} title="back" onPress={handleBackPress} />
      </ButtonsContainer>
    </View>
  );
};

export default HistoryScreen;
