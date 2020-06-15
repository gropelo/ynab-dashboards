import { useRootState } from "./useRootState";
import { useState, useEffect } from "react";
import { sumTransactionsService } from "services/sumTransactions.service";

export function useSum() {
  const { filteredTransactions } = useRootState();
  const [ sum, setSum ] = useState(0);

  useEffect(() => {
    setSum(sumTransactionsService(filteredTransactions));
  }, [filteredTransactions]);

  return sum;
}