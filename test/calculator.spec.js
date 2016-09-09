'use strict';

let assert = require('chai').assert;

const Calculator = require('./../src/calculator');

let calculator = new Calculator();

describe('Calculator', () => {
    describe('#sum()', () => {
        it('must return 4 when passing 3, 1', () => {
            assert.equal(4, calculator.sum(3, 1));
        });

        it('must return 5 when passing 2, 3', () => {
            assert.equal(5, calculator.sum(2, 3));
        });
    });

    describe('#minus()', () => {
        it('must return 4 when passing 7, 3', () => {
            assert.equal(4, calculator.minus(7, 3));
        });
    });

    describe('#multiply()', () => {
        it('must return 12 when passing 4, 3', () => {
            assert.equal(12, calculator.multiply(4, 3));
        });
    });

    describe('#divide()', () => {
        it('must return 4 when passing 12, 3', () => {
            assert.equal(4, calculator.divide(12, 3));
        });

        it('must throw error when passing 0 as second value', () => {
            assert.throws(function testDivisionByZero() {
                calculator.divide(1, 0);
            }, 'Division by zero');
        })
    });

});
