import { ITransaction, IFilter } from "types";
import { rules } from "./rules";

export function filterTransactionsService(transactions: ITransaction[], filter: IFilter) {
  return transactions.filter(t => {
    for (const rule of rules) {
      const validation = rule.validate(t, filter);
      if (!validation) return false;
    }

    return true;
  })
  .map(map)
  .sort(sort);
}

function map(transaction: ITransaction) {
  return { 
    ...transaction, 
    amount: transaction.amount / 1000 
  };
}

function sort(t1: ITransaction, t2: ITransaction) {
  return t1.date > t2.date ? -1 : 1
}
