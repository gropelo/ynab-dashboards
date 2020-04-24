import { ITransaction } from "../types";
import { useState, useEffect } from "react";

export const useSum = (transactions: ITransaction[]) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const sum = transactions.map(t => t.amount).reduce((a, b) => a + b);
      setSum(sum);
    } else {
      setSum(0);
    }
  }, [transactions]);

  return sum;
};