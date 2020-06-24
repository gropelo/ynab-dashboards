import { useRootState } from "./useRootState";
import { useState, useEffect } from "react";
import { sumTransactionsService } from "services/sumTransactions.service";

export function useSum() {
  const { filteredOutcomeTransactions } = useRootState();
  const [ sum, setSum ] = useState(0);

  useEffect(() => {
    setSum(sumTransactionsService(filteredOutcomeTransactions));
  }, [filteredOutcomeTransactions]);

  return sum;
}