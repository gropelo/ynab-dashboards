import { categoryRule } from './category.rule';
import { IFilter, ITransaction } from 'types';

const defaultFilter: IFilter = {
  categoryId: '1',
  group: 'MONTH',
  onlyClosedMonths: false,
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

describe('category.rule', () => {
  it('should return true if category is not set on filter', () => {
    const filter = { ...defaultFilter, categoryId: undefined };
    
    const result = categoryRule.validate(defaultTransaction, filter);
    
    expect(result).toBeTruthy();
  });

  it('should return true if category is the same on filter', () => {
    const filter = { ...defaultFilter, category_id: '1' };
    const transaction = { ...defaultTransaction, category_id: '1'};

    const result = categoryRule.validate(transaction, filter);
    
    expect(result).toBeTruthy();
  });

  it('should return false when category is set and is different from the filter', () => {
    const filter = { ...defaultFilter, category_id: '1' };
    const transaction = { ...defaultTransaction, category_id: '2'};

    const result = categoryRule.validate(transaction, filter);

    expect(result).toBeFalsy();
  });
});