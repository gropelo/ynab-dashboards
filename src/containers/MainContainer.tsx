import React from 'react';
import { useTransactions } from '../hooks';
import { Loading, Error, TransactionsView } from '../components';
import { useParams } from 'react-router-dom';

export const MainContainer = () => {
  const { categoryId } = useParams();
  const { transactions, status } = useTransactions(categoryId);

  if (!categoryId) return null;
  if (status === 'LOADING') return <Loading />;
  if (status === 'ERROR') return <Error />;
  return <TransactionsView transactions={transactions} />
};
