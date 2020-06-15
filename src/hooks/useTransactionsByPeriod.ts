import { useState, useEffect } from "react";
import { IGroupValue } from "types";
import { sumByPeriodService } from "services/sumByPeriod.service";
import { useRootState } from "./useRootState";

export function useTransactionsByPeriod() {
  const { filteredTransactions, filter } = useRootState();
  const [ periods, setPeriods ] = useState<IGroupValue[]>([]);

  useEffect(() => {
    setPeriods(sumByPeriodService(filteredTransactions, filter));
  }, [filteredTransactions, filter]);

  return periods;
}