import { Expense, Recurrence } from './index';

export function getAggregateCost(expense: Expense): number {
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

export function getCurrentMonth(): number {
    return new Date().getMonth() + 1; // Months are zero indexed in JS so +1.
}

export function getLastDayOfMonth(month: number): number {
    const year = new Date().getFullYear();
    const day = 0; // Zero day returns the last day of the month.
    const date = new Date(year, month, day);

    return date.getDate();
}

export function getMonthlyCost(expense: Expense): number {
    return expense.cost / expense.recurrence.months;
}