import Axios from 'axios';
import { ICategoriesResponse, ITransactionsResponse } from 'types';

export async function fetchCategories() {
  const response = await Axios.get<ICategoriesResponse>('/v1/budgets/default/categories');
  return response.data.data.category_groups
    .filter(cg => !cg.deleted && !cg.hidden && cg.name.toUpperCase() !== 'INTERNAL MASTER CATEGORY')
    .map(cg => cg.categories).flat();
}

export async function fetchTransactions() {
  const response = await Axios.get<ITransactionsResponse>(`/v1/budgets/default/transactions`);
  return response.data.data.transactions;
}