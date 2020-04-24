import { ITransaction } from "../types";
import { useState, useEffect } from "react";
import { useSumByMonth } from "./useSumByMonth";

export const useAvgTicket = (transactions: ITransaction[]) => {
  const [avgTicket, setAvgTicket] = useState(0);
  const months = useSumByMonth(transactions);

  useEffect(() => {
    if (months && months.length > 0) {
      const sum = months.map(m => m.amount).reduce((a, b) => a + b);
      setAvgTicket(sum / months.length);
    } else {
      setAvgTicket(0);
    }
  }, [months]);

  return avgTicket;
};