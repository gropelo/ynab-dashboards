import React from 'react';
import { useTransactionsByPeriod, useTransactionsByAccount, useIncomeVsOutcome } from 'hooks';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';
import { IncomeVsOutcomeChart } from '../IncomeVsOutcomeChart';
import { Grid } from './styles';

export const Charts = () => {
  const groups = useTransactionsByPeriod();
  const accounts = useTransactionsByAccount();
  const incomeVsOutcome = useIncomeVsOutcome();

  return (
    <Grid>
      <TimeLineChart groups={groups} />
      <IncomeVsOutcomeChart values={incomeVsOutcome} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};