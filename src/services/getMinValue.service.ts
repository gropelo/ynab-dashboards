import { IGroupValue } from "types";

export function getMinValueService(periods: IGroupValue[]) {
  if (periods.length > 0) {
    const sorted = [...periods].sort((a, b) => a.amount - b.amount);
    return sorted[0];
  } else {
    return { amount: 0, group: '' };
  }
}