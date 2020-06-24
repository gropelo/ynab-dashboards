import { IFilter, ITransaction, IIncomeVsOutcomeValue } from 'types';

export function sumIncomeVsOutcomeService(transactions: ITransaction[], filter: IFilter) {
  const groupedTransactions = groupTransactions(transactions, filter);
  const periods = fillPeriods(groupedTransactions, filter)
  return sort(periods);
};

const groupTransactions = (transactions: ITransaction[], filter: IFilter): IIncomeVsOutcomeValue[] => {
  return transactions
  .filter(t => {
    if (t.deleted || t.transfer_account_id) {
      return false;
    }

    return true;
  })
  .map(t => ({ 
    group: filter.group === 'MONTH' ? t.date.substr(0, 7) : t.date.substr(0, 4), 
    income: t.amount > 0 ? t.amount : 0, 
    outcome: t.amount < 0 ? Math.abs(t.amount) : 0
  }))
  .reduce((groupedValues: IIncomeVsOutcomeValue[], value: IIncomeVsOutcomeValue) => {
    const i = groupedValues.findIndex(v => v.group === value.group);

    if (i > -1) {
      groupedValues[i].income = Math.round((groupedValues[i].income + value.income) * 100) / 100;
      groupedValues[i].outcome = Math.round((groupedValues[i].outcome + value.outcome) * 100) / 100;
    } else {
      groupedValues.push({ ...value });
    }

    return groupedValues;
  }, []);
}

const fillPeriods = (groupedTransactions: IIncomeVsOutcomeValue[], filter: IFilter): IIncomeVsOutcomeValue[] => {
  const currentDate = new Date();
  
  switch (filter.period) {
    case 'THIS_YEAR':
      
      if (!filter.onlyClosedMonths) {
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      return Array.from({length: currentDate.getMonth()}, (x, y) => {
        const mes = ++y;
        const g2 = groupedTransactions.find(g => g.group === `${currentDate.getFullYear()}-${mes.toString().padStart(2, '0')}`);
        return { group: `${currentDate.getFullYear()}-${mes.toString().padStart(2, '0')}`, income: g2 ? g2.income : 0, outcome: g2 ? g2.outcome : 0 };
      });
    case 'LAST_YEAR':
      return Array.from({length: 12}, (x, y) => {
        const mes = ++y;
        const g2 = groupedTransactions.find(g => g.group === `${currentDate.getFullYear() -1}-${mes.toString().padStart(2, '0')}`);
        return { group: `${currentDate.getFullYear() -1}-${mes.toString().padStart(2, '0')}`, income: g2 ? g2.income : 0, outcome: g2 ? g2.outcome : 0 };
      });
    default: 
      return groupedTransactions;
  }
}

const sort = (groupedTransactions: IIncomeVsOutcomeValue[]) => {
  return groupedTransactions.sort((t1, t2) => t1.group > t2.group ? 1 : -1);
}