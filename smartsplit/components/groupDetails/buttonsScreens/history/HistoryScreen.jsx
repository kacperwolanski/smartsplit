import { Button, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import DayPayments from "./DayPayments";
import usePaymentsByDate from "../../../../hooks/usePaymentsByDateHook";
import SettingsField from "../../../appComponents/SettingsField";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import PaymentsPlaceholder from "../../../placeholders/PaymentsPlaceholder";
import useTheme from "../../../../hooks/useThemeHook";

const HistoryScreen = () => {
  const { goBack } = usePath();
  const { mainHeader, theme } = useTheme();
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
      <Text style={mainHeader}>Payments history</Text>
      <ScreenContent>
        {paymentsByDate.length > 0 ? (
          <SettingsField title="PAYMENTS">
            {dayPaymentsViewElement}
          </SettingsField>
        ) : (
          <PaymentsPlaceholder />
        )}
      </ScreenContent>
      <ButtonsContainer top={710}>
        <Button
          color={theme.passiveSysBtn}
          title="back"
          onPress={handleBackPress}
        />
      </ButtonsContainer>
    </View>
  );
};

export default HistoryScreen;
