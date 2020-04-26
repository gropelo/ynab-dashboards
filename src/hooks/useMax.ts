import { ITransaction, FilterGroupType } from "../types";
import { useState, useEffect } from "react";
import { useSumByPeriod } from "./useSumByPeriod";

export const useMax = (transactions: ITransaction[], group: FilterGroupType) => {
  const [max, setMax] = useState(0);
  const months = useSumByPeriod(transactions, group);

  useEffect(() => {
    if (months.length > 0) {
      const sorted = [...months].sort((a, b) => b.amount - a.amount);
      setMax(sorted[0].amount);
    } else {
      setMax(0);
    }
  }, [months]);

  return max;
};