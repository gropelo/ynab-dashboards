import { ITransaction, IFilter, IFilterRule } from "types";
import { filterTransactionsService } from './filterTransactions.service';
import { rules } from "./rules";

jest.mock('./rules', () => ({
  rules: [{
    validate: jest.fn().mockReturnValue(true)
  }]
}));

const filter: IFilter = {
  categoryId: '1',
  group: 'MONTH',
  onlyClosedMonths: false,
  period: 'ALL_TIME'
}

const defaultTransaction = {
  id: '',
  date: '',
  amount: 0,
  deleted: false,
  memo: '',
  'payee_name': '',
  'account_name': '',
  'category_name': '',
  'category_id': '',
  'transfer_account_id': ''  
}

const transactions: ITransaction[] = [
  { ...defaultTransaction, id: '1', date: '2020-01-01', amount: 1000},
  { ...defaultTransaction, id: '2', date: '2020-01-02', amount: 5000},
  { ...defaultTransaction, id: '3', date: '2020-01-03', amount: 10120}
]

describe('filterOutcomeTransactionsService', () => {
  it('should sort transactions by date desc', () => {
    const filteredTransactions = filterTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(3);
    expect(filteredTransactions[0].id).toBe('3');
    expect(filteredTransactions[1].id).toBe('2');
    expect(filteredTransactions[2].id).toBe('1');
  });

  it('should return only valid transactions', () => {
    (rules[0].validate as jest.Mock).mockReturnValueOnce(false);

    const filteredTransactions = filterTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(2);
    expect(filteredTransactions[0].id).toBe('3');
    expect(filteredTransactions[1].id).toBe('2');
  });

  it('should format amount value', () => {
    const filteredTransactions = filterTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(3);
    expect(filteredTransactions[0].amount).toBe(10.12);
    expect(filteredTransactions[1].amount).toBe(5);
    expect(filteredTransactions[2].amount).toBe(1);
  });
});