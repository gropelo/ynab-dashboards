import React from 'react';
import { Grid } from './styles';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';
import { useTransactionsByPeriod, useTransactionsByAccount } from '../../hooks';

export const Charts = () => {
  const groups = useTransactionsByPeriod();
  const accounts = useTransactionsByAccount();
  
  return (
    <Grid>
      <TimeLineChart groups={groups} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};