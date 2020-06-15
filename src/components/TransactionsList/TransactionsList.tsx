import React from 'react';
import { ITransaction } from 'types';
import { useRootState } from 'hooks';
import { TransactionsListRow } from '../TransactionsListRow';
import { TransactionsListHeader } from '../TransactionsListHeader';
import { Table, Body, WrappedTable } from './styles';

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