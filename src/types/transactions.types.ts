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
}

export interface IMonthValue {
  month: string;
  amount: number;
}

export interface IAccountValue {
  account: string;
  amount: number;
}