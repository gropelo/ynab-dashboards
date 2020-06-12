import React from 'react';
import { Grid } from './styles';
import { TimeLineChart } from '../TimeLineChart';
import { AccountsChart } from '../AccountsChart';
import { sumByPeriodState, sumByAccountState } from '../../state';
import { useRecoilValue } from 'recoil';

export const Charts = () => {
  const groups = useRecoilValue(sumByPeriodState);
  const accounts = useRecoilValue(sumByAccountState);
  
  return (
    <Grid>
      <TimeLineChart groups={groups} />
      <AccountsChart accounts={accounts} />
    </Grid>
  )
};