import { useState, useEffect } from "react";
import { getMinValueService } from "services/getMinValue.service";
import { IGroupValue } from "types";
import { useTransactionsByPeriod } from "./useTransactionsByPeriod";

export function useMin() {
  const periods = useTransactionsByPeriod();
  const [ min, setMin ] = useState<IGroupValue>({ amount: 0, group: '' });

  useEffect(() => {
    setMin(getMinValueService(periods));
  }, [periods]);

  return min;
}