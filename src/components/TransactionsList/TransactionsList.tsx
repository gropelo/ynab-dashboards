import React from 'react';
import { ITransaction } from '../../types';
import { Table, Body, WrappedTable } from './styles';
import { TransactionsListHeader } from '../TransactionsListHeader';
import { TransactionsListRow } from '../TransactionsListRow';
import { useRecoilValue } from 'recoil';
import { filteredTransactionsState } from '../../state';

export const TransactionsList = () => {
  const transactions = useRecoilValue(filteredTransactionsState);

  return (
    <WrappedTable>
      <Table>
        <TransactionsListHeader />
        <Body>{transactions?.map && transactions?.map((t: ITransaction) => <TransactionsListRow key={t.id} transaction={t} />)}</Body>
      </Table>
    </WrappedTable>
  )
};