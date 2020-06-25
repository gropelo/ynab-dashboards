import { IFilterRule, ITransaction, IFilter } from "types";

export const closedMonthsRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    const currentDate = new Date();
    if (filter.onlyClosedMonths) {
      return +t.date.substr(5, 2) !== currentDate.getMonth() + 1;
    }

    return true;
  }
}