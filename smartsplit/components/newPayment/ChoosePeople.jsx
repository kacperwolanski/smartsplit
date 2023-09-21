import React from "react";
import { StyleSheet, View } from "react-native";
import FriendName from "./FriendName";
import useTheme from "../../hooks/useThemeHook";

const ChoosePeople = ({
  people,
  peopleAmount,
  chosenPeopleFunc,
  chosenPeople,
}) => {
  const { contentField } = useTheme();
  const onPressFunc = (person, action) => {
    if (action === "add" && !chosenPeople.includes(person))
      chosenPeopleFunc([...chosenPeople, person]);
    else {
      const filteredArray = chosenPeople.filter((arrayPerson) => {
        return arrayPerson !== person;
      });
      chosenPeopleFunc(filteredArray);
    }
  };

  const ViewElements = people.map((person) => {
    return (
      <FriendName
        person={person}
        key={person.id}
        ableToMark={chosenPeople.length < peopleAmount}
        onPressFunc={onPressFunc}
      />
    );
  });
  return <View style={[styles.container, contentField]}>{ViewElements}</View>;
};

export default ChoosePeople;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 90,
  },
});
