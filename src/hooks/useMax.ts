import { ITransaction } from "../types";
import { useState, useEffect } from "react";

export const useMax = (transactions: ITransaction[]) => {
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const sorted = [...transactions].sort((a, b) => b.amount - a.amount);
      setMax(sorted[0].amount);
    } else {
      setMax(0);
    }
  }, [transactions]);

  return max;
};