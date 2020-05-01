import React from 'react';
import { Bar, InlineDiv } from './styles';
import { IFilter, FilterPeriodType, FilterGroupType } from '../../types';

interface IProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

export const Filter = ({ filter, setFilter }: IProps) => (
  <Bar>
    <InlineDiv>
      <select name="period" value={filter.period} 
        onChange={(e) => setFilter({...filter, period: e.target.value as FilterPeriodType })}>
        <option value={'ALL_TIME'}>All Time</option>
        <option value={'THIS_YEAR'}>This Year</option>
        <option value={'LAST_YEAR'}>Last Year</option>
      </select>
    </InlineDiv>
    <InlineDiv>
      <select value={filter.group} 
        onChange={(e) => setFilter({...filter, group: e.target.value as FilterGroupType })}>
        <option value={'MONTH'}>Group by Month</option>
        <option value={'YEAR'}>Group by Year</option>
      </select>
    </InlineDiv>
    <InlineDiv>
      <input type="checkbox" checked={filter.onlyClosedMonths} 
        onChange={(e) => setFilter({...filter, onlyClosedMonths: e.target.checked})} />Only closed months
    </InlineDiv>
  </Bar>
);
