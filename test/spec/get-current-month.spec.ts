import { describe, it } from 'mocha';
import { expect } from 'chai';
import getCurrentMonth from '../../lib/get-current-month';

describe('getCurrentMonth', () => {
    it('is a function', () => {
        expect(getCurrentMonth).to.be.a('function');
    });

    it('returns a number', () => {
        expect(getCurrentMonth()).to.be.a('number');
    });

    it('returns the current month', () => {
        const expected = new Date().getMonth() + 1;

        expect(getCurrentMonth()).to.equal(expected);
    });
});