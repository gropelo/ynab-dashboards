import React from 'react';
import { ITransaction, IFilter } from '../../types';
import { Grid } from './styled';
import { useSumByPeriod, useSumByAccount } from '../../hooks';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';

interface IProps {
  transactions: ITransaction[];
  filter: IFilter;
}

export const Charts = ({transactions, filter}: IProps) => {
  const groups = useSumByPeriod(transactions, filter);
  const accounts = useSumByAccount(transactions);
  
  return (
    <Grid>
      <TimeLineChart groups={groups} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};