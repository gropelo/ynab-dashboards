import React from 'react';
import { ITransaction, FilterGroupType } from '../../types';
import { Grid } from './styled';
import { useSumByPeriod, useSumByAccount } from '../../hooks';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';

interface IProps {
  transactions: ITransaction[];
  group: FilterGroupType;
}

export const Charts = ({transactions, group}: IProps) => {
  const groups = useSumByPeriod(transactions, group);
  const accounts = useSumByAccount(transactions);
  
  return (
    <Grid>
      <TimeLineChart groups={groups} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};