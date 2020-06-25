import { IFilterRule, ITransaction, IFilter } from "types";

export const deletedRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    return !t.deleted;
  }
}