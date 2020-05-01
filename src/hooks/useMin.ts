import { ITransaction, FilterGroupType, IGroupValue } from "../types";
import { useState, useEffect } from "react";
import { useSumByPeriod } from "./useSumByPeriod";

export const useMin = (transactions: ITransaction[], group: FilterGroupType) => {
  const [min, setMin] = useState<IGroupValue>({ amount: 0, group: '' });
  const months = useSumByPeriod(transactions, group);

  useEffect(() => {
    if (months.length > 0) {
      const sorted = [...months].sort((a, b) => a.amount - b.amount);
      setMin(sorted[0]);
    } else {
      setMin({ amount: 0, group: '' });
    }
  }, [months]);

  return min;
};