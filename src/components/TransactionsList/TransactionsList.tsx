import React from 'react';
import { ITransaction } from '../../types';
import { Table, Body, WrappedTable } from './styled';
import { TransactionsListHeader } from '../TransactionsListHeader';
import { TransactionsListRow } from '../TransactionsListRow';

interface IProps {
  transactions: ITransaction[];
}

export const TransactionsList = ({ transactions }: IProps) => (
  <WrappedTable>
    <Table>
      <TransactionsListHeader />
      <Body>{transactions.map(t => <TransactionsListRow key={t.id} transaction={t} />)}</Body>
    </Table>
  </WrappedTable>
);