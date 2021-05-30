import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Expense, Recurrence } from '../../lib/interfaces';
import getAggregateCost from '../../lib/get-aggregate-cost';

describe('getAggregateCost', () => {
    it('is a function', () => {
        expect(getAggregateCost).to.be.a('function');
    });

    it('returns a number', () => {
        const recurrence: Recurrence = { months: 1, calendarDay: 1 };
        const expense: Expense = { name: 'Test', cost: 55.55, recurrence };

        expect(getAggregateCost({ currentMonth: 1, expense })).to.be.a('number');
    });

    describe('when provided an $80, 4/1 expense ', () => {
        it('returns $80 in April', () => {
            const recurrence: Recurrence = { months: 4, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 80, recurrence };

            expect(getAggregateCost({ currentMonth: 4, expense })).to.equal(80);
        });

        it('returns $60 in March', () => {
            const recurrence: Recurrence = { months: 4, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 80, recurrence };

            expect(getAggregateCost({ currentMonth: 3, expense })).to.equal(60);
        });

        it('returns $40 in February', () => {
            const recurrence: Recurrence = { months: 4, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 80, recurrence };

            expect(getAggregateCost({ currentMonth: 2, expense })).to.equal(40);
        });

        it('returns $20 in January', () => {
            const recurrence: Recurrence = { months: 4, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 80, recurrence };

            expect(getAggregateCost({ currentMonth: 1, expense })).to.equal(20);
        });

        it('returns $20 in May', () => {
            const recurrence: Recurrence = { months: 4, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 80, recurrence };

            expect(getAggregateCost({ currentMonth: 5, expense })).to.equal(20);
        })
    });

    describe('when provided an $2,000, 12/1 expense ', () => {
        it('returns $166.67 in January', () => {
            const recurrence: Recurrence = { months: 12, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 2000, recurrence };

            expect(getAggregateCost({ currentMonth: 1, expense })).to.equal(166.67);
        });

        it('returns $333.33 in February', () => {
            const recurrence: Recurrence = { months: 12, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 2000, recurrence };

            expect(getAggregateCost({ currentMonth: 2, expense })).to.equal(333.33);           
        });

        it('returns $500 in March', () => {
            const recurrence: Recurrence = { months: 12, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 2000, recurrence };

            expect(getAggregateCost({ currentMonth: 3, expense })).to.equal(500);            
        });

        it('returns $2000 in December', () => {
            const recurrence: Recurrence = { months: 12, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 2000, recurrence };

            expect(getAggregateCost({ currentMonth: 12, expense })).to.equal(2000);           
        });
    });
});