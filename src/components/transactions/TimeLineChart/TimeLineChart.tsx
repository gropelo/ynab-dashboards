import React from 'react';
import { IMonthValue } from '../../../types';
import { Card } from './styled';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface IProps {
  months: IMonthValue[];
}

export const TimeLineChart = ({months}: IProps) => (
  <Card>
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={months}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="amount" />
      </AreaChart>
    </ResponsiveContainer>
  </Card>
);