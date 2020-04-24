import { ITransaction, IMonthValue } from "../types";
import { useState, useEffect } from "react";

export const useSumByMonth = (transactions: ITransaction[]): IMonthValue[] => {
  const [months, setMonths] = useState<IMonthValue[]>([]);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      setMonths(
        transactions
          .map(t => ({ month: t.date.substr(0, 7), amount: t.amount }))
          .reduce((groupedValues: IMonthValue[], value: IMonthValue) => {
            const i = groupedValues.findIndex(v => v.month === value.month);
            
            if (i > -1) {
              groupedValues[i].amount = Math.round((groupedValues[i].amount + value.amount) * 100) / 100;
            } else {
              groupedValues.push({...value});
            }
            
            return groupedValues;
          }, [])
      );
    } else {
      setMonths([]);
    }
  }, [transactions]);

  return months;
};