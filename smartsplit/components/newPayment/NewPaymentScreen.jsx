import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import BlueTextInput from "../appComponents/BlueTextInput";
import useStore from "../../store";
import ChoosePeople from "./ChoosePeople";
import getFormattedDate from "../../helpers/getFormattedDate";
import useTheme from "../../hooks/useThemeHook";

const NewPaymentScreen = () => {
  const [whoPays, setWhoPays] = useState([]);
  const [forWho, setForWho] = useState([]);
  const [amount, setAmount] = useState("0");
  const [note, setNote] = useState("");
  const [isAbleToAdd, setIsAbleToAdd] = useState(false);
  const { mainHeader } = useTheme();
  const { actualGroup, addPayment, addSummary } = useStore();
  const { people, groupCurrency } = actualGroup;

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
      addPayment(newPayment);
      addSummary(null);
      goBack();
    }
  };
  useEffect(() => {
    setIsAbleToAdd(whoPays.length && forWho.length && amount.length);
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

        <BlueTextInput
          placeholder={note}
          saveFunction={setNote}
          header={"Note"}
        />
      </ScreenContent>

      <View style={styles.buttonsContainer}>
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
      </View>
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

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 700,
    left: 0,
    right: 0,
    padding: 20,
    marginTop: 10,
  },
});
