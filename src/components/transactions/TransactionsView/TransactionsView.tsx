import React from 'react';
import { ITransaction } from '../../../types';
import { Main } from './styled';
import { Insights } from '../Insights';
import { TransactionsList } from '../TransactionsList';
import { Charts } from '../Charts';

interface IProps {
  transactions: ITransaction[];
}

export const TransactionsView = ({ transactions }: IProps) => (
  <Main>
    <Insights transactions={transactions} />
    <Charts transactions={transactions} />
    <TransactionsList transactions={transactions} />
  </Main>
);