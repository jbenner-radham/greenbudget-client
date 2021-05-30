import { Expense } from './interfaces';

export default function getMonthlyCost(expense: Expense): number {
    return expense.cost / expense.recurrence.months;
}