import { deletedRule } from './deleted.rule';
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

describe('deleted.rule', () => {
  it('should return true if transaction is not deleted', () => {
    const result = deletedRule.validate(defaultTransaction, defaultFilter);
    
    expect(result).toBeTruthy();
  });

  it('should return false if transaction is deleted', () => {
    const transaction: ITransaction = { ...defaultTransaction, deleted: true };
    const result = deletedRule.validate(transaction, defaultFilter);
    
    expect(result).toBeFalsy();
  });
});