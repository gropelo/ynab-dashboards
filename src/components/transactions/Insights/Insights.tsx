import React from 'react';
import { ITransaction } from '../../../types';
import { Grid } from './styled';
import { useAvgTicket, useSum, useMax, useMin } from '../../../hooks';
import { Card } from '../../shared/Card';

interface IProps {
  transactions: ITransaction[]
}

export const Insights = ({transactions} : IProps) => {
  const avgTicket = useAvgTicket(transactions);
  const sum = useSum(transactions);
  const max = useMax(transactions);
  const min = useMin(transactions);

  return (
    <Grid>
      <Card label="Sum" amount={sum} />
      <Card label="Average Ticket" amount={avgTicket} />
      <Card label="Max" amount={max} />
      <Card label="Min" amount={min} />
    </Grid>
  )
};