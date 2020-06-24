import React from 'react';
import { Tooltip, ResponsiveContainer, BarChart, XAxis, YAxis, Legend, Bar } from 'recharts';
import { IIncomeVsOutcomeValue } from 'types';
import { Card } from './styles';

interface IProps {
  values: IIncomeVsOutcomeValue[];
}

export const IncomeVsOutcomeChart = ({values}: IProps) => (
  <Card>
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={values}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#00C49F" />
        <Bar dataKey="outcome" fill="#e7305b" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);