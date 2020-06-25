import { closedMonthsRule } from './closed-months.rule';
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

describe('closed-months.rule', () => {
  it('should return true if filter is not set', () => {
    const filter = { ...defaultFilter, onlyClosedMonths: false };

    const result = closedMonthsRule.validate(defaultTransaction, filter);
    
    expect(result).toBeTruthy();
  });

  it('should return true if transaction is not of current month', () => {
    const transaction = { ...defaultTransaction, date: '2020-01-01'};

    const result = closedMonthsRule.validate(transaction, defaultFilter);
    
    expect(result).toBeTruthy();
  });

  it('should return false if transaction is the same of current month', () => {
    const date = new Date();
    const transaction = { ...defaultTransaction, date: date.toISOString()};

    const result = closedMonthsRule.validate(transaction, defaultFilter);
    
    expect(result).toBeFalsy();
  });
});