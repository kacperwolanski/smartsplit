import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import headerStyle from "../../styles/headerStyle";
import BlueTextInput from "../appComponents/BlueTextInput";
import useStore from "../../store";
import ChoosePeople from "./ChoosePeople";

const NewPaymentScreen = () => {
  const [whoPays, setWhoPays] = useState([]);
  const [forWho, setForWho] = useState([]);
  const [amount, setAmount] = useState("0");
  const [note, setNote] = useState("");

  const { actualGroup } = useStore();
  const { people, groupCurrency } = actualGroup;

  const { goBack } = usePath();

  const handleAddPayment = () => {};
  return (
    <View>
      <Text style={headerStyle}>Add new payment</Text>
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
        <Button title="add" onPress={handleAddPayment} />
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
