import { useState, useEffect } from "react";
import { useTransactionsByPeriod } from "./useTransactionsByPeriod";
import { getMinValueService } from "../services/getMinValue.service";
import { IGroupValue } from "../types";

export function useMin() {
  const periods = useTransactionsByPeriod();
  const [ min, setMin ] = useState<IGroupValue>({ amount: 0, group: '' });

  useEffect(() => {
    setMin(getMinValueService(periods));
  }, [periods]);

  return min;
}