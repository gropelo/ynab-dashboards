import React from 'react';
import { ITransaction } from '../../types';
import { Table, Body, WrappedTable } from './styles';
import { TransactionsListHeader } from '../TransactionsListHeader';
import { TransactionsListRow } from '../TransactionsListRow';
import { useRootState } from '../../hooks';

export const TransactionsList = () => {
  const { filteredTransactions } = useRootState();

  return (
    <WrappedTable>
      <Table>
        <TransactionsListHeader />
        <Body>{filteredTransactions.map((t: ITransaction) => <TransactionsListRow key={t.id} transaction={t} />)}</Body>
      </Table>
    </WrappedTable>
  )
};