import React from 'react'
import { IAction, IRootState } from 'types/commons.types';
import { filterTransactionsService } from 'services/filterTransactions.service';

export const initialState: IRootState = {
  filter: {
    period: 'THIS_YEAR',
    group: 'MONTH',
    onlyClosedMonths: true,
    categoryId: undefined
  },
  rawTransactions: [],
  filteredTransactions: [],
  categories: [],
  statusCategories: 'LOADING',
  statusTransactions: 'LOADING'
}

export function rootReducer(state = initialState, action: IAction): IRootState {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        statusCategories: 'OK'
      }
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        rawTransactions: action.payload,
        filteredTransactions: filterTransactionsService(action.payload, state.filter),
        statusTransactions: 'OK'
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
        filteredTransactions: filterTransactionsService(state.rawTransactions, action.payload)
      }
    default:
      return state;
  }
}

export const rootContext = React.createContext({ state: initialState, dispatch: (value: IAction) => { } });