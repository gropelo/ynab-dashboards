import { useState, useEffect } from "react";
import Axios from "axios";
import { ITransactionsResponse, ITransaction, StatusType, IFilter } from "../types";

interface IOutput {
  transactions: ITransaction[];
  status: StatusType;
}

const filter = (transactions: ITransaction[], filterSelection: IFilter) => {
  const currentDate = new Date();

  return Promise.resolve(transactions.filter(t => {
    switch (filterSelection.period) {
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

    if (filterSelection.categoryId && t.category_id !== filterSelection.categoryId) {
      return false;
    }

    if (t.deleted || t.amount >= 0 || t.transfer_account_id) {
      return false;
    }

    if (filterSelection.onlyClosedMonths) {
      return +t.date.substr(5, 2) !== currentDate.getMonth()+1;
    }

    return true;
  }));
}

const format = (transactions: ITransaction[]) => Promise.resolve(transactions.map(t => ({...t, amount: Math.abs(t.amount / 1000)})));

const sort = (transactions: ITransaction[]) => Promise.resolve(transactions.sort((t1, t2) => t1.date > t2.date ? -1 : 1));

export const useTransactions = (filterSelection: IFilter): IOutput => {
  const [status, setStatus] = useState<StatusType>('LOADING');
  const [rawTransactions, setRawTransactions] = useState<ITransaction[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    Axios.get<ITransactionsResponse>(`/v1/budgets/default/transactions`).then(({ data }) => {
      setRawTransactions(data.data.transactions);
      setStatus('OK');
    }).catch(err => {
      console.error('Cannot load transactions', err);
      setStatus('ERROR');
    });
  }, []);

  useEffect(() => {
    filter(rawTransactions, filterSelection)
      .then(sort)
      .then(format)
      .then(setTransactions);
  }, [rawTransactions, filterSelection]);

  return { transactions, status };
};