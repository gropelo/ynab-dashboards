import { useState, useEffect } from "react";
import { IAccountValue } from "types";
import { sumByAccountService } from "services/sumByAccount.service";
import { useRootState } from "./useRootState";

export function useTransactionsByAccount() {
  const { filteredTransactions, filter } = useRootState();
  const [ accounts, setAccounts ] = useState<IAccountValue[]>([]);

  useEffect(() => {
    setAccounts(sumByAccountService(filteredTransactions));
  }, [filteredTransactions, filter]);

  return accounts;
}