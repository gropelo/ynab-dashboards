import { IFilterRule } from "types";
import { currentYearRule } from "./current-year";
import { lastYearRule } from "./last-year";
import { categoryRule } from "./category";
import { deletedRule } from "./deleted";
import { transferRule } from "./transfer";
import { closedMonthsRule } from "./closed-months";

export const rules: IFilterRule[] = [currentYearRule, lastYearRule, categoryRule, deletedRule, transferRule, closedMonthsRule];