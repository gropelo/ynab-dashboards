import React, { useState } from 'react';
import { useTransactions } from '../../hooks';
import { Loading, Error, Filter, Insights, Charts, TransactionsList } from '../../components';
import { useParams } from 'react-router-dom'; 
import { Main } from './styled';
import { IFilter } from '../../types';

export const MainContainer = () => {
  const { categoryId } = useParams();
  const [filter, setFilter] = useState<IFilter>({ period: 'ALL_TIME', group: 'MONTH', onlyClosedMonths: true });
  const { transactions, status } = useTransactions(filter, categoryId);

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
