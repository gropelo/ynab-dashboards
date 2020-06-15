import { ITransaction, IFilter, ICategory } from "types";
import { IDispatch } from "types/commons.types";

export function dispatchTransactions(transactions: ITransaction[], dispatch: IDispatch) {
  dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })
}

export function dispatchFilter(filter: IFilter, dispatch: IDispatch) {
  dispatch({ type: 'SET_FILTER', payload: filter});
}

export function dispatchCategories(categories: ICategory[], dispatch: IDispatch) {
  dispatch({ type: 'SET_CATEGORIES', payload: categories })
}