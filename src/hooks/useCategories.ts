import { useState, useEffect } from "react";
import Axios from "axios";
import { ICategory, ICategoriesResponse, StatusType } from "../types";

interface IOutput {
  categories: ICategory[];
  status: StatusType;
}

export const useCategories = (): IOutput => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [status, setStatus] = useState<StatusType>('LOADING');

  useEffect(() => {
    Axios.get<ICategoriesResponse>('/v1/budgets/default/categories').then(({ data }) => {
      setCategories(data.data.category_groups
        .filter(cg => !cg.deleted && !cg.hidden && cg.name.toUpperCase() !== 'INTERNAL MASTER CATEGORY')
        .map(cg => cg.categories).flat());
      setStatus('OK');
    }).catch(err => {
      console.error('Cannot load categories', err);
      setStatus('ERROR');
    });
  }, []);

  return { categories, status };
};