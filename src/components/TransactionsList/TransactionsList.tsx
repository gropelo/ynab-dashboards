import React from 'react';
import { ITransaction } from '../../types';
import { Table, Body } from './styled';
import { TransactionsListHeader } from '../TransactionsListHeader';
import { TransactionsListRow } from '../TransactionsListRow';

interface IProps {
  transactions: ITransaction[];
}

export const TransactionsList = ({ transactions }: IProps) => (
  <Table>
    <TransactionsListHeader />
    <Body>{transactions.map(t => <TransactionsListRow key={t.id} transaction={t} />)}</Body>
  </Table>
);