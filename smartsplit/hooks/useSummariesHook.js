import { isObjInArray, isObjectEqual } from "../helpers/isObjInArray";
import useStore from "../store";

export const useSummaries = () => {
  const { actualGroup, payments, addSummary, summaries } = useStore();
  const { people } = actualGroup;

  const addSummaries = () => {
    people.forEach((person) => {
      const newSummary = { person: person, payments: [] };
      payments.forEach((payment) => {
        const payer = payment.person;
        if (
          isObjInArray(payment.forWho, person) &&
          !isObjectEqual(payer, person)
        ) {
          const amount = (payment.amount / payment.forWho.length).toFixed(2);
          const addedPayments = newSummary.payments;
          if (addedPayments.length) {
            addedPayments.forEach((payment) => {
              if (isObjectEqual(payment.forWho, payer)) {
                const previousAmount = payment.amount;
                newSummary.payments = updatedPayment(
                  payer,
                  parseInt(previousAmount) + parseInt(amount),
                  addedPayments
                );
              } else {
                newSummary.payments = addNewPayment(
                  newSummary.payments,
                  payer.name,
                  payer.id,
                  amount
                );
              }
            });
          } else {
            newSummary.payments = addNewPayment(
              newSummary.payments,
              payer.name,
              payer.id,
              amount
            );
          }
        }
      });

      if (newSummary.payments.length) {
        addSummary(newSummary);
      }
    });
  };
  return { addSummaries };
};

const addNewPayment = (payments, payerName, payerId, amount) => {
  const newPayment = {
    forWho: { name: payerName, id: payerId },
    amount: amount,
  };
  return [...payments, newPayment];
};
const updatedPayment = (forWho, newAmount, payments) => {
  const newPayments = payments.filter((payment) => {
    !isObjectEqual(payment.forWho, forWho);
  });
  const updatedPayment = {
    forWho: forWho,
    amount: newAmount,
  };
  return [...newPayments, updatedPayment];
};
