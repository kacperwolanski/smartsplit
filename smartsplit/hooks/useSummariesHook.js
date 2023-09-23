import { isObjInArray, isObjectEqual } from "../helpers/isObjInArray";
import useStore from "../store";
import useActualGroup from "./useActualGroupHook";

export const useSummaries = () => {
  const { updateSummaries } = useStore();
  const { actualGroup } = useActualGroup();
  const { people, payments, id } = actualGroup;
  const summaries = [];

  const addSummaries = () => {
    if (!payments.length) {
      updateSummaries([], id);
    } else {
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
          summaries.push(newSummary);
        }
      });

      if (summaries.length) updateSummaries(summaries, id);
    }
  };
  return { addSummaries };
};

const optimizeSummaries = (summary) => {
  const { payments } = summary;
  const result = [];
  const nameSums = {};

  payments.forEach((item) => {
    const { forWho, amount } = item;

    const floatAmount = parseFloat(amount);
    const name = forWho.name;
    const id = forWho.id;

    if (!nameSums[name]) {
      nameSums[name] = { forWho: { name, id }, amount: floatAmount };
    } else {
      nameSums[name].amount += floatAmount;
    }
  });

  for (const name in nameSums) {
    result.push(nameSums[name]);
  }

  return result;
};
