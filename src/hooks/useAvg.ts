import { useState, useEffect } from "react";
import { getAvgValueService } from "services/getAvgValue.service";
import { useTransactionsByPeriod } from "./useTransactionsByPeriod";

export function useAvg() {
  const periods = useTransactionsByPeriod();
  const [ avg, setAvg ] = useState(0);

  useEffect(() => {
    setAvg(getAvgValueService(periods));
  }, [periods]);

  return avg;
}