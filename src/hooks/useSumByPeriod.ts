import { ITransaction, IGroupValue, FilterGroupType } from "../types";
import { useState, useEffect } from "react";

export const useSumByPeriod = (transactions: ITransaction[], group: FilterGroupType): IGroupValue[] => {
  const [months, setMonths] = useState<IGroupValue[]>([]);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      setMonths(
        transactions
          .map(t => ({ group: group === 'MONTH' ? t.date.substr(0, 7) : t.date.substr(0, 4), amount: t.amount }))
          .reduce((groupedValues: IGroupValue[], value: IGroupValue) => {
            const i = groupedValues.findIndex(v => v.group === value.group);
            
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
  }, [transactions, group]);

  return months;
};