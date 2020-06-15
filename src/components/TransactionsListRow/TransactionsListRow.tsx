import React from 'react';
import { ITransaction } from 'types';
import { RightAlignedColumn, LeftAlignedColumn, Row } from './styles';

interface IProps {
  transaction: ITransaction;
}

export const TransactionsListRow = ({ transaction }: IProps) => (
  <Row>
    <LeftAlignedColumn>{transaction.date}</LeftAlignedColumn>
    <LeftAlignedColumn>{transaction.account_name}</LeftAlignedColumn>
    <LeftAlignedColumn>{transaction.category_name}</LeftAlignedColumn>
    <LeftAlignedColumn>{transaction.memo}</LeftAlignedColumn>
    <RightAlignedColumn>{transaction.amount.toFixed(2)}</RightAlignedColumn>
  </Row>
);