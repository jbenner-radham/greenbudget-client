import { Expense, Recurrence } from './interfaces';
import getMonthlyCost from './get-monthly-cost';

function formatCost(cost: number): number {
    return Number(cost.toFixed(2));
}

export default function getAggregateCost({ expense, currentMonth }: { expense: Expense, currentMonth: number }): number {
    const { recurrence } = expense;
    const monthlyCost = getMonthlyCost(expense);

    if (recurrence.months >= currentMonth) {
        return formatCost(monthlyCost * currentMonth)
    }

    const pastRecurrencesCount = Number.parseInt((currentMonth / recurrence.months) as unknown as string);
    const monthCount = currentMonth - (pastRecurrencesCount * recurrence.months);
    const aggregateCost = monthlyCost * monthCount;

    return formatCost(aggregateCost);
}