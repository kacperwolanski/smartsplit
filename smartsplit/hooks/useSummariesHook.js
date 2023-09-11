import { isObjInArray, isObjectEqual } from "../helpers/isObjInArray";
import useStore from "../store";

export const useSummaries = () => {
  const { actualGroup, payments, addSummary, summaries } = useStore();
  const { people } = actualGroup;
  console.log(payments, summaries);
  const addSummaries = () => {
    console.log("add");
    people.forEach((person) => {
      const newSummary = { person: person, payments: [] };
      payments.forEach((payment) => {
        const payer = payment.person;
        if (
          isObjInArray(payment.forWho, person) &&
          !isObjectEqual(payer, person)
        ) {
          const amount = (payment.amount / payment.forWho.length).toFixed(2);
          const newPayment = {
            forWho: { name: payer.name, id: payer.id },
            amount: amount,
          };
          newSummary.payments = [...newSummary.payments, newPayment];
        }
      });

      if (newSummary.payments.length) {
        console.log("ns: ", newSummary, summaries);
        addSummary(newSummary);
      }
    });
  };
  return { addSummaries };
};
