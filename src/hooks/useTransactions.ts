import { useState, useEffect } from "react";
import Axios from "axios";
import { ITransactionsResponse, ITransaction, StatusType, IFilter } from "../types";

interface IOutput {
  transactions: ITransaction[];
  status: StatusType;
}

const filtrar = (transactions: ITransaction[], filter: IFilter): ITransaction[] => {
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

    if (filter.onlyClosedMonths) {
      return +t.date.substr(5, 2) !== currentDate.getMonth()+1;
    }

    return true;
  });
}

export const useTransactions = (filter: IFilter, categoryId: string | undefined): IOutput => {
  const [status, setStatus] = useState<StatusType>('LOADING');
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    if (!categoryId) return;
    
    Axios.get<ITransactionsResponse>(`/v1/budgets/default/categories/${categoryId}/transactions`).then(({ data }) => {
      setTransactions(data.data.transactions.filter(t => !t.deleted && t.amount < 0).map(t => ({...t, amount: Math.abs(t.amount / 1000)})));
      setStatus('OK');
    }).catch(err => {
      console.error('Cannot load transactions', err);
      setStatus('ERROR');
    });
  }, [categoryId]);

  useEffect(() => {
    setFilteredTransactions(filtrar(transactions, filter));
  }, [transactions, filter]);

  return { transactions: filteredTransactions, status };
};