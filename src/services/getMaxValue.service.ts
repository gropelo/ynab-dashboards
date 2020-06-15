import { IGroupValue } from "types";

export function getMaxValueService(periods: IGroupValue[]) {
  if (periods.length > 0) {
    const sorted = [...periods].sort((a, b) => b.amount - a.amount);
    return sorted[0];
  } else {
    return { amount: 0, group: '' };
  }
}