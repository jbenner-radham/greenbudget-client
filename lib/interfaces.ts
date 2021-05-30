export interface Recurrence {
    months: number;
    calendarDay: number;
}

export interface Expense {
    name: string;
    cost: number;
    recurrence: Recurrence;
}