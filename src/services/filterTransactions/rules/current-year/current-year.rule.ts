import { IFilterRule, ITransaction, IFilter } from "types";

export const currentYearRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    if (filter.period === 'THIS_YEAR') {
      return getYear(t) === getCurrentYear();
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