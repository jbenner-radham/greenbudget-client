import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Expense, Recurrence } from '../../lib/interfaces';
import getMonthlyCost from '../../lib/get-monthly-cost';

describe('.getMonthlyCost', () => {
    it('is a function', () => {
        expect(getMonthlyCost).to.be.a('function');
    });

    it('returns a number', () => {
        const recurrence: Recurrence = { months: 1, calendarDay: 1 };
        const expense: Expense = { name: 'Test', cost: 55.55, recurrence };

        expect(getMonthlyCost(expense)).to.be.a('number');
    });

    it('returns $55.55 when provided a $55.55, 1/1 expense', () => {
        const recurrence: Recurrence = { months: 1, calendarDay: 1 };
        const expense: Expense = { name: 'Test', cost: 55.55, recurrence };

        expect(getMonthlyCost(expense)).to.equal(55.55);
    });

    it('returns $10 when provided a $120, 12/1 expense', () => {
        const recurrence: Recurrence = { months: 12, calendarDay: 1 };
        const expense: Expense = { name: 'Test', cost: 120, recurrence };

        expect(getMonthlyCost(expense)).to.equal(10);        
    });
});