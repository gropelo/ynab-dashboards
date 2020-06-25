import { IFilterRule, ITransaction, IFilter } from "types";

export const transferRule: IFilterRule = {
  validate: (t: ITransaction, filter: IFilter) => {
    return !t.transfer_account_id;
  }
}