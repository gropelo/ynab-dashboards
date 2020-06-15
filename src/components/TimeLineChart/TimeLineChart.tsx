import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IGroupValue } from 'types';
import { Card } from './styles';

interface IProps {
  groups: IGroupValue[];
}

export const TimeLineChart = ({groups}: IProps) => (
  <Card>
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={groups}>
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="amount" />
      </AreaChart>
    </ResponsiveContainer>
  </Card>
);