import { ITransaction } from "types";

export function sumTransactionsService(transactions: ITransaction[]) {
  if (transactions && transactions.length > 0) {
    const sum = transactions.map(t => t.amount).reduce((a, b) => a + b);
    return sum;
  } else {
    return 0;
  }
}