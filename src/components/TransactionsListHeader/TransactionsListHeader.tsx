import React from 'react';
import { HeaderColumn, LargeHeaderColumn, SmallHeaderColumn, Head, Row } from './styles';

export const TransactionsListHeader = () => (
  <Head>
    <Row>
      <HeaderColumn>Date</HeaderColumn>
      <HeaderColumn>Account</HeaderColumn>
      <HeaderColumn>Category</HeaderColumn>
      <LargeHeaderColumn>Memo</LargeHeaderColumn>
      <SmallHeaderColumn>Value</SmallHeaderColumn>
    </Row>
  </Head>
);