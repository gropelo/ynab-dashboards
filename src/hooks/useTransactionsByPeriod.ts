import { useState, useEffect } from "react";
import { IGroupValue } from "types";
import { sumByPeriodService } from "services/sumByPeriod.service";
import { useRootState } from "./useRootState";

export function useTransactionsByPeriod() {
  const { filteredOutcomeTransactions, filter } = useRootState();
  const [ periods, setPeriods ] = useState<IGroupValue[]>([]);

  useEffect(() => {
    setPeriods(sumByPeriodService(filteredOutcomeTransactions, filter));
  }, [filteredOutcomeTransactions, filter]);

  return periods;
}