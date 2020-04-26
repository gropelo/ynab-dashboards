import React from 'react';
import { ITransaction, IFilter } from '../../types';
import { Grid } from './styled';
import { useAvg, useSum, useMax, useMin } from '../../hooks';
import { Card } from '../Card';

interface IProps {
  transactions: ITransaction[],
  filter: IFilter
}

export const Insights = ({transactions, filter} : IProps) => {
  const avg = useAvg(transactions, filter);
  const max = useMax(transactions, filter);
  const min = useMin(transactions, filter);
  const sum = useSum(transactions);

  return (
    <Grid>
      <Card label="Sum" amount={sum} />
      <Card label="Average" amount={avg} />
      <Card label="Max" amount={max} />
      <Card label="Min" amount={min} />
    </Grid>
  )
};