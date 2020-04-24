import { ITransaction } from "../types";
import { useState, useEffect } from "react";

export const useMin = (transactions: ITransaction[]) => {
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const sorted = [...transactions].sort((a, b) => a.amount - b.amount);
      setMin(sorted[0].amount);
    } else {
      setMin(0);
    }
  }, [transactions]);

  return min;
};