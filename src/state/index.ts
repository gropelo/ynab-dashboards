import { atom, selector } from 'recoil';
import { ITransaction, ITransactionsResponse, IFilter, IGroupValue, IAccountValue, ICategoriesResponse } from '../types';
import Axios from 'axios';

export const filterState = atom({
  key: 'filterState',
  default: { period: 'THIS_YEAR', group: 'MONTH', onlyClosedMonths: true }
});

export const transactionsState = selector({
  key: 'transactionsState',
  get: async () => {
    const response = await Axios.get<ITransactionsResponse>(`/v1/budgets/default/transactions`);
    return response.data.data.transactions;
  }
});

export const filteredTransactionsState = selector({
  key: 'filteredTransactionsState',
  get: ({ get }: any) => {
    const filter = get(filterState);
    const transactions = get(transactionsState) as ITransaction[];

    const currentDate = new Date();

    return transactions.filter(t => {
      switch (filter.period) {
        case 'THIS_YEAR':
          if (+t.date.substr(0, 4) !== currentDate.getFullYear()) {
            return false;
          }
          break;

        case 'LAST_YEAR':
          if (+t.date.substr(0, 4) !== currentDate.getFullYear() - 1) {
            return false;
          }
          break;
      }

      if (filter.categoryId && t.category_id !== filter.categoryId) {
        return false;
      }

      if (t.deleted || t.amount >= 0 || t.transfer_account_id) {
        return false;
      }

      if (filter.onlyClosedMonths) {
        return +t.date.substr(5, 2) !== currentDate.getMonth()+1;
      }

      return true;
    })
    .map(t => ({...t, amount: Math.abs(t.amount / 1000)}))
    .sort((t1, t2) => t1.date > t2.date ? -1 : 1);
  },
});

export const sumByPeriodState = selector({
  key: 'sumByPeriod',
  get: ({ get }: any) => {
    const filter = get(filterState) as IFilter;
    const transactions = get(filteredTransactionsState) as ITransaction[];

    if (transactions && transactions.length > 0) {
      return transactions
        .map(t => ({ group: filter.group === 'MONTH' ? t.date.substr(0, 7) : t.date.substr(0, 4), amount: t.amount }))
        .reduce((groupedValues: IGroupValue[], value: IGroupValue) => {
          const i = groupedValues.findIndex(v => v.group === value.group);
          
          if (i > -1) {
            groupedValues[i].amount = Math.round((groupedValues[i].amount + value.amount) * 100) / 100;
          } else {
            groupedValues.push({...value});
          }
          
          return groupedValues;
        }, [])
        .sort((t1, t2) => t1.group > t2.group ? 1 : -1);
    } else {
      return [];
    }
  }
});

export const sumByAccountState = selector({
  key: 'sumByAccount',
  get: ({ get }: any) => {
    const transactions = get(filteredTransactionsState) as ITransaction[];
      
    if (transactions && transactions.length > 0) {
      return transactions
        .map(t => ({ account: t.account_name, amount: t.amount }))
        .reduce((groupedValues: IAccountValue[], value: IAccountValue) => {
          const i = groupedValues.findIndex(v => v.account === value.account);
          
          if (i > -1) {
            groupedValues[i].amount = Math.round((groupedValues[i].amount + value.amount) * 100) / 100;
          } else {
            groupedValues.push({...value});
          }
          
          return groupedValues;
        }, []);
    } else {
      return [];
    }
  }
});

export const sumState = selector({
  key: 'sum',
  get: ({ get }: any) => {
    const transactions = get(filteredTransactionsState) as ITransaction[];

    if (transactions && transactions.length > 0) {
      const sum = transactions.map(t => t.amount).reduce((a, b) => a + b);
      return sum;
    } else {
      return 0;
    }
  }
});

export const minState = selector({
  key: 'min',
  get: ({ get }: any) => {
    const periods = get(sumByPeriodState) as IGroupValue[];

    if (periods.length > 0) {
      const sorted = [...periods].sort((a, b) => a.amount - b.amount);
      return sorted[0];
    } else {
      return { amount: 0, group: '' };
    }
  }
});

export const maxState = selector({
  key: 'max',
  get: ({ get }: any) => {
    const periods = get(sumByPeriodState) as IGroupValue[];

    if (periods.length > 0) {
      const sorted = [...periods].sort((a, b) => b.amount - a.amount);
      return sorted[0];
    } else {
      return { amount: 0, group: '' };
    }
  }
});

export const avgState = selector({
  key: 'avg',
  get: ({ get }: any) => {
    const periods = get(sumByPeriodState) as IGroupValue[];

    if (periods.length > 0) {
      const sum = periods.map(m => m.amount).reduce((a, b) => a + b);
      return sum / periods.length;
    } else {
      return 0;
    }
  }
});

export const categoriesState = selector({
  key: 'categoriesState',
  get: async () => {
    const response = await Axios.get<ICategoriesResponse>('/v1/budgets/default/categories');
    return response.data.data.category_groups
      .filter(cg => !cg.deleted && !cg.hidden && cg.name.toUpperCase() !== 'INTERNAL MASTER CATEGORY')
      .map(cg => cg.categories).flat();
  }
});
