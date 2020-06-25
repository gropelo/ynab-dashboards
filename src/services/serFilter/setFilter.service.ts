import { IFilter, FilterGroupType } from "types";

export function setFilterService(filter: IFilter): IFilter {
  const group: FilterGroupType = filter.period === 'ALL_TIME' ? filter.group : 'MONTH';
  return { ...filter, group };
}