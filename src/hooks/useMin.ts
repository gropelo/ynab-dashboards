import { ITransaction, FilterGroupType } from "../types";
import { useState, useEffect } from "react";
import { useSumByPeriod } from "./useSumByPeriod";

export const useMin = (transactions: ITransaction[], group: FilterGroupType) => {
  const [min, setMin] = useState(0);
  const months = useSumByPeriod(transactions, group);

  useEffect(() => {
    if (months.length > 0) {
      const sorted = [...months].sort((a, b) => a.amount - b.amount);
      setMin(sorted[0].amount);
    } else {
      setMin(0);
    }
  }, [months]);

  return min;
};