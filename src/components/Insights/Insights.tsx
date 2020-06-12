import React from 'react';
import { Grid } from './styles';
import { Card } from '../Card';
import { avgState, maxState, minState, sumState } from '../../state';
import { useRecoilValue } from 'recoil';

export const Insights = () => {
  const avg = useRecoilValue(avgState);
  const max = useRecoilValue(maxState);
  const min = useRecoilValue(minState);
  const sum = useRecoilValue(sumState);

  return (
    <Grid>
      <Card label="Sum" amount={sum} />
      <Card label="Average" amount={avg} />
      <Card label="Max" amount={max.amount} info={max.group} />
      <Card label="Min" amount={min.amount} info={min.group} />
    </Grid>
  )
};