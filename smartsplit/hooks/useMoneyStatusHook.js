import React from "react";
import useStore from "../store";
import useActualGroup from "./useActualGroupHook";

const useMoneyStatus = () => {
  const { updateGroupsByKey } = useStore();
  const { actualGroup } = useActualGroup();
  const { payments, people, id } = actualGroup;

  const getMoneyStatus = () => {
    const moneyStatuses = {};

    people.forEach((person) => {
      moneyStatuses[person.id] = {
        id: person.id,
        status: 0,
      };
    });

    payments.forEach((payment) => {
      const { person, forWho, amount } = payment;
      const intAmount = parseInt(amount);
      moneyStatuses[person.id].status += intAmount;
      const splitAmount = (intAmount / forWho.length).toFixed(2);
      forWho.forEach((recipient) => {
        moneyStatuses[recipient.id].status -= splitAmount;
      });
    });

    const moneyStatusesArray = Object.values(moneyStatuses);
    updateGroupsByKey(moneyStatusesArray, "statuses", id);
  };
  return { getMoneyStatus };
};

export default useMoneyStatus;
