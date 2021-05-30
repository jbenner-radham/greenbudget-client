import fs from 'fs';
import path from 'path';
import { Expense, Recurrence } from './interfaces';
import getCurrentMonth from './get-current-month';
import getLastDayOfMonth from './get-last-day-of-month';


function parseRecurrence(recurrence: string): Recurrence {
    const [months, calendarDay] = recurrence.split('/');
    const currentMonth = getCurrentMonth();

    return {
        months: Number(months),
        calendarDay: Number(calendarDay) === 0 ? getLastDayOfMonth(currentMonth) : Number(calendarDay)
    };
}

function readCsv(filename: string): Expense[] {
    const filepath = path.join(__dirname, '..', filename);
    const fileContents = fs.readFileSync(filepath).toString();
    const rows = fileContents.split('\n');
    const columns = rows.map(row => row.split(','));
    
    return columns.map(([name, cost, recurrence]) => ({
        name,
        cost: Number(cost),
        recurrence: parseRecurrence(recurrence)
    }));
}

const data = readCsv('expenses.csv');

console.log(data);

const montlySum: number = data.reduce((accumulator, { cost, recurrence }) => (cost / recurrence.months ) + accumulator, 0);

console.log({ montlySum: `$${montlySum.toFixed(2)}` });