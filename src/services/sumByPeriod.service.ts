import { IGroupValue, IFilter, ITransaction } from '../types';

export function sumByPeriodService(transactions: ITransaction[], filter: IFilter) {
  const groupedTransactions = groupTransactions(transactions, filter);
  const periods = fillPeriods(groupedTransactions, filter)
  return sort(periods);
};

const groupTransactions = (transactions: ITransaction[], filter: IFilter) => {
  return transactions
  .map(t => ({ group: filter.group === 'MONTH' ? t.date.substr(0, 7) : t.date.substr(0, 4), amount: t.amount }))
  .reduce((groupedValues: IGroupValue[], value: IGroupValue) => {
    const i = groupedValues.findIndex(v => v.group === value.group);

    if (i > -1) {
      groupedValues[i].amount = Math.round((groupedValues[i].amount + value.amount) * 100) / 100;
    } else {
      groupedValues.push({ ...value });
    }

    return groupedValues;
  }, []);
}

const fillPeriods = (groupedTransactions: IGroupValue[], filter: IFilter) => {
  const currentDate = new Date();
  
  switch (filter.period) {
    case 'THIS_YEAR':
      
      if (!filter.onlyClosedMonths) {
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      return Array.from({length: currentDate.getMonth()}, (x, y) => {
        const mes = ++y;
        const g2 = groupedTransactions.find(g => g.group === `${currentDate.getFullYear()}-${mes.toString().padStart(2, '0')}`);
        return { group: `${currentDate.getFullYear()}-${mes.toString().padStart(2, '0')}`, amount: g2 ? g2.amount : 0 };
      });
    case 'LAST_YEAR':
      return Array.from({length: 12}, (x, y) => {
        const mes = ++y;
        const g2 = groupedTransactions.find(g => g.group === `${currentDate.getFullYear() -1}-${mes.toString().padStart(2, '0')}`);
        return { group: `${currentDate.getFullYear() -1}-${mes.toString().padStart(2, '0')}`, amount: g2 ? g2.amount : 0 };
      });
    default: 
      return groupedTransactions;
  }
}

const sort = (groupedTransactions: IGroupValue[]) => {
  return groupedTransactions.sort((t1, t2) => t1.group > t2.group ? 1 : -1);
}