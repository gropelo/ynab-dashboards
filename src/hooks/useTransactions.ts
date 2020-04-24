import { useState, useEffect } from "react";
import Axios from "axios";
import { ITransactionsResponse, ITransaction, StatusType } from "../types";

interface IOutput {
  transactions: ITransaction[];
  status: StatusType;
}

export const useTransactions = (categoryId: string | undefined): IOutput => {
  const [status, setStatus] = useState<StatusType>('LOADING');
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

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

  return { transactions, status };
};