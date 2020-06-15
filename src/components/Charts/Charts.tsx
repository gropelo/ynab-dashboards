import React from 'react';
import { useTransactionsByPeriod, useTransactionsByAccount } from 'hooks';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';
import { Grid } from './styles';

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