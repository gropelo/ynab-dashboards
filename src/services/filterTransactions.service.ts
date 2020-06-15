import { ITransaction, IFilter } from "types";

export function filterTransactionsService(transactions: ITransaction[], filter: IFilter) {
  const currentDate = new Date();

  return transactions.filter(t => {
    switch (filter.period) {
      case 'THIS_YEAR':
        if (+t.date.substr(0, 4) !== currentDate.getFullYear()) {
          return false;
        }
        break;

      case 'LAST_YEAR':
        if (+t.date.substr(0, 4) !== currentDate.getFullYear() - 1) {
          return false;
        }
        break;
    }

    if (filter.categoryId && t.category_id !== filter.categoryId) {
      return false;
    }

    if (t.deleted || t.amount >= 0 || t.transfer_account_id) {
      return false;
    }

    if (filter.onlyClosedMonths) {
      return +t.date.substr(5, 2) !== currentDate.getMonth() + 1;
    }

    return true;
  })
  .map(t => ({ ...t, amount: Math.abs(t.amount / 1000) }))
  .sort((t1, t2) => t1.date > t2.date ? -1 : 1);
}