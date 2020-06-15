import { ITransaction, IAccountValue } from "types";

export function sumByAccountService(transactions: ITransaction[]) {
  return transactions
    .map(t => ({ account: t.account_name, amount: t.amount }))
    .reduce((groupedValues: IAccountValue[], value: IAccountValue) => {
      const i = groupedValues.findIndex(v => v.account === value.account);

      if (i > -1) {
        groupedValues[i].amount = Math.round((groupedValues[i].amount + value.amount) * 100) / 100;
      } else {
        groupedValues.push({ ...value });
      }

      return groupedValues;
    }, []);
}