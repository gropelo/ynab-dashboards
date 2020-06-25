import { transferRule } from './transfer.rule';
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

describe('transfer.rule', () => {
  it('should return true if transaction is not a transfer', () => {
    const result = transferRule.validate(defaultTransaction, defaultFilter);
    
    expect(result).toBeTruthy();
  });

  it('should return false if transaction is a transfer', () => {
    const transaction: ITransaction = { ...defaultTransaction, transfer_account_id: '1' };
    const result = transferRule.validate(transaction, defaultFilter);
    
    expect(result).toBeFalsy();
  });
});