import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Expense, Recurrence } from '../../lib';
import * as getters from '../../lib/getters';
import sinon from 'sinon';

describe('getters', () => {
    describe('.getAggregateCost', () => {
        it('is a function', () => {
            expect(getters.getAggregateCost).to.be.a('function');
        });
    
        it('returns a number', () => {
            const recurrence: Recurrence = { months: 1, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 55.55, recurrence };
    
            expect(getters.getAggregateCost(expense)).to.be.a('number');
        });
    });

    describe('.getCurrentMonth', () => {
        it('is a function', () => {
            expect(getters.getCurrentMonth).to.be.a('function');
        });

        it('returns a number', () => {
            const recurrence: Recurrence = { months: 1, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 55.55, recurrence };
    
            expect(getters.getAggregateCost(expense)).to.be.a('number');
        });

        it('returns the current month', () => {
            const expected = new Date().getMonth() + 1;

            expect(getters.getCurrentMonth()).to.equal(expected);
        });
    });

    describe('.getLastDayOfMonth', () => {
        it('is a function', () => {
            expect(getters.getLastDayOfMonth).to.be.a('function');
        });

        it('returns a number', () => {
            expect(getters.getLastDayOfMonth(10)).to.be.a('number');
        });

        it('returns `31` for January', () => {
            expect(getters.getLastDayOfMonth(1)).to.equal(31);
        });

        it('returns `28` or `29` for February', () => {
            expect(getters.getLastDayOfMonth(2)).to.match(/28|29/);
        });

        it('returns `31` for March', () => {
            expect(getters.getLastDayOfMonth(3)).to.equal(31);
        });

        it('returns `30` for April', () => {
            expect(getters.getLastDayOfMonth(4)).to.equal(30);
        });

        it('returns `31` for May', () => {
            expect(getters.getLastDayOfMonth(5)).to.equal(31);
        });

        it('returns `30` for June', () => {
            expect(getters.getLastDayOfMonth(6)).to.equal(30);
        });

        it('returns `31` for July', () => {
            expect(getters.getLastDayOfMonth(7)).to.equal(31);
        });

        it('returns `31` for August', () => {
            expect(getters.getLastDayOfMonth(8)).to.equal(31);
        });

        it('returns `30` for September', () => {
            expect(getters.getLastDayOfMonth(9)).to.equal(30);
        });

        it('returns `31` for October', () => {
            expect(getters.getLastDayOfMonth(10)).to.equal(31);
        });

        it('returns `30` for November', () => {
            expect(getters.getLastDayOfMonth(11)).to.equal(30);
        });

        it('returns `31` for December', () => {
            expect(getters.getLastDayOfMonth(12)).to.equal(31);
        });
    });

    describe('.getMonthlyCost', () => {
        it('is a function', () => {
            expect(getters.getMonthlyCost).to.be.a('function');
        });

        it('returns a number', () => {
            const recurrence: Recurrence = { months: 1, calendarDay: 1 };
            const expense: Expense = { name: 'Test', cost: 55.55, recurrence };

            expect(getters.getMonthlyCost(expense)).to.be.a('number');
        });
    });
});