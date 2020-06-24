import { useState, useEffect } from "react";
import { IIncomeVsOutcomeValue } from "types";
import { sumIncomeVsOutcomeService } from "services/sumIncomeVsOutcome.service";
import { useRootState } from "./useRootState";

export function useIncomeVsOutcome() {
  const { filteredTransactions, filter } = useRootState();
  const [ data, setData ] = useState<IIncomeVsOutcomeValue[]>([]);

  useEffect(() => {
    setData(sumIncomeVsOutcomeService(filteredTransactions, filter));
  }, [filteredTransactions, filter]);

  return data;
}