import React from 'react';
import { useAvg, useMax, useMin, useSum } from 'hooks';
import { Card } from '../Card';
import { Grid } from './styles';

export const Insights = () => {
  const avg = useAvg();
  const max = useMax();
  const min = useMin();
  const sum = useSum();

  return (
    <Grid>
      <Card label="Sum" amount={sum} />
      <Card label="Average" amount={avg} />
      <Card label="Max" amount={max.amount} info={max.group} />
      <Card label="Min" amount={min.amount} info={min.group} />
    </Grid>
  )
};