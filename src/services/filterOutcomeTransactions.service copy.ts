import { ITransaction, IFilter } from "types";
import { filterTransactionsService } from "./filterTransactions.service";

export function filterOutcomeTransactionsService(transactions: ITransaction[], filter: IFilter) {
  const filteredTransactions = filterTransactionsService(transactions, filter);

  return filteredTransactions.filter(t => {
    if (t.amount >= 0) {
      return false;
    }

    return true;
  })
  .map(t => ({ 
    ...t, 
    amount: Math.abs(t.amount) 
  }));
}