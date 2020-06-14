import { useRootState } from "./useRootState";
import { useState, useEffect } from "react";
import { IGroupValue } from "../types";
import { sumByPeriodService } from "../services/sumByPeriod.service";

export function useTransactionsByPeriod() {
  const { filteredTransactions, filter } = useRootState();
  const [ periods, setPeriods ] = useState<IGroupValue[]>([]);

  useEffect(() => {
    setPeriods(sumByPeriodService(filteredTransactions, filter));
  }, [filteredTransactions, filter]);

  return periods;
}