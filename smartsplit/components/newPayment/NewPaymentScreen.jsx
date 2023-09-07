import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ScreenContent from "../appComponents/ScreenContent";
import { usePath } from "../../hooks/usePathHook";
import { inputColor } from "../../styles/consts";
import headerStyle from "../../styles/headerStyle";
import AddFriend from "../newGroup/AddFriend";

import BlueTextInput from "../appComponents/BlueTextInput";
import useStore from "../../store";
import FriendName from "./FriendName";

const NewPaymentScreen = () => {
  const [whoPays, setWhoPays] = useState("");
  const [amount, setAmount] = useState(0);
  const { actualGroup } = useStore();
  const { people } = actualGroup;

  const { goBack } = usePath();

  const handleAmountChange = (amount) => {
    setAmount(amount);
  };

  const handlePayerChange = (payer) => {
    setWhoPays(payer);
  };

  const friendsViewElements = people.map((person) => {
    return <FriendName person={person} key={person.id} />;
  });

  console.log(people);
  return (
    <View>
      <Text style={headerStyle}>Add new payment</Text>
      <ScreenContent>
        <BlueTextInput
          placeholder={whoPays}
          saveFunction={() => {
            handlePayerChange(payer);
          }}
          header="Who pays?"
        />
        <View>
          <Text style={styles.headerStyle}>For who?</Text>
          <View style={styles.friendsContainer}>{friendsViewElements}</View>
        </View>

        <BlueTextInput
          placeholder={"0 PLN"}
          saveFunction={handleAmountChange}
          header="Amount"
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
          onPress={() => {
            goBack();
          }}
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
  friendsContainer: {
    paddingBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 90,
    ...blueContainerStyle,
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
