import { Expense, Recurrence } from './index';
import getCurrentMonth from './get-current-month';
import getMonthlyCost from './get-monthly-cost';

export default function getAggregateCost(expense: Expense): number {
    const { recurrence } = expense;
    const monthlyCost = getMonthlyCost(expense);
    const currentMonth = getCurrentMonth();

    if (recurrence.months >= currentMonth || (currentMonth % recurrence.months) === 0) {
        return monthlyCost * currentMonth;
    }

    const pastRecurrencesCount = Number.parseInt((currentMonth / recurrence.months) as unknown as string);
    const monthCount = currentMonth - (pastRecurrencesCount * recurrence.months);

    return monthlyCost * monthCount;
}