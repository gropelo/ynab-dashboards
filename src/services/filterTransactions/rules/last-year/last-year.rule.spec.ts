import { lastYearRule } from './last-year.rule';
import { IFilter, ITransaction } from 'types';

const defaultFilter: IFilter = {
  categoryId: '1',
  group: 'MONTH',
  onlyClosedMonths: true,
  period: 'ALL_TIME'
}

const defaultTransaction: ITransaction = {
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

describe('current-year.rule', () => {
  it('should return true if filter is not set', () => {
    const result = lastYearRule.validate(defaultTransaction, defaultFilter);
    
    expect(result).toBeTruthy();
  });

  it('should return false if transaction is not of last year', () => {
    const transaction: ITransaction = { ...defaultTransaction, date: '2018-01-01'};
    const filter: IFilter = { ...defaultFilter, period: 'LAST_YEAR'};

    const result = lastYearRule.validate(transaction, filter);
    
    expect(result).toBeFalsy();
  });

  it('should return true if transaction is the same of last year', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    
    const transaction: ITransaction = { ...defaultTransaction, date: date.toISOString()};
    const filter: IFilter = { ...defaultFilter, period: 'LAST_YEAR'};

    const result = lastYearRule.validate(transaction, filter);
    
    expect(result).toBeTruthy();
  });
});