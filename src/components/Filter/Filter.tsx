import React from 'react';
import { Bar, InlineDiv } from './styles';
import { FilterPeriodType, FilterGroupType, IFilter } from '../../types';
import { useRootState, useDispatch } from '../../hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  
  const setFilter = (filter: IFilter) => {
    dispatch({ type: 'SET_FILTER', payload: filter});
  }
  
  const { filter } = useRootState();

  return (
    <Bar>
      <InlineDiv>
        <select name="period" value={filter.period}
          onChange={(e) => setFilter({ ...filter, period: e.target.value as FilterPeriodType })}>
          <option value={'ALL_TIME'}>All Time</option>
          <option value={'THIS_YEAR'}>This Year</option>
          <option value={'LAST_YEAR'}>Last Year</option>
        </select>
      </InlineDiv>
      <InlineDiv>
        <select value={filter.group}
          onChange={(e) => setFilter({ ...filter, group: e.target.value as FilterGroupType })}>
          <option value={'MONTH'}>Group by Month</option>
          <option value={'YEAR'}>Group by Year</option>
        </select>
      </InlineDiv>
      <InlineDiv>
        <input type="checkbox" checked={filter.onlyClosedMonths}
          onChange={(e) => setFilter({ ...filter, onlyClosedMonths: e.target.checked })} />Only closed months
    </InlineDiv>
    </Bar>
  )
};
