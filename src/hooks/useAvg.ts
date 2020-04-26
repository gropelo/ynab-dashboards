import { ITransaction, IFilter } from "../types";
import { useState, useEffect } from "react";
import { useSumByPeriod } from "./useSumByPeriod";

export const useAvg = (transactions: ITransaction[], filter: IFilter) => {
  const [avg, setAvg] = useState(0);
  const months = useSumByPeriod(transactions, filter);

  useEffect(() => {
    if (months.length > 0) {
      const sum = months.map(m => m.amount).reduce((a, b) => a + b);
      setAvg(sum / months.length);
    } else {
      setAvg(0);
    }
  }, [months]);

  return avg;
};