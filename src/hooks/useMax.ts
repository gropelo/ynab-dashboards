import { useState, useEffect } from "react";
import { IGroupValue } from "types";
import { getMaxValueService } from "services/getMaxValue.service";
import { useTransactionsByPeriod } from "./useTransactionsByPeriod";

export function useMax() {
  const periods = useTransactionsByPeriod();
  const [ max, setMax ] = useState<IGroupValue>({ amount: 0, group: '' });

  useEffect(() => {
    setMax(getMaxValueService(periods));
  }, [periods]);

  return max;
}