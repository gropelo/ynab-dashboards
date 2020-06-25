import { IGroupValue } from 'types';

export function getAvgValueService(periods: IGroupValue[]) {
  if (periods.length > 0) {
    const sum = periods.map(m => m.amount).reduce((a, b) => a + b);
    return sum / periods.length;
  } else {
    return 0;
  }
}