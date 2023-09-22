import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import BlueTextInput from "../appComponents/BlueTextInput";
import useStore from "../../store";
import ChoosePeople from "./ChoosePeople";
import getFormattedDate from "../../helpers/getFormattedDate";
import useTheme from "../../hooks/useThemeHook";
import ButtonsContainer from "../appComponents/ButtonsContainer";
import useActualGroup from "../../hooks/useActualGroupHook";

const NewPaymentScreen = () => {
  const [whoPays, setWhoPays] = useState([]);
  const [forWho, setForWho] = useState([]);
  const [amount, setAmount] = useState("0");
  const [note, setNote] = useState("");
  const [isAbleToAdd, setIsAbleToAdd] = useState(false);
  const { mainHeader } = useTheme();
  const { updatePayments, updateSummaries, actualGroupId } = useStore();
  const { actualGroup } = useActualGroup();
  const { people, groupCurrency, payments } = actualGroup;
  const { goBack } = usePath();

  const handleAddPayment = () => {
    if (isAbleToAdd) {
      const newPayment = {
        person: whoPays[0],
        forWho: forWho,
        note: note,
        amount: amount,
        date: getFormattedDate(),
      };

      updatePayments([...payments, newPayment], actualGroupId);
      updateSummaries([], actualGroupId);
      goBack();
    }
  };
  useEffect(() => {
    setIsAbleToAdd(whoPays.length && forWho.length && parseInt(amount));
  }, [whoPays, forWho, amount, note]);
  return (
    <View>
      <Text style={mainHeader}>Add new payment</Text>
      <ScreenContent>
        <View>
          <Text style={styles.headerStyle}>Who pays?</Text>
          <ChoosePeople
            people={people}
            peopleAmount={1}
            chosenPeopleFunc={setWhoPays}
            chosenPeople={whoPays}
          />
        </View>
        <BlueTextInput
          placeholder={amount}
          saveFunction={setAmount}
          header={`Amount ${groupCurrency}`}
          inputType={"numbers"}
        />
        <View>
          <Text style={styles.headerStyle}>For who?</Text>
          <ChoosePeople
            people={people}
            peopleAmount={people.length}
            chosenPeopleFunc={setForWho}
            chosenPeople={forWho}
          />
        </View>

        <View>
          <BlueTextInput
            placeholder={note}
            saveFunction={setNote}
            header={"Note"}
          />
        </View>
      </ScreenContent>

      <ButtonsContainer top={700}>
        <View>
          <Button
            color="white"
            title="back"
            onPress={() => {
              goBack();
            }}
          />
        </View>
        <Button
          title="add"
          onPress={handleAddPayment}
          disabled={!isAbleToAdd}
        />
      </ButtonsContainer>
    </View>
  );
};

export default NewPaymentScreen;

const styles = StyleSheet.create({
  headerStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
});
