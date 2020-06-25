import { IFilterRule } from "types";
import { currentYearRule } from "./current-year.rule";
import { lastYearRule } from "./last-year.rule";
import { categoryRule } from "./category.rule";
import { deletedRule } from "./deleted.rule";
import { transferRule } from "./transfer.rule";
import { closedMonthsRule } from "./closed-months.rule";

export const rules: IFilterRule[] = [currentYearRule, lastYearRule, categoryRule, deletedRule, transferRule, closedMonthsRule];