import React from "react";
import useActualGroup from "./useActualGroupHook";

const useTotalExpense = () => {
  const { actualGroup } = useActualGroup();
  const { payments } = actualGroup;

  let totalExpense = 0;
  payments.forEach((payment) => {
    const { amount } = payment;
    const floatAmount = parseFloat(amount);
    totalExpense += floatAmount;
  });
  return { totalExpense };
};

export default useTotalExpense;
