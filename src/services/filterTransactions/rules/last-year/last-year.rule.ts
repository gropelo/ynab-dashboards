import { IFilterRule, ITransaction, IFilter } from "types";

export const lastYearRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    if (filter.period === 'LAST_YEAR') {
      return getYear(t) === getCurrentYear() -1;
    }

    return true;
  }
}

function getYear(t: ITransaction) {
  return +t.date.substr(0, 4);
}

function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}