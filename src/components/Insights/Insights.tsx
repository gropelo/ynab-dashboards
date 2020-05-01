import React from 'react';
import { ITransaction, FilterGroupType } from '../../types';
import { Grid } from './styles';
import { useAvg, useSum, useMax, useMin } from '../../hooks';
import { Card } from '../Card';

interface IProps {
  transactions: ITransaction[],
  group: FilterGroupType
}

export const Insights = ({transactions, group} : IProps) => {
  const avg = useAvg(transactions, group);
  const max = useMax(transactions, group);
  const min = useMin(transactions, group);
  const sum = useSum(transactions);

  return (
    <Grid>
      <Card label="Sum" amount={sum} />
      <Card label="Average" amount={avg} />
      <Card label="Max" amount={max.amount} info={max.group} />
      <Card label="Min" amount={min.amount} info={min.group} />
    </Grid>
  )
};