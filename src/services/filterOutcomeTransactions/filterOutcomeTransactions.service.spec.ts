import { ITransaction, IFilter } from "types";
import { filterOutcomeTransactionsService } from './filterOutcomeTransactions.service';

jest.mock('../filterTransactions.service', () => ({ 
  filterTransactionsService: (transactions: ITransaction[]) => transactions
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

describe('filterOutcomeTransactionsService', () => {
  it('should return only outcome transactions with absolute value', () => {
    const transactions: ITransaction[] = [
      { ...defaultTransaction, amount: 1000, id: '1'},
      { ...defaultTransaction, amount: -1000, id: '2'},
      { ...defaultTransaction, amount: 50, id: '3'},
      { ...defaultTransaction, amount: -1, id: '4'},
      { ...defaultTransaction, amount: -0.01, id: '5'},
      { ...defaultTransaction, amount: 0.01, id: '6'},
      { ...defaultTransaction, amount: 0, id: '7'},
    ]

    const filteredTransactions = filterOutcomeTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(3);
    
    expect(filteredTransactions.find(t => t.amount === 1000)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 1000)!.id).toBe('2');
    
    expect(filteredTransactions.find(t => t.amount === 1)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 1)!.id).toBe('4');
    
    expect(filteredTransactions.find(t => t.amount === 0.01)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 0.01)!.id).toBe('5');
  });

  it('should not return any transaction if there is only income transactions', () => {
    const transactions: ITransaction[] = [
      { ...defaultTransaction, amount: 1000, id: '1'},
      { ...defaultTransaction, amount: 50, id: '3'},
      { ...defaultTransaction, amount: 0.01, id: '6'},
      { ...defaultTransaction, amount: 0, id: '7'},
    ];

    const filteredTransactions = filterOutcomeTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(0);
  });

  it('should return all transactions if there are only outcome transations', () => {
    const transactions: ITransaction[] = [
      { ...defaultTransaction, amount: -1000, id: '2'},
      { ...defaultTransaction, amount: -1, id: '4'},
      { ...defaultTransaction, amount: -0.01, id: '5'},
    ];

    const filteredTransactions = filterOutcomeTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(3);
    
    expect(filteredTransactions.find(t => t.amount === 1000)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 1000)!.id).toBe('2');
    
    expect(filteredTransactions.find(t => t.amount === 1)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 1)!.id).toBe('4');
    
    expect(filteredTransactions.find(t => t.amount === 0.01)).not.toBeUndefined();
    expect(filteredTransactions.find(t => t.amount === 0.01)!.id).toBe('5');
  });

  it('should not crash if there is any transactions', () => {
    const transactions: ITransaction[] = [];

    const filteredTransactions = filterOutcomeTransactionsService(transactions, filter);

    expect(filteredTransactions.length).toBe(0);
  });
});