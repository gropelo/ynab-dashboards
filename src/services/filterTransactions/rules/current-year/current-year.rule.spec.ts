import { currentYearRule } from './current-year.rule';
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
    const result = currentYearRule.validate(defaultTransaction, defaultFilter);
    
    expect(result).toBeTruthy();
  });

  it('should return false if transaction is not of current year', () => {
    const transaction: ITransaction = { ...defaultTransaction, date: '2019-01-01'};
    const filter: IFilter = { ...defaultFilter, period: 'THIS_YEAR'};

    const result = currentYearRule.validate(transaction, filter);
    
    expect(result).toBeFalsy();
  });

  it('should return true if transaction is the same of current year', () => {
    const date = new Date();
    const transaction: ITransaction = { ...defaultTransaction, date: date.toISOString()};
    const filter: IFilter = { ...defaultFilter, period: 'THIS_YEAR'};

    const result = currentYearRule.validate(transaction, filter);
    
    expect(result).toBeTruthy();
  });
});