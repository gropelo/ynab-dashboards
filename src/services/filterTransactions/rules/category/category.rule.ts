import { IFilterRule, ITransaction, IFilter } from "types";

export const categoryRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    return !filter.categoryId || t.category_id === filter.categoryId;
  }
}
