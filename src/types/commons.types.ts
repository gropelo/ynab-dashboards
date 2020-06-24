import { IFilter, ITransaction } from './transactions.types';
import { ICategory } from './categories.types';

export type StatusType = 'LOADING' | 'ERROR' | 'OK';

export type ActionType = 'SET_CATEGORIES' | 'SET_TRANSACTIONS' | 'SET_FILTER';

export interface IAction {
  type: ActionType;
  payload: any;
}

export type IDispatch = (action: IAction) => void;

export interface IRootState {
  filter: IFilter;
  rawTransactions: ITransaction[];
  filteredTransactions: ITransaction[];
  filteredOutcomeTransactions: ITransaction[];
  categories: ICategory[];
  statusCategories: StatusType;
  statusTransactions: StatusType;
}