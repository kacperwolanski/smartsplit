import { Button, Text, View } from "react-native";
import ScreenContent from "../../../appComponents/ScreenContent";
import { usePath } from "../../../../hooks/usePathHook";
import DayPayments from "./DayPayments";
import usePaymentsByDate from "../../../../hooks/usePaymentsByDateHook";
import SettingsField from "../../../appComponents/SettingsField";
import ButtonsContainer from "../../../appComponents/ButtonsContainer";
import PaymentsPlaceholder from "../../../placeholders/PaymentsPlaceholder";
import useTheme from "../../../../hooks/useThemeHook";
import { useState } from "react";
import DeletePaymentModal from "./DeletePaymentModal";
import useActualGroup from "../../../../hooks/useActualGroupHook";
import { isObjectEqual } from "../../../../helpers/isObjInArray";
import useStore from "../../../../store";

const HistoryScreen = () => {
  const { goBack } = usePath();
  const { updateGroupsByKey } = useStore();
  const { mainHeader, theme } = useTheme();
  const { getPaymentsByDate } = usePaymentsByDate();

  const { actualGroup } = useActualGroup();
  const { payments, id } = actualGroup;

  const [isDeleting, setIsDeleting] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState(null);

  const handleBackPress = () => {
    goBack();
  };

  const handleDelPaymentPress = () => {
    setIsDeleting(false);
    const updatedPayments = payments.filter((payment) => {
      return !isObjectEqual(paymentToDelete, payment);
    });
    updateGroupsByKey(updatedPayments, "payments", id);
  };

  const paymentsByDate = getPaymentsByDate();

  const dayPaymentsViewElement = paymentsByDate.map((paymentByDate, index) => {
    const { date, payments } = paymentByDate;

    return (
      <View key={index}>
        <DayPayments
          date={date}
          payments={payments}
          index={0}
          setIsDeleting={setIsDeleting}
          setPaymentToDelete={setPaymentToDelete}
        />
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
      <View style={{ position: "absolute", top: 590, left: 12 }}>
        {isDeleting && (
          <DeletePaymentModal
            setIsDeleting={setIsDeleting}
            handleDeletePayment={handleDelPaymentPress}
          />
        )}
      </View>
    </View>
  );
};

export default HistoryScreen;
