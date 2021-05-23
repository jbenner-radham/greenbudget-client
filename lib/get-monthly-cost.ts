import { Expense, Recurrence } from './index';

export default function getMonthlyCost(expense: Expense): number {
    return expense.cost / expense.recurrence.months;
}