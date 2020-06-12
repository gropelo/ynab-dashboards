import React from 'react';
import { Bar, InlineDiv } from './styles';
import { FilterPeriodType, FilterGroupType } from '../../types';
import { filterState } from '../../state';
import { useRecoilState } from 'recoil';

export const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

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
