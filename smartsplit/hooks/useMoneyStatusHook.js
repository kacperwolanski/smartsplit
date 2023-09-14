import React from "react";
import useStore from "../store";
import { isObjectEqual } from "../helpers/isObjInArray";

const useMoneyStatus = () => {
  const { payments, actualGroup, updateGroups, groups, setActualGroup } =
    useStore();
  const updatedPeople = [];

  const updatePeopleGroups = () => {
    const updatedGroups = groups.map((group) => {
      if (group.id === actualGroup.id) {
        const newGroup = { ...group, people: updatedPeople };
        setActualGroup(newGroup);
        return newGroup;
      }
      return group;
    });
    updateGroups(updatedGroups);
  };

  const getMoneyStatus = () => {
    actualGroup.people.forEach((friend) => {
      let status = 0;
      payments.forEach((payment) => {
        const { forWho, person, amount } = payment;
        const moneyPerEach = (amount / forWho.length).toFixed(2);

        // -1 is in forwho 0 is not
        let friendInForWho = 0;
        forWho.forEach((paidPerson) => {
          if (isObjectEqual(paidPerson, friend)) {
            friendInForWho = -1;
            return;
          }
        });

        //friend pays +
        if (isObjectEqual(person, friend)) {
          status += moneyPerEach * (forWho.length + friendInForWho);
        } else {
          status -= moneyPerEach * (forWho.length + friendInForWho);
        }
      });
      updatedPeople.push({
        ...friend,
        status: status,
      });
    });
    updatePeopleGroups();
  };
  return { getMoneyStatus };
};

export default useMoneyStatus;
