import { ITransaction, IFilter } from "../types";
import { useState, useEffect } from "react";
import { useSumByPeriod } from "./useSumByPeriod";

export const useMax = (transactions: ITransaction[], filter: IFilter) => {
  const [max, setMax] = useState(0);
  const months = useSumByPeriod(transactions, filter);

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