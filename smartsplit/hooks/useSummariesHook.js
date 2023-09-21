import { isObjInArray, isObjectEqual } from "../helpers/isObjInArray";
import useStore from "../store";

export const useSummaries = () => {
  const { actualGroup, payments, addSummary } = useStore();
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

          const newPayment = {
            forWho: { name: payer.name, id: payer.id },
            amount: amount,
          };
          newSummary.payments = [...newSummary.payments, newPayment];
        }
      });

      if (newSummary.payments.length) {
        newSummary.payments = optimizeSummaries(newSummary);
        addSummary(newSummary);
      }
    });
  };
  return { addSummaries };
};

const optimizeSummaries = (summary) => {
  const { payments } = summary;
  const result = [];
  const nameSums = {};

  payments.forEach((item) => {
    const { forWho, amount } = item;

    const name = forWho.name;
    const id = forWho.id;

    if (!nameSums[name]) {
      nameSums[name] = { forWho: { name, id }, amount: parseInt(amount, 10) };
    } else {
      nameSums[name].amount += parseInt(amount, 10);
    }
  });

  for (const name in nameSums) {
    result.push(nameSums[name]);
  }

  return result;
};
