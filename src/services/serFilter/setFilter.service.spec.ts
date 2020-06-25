import { setFilterService } from './setFilter.service';
import { IFilter } from 'types';

const defaultFilter: IFilter = {
  categoryId: '1',
  group: 'MONTH',
  onlyClosedMonths: false,
  period: 'THIS_YEAR'
}

describe('setFilterService', () => {
  it('should set group as the current one if the period will be set as ALL TIME', () => {
    const filter: IFilter = { ...defaultFilter, period: 'ALL_TIME', group: 'YEAR' };
    const result = setFilterService(filter);
    expect(result.group).toBe('YEAR');
  });

  it('should set group as MONTH if the period will be set as THIS_YEAR', () => {
    const filter: IFilter = { ...defaultFilter, period: 'THIS_YEAR', group: 'YEAR' };
    const result = setFilterService(filter);
    expect(result.group).toBe('MONTH');
  });

  it('should set group as MONTH if the period will be set as LAST_YEAR', () => {
    const filter: IFilter = { ...defaultFilter, period: 'LAST_YEAR', group: 'YEAR' };
    const result = setFilterService(filter);
    expect(result.group).toBe('MONTH');
  });
});