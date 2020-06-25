import { IFilterRule } from "types";
import { currentYearRule } from "./current-year";
import { lastYearRule } from "./last-year.rule";
import { categoryRule } from "./category";
import { deletedRule } from "./deleted.rule";
import { transferRule } from "./transfer.rule";
import { closedMonthsRule } from "./closed-months";

export const rules: IFilterRule[] = [currentYearRule, lastYearRule, categoryRule, deletedRule, transferRule, closedMonthsRule];