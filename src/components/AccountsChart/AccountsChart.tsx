import React from 'react';
import { IAccountValue } from '../../types';
import { Card } from './styles';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface IProps {
  accounts: IAccountValue[];
}

const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#0088FE'];

export const AccountsChart = ({accounts}: IProps) => (
  <Card>
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie data={accounts} dataKey="amount" nameKey="account" label={(entry) => entry.name}>
          {
          	accounts.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Card>
);