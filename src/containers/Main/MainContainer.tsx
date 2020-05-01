import React, { useState, useEffect } from 'react';
import { useTransactions } from '../../hooks';
import { Loading, Error, Filter, Insights, Charts, TransactionsList } from '../../components';
import { useParams } from 'react-router-dom'; 
import { Main } from './styled';
import { IFilter } from '../../types';

export const MainContainer = () => {
  const { categoryId } = useParams();
  const [filter, setFilter] = useState<IFilter>({ period: 'THIS_YEAR', group: 'MONTH', onlyClosedMonths: true, categoryId });
  const { transactions, status } = useTransactions(filter);

  useEffect(() => {
    categoryId !== filter.categoryId &&  setFilter({...filter, categoryId});
  }, [filter, categoryId]);

  if (status === 'LOADING') return <Loading />;
  if (status === 'ERROR') return <Error />;
  return (
    <Main>
      <Filter filter={filter} setFilter={setFilter} />
      <Insights transactions={transactions} group={filter.group} />
      <Charts transactions={transactions} group={filter.group} />
      <TransactionsList transactions={transactions} />
    </Main>
  )
};
