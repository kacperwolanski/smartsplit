import React from "react";
import useActualGroup from "./useActualGroupHook";

const usePaymentsByDate = () => {
  const { actualGroup } = useActualGroup();
  const { payments } = actualGroup;

  const getPaymentsByDate = () => {
    let paymentsByDate = [];

    payments.forEach((payment) => {
      const paymentDate = payment.date;
      const savedDates = paymentsByDate.map((payment) => {
        return payment.date;
      });

      if (savedDates.includes(paymentDate)) {
        paymentsByDate = paymentsByDate.map((savedPayment) => {
          if (savedPayment.date === paymentDate) {
            const updatedPayments = [...savedPayment.payments, payment];

            return {
              date: savedPayment.date,
              payments: updatedPayments,
            };
          }
          return savedPayment;
        });
      } else {
        paymentsByDate.push({ date: paymentDate, payments: [payment] });
      }
    });
    return paymentsByDate;
  };

  return { getPaymentsByDate };
};

export default usePaymentsByDate;
