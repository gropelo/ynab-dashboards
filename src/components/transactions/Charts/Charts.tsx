import React from 'react';
import { ITransaction } from '../../../types';
import { Grid } from './styled';
import { useSumByMonth, useSumByAccount } from '../../../hooks';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';

interface IProps {
  transactions: ITransaction[];
}

export const Charts = ({transactions}: IProps) => {
  const months = useSumByMonth(transactions);
  const accounts = useSumByAccount(transactions);
  
  return (
    <Grid>
      <TimeLineChart months={months} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};