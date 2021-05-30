import { describe, it } from 'mocha';
import { expect } from 'chai';
import getLastDayOfMonth from '../../lib/get-last-day-of-month';

describe('getLastDayOfMonth', () => {
    it('is a function', () => {
        expect(getLastDayOfMonth).to.be.a('function');
    });

    it('returns a number', () => {
        expect(getLastDayOfMonth(10)).to.be.a('number');
    });

    it('returns `31` for January', () => {
        expect(getLastDayOfMonth(1)).to.equal(31);
    });

    it('returns `28` or `29` for February', () => {
        expect(getLastDayOfMonth(2)).to.match(/28|29/);
    });

    it('returns `31` for March', () => {
        expect(getLastDayOfMonth(3)).to.equal(31);
    });

    it('returns `30` for April', () => {
        expect(getLastDayOfMonth(4)).to.equal(30);
    });

    it('returns `31` for May', () => {
        expect(getLastDayOfMonth(5)).to.equal(31);
    });

    it('returns `30` for June', () => {
        expect(getLastDayOfMonth(6)).to.equal(30);
    });

    it('returns `31` for July', () => {
        expect(getLastDayOfMonth(7)).to.equal(31);
    });

    it('returns `31` for August', () => {
        expect(getLastDayOfMonth(8)).to.equal(31);
    });

    it('returns `30` for September', () => {
        expect(getLastDayOfMonth(9)).to.equal(30);
    });

    it('returns `31` for October', () => {
        expect(getLastDayOfMonth(10)).to.equal(31);
    });

    it('returns `30` for November', () => {
        expect(getLastDayOfMonth(11)).to.equal(30);
    });

    it('returns `31` for December', () => {
        expect(getLastDayOfMonth(12)).to.equal(31);
    });
});