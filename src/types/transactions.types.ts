export interface ITransactionsResponse {
  data: {
    transactions: ITransaction[];
  }
}

export interface ITransaction {
  id: string;
  date: string;
  amount: number;
  deleted: boolean;
  memo: string;
  'payee_name': string;
  'account_name': string;
  'category_name': string;
  'transfer_account_id': string;
}

export interface IGroupValue {
  group: string;
  amount: number;
}

export interface IAccountValue {
  account: string;
  amount: number;
}

export type FilterPeriodType = 'ALL_TIME' | 'THIS_YEAR' | 'LAST_YEAR';

export type FilterGroupType = 'MONTH' | 'YEAR';

export interface IFilter {
  period: FilterPeriodType;
  group: FilterGroupType;
  onlyClosedMonths: boolean;
}